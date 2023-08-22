import React from 'react';
import Person from '../img/person.png'
import AboutUs from '../img/aboutUs.png'
import Pic1 from '../img/pic1.png'
import Pic2 from '../img/pic2.png'
import Pic3 from '../img/pic3.png'
import Pic4 from '../img/pic4.png'
import { getText } from './Locales';

const ServiceTwo = () => {

    const scrollToSection = () => {
        const call = document.getElementById('call');
        if (call) {
            call.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
        }
    };


    return (
        <div className='serviceTwo'>
            <div className='container'>
                <div className='serviceTwo-wrap'>
                    <div className='text-title-block block'>
                        <h3>
                            {getText('serviceTwoTitle')}
                        </h3>
                    </div>
                    <div className='serviceTwo-left'>
                        <img src={Person} alt='Person' />
                    </div>
                    <div className='serviceTwo-right'>
                        <div className='text-title-block closee'>
                            <h3>
                                {getText('serviceTwoTitle')}
                            </h3>
                        </div>

                        <div className='text-sub'>
                            <p className='mb-5'>{getText('textService2')}</p>
                            <p>{getText('serviceText')}</p>
                        </div>

                        <div className='button_center'>
                            <button className='call_button' onClick={scrollToSection}>{getText('nav4')}</button>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5' id='about'>
                    <h3 className='call_button'>{getText('nav2')}</h3>
                </div>


                <div className='aboutUs'>
                    <div className='about-left'>
                        <div className='text-sub'>
                            <p className='about-title'>{getText('aboutTitle')}</p>
                            <p>{getText('aboutText')}</p>
                        </div>
                        <div className='button_center'>
                            <button className='call_button' onClick={scrollToSection}>{getText('nav4')}</button>
                        </div>

                    </div>
                    <div className='about-right'>
                        <img src={AboutUs} alt='About us' />
                    </div>
                </div>

                <div className='d-flex justify-content-center mt-5' id='team'>
                    <h3 className='call_button'>{getText('nav3')}</h3>
                </div>


                <div className='work-team'>
                    <div className='fast'>
                        <img src={Pic1} alt='About us' />
                        <div className='info-team'>
                            <p className='title-team'>{getText('home')}</p>
                            <hr />
                            <p>{getText('uborkaDoma')}</p>
                        </div>
                    </div>
                    <div className='fast'>
                        <img src={Pic2} alt='About us' />
                        <div className='info-team'>
                            <p className='title-team'>{getText('office')}</p>
                            <hr />
                            <p>{getText('uborkaDoma')}</p>
                        </div>
                    </div>
                    <div className='fast'>
                        <img src={Pic3} alt='About us' />
                        <div className='info-team'>
                            <p className='title-team'>{getText('window')}</p>
                            <hr />
                            <p>{getText('clearWindow')}</p>
                        </div>
                    </div>
                    <div className='fast'>
                        <img src={Pic4} alt='About us' />
                        <div className='info-team'>
                            <p className='title-team'>{getText('technic')}</p>
                            <hr />
                            <p>{getText('technicSub')}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceTwo;