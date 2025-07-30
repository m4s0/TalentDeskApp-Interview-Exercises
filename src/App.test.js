import React from 'react';
import App from './App';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';

afterEach(cleanup);

describe('App Component', () => {
    it('renders without crashing', () => {
        const {unmount} = render(<App/>);
        unmount();
    });
});
