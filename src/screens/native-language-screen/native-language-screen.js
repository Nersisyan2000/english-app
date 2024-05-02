import React from 'react';
import { CustomAddNew } from '../../components/custom-add-new/custom-add-new';
import './native-language-style.css';

export const NativeLanguageScreen = () => {
    return (
        <div className='nativeLanguageScreenMainDiv'>
            <CustomAddNew title={"Add New Language"}/>
        </div>
    )
}