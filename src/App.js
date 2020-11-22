import './App.css';
import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import Header from './Header'
import images from './images'

const App = () => {
  const APP_ID = '17bbfe63'
  const APP_KEY = 'c27cae5a67a0935d749d196dff127f70'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')
  const [bgImage, setBgImage] = useState('')
  const [placeholder, setPlaceholder] = useState('')

  // const bgImage = images[Math.floor(Math.random() * Math.floor(images.length))].src

  // const placeholdersList = ["tuna noodle casserole", "pineapple upside-down cake", "chicken à la king", "ma's meatloaf", "clam dip", "pigs in a blanket", "shrimp cocktail"]
  // const placeholder = `${placeholdersList[Math.floor(Math.random() * Math.floor(placeholdersList.length))]}...`

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * Math.floor(images.length))
    setBgImage(images[randomNum].src)
  }, [])
  
  useEffect(() => {
    const placeholdersList = ["tuna noodle casserole", "pineapple upside-down cake", "chicken à la king", "ma's meatloaf", "clam dip", "pigs in a blanket", "shrimp cocktail"] 
    let randomNum = Math.floor(Math.random() * Math.floor(placeholdersList.length))
    setPlaceholder(`${placeholdersList[randomNum]}...`)
  }, [])

  // useEffect(() => {
  //   const getRecipes = async () => {
  //     const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  //     const data = await response.json()
  //     setRecipes(data.hits)
  //   }
  //   getRecipes()
  // }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <div className="header-wrapper" style={{ backgroundImage: `url(${bgImage})` }}>
        <Header />
        <p className="lead-in-text">What's on the menu?</p>
        <form onSubmit={getSearch} className="search-form">
          <input onChange={updateSearch} type="text" name="recipeName" className="search-field" placeholder={placeholder}/>
          <button type="submit" className="submit-button">Search</button>
        </form>
        <p className="photo-credit">Photo by <a href="https://unsplash.com/@anniespratt">Annie Spratt</a></p>
      </div>
      <div className="list-of-recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
