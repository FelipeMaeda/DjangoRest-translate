import React from 'react';
import { Container, DropdownStyles } from './styles.js';
import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown';
import { Products, Developers, Company } from '../Content';

function NavBar() {
    return (
        <DropdownProvider>
            <DropdownStyles>
                <Container>
                    <ul>
                        <li>
                            <DropdownOption
                                name="Produtos"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Desenvolvedores"
                                content={Developers}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Empresa"
                                content={Company}
                            />
                        </li>
                    </ul>
                </Container>

                <DropdownRoot />
            </DropdownStyles>
        </DropdownProvider>
    );
}

export default NavBar;