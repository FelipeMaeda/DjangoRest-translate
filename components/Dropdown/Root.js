import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// import { Container } from './styles';
import { DropdownSection } from './Section.js'
import { Context } from './Provider.js';

export function DropdownRoot() {
    const { options } = useContext(Context);

    return (
        <div className="dropdown-root">
            <div>
                <div className="dropdown-container">
                    {options.map((item) => (
                        <DropdownSection key={item.id} option={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DropdownRoot;