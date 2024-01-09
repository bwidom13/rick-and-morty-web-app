import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';
import SearchBar from './SearchBar';
import Search from './Search';
import SearchBarModal from './SearchBarModal';



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
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>Option 1</DropdownItem>
                                <DropdownItem>Option 2</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Reset</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem className='w-100'>                        
                            <Search />
                            {/* <SearchBarModal /> */}
                        </NavItem>
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;