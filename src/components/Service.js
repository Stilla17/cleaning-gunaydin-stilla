import React from 'react';
import Moyka from '../img/moyka.png'
import Like from '../img/like.svg'
import Fasad from '../img/moykafasad.png'
import Ximchistka from '../img/ximchistka.png'
import Company from '../img/company.png'
import { getText } from './Locales';

const Service = () => {
    return (
        <div className='service' id='uslug'>
            <div className='container'>
                <div className='text-center mt-5'><button className='call_button'>{getText('nav1')}</button></div>
                <p className='service_text mt-5'>{getText('serviceTitle')} <span>{getText('serviceTitle2')}</span></p>

                <div className='service-wrap mt-5'>
                    <div className='service-call'>
                        <h2>{getText('service')}</h2>

                        <div>
                            <p>
                                {getText('textService1')}
                            </p>
                            <div className='service_work_flex'>
                                <div className='service-work'>
                                    <img src={Moyka} alt="Мойка" className='img' />
                                    <div className='block-text'>
                                        <p className='text-start text'>
                                            {getText('cardText1')}
                                        </p>
                                        <img src={Like} alt="Like" />
                                    </div>
                                    <p className='sub'>
                                        {getText('cardTextP')}
                                    </p>
                                </div>
                                <div className='service-work'>
                                    <img src={Fasad} alt="Мойка" className='img' />
                                    <div className='block-text'>
                                        <p className='text-start text'>
                                            {getText('cardText2')}
                                        </p>
                                        <img src={Like} alt="Like" />
                                    </div>
                                    <p className='sub'>
                                        {getText('cardTextP')}
                                    </p>
                                </div>
                                <div className='service-work'>
                                    <img src={Ximchistka} alt="Мойка" className='img' />
                                    <div className='block-text'>
                                        <p className='text-start text'>
                                            {getText('cardText3')}
                                        </p>

                                        <img src={Like} alt="Like" />
                                    </div>
                                    <p className='sub'>
                                        {getText('cardTextP')}
                                    </p>
                                </div>
                                <div className='service-work'>
                                    <img src={Company} alt="Мойка" className='img' />
                                    <div className='block-text'>
                                        <p className='text-start text'>
                                            {getText('cardText4')}
                                        </p>
                                        <img src={Like} alt="Like" />
                                    </div>
                                    <p className='sub'>
                                        {getText('cardTextP')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Service;