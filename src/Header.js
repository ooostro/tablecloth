import React from 'react'
import { useEffect, useState } from 'react'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1 className="logo-main">
                    <span className="break">Mom Says</span>
                    <span className="break">to Eat</span>
                </h1>
                <h2 className="logo-subtitle">
                    <span className="break">Recipes for</span>
                    <span className="break">the Modern Woman</span>
                </h2>
            </div>
            {/* <div className="app">
                <div className="opening-content">
                    <h2>What are you in the mood for?</h2>
                    <p>Enter the ingredients you're working with, and we'll suggest something to cook. This application uses <a href="https://www.edamam.com/">Edamam's</a> API.</p>
                </div>
            </div> */}
        </header>
    )
}

export default Header
