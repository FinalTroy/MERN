import React, { Component, ChangeEvent } from 'react';
import axios from 'axios';

interface IState {
    username: string
}
export default class CreateUser extends Component<{}, IState> {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            username: '',
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                    />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}