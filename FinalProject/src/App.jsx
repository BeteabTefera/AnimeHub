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
      <div className='top-right'>
        <Link to ='/create'>Create Post!</Link>
        <br/>
        <Link to ='/view'>View Posts</Link>
        <br/>
        <Link to ='/'>Home</Link>
      </div>
      {routes}
    </div>
  )
}

export default App
