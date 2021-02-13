import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Context } from './Provider.js'

// import { Container } from './styles';

export function DropdownSection({ option }) {
    const { updateOptionProps, cachedId } = useContext(Context);

    const { id, optionDimensions, optionCenterX, contentDimensions } = option;

    const x = optionCenterX;
    const isActive = cachedId === id;

    return (
        <motion.div
            className="dropdown-section"
            animate={{
                x,
            }}    
        >
            <option.WrappedContent />
        </motion.div>
    )
}