import React from 'react';
import {connect} from 'react-redux';
import {makeGuess} from '../actions/actions';

export function GuessForm(props) {
    let userInput;

    function submitGuess(event) {
        event.preventDefault();
        const value = userInput.value;
        props.dispatch(makeGuess(value));
    }

    return (
        <form onSubmit={e => submitGuess(e)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required
                ref={input => userInput = input} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );

};

export default connect()(GuessForm);
// high order component