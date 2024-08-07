import React from 'react';

import { Loading } from './loading';
import { getCount } from './api';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        
        <header>
        {/* <div id="count">
          <input type="button" value="Get Count" onClick={getCount} />
        </div> */}

<div id="logo">
                logo
            </div>
            <div id="buttons">
                <ul>
                    <li>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/getdetails">
                            <button>GetDetails</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout">
                            <button>LogOut</button>
                        </Link>
                    </li>
                </ul>
            </div>

        </header>
      
    </div>
  );
};

export default Navbar;
