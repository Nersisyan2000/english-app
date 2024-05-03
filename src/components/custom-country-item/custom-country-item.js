import React from 'react';
import './custom-country-item-style.css';
import { Colors } from '../../assets/colors/colors';

export const CustomCountryItem = ({ icon, title }) => {

    return (
        <>
           <div className='customCountryItem' style={{backgroundColor: Colors.BACKGROUND_COLOR}}>
                <p className='customCountryItemTitle' style={{color: Colors.LIGHT_GRAY}}>{title}</p>
                <img src={icon} />
            </div>
        </>
    )
}