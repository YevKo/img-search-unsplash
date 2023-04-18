function ResultShow({ image }) {
    return <div>
        <header>
            <img src={image.urls.small} alt={image.alt_description} />
        </header>
        <div>
            {image.description}
        </div>
    </div>
}

export default ResultShow;