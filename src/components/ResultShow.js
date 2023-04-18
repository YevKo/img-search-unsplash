function ResultShow({ image }) {
    return <div className="bg-indigo-50 grid grid-rows-1">
        <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img src={image.urls.small} alt={image.alt_description} className="h-auto w-full"/>
            <div className="p-5">
                <p className="text-medium mb-5 text-gray-700"> {image.description}</p>
            </div>
        </div>
    </div>
}

export default ResultShow;