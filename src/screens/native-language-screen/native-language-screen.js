import React from 'react';
import { CustomAddNew } from '../../components/custom-add-new/custom-add-new';
import britishIcon from '../../assets/images/britishCountryIcon.svg.svg';
import germanyIcon from '../../assets/images/germanyCountryIcon.svg.svg';
import spanishIcon from '../../assets/images/spanishCountryIcon.svg.svg';
import { CustomCountryItem } from '../../components/custom-country-item/custom-country-item';
import './native-language-style.css';


export const NativeLanguageScreen = () => {
    const countryData = [
        {
            id: 1,
            icon: britishIcon,
            title: 'England'
        },
        {   
            id: 2,
            icon: germanyIcon,
            title: 'German'
        },
        {
            id: 3,
            icon: spanishIcon,
            title: 'Spain'
        },
        {
            id: 1,
            icon: britishIcon,
            title: 'England'
        },
        {
            id: 5,
            icon: germanyIcon,
            title: 'German'
        },
        {
            id: 6,
            icon: spanishIcon,
            title: 'Spain'
        },
        {
            id: 7,
            icon: germanyIcon,
            title: 'German'
        },
        {
            id: 1,
            icon: britishIcon,
            title: 'England'
        },
        {
            id: 9,
            icon: germanyIcon,
            title: 'German'
        },
        {
            id: 1,
            icon: britishIcon,
            title: 'England'
        },
        {
            id: 11,
            icon: germanyIcon,
            title: 'German'
        },
        {
            id: 1,
            icon: britishIcon,
            title: 'England'
        },
    ]

    return (
        <div className='nativeLanguageScreenMainDiv'>
            <CustomAddNew title={"Add New Language"}/>
            <p className='nativeLanguageTitle'>Native Language</p>
            <div className='nativeLanguageCountryItems'>
                {
                    countryData.map((countryItem) => {
                        return (
                            <CustomCountryItem icon={countryItem.icon} title={countryItem.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}