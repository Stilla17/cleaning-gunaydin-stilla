import React from 'react';
import Logo from '../img/Logo.svg'
import Tg from '../img/tg.svg'
import Instagram from '../img/instagram.svg'
import Youtube from '../img/youtube.svg'
import { getText } from './Locales';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-info'>
                    <div>
                        <a className="navbar-brand" href="#"><img src={Logo} alt='Logo' /></a>
                        <div className='footer-block block-close'>
                            <img src={Tg} alt='Tg' />
                            <img src={Instagram} alt='Instagram' />
                            <img src={Youtube} alt='Youtube' />
                        </div>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">{getText('nav1')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{getText('nav2')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">{getText('nav3')}</a>
                        </li>
                        <li className="nav-item item_call">
                            <a className="nav-link" href="#">{getText('nav4')}</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav nav-border">
                        <li className="nav-item">
                            {getText('telNumber')}
                        </li>
                        <li className="nav-item">
                            +998333000057
                        </li>
                        <li className="nav-item">
                            {getText('address')}
                        </li>
                        <li className="nav-item item_call">
                            {getText('location')}
                        </li>
                    </ul>
                    <div className='footer-btn'>
                        <div className='footer-block block'>
                            <img src={Tg} alt='Tg' />
                            <img src={Instagram} alt='Instagram' />
                            <img src={Youtube} alt='Youtube' />
                        </div>
                        <div className='button_center btn-center'>
                            <button className='call_button'>{getText('nav4')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;