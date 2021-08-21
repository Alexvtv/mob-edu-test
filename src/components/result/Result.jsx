import React from 'react';

import styles from './result.module.css';

export const Result = ({result, visible, setVisible}) => <>
    {visible && (<>
        <div className={styles.result}>
            {result}
        </div>
        <div className={styles.overflow} onClick={() => setVisible(false)}/>
    </>)}
</>;

