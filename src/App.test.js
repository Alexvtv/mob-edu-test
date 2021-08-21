import {render, fireEvent} from '@testing-library/react';

import {App} from './components';

describe('click test', () => {
    const actions = (container) => {
        const [firstValue, secondValue] = [0, 1].map(id => container.getElementsByClassName('element')[id]);
        fireEvent.change(firstValue, {target: {value: '1'}});
        fireEvent.change(secondValue, {target: {value: '2'}});
        fireEvent.click(container.getElementsByClassName('button')[0]);
    }

    test('check result', () => {
        const {container} = render(<App/>);
        actions(container);
        expect(container.getElementsByClassName('result')[0]).toHaveTextContent('3');
    });

    test('popup is hidden', () => {
        const {container} = render(<App/>);
        actions(container);
        fireEvent.click(container.getElementsByClassName('overflow')[0]);
        expect(container.getElementsByClassName('result').length).toBe(0);
    });

});
