import React from 'react'
import './Topbar.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>b</span>
            </div>
           <div className='topRight'>
            <div className='topbarIcons'>
            <img src='https://media-exp1.licdn.com/dms/image/C560BAQHGTmZIWQhTEQ/company-logo_200_200/0/1519862279437?e=1652918400&v=beta&t=w8yFaP6rkioQ41X2WsSCxRaot1_-xrpsSy49NMLi0GE' className='topAvatar' />
           <span className='text1'>Hello Every Matrix!</span>
          <ArrowDropDownIcon />
            </div>
          </div>
        </div>
    </div>
  )
}
