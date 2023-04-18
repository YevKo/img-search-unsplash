import ResultShow from './ResultShow'

function ResultList( {images} ) {

    const renderedImages = images.map( (image, index) => {
        return <ResultShow image={image} key={index}/>;
    })

    return <div  className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4 grid-flow-dense">{renderedImages}</div>
}

export default ResultList;