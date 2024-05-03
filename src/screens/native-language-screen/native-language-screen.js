import React from 'react';
import { CustomAddNew } from '../../components/custom-add-new/custom-add-new';
import { CustomCountryItem } from '../../components/custom-country-item/custom-country-item';
import './native-language-style.css';
import { countryData } from '../../data/custom-data-table';


export const NativeLanguageScreen = () => {
   

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