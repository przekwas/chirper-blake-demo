import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface IAdminChirpsProps extends RouteComponentProps<{ id: string }> { }

export interface IAdminChirpsState {
    chirp: { user: string, content: null }
}

class AdminChirps extends React.Component<IAdminChirpsProps, IAdminChirpsState> {
    constructor(props: IAdminChirpsProps) {
        super(props);
        this.state = {
            chirp: {
                user: null,
                content: null
            }
        };

        this.handleDelete = this.handleDelete.bind(this);

    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        try {
            let r = await fetch(`/api/chirps/${id}`);
            let chirp = await r.json();
            this.setState({ chirp });
        } catch (e) {
            console.log(e);
        }
    }

    async handleDelete() {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: "DELETE"
            });
            this.props.history.push('/');
        } catch(e) {
            console.log(e);
        }
    }

    render() {

        const { user, content } = this.state.chirp;

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card my-2 border border-dark rounded shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">{user} chirped:</h4>
                            <p className="card-text">{content}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button className="btn btn-info">Save Edit</button>
                                <button onClick={this.handleDelete} className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminChirps;