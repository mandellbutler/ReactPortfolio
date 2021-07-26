import React, { useState } from 'react';
import MenuItems from './MenuItems'
import { useHistory } from 'react-router-dom'
import Link from '@material-ui/core/Link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import Button from './Button'


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
            <li key={index} className={item.cName}>
              <Link className='materialLink' onClick={(event) => {
                history.push(`${item.url}`)
              }}>
                {item.title}
              </Link>
            </li>
          )
        })}

      </ul>
    </nav>

    // <div className="navbar sticky-top navbar-expand-lg">
    //   <nav className="navbar sticky-top navbar-expand-lg">
    //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    //       <div className="navbar-nav">
    //         <p className="nav-elements"><Link className="materialLink nav-item nav-link active" onClick={(event) => {
    //           history.push('/myWork')
    //         }} color='primary'>myWork</Link></p>
    //         <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
    //           history.push('/aboutMe')
    //         }} color='primary'>aboutMe</Link></p>
    //         <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
    //           history.push('/resume')
    //         }} color='primary'>resume</Link></p>
    //         <p><Link className="materialLink nav-item nav-link" onClick={(event) => {
    //           history.push('/contact')
    //         }} color='primary'>Contact</Link></p>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
}

export default Navbar;