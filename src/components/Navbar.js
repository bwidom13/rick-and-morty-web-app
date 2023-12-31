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
import Select from 'react-select';
const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
];

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >    
            {/* <div style={{height:"200px", width:"200px", backgroundImage: `url("https://wallpaperboat.com/wp-content/uploads/2019/04/rick-and-morty-wallpaper-portal-wallpaper-001.jpg")` , backgroundColor:""}}>
                hi               
            </div>                      */}
            <Navbar {...args} style={{color:"green"}}>
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
                            <Select className=" w-100"
                                options={aquaticCreatures}
                            />         
                        </NavItem>
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;