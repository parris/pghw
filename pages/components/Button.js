import React from 'react'
import style from 'next/css';

import constants from './constants';

// Missing details from zeplin: top/bottom padding and colors hexs
const buttonPrimaryStyles = style({
    background: '#1587DB',
    border: 'none', // reset
    boxSizing: 'border-box',
    color: 'white',
    fontFamily: constants.fontFamily,
    fontWeight: '500',
    fontSize: constants.fontSizes.medium,
    padding: '10px 16px',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    fontSize: '12px',
    borderRadius: '3px',
    transition: 'all .15s ease',
    ':hover': {
        transition: 'all .3s ease',
        transform: 'translateY(-1px)',
        background: '#1E9EFC',
    },
    ':active': {
        transform: 'translateY(1px)',
        background: '#1587DB',
    },
    ':focus': {
        outline: '#1E9EFC',
    },
    ':disabled': {
        cursor: 'not-allowed',
        background: '#FAFBFC',
        border: '1px solid #E2E9ED',
    },
});

// I'd merge this with the previous style...
// but not sure how to do this with nextjs yet.
const buttonSecondaryStyles = style({
    background: '#FFFFFF',
    border: '1px solid #D5DFE7',
    boxSizing: 'border-box',
    color: '#1587DB',
    fontFamily: constants.fontFamily,
    fontWeight: '500',
    fontSize: constants.fontSizes.medium,
    padding: '10px 16px',
    textTransform: 'uppercase', // Note: uppercasing + css can result in poor translations
    letterSpacing: '0.8px',
    fontSize: '12px',
    borderRadius: '3px',
    transition: 'all .15s ease',
    ':hover': {
        transition: 'all .3s ease',
        transform: 'translateY(-1px)',
        borderColor: '#1587DB',
    },
    ':active': {
        transform: 'translateY(1px)',
        background: '#D5EEFE',
        borderColor: '#1587DB',
    },
    ':focus': {
        outline: '#1E9EFC',
    },
    ':disabled': {
        cursor: 'not-allowed',
        background: '#FAFBFC',
        borderColor: '#E2E9ED',
    },
});

export function ButtonPrimary({ style, children, onClick, testSelector }) {
    return (
        <button
            style={style}
            className={buttonPrimaryStyles}
            onClick={onClick}
            data-test={testSelector}
        >
            {children}
        </button>
    );
}

export function ButtonSecondary({ style, children, onClick, testSelector }) {
    return (
        <button
            style={style}
            className={buttonSecondaryStyles}
            onClick={onClick}
            data-test={testSelector}
        >
            {children}
        </button>
    );
}

ButtonSecondary.propTypes = ButtonPrimary.propTypes = {
    children: React.PropTypes.any.isRequired,
    onClick: React.PropTypes.func,
};
