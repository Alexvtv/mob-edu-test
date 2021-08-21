import React, {useState} from 'react';

import {Result, MergeElement} from '../';

import styles from './app.module.css';

export const App = () => {
    const [visible, setVisible] = useState(false);
    const [values, setValues] = useState(['', '']);
    const [result, setResult] = useState([]);

    const showResult = () => {
        //Если значения инпутов не пустые, показываем обновленный результат, очищаем инпуты
        if (values.every(value => value !== '')) {
            setVisible(true);
            setResult(prev => [...prev, Number(values[0]) + Number(values[1])]);
            setValues(['', '']);
        }
    };

    return (
        <div className={styles.app}>
            <Result
                result={result.join(', ')}
                visible={visible}
                setVisible={setVisible}/>
            <div className={styles.elements}>
                {[0, 1].map((id => <MergeElement
                    value={values[id]}
                    setValue={(value) => setValues(prev => prev.map((e, i) => i === id ? value : e))}
                    key={id}/>))}
            </div>
            <button className={styles.button} onClick={showResult}>Выполнить</button>
        </div>
    );
};
