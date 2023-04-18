import axios from "axios";

function ResultShow({ image }) {
    const handleDownload = (event, imageUrl, imageName) => {
        event.preventDefault();
        const fileExtension = ".jpg"; // set the file extension to ".jpg" by default

        axios({
            url: imageUrl,
            method: "GET",
            responseType: "arraybuffer",
            headers: {
              "Content-Type": "image/jpeg", // set the content-type header to "image/jpeg"
            },
        }).then((response) => {
            const blob = new Blob([response.data], { type: "image/jpeg" }); // create a Blob object from the binary data
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${imageName}${fileExtension}`);
            document.body.appendChild(link);
            link.click();
        });
    };

    return <div className="bg-indigo-50 grid grid-rows-1">
        <div className="max-w-sm relative overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <a
                href={image.urls.full}
                download
                onClick={(event) => handleDownload(event, image.urls.full, image.alt_description
                )}
            >
                <img
                    src={image.urls.small}
                    alt={image.alt_description}
                    className="h-auto w-full"
                />
                <div className="p-5">
                    <p className="text-medium mb-5 text-gray-700"> {image.description}</p>
                </div>
                <div className="flex absolute top-0 right-0 items-center p-3 m-3 rounded-full bg-blue">
                    <svg width="20" height="20" fill="white" class="bi bi-arrow-down-short" viewBox="3 3 10 10"><path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/></svg>
                </div>
            </a>
        </div>
    </div>
}

export default ResultShow;