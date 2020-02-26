import React, { Component, ChangeEvent } from 'react';
import './game-page.css';
import { GamesModel } from '../../models/games';
import { CommentsModel } from '../../models/comments';

interface GameState {
    game: GamesModel[]
    comments: CommentsModel[]
    newComment: CommentsModel

}
export class GamePage extends Component<any, GameState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            game: [],
            comments: [],
            newComment: new CommentsModel()
        }
    }
    componentDidMount = () => {
        const id = +this.props.match.params.id;
        fetch('http://localhost:3000/api/games-by-id/' + id)
            .then(res => res.json())
            .then(game => this.setState({ game }))
            .catch(err => alert(err.message));
        //-------------------
        fetch('http://localhost:3000/api/comments-by-id/' + id)
            .then(res => res.json())
            .then(comments => this.setState({ comments }))
            .catch(err => alert(err.message));
    }

    private updateComment = (args: ChangeEvent<HTMLTextAreaElement>) => {
        const comment = args.target.value;
        const myComment = { ...this.state.newComment };
        myComment.gameID = +this.props.match.params.id;
        myComment.comment = comment;
        this.setState({ newComment: myComment });
    }
    private sendComment = () => {
        const comment = { ...this.state.newComment };
        const commentLength = comment.comment;

        if (!commentLength) {
            alert('enter valid comment');
            return;
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state.newComment)
        };
        fetch("http://localhost:3000/api/comment", options)
            .then(res => res.json())
            .then(image => {
                alert("Comment added !");
                this.componentDidMount();
            })
            .catch(err => alert(err.message));
    }

    public render(): JSX.Element {
        return (
            <div className='gamepage'>
                {this.state.game.map(g =>
                    <div key={g.id}>
                        <h1 style={{ color: '#324A5F' }}>{g.teamA} Vs {g.teamB}</h1>
                        <h2 style={{ color: 'white' }}>{g.scoreA} : {g.scoreB}</h2>
                        <h3 style={{ color: '#324A5F' }}>{g.time}</h3>
                    </div>
                )}
                <hr />
                <div className='row container-fluid' style={{ background: '#1B998B' }}>
                    <h1 className='col-12' style={{ color: 'white' }}>Comments :</h1>
                    {this.state.comments.map(c =>
                        <div className='comment' key={c.id}>
                            <h3>{c.comment}</h3>
                            <p>{c.time}</p>
                        </div>
                    )}
                </div>
                <hr />
                <h2>Add Comment :</h2>
                <form>
                    <textarea style={{ width: 400 + 'px', height: 100 + 'px' }} onChange={this.updateComment} />
                    <br />
                    <button type='button' onClick={this.sendComment}>Send</button>
                </form>
            </div>
        );
    }
}