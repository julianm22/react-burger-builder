import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={Less}>Less</button>
        <button className={More}>More</button>
    </div>
);

export default buildControl;