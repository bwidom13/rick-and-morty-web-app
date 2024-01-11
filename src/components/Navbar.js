import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import Search from './Search';




function NavBar(args) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >    
            <Navbar {...args} >
                <NavbarBrand href="/" style={{backgroundImage: `url("https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-001.jpg")`, color:"#000099"}}>Rick And Morty App</NavbarBrand>
                <NavbarToggler onClick={toggle} className="me-2 border border-danger" type='submit'/>
                <Collapse isOpen={!isOpen} navbar>
                    <Nav className="me-auto w-100" navbar>                        
                        <NavItem className='w-100 d-flex justify-content-center'>                        
                            <Search placeHolder="Search"/>                            
                        </NavItem>
                    </Nav>
                    
                </Collapse>
            </Navbar>

            <Outlet />
        </div>
    );
}

export default NavBar;