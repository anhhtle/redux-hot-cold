import {
    NEW_GAME,
    MAKE_GUESS,
    TOGGLE_INFO_MODAL
} from '../actions/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
};

export default (state=initialState, action) => {
    if (action.type === NEW_GAME) {
        // question
        document.getElementById('userGuess').value = '';
        state = Object.assign({}, state, initialState);
        return state;
    }
    else if (action.type === MAKE_GUESS) {
        console.log('GUESS reducer running');
        const guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number'
            });

            return state;
        }

        const difference = Math.abs(guess - state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        state = Object.assign({}, state, {
            feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    else if (action.type === TOGGLE_INFO_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }
    return state;
};