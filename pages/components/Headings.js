import React from 'react'
import style from 'next/css';

const styles = style({
    color: '#3E4E58',
    fontFamily: style.fontFamily,
    fontSize: style.large,
    fontWeight: '500',
});

// This may be better named something else, but we don't know
// what else might share the same styles as sidebar heading.
// In light of this, we should be super specific with the naming until
// we know more.
export function SidebarHeading({ children, style }) {
    // I expect these to be wrapped in h1->hn if they deserve SEO importance
    // Using a span to allow for headings to be generic.
    return (
        <span className={styles} style={style}>
            {children}
        </span>
    );
}

SidebarHeading.propTypes = {
    children: React.PropTypes.any.isRequired,
};
