import './App.css';
import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import Header from './Header'

const App = () => {
  const APP_ID = '17bbfe63'
  const APP_KEY = 'c27cae5a67a0935d749d196dff127f70'

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json()
      setRecipes(data.hits)
    }
    getRecipes()
  }, [query])

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
      <Header />
      <div className="searchbar">
        <form onSubmit={getSearch}>
          <input onChange={updateSearch} type="text" name="recipeName" className="search-field" placeholder="chickpeas, coconut milk..."/>
          <button type="submit" className="submit-button">Search</button>
        </form>
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
