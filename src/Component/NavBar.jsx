import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

let NavBar=()=>{
    return(
        <header className='header'>
        <div >
            <div className='container'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/painting'>Painting</NavLink>
            <NavLink to='/quiling'>Quiling</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            </div>
            <div className='social'>
            <SocialIcon url='http://facebook.com/pou.diva' target='_blank' />
            <SocialIcon url='https://instagram.com/pou.diva?igshid=1nnvwlsm8j45v' target='_blank' />
            </div>
        </div>
        </header>
    )
}

export default NavBar;