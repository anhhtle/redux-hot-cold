import React from 'react';
import {connect} from 'react-redux';

export function GuessList(props) {

    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

const map = state => ({
    guesses: state.guesses
})

export default connect(map)(GuessList);