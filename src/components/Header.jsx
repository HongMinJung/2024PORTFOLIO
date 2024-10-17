import React, { useState } from 'react';
import { headerNav } from '../contents';

export default function Header() {
  const [ show, setShow ] = useState(false);

  const toggleMenu = () => {
    setShow ((prevShow) => !prevShow);
  };

  return (
    <header id='header' role='banner'>
      <div className='header_inner'>
        <div className='header_logo'>
          <a href="/">PORTFOLIO</a>
        </div>

        <nav className={`header_nav ${show ? "show": ""}`} role='navigation' aria-label='메인 메뉴'>
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div id='headerToggle' className='header_mo_nav'
          aria-controls='primary-menu'
          aria-expanded={show ? "true" : "false"}
          role='button'
          tabIndex='0'
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}
