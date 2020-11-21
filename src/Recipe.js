import React from 'react'

const Recipe = ({title, image, url}) => {
    return (
        <div className="recipe-card">
            <div className="recipe-title">
                <h3>{title}</h3>
            </div>
            <div className="recipe-image">
                <img src={image} alt={image}></img>
            </div>
            <div className="recipe-desc">
                <a href={url}>Read more...</a>
            </div>
        </div>
    )
}

export default Recipe
