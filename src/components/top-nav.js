import React from 'react';
import {connect} from 'react-redux';
import {newGame, toggleInfoModal} from '../actions/actions';

export function TopNav(props){

    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={() => props.dispatch(toggleInfoModal())} >
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={() => props.dispatch(newGame())} >
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default connect()(TopNav);