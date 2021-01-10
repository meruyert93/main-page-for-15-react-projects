import React from 'react'

const Projects = ({image, id, name, info, url}) => {
    console.log(image)
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={image} alt={name}/>
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                {/* <h4>{info}</h4> */}
                <p>{info}</p>
            </div>
        </article>
    )
}

export default Projects
