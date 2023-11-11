import React, { Fragment } from 'react'
import Header from '../Components/Header/Header'
import Options from '../Components/Options/Options'
import Footer from '../Components/Footer/Footer'
function Home() {
  return (
    <div>
      <Fragment>
        <Header/>
        <Options/>
        <Footer/>
      </Fragment>
    </div>
  )
}

export default Home
