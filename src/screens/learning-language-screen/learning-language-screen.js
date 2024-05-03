import React from 'react';
import './learning-language-screen-style.css';
import { Colors } from '../../assets/colors/colors';
import { CustomAddNew } from '../../components/custom-add-new/custom-add-new';
import { LearningLanguageItemCard } from './components/learning-laguage-item-card';
import { CustomPagination } from '../../components';

export const LearningLanguageScreen = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className='learningLanguageScreenMainDiv' style={{backgroundColor: Colors.WHITE}}>
            <div>
                <div className='learningLanguageScreenAddNewDiv'>
                    <CustomAddNew title={"Add New Language"}/>
                </div>
                <div className='learningLanguageCardItems'>
                    {
                        arr.map(() => {
                            return (
                                <LearningLanguageItemCard title={'English'} count={35}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className='learningLanguageScreenPaginationDiv'>
                <CustomPagination />
            </div>
        </div>
    )
}