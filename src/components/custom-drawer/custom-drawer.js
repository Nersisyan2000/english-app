import React, { useState } from 'react';
import Drawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import './custom-drawer.css';
import { customSideBarData } from '../../data';
import { useTranslation } from 'react-i18next';

export const CustomDrawer = ({ open, setOpen }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        position="left"
        modalElementClass="modal"
      >
        {
            customSideBarData.map((item, ind) => {
                return (
                    <div className='customDrawerItem'>
                        <p style={{color: item.color}}>{t(`${item.title}`)}</p>
                    </div>
                )
            })
        }
      </Drawer>
    </div>
  );
};

export default CustomDrawer;
