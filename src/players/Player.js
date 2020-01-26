import React, {Component} from 'react';
import axios from "axios";
import {
    withRouter
} from 'react-router-dom'

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {player: null};
    }

    componentDidMount() {
        axios.get('http://localhost:3000/players/' + this.props.match.params.id)
            .then(response => {
                this.setState({player: response.data});
            })
            .catch((error) => {
                this.props.history.push('/')
            })
    }

    render() {
        const {player} = this.state;
        return (
            player && <div>
                <h1>  {player.firstname + " " + player.lastname}</h1>
                <span>rank : <strong>{player.data.rank}</strong></span>

            </div>
        );
    }
}

export default withRouter(Player);
