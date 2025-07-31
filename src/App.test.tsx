import React from 'react';
import App from './App';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('App Component', () => {
    it('renders without crashing', () => {
        const {unmount} = render(<App/>);
        unmount();
    });

    it('renders input field and submit button', () => {
        render(<App/>);

        expect(screen.getByLabelText(/enter numbers/i)).toBeInTheDocument();
        expect(screen.getByRole('button', {name: /calculate/i})).toBeInTheDocument();
    });

    it('shows error for invalid input', async () => {
        render(<App/>);

        const input = screen.getByLabelText(/enter numbers/i);
        userEvent.type(input, '1, 2, invalid');
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getByText(/Invalid input: Please enter only numbers/i)).toBeInTheDocument();
    });

    it('displays results for valid input', async () => {
        render(<App/>);

        const input = screen.getByLabelText(/enter numbers/i);
        userEvent.type(input, '1,2,3');
        fireEvent.submit(screen.getByRole('form'));

        expect(screen.getByText('Sum Detector')).toBeInTheDocument();
    });

    it('clears error and results when input changes', async () => {
        render(<App/>);

        const input = screen.getByLabelText(/enter numbers/i);

        // First trigger an error
        userEvent.type(input, '1, 2, invalid');
        fireEvent.submit(screen.getByRole('form'));
        expect(screen.getByText(/invalid input/i)).toBeInTheDocument();

        // Then change input
        userEvent.clear(input);
        userEvent.type(input, '1');

        // Error should be cleared
        expect(screen.queryByText(/invalid input/i)).not.toBeInTheDocument();
    });

    it('accepts both comma and space separated numbers', async () => {
        render(<App/>);

        const input = screen.getByLabelText(/enter numbers/i);

        // Test comma separated
        userEvent.type(input, '1,2,3');
        fireEvent.submit(screen.getByRole('form'));
        expect(screen.queryByText(/invalid input/i)).not.toBeInTheDocument();

        // Clear and test space separated
        userEvent.clear(input);
        userEvent.type(input, '1 2 3');
        fireEvent.submit(screen.getByRole('form'));
        expect(screen.queryByText(/invalid input/i)).not.toBeInTheDocument();
    });
});
