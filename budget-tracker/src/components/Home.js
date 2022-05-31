import React from 'react'
function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
          Welcome To Budget Tracker For "{new Date().toLocaleString("en-US", { month: "long" })} {new Date().getFullYear()}"
      </h1>
      <h2>{new Date().toLocaleString() + ""}</h2>
    </div>
  )
}
export default Home