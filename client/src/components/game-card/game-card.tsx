import React from 'react';
import './game-card.css';
import { NavLink } from 'react-router-dom';

export const GameCard = (props: any) => {
    return (
        <div className='gamecard col-3'>
            <h2 style={{color: '#2E6171'}}>{props.teamA} Vs {props.teamB}</h2>
            <h2 style={{color: '#CCC9DC'}}>{props.scoreA} : {props.scoreB}</h2>
            <h2 style={{color : '#1B2A41'}}>Time : {props.time}</h2>
            <NavLink to={`/games-by-id/${props.id}`}>Comments</NavLink>
        </div>
    );
}