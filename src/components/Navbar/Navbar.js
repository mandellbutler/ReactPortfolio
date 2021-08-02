import React, { useState } from 'react';
import MenuItems from './MenuItems'
//use-History listens to popstate events while the component is mounted and rerenders when the url changes.
//it is useful when the app's url changes during the deployment to Github or Heroku.
import { useHistory } from 'react-router-dom'
// import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


function Navbar() {
  const history = useHistory();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) setClicked(true)
    if (clicked) setClicked(false)
  }

  return (
    <nav className="NavbarItems">
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            // <li key={index} className={item.cName}>
            //   <Link className='materialLink' onClick={(event) => {
            //     history.push(`${item.url}`)
            //   }}>
            //     {item.title}
            //   </Link>
            // </li>
            <li key={index} className={item.cName} onClick={(event) => {
              history.push(`${item.url}`)
            }}>
              {item.title}
            </li>
          )
        })}

      </ul>
    </nav>
  );
}

export default Navbar;