import React from 'react';
import './main.css';
import { Link } from 'react-router-dom';

const Card = () => {
    return (
       <div className="cardes">
          <div className="card" style={{"width": "30rem"}}>
              <img src="/sus.avif" className="card-img-top" alt="..." />
              <div className="card-body">
                  <h1 className="card-title">Card Title</h1>
                  <p1 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p1>
                  <br /><br />
                  <hr/>
                  <button className='btn'><Link to="/"><b>Back</b></Link></button>
              </div>
          </div>
          </div>
        
    )
}

export default Card