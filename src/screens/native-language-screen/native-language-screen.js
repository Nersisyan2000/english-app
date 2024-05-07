import React, { useEffect } from 'react';
import { CustomAddNew } from '../../components/custom-add-new/custom-add-new';
import { CustomCountryItem } from '../../components/custom-country-item/custom-country-item';
import './native-language-style.css';
import { countryData } from '../../data/custom-data-table';
import { CustomPagination } from '../../components';
import { useNavigate } from 'react-router-dom';
import { nativeLanguageGetThunk } from '../../store/slices/native-language/native-language-get';
import { useDispatch } from 'react-redux';


export const NativeLanguageScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = {

        skip: 1,
        limit: 10

    }
    useEffect(() => {
        dispatch(nativeLanguageGetThunk(data))
    }, [])
    return (
        <div className='nativeLanguageScreenMainDiv'>
            <div>
                <CustomAddNew title={"Add New Language"} onClick={() => {
                    navigate("/native-language-create")
                }} />
                <p className='nativeLanguageTitle'>Native Language</p>
                <div className='nativeLanguageCountryItems'>
                    {
                        countryData.map((countryItem) => {
                            return (
                                <CustomCountryItem icon={countryItem.icon} title={countryItem.title} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='nativeScreenPaginationDiv'>
                <CustomPagination />
            </div>
        </div>
    )
}