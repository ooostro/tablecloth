import React from 'react'

const Recipe = ({ title, url, ingredients }) => {
    return (
        <div className="recipe-card">
            <div className="recipe-title">
                <h3>{title}</h3>
            </div>
            <ul className="ingredients-list">
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>
            <div className="read-more">
                <a href={url}>Read more...</a>
            </div>
        </div>
    )
}

export default Recipe
