import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
      
        <div className="navbar navbar-light bg-light fixed-bottom" >
             <div className="col-12 d-flex justify-content-around" >
                    <Link to="/" style={{color:"#424242"}}>
                        <i className="fa fa-home fa-2x" aria-hidden="true"></i>
                    </Link>
                    <Link to="/calendar" style={{color:"#424242"}}>
                        <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
                    </Link>
            </div>    
        </div>
  );
}

export default Nav;
