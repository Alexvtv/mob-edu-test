import React from 'react';

import styles from './merge-element.module.css';

export const MergeElement = ({value, setValue}) => <input
    className={styles.element}
    value={value}
    onChange={(e) => setValue(e.target.value.replace(/\D+/g, ''))}/>;
