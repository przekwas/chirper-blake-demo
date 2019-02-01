import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IAddChirpProps extends RouteComponentProps { }

export interface IAddChirpState {
    user: string;
    content: string;
}

class AddChirp extends React.Component<IAddChirpProps, IAddChirpState> {
    constructor(props: IAddChirpProps) {
        super(props);
        this.state = {
            user: null,
            content: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await fetch('/api/chirps', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace('/');
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.handleSubmit} className="form-group p-3 my-4 shadow-lg bg-white border border-primary rounded">
                        <label>User:</label>
                        <input
                            type="text"
                            className="form-control p-1 my-2"
                            value={this.state.user}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ user: e.target.value })} />
                        <label>Content:</label>
                        <input
                            type="text"
                            className="form-control p-1 my-2"
                            value={this.state.content}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ content: e.target.value })} />
                        <button className="btn btn-primary btn-lg shadow mt-2">Post!</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddChirp;