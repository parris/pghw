import Head from 'next/head';
import React from 'react';
import style from 'next/css';

import constants from './components/constants';
import { ButtonPrimary, ButtonSecondary } from './components/Button';
import Drawer from './components/Drawer';

let mainLayout = style({
    padding: '24px',
});

// i'd make this more elegant later by creating a "button list"
// nextjs also seems to not let you have multiple classes per element
let spacer = {
    marginRight: '20px',
};
// May also want to turn this into a text class component later or just move this
// to the constants file... can't yet tell what's generic
let sidebarContent = style({
    fontSize: constants.fontSizes.medium,
    color: '#54636C',
    lineHeight: '21px', // guessing again
});

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            isDrawerOpen: false,
        };
    }

    render() {
        const drawerClassName = this.state.isDrawerOpen ? 'drawer--is-open' : 'drawer--is-closed';

        const handleClose = (e) => {
            e.preventDefault();
            this.setState({ isDrawerOpen: false });
        };
        const handleToggle = () => this.setState({ isDrawerOpen: !this.state.isDrawerOpen });

        return (
            <div>
                <Head>
                    <style>{`
                      body {
                        background: #F0F4F7;
                        font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
                        font-size: '13px';
                        margin: 0;
                        padding: 0;
                      }
                    `}</style>
                </Head>
                <Drawer
                    title="Sidebar"
                    isVisible={this.state.isDrawerOpen}
                    className={drawerClassName}
                    onClose={handleClose}
                    content={
                        <div className={sidebarContent}>
                            Bacon ipsum dolor amet pastrami hamburger ground round ham shankle sirloin. Ribeye chicken doner chuck beef ribs. Cow pork chop salami brisket turducken cupim short loin leberkas jerky pork belly filet mignon kielbasa shoulder. Fatback shank andouille, sausage pork belly pork porchetta tenderloin venison flank brisket doner hamburger pancetta tail. Chuck doner fatback leberkas pork filet mignon. Filet mignon turkey bresaola hamburger venison leberkas bacon ground round burgdoggen rump shoulder
                        </div>
                    }
                    footer={
                        <div>
                            <ButtonSecondary style={spacer} onClick={handleClose}>Cancel</ButtonSecondary>
                           <ButtonPrimary onClick={handleClose}>Save Changes</ButtonPrimary>
                        </div>
                    }
                />
                <div className={mainLayout}>
                    <ButtonPrimary
                        // There are other options here other than .bind
                        // Decorators are a nice approach to solving this although the
                        // spec is non-stable.
                        onClick={handleToggle}
                        testSelector="toggleButton"
                    >
                        Toggle Drawer
                    </ButtonPrimary>
                </div>
            </div>
        );
    }
}
