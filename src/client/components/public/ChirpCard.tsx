import * as React from 'react';

import { Link } from 'react-router-dom';

export interface ChirpCardProps {
    chirp: { id: string, user: string, content: string }
}

const ChirpCard: React.SFC<ChirpCardProps> = (props) => {
    const { id, user, content } = props.chirp;
    return (
        <div className="col-md-12">
            <div className="card my-2 border border-dark rounded shadow-lg">
                <div className="card-body">
                    <h4 className="card-title">{user} chirped:</h4>
                    <p className="card-text">{content}</p>
                    <Link to={`/admin/${id}`} className="btn btn-primary">Admin Options</Link>
                </div>
            </div>
        </div>
    );
}

export default ChirpCard;