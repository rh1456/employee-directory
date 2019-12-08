import React from 'react'
import Oilers from './i.png'

const HomePage = () => {
  return (
    <header className="homepage-head">
      <h1 className="oilers">Welcome to Oilers' Employee Database</h1>
    </header>
    <main>
      <img src={Oilers} alt="" className="oilers-logo"/>
    </main>
  )
}

export default HomePage
