import React, {ChangeEvent, FormEvent, useState} from 'react';
import {calculateResult} from './utils';
import './App.css';

type AppState = {
    value: string;
    userInput: number[];
    result: any;
    error: string;
}

const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        value: '',
        userInput: [],
        result: '',
        error: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const {value} = event.target;
        setState(prevState => ({...prevState, value}));
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const {input, result, error} = calculateResult(state.value);
        setState(prevState => ({
            ...prevState,
            userInput: input,
            result,
            error: error || ''
        }));
    };

    const {value, result, error} = state;

    return (
        <div className="App">
            <form className="App-form" onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={handleChange}/>
                <button type="submit">Calculate</button>
                {!error && (
                    <p>
                        <span>Result for input '{value}' is '{JSON.stringify(result, null, 2)}'</span>
                    </p>
                )}
                {error && (
                    <p className="App-error">
                        {error}
                    </p>
                )}
            </form>
        </div>
    );
};

export default App;
