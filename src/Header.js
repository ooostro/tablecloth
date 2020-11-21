import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>TableCloth</h1>
            </div>
            <div className="app">
                <div className="opening-content">
                    <h2>What are you in the mood for?</h2>
                    <p>Enter the ingredients you're working with, and we'll suggest something to cook. This application uses <a href="https://www.edamam.com/">Edamam's</a> API.</p>
                </div>
            </div>
        </header>
    )
}

export default Header
