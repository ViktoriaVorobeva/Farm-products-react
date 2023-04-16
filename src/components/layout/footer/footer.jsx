import React from 'react';
import Logo from '../../ui/logo/logo';
import './footer.css';

function Footer() {
    return (
        <footer className='footer'>
          <Logo/>
          <p className='footer__text'>Создано 2021</p>
        </footer>
    )
}

export default Footer;