import React, { Component } from 'react';
import './games-page.css';
import { GamesModel } from '../../models/games';
import { GameCard } from '../game-card/game-card';

interface GamesState {
    games: GamesModel[]
    category: string;
}

export class Games extends Component<any, GamesState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            games: [],
            category: ''
        }
    }

    componentDidMount = () => {
        const categoryGame = this.props.match.params.category;
        this.setState({ category: categoryGame });
        fetch('http://localhost:3000/api/games/' + categoryGame)
            .then(res => res.json())
            .then(games => this.setState({ games }))
            .catch(err => alert(err.message));
    }
    componentDidUpdate = () => {
        const categoryGame = this.props.match.params.category;
        if (categoryGame !== this.state.category) {
            this.componentDidMount();
        }

    }
    public render(): JSX.Element {
        return (
            <div className='games container row' style={{ height: 100 + '%' }}>
                {this.state.games.map(g =>
                    <GameCard teamA={g.teamA} teamB={g.teamB} time={g.time}
                        scoreA={g.scoreA} scoreB={g.scoreB} key={g.id} id={g.id} />
                )}
            </div>
        );
    }
}