import React, { Component, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface IState {
    description: string;
    duration: number;
}

interface IProps {
    match: any;
}
export default class EditExercise extends Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = {
            description: '',
            duration: 0,
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    description: res.data.description,
                    duration: res.data.duration,
                })
            })
            .catch(err => console.log(err))
    }
    onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeDuration(e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            duration: Number(e.target.value)
        })
    }

    onSubmit(e: FormEvent) {
        e.preventDefault();

        const exercise = {
            description: this.state.description,
            duration: this.state.duration,
        }

        console.log(exercise)
        axios.post(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))

        window.location.href = '/'
    }

    render() {
        return (
            <div>
                <h3>Edit Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit" 
                            value="Edit Exercise Log" 
                            className="btn btn-primary"                             
                        />
                    </div>
                </form>
            </div>
        )
    }
}