import React from 'react'
import style from 'next/css';

import constants from './constants';
import { SidebarHeading } from './Headings';

const drawerContainer = style({
    position: 'fixed',
    right: '-385px',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    height: '100vh',
    width: '385px', // the design didn't specify a width, i'm guessing
    background: 'white',
    transition: 'all .4s ease', // not in spec, but a transition is likely
});

const headerContainer = style({
    height: '56px',
    boxSizing: 'border-box',
    padding: '24px',
    borderBottom: '1px solid #E1E8ED',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const sidebarContent = style({
    flex: '1',
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '24px',
    borderBottom: '1px solid #E1E8ED',
});

const footerContent = style({
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const headingStyle = {
    flex: '1',
};

const closeButton = style({
    color: '#8A9CA8',
    fontSize: constants.fontSizes.large,
    textDecoration: 'none',
    background: 'transparent',
    border: 'none',
});

function Drawer({ title, isVisible, content, footer, onClose }) {
    // Notes:
    // - Drawer Markup: sidebars are not asides, they could be navs or
    // they could be contextual. In this case, the top level represents layout
    // so I'll just make it a div.
    // - Header Markup: I debated including the header in here, in my experience headers vary
    // a lot. There should however be a mandate and consistency should be enforced.

    let styles = {
        right: (isVisible) ? '0px' : '-385px',
    };
    return (
        <div className={drawerContainer} style={styles} data-test-drawer-visible={String(isVisible)}>
            <header className={headerContainer}>
                <SidebarHeading style={headingStyle}>{title}</SidebarHeading>
                <button className={closeButton} href="#" onClick={onClose}>X</button>
            </header>
            <section className={sidebarContent}>
                {content}
            </section>
            <footer className={footerContent}>
                {footer}
            </footer>
        </div>
    );
}

Drawer.propTypes = {
    title: React.PropTypes.string.isRequired,
    isVisible: React.PropTypes.bool.isRequired,
    content: React.PropTypes.any.isRequired,
};

export default Drawer;
