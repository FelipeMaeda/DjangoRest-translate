import React from 'react';
import { Container, DropdownStyles } from './styles';
import { DropdownOption } from '../Dropdown'

function NavBar() {
    return (
        <DropdownStyles>
            <Container>
                <ul>
                    <li>
                        <DropdownOption
                            name="Produtos"
                            content={() => <div>Produtos</div>}
                        />
                    </li>
                    <li>
                        <DropdownOption
                            name="Desenvolvedores"
                            content={() => <div>Desenvolvedores</div>}
                        />
                    </li>
                    <li>
                        <DropdownOption
                            name="Empresa"
                            content={() => <div>Empresa</div>}
                        />
                    </li>
                </ul>
            </Container>
        </DropdownStyles>
    );
}

export default NavBar;