import React, { Component } from 'react';
import './layout.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import { Home } from '../home/home';
import { Games } from '../games-page/games-page';
import { GamePage } from '../game-page/game-page';

export class Layout extends Component {
    public render(): JSX.Element {
        return (
            <div className='layout container-fluid'>
                <BrowserRouter>
                    <header>
                        <h1>Sport Games Website</h1>
                        <NavLink to='/home' exact>Home</NavLink>
                        <NavLink to='/games/football' exact>FootBall</NavLink>
                        <NavLink to='/games/basketball' exact>BasketBall</NavLink>
                    </header>   
                    <main>
                        <Switch>
                            <Route path='/home' component={Home} exact />
                            <Route path='/games/:category' component={Games} exact />
                            <Route path='/games-by-id/:id' component={GamePage} exact />
                            <Route path='/' component={Home} exact />
                        </Switch>
                    </main>
                </BrowserRouter>
            </div>
        );
    }
}