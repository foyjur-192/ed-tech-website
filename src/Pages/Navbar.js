import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [user, loading, error] = useAuthState (auth);
  const Logout = () => {
    signOut (auth);
  };
  const navigate = useNavigate ();
    return (
        <div class="navbar background-color">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow background-color rounded-box w-52">
              <li><Link to='/hero' > Home</Link></li>
              <li tabindex="0">
                <a class="justify-between text-white">
                  Services
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
              
              </li>
              <li><a className='text-white'>Testimonials</a></li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case logo text-3xl">Ed-Tech</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li><a className='text-white'>Home</a></li>
            <li tabindex="0">
              <a className='text-white'>
                About
                
              </a>
            
            </li>
            <li><a className='text-white'>Testimonials</a></li>
          </ul>
        </div>
        <div class="navbar-end">
         <h1 className='text-white'>{user.displayName}</h1>
        <li className='text-left'> { user ? <button class="btn button-bg text-white " onClick={Logout}>log Out</button> : <Link to="/login" className='button-bg text-white btn'>Log in</Link>} </li>
        </div>
      </div>
    
    );
};

export default Navbar;