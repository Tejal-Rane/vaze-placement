import React from 'react';
import { NavLink } from 'react-router-dom';
 import "../styles/mainpage.css";


const Home = () => {
  return (
    <>
    {/* <div className='back' style={{ backgroundImage: `url(${web})`}}>
      <section id='header'>
      <div>
        <div className='row'> 
        <div className='col-10 mx-auto'>
        <div className='row'>
        <div className='col-md-10 pt-5 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <h1>V.G VAZE COLLEGE OF ARTS,SCIENCE AND <div className='text-center'>COMMERCE</div></h1>
        <h2 className='my-4'>
          PLACEMENT CELL
        </h2>
        <div className='mt-3'>
          <NavLink to="/placement" className='btn'>Get Started</NavLink>
        </div>
        </div>
        </div>
        
       
        
        </div>
        </div>
      </div>
      
      </section>
      </div> */}
    <div className='container_1' >
      <div className='image'><img src="https://raw.githubusercontent.com/Narendra03K/Placement-Portal/1ae756089380313955c2e916972193fba839bbfc/img/home.svg" style={{ display: "inline-block;" }}></img>
      <p>image credit:https://raw.githubusercontent.com/Narendra03K/</p></div><div className='text'>
      <h2 className='text-center'>V.G VAZE COLLEGE OF ARTS,SCIENCE AND COMMERCE
      <h3 className='my-4'>
          PLACEMENT CELL
      </h3>
      <div className='mt-3'>
          <NavLink to="/about" className='btn'>ABOUT US</NavLink>
      </div>
      </h2></div>
      
      </div>
    </>
  )
}

export default Home;