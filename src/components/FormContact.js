import React, { useState } from 'react';
import GirlContact from '../img/contact-girl.png'
import UzbFlag from '../img/twemoji_flag-uzbekistan.svg'
import { getText } from './Locales';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import axios from 'axios';

const FormContact = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        tel: ""
    })

    const { firstName, lastName, tel } = data


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (firstName.length > 0 && lastName.length > 0 && tel.length > 0) {
                const res = await fetch('https://api.sheetmonkey.io/form/kqiMAL4ct39mUH5nBxvBfE', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([[firstName, lastName, tel, Date().toLocaleString()],]),
                });
                await res.json();
                setData({ ...data, firstName: "", lastName: "", tel: "" })
                window.location.reload()
            } else {
                alert("Пожалуйста заполняйте")
            }

        } catch (err) {
            console.log(err + "sadasdasdasdasd");
        }

    };

    return (
        <div className='formContact'>
            <div className='container'>
                <div className='d-flex justify-content-center mt-5 form-contact' id='call'>
                    <h3 className='call_button'>{getText('nav4')}</h3>
                </div>

                <div className='contact'>
                    <div className='contact-left'>
                        <div>
                            <form className='form' onSubmit={handleSubmit}>
                                <label htmlFor='firstName'>{getText('firstName')}*
                                    <input type='text'
                                        name='firstName'
                                        value={firstName}
                                        placeholder={getText('firstName')}
                                        onChange={handleChange}
                                        className='input form-control' required />
                                </label>
                                <label htmlFor='lastName'>{getText('lastName')}*
                                    <input type='text'
                                        name='lastName'
                                        value={lastName}
                                        onChange={handleChange}
                                        placeholder={getText('lastName')}
                                        className='input form-control' required />
                                </label>
                                <label htmlFor='tel' className='label'>{getText('tel')}*
                                    <input type='text'
                                        name='tel'
                                        value={tel}
                                        onChange={handleChange}
                                        placeholder='(90) 177 - 77 - 77'
                                        className='input form-control' required />
                                    <img src={UzbFlag} alt='UzbFlag' className='imgFlag' />
                                </label>
                                <div className='button_center'>
                                    <button type='submit' onClick={handleSubmit} className='call_button'>{getText('send')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='contact-right'>
                        <img src={GirlContact} alt='Girl contact' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FormContact;