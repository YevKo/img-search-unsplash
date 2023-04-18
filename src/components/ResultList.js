import ResultShow from './ResultShow'

function ResultList( {images} ) {

    const renderedImages = images.map( (image, index) => {
        return <ResultShow image={image} key={index}/>;
    })

    return <div>{renderedImages}</div>
}

export default ResultList;