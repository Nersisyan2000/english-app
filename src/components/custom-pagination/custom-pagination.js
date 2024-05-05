import React from 'react';
import { Pagination } from 'antd';
import "./custom-pagination.css"


export const CustomPagination = () => {

    const onShowSizeChange = (current, pageSize) => {
    };
    return (
        <div>
            <Pagination
                showSizeChanger
                onShowSizeChange={onShowSizeChange}
                defaultCurrent={3}
                total={150}
            />
        </div>
    )
}