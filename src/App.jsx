import { useState } from 'react'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import ReadPost from './pages/ReadPost'
import DetailView from './pages/DetailView'
import Home from './pages/Home'
//CSS Imports
import './App.css'

function App() {

  //set up routes
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/create', element: <CreatePost /> },
    { path: '/view', element: <ReadPost /> },
    { path: '/edit/:id', element: <EditPost /> },
    { path: '/detail/:id', element: <DetailView /> },
  ])

  return (
    <div className="App">
      <div  className='top-left' >
        <h2 style={{ position: 'absolute', top: 0, left: 80 }}  >Anime Hub</h2>
        <img style={{ position: 'absolute', top: 0, left: 0 , padding:10}} src='src/components/images/luffy.png' height='45' />
      </div>
      <div className='top-right' >
        <Link style={{ color: '#213547',position: 'absolute', top: 0, right: 200 }} to ='/'><h2>Home</h2></Link>
        <Link style={{ color: '#213547',position: 'absolute', top: 0, right: 50 }} to ='/create'><h2>Create Post</h2></Link>
      </div>

      {routes}
    </div>
  )
}

export default App
