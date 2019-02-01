import * as React from 'react';
import ChirpCard from './ChirpCard';

export interface IAllChirpsProps {

}

export interface IAllChirpsState {
    chirps: { id: string, user: string, content: string }[];
}

class IAllChirps extends React.Component<IAllChirpsProps, IAllChirpsState> {
    constructor(props: IAllChirpsProps) {
        super(props);
        this.state = { chirps: [] };
    }

    async componentDidMount() {
        try {
            let r = await fetch('/api/chirps');
            let data = await r.json();
            let chirps = Object.keys(data).map(key => {
                return {
                    id: key,
                    user: data[key].user,
                    content: data[key].content
                }
            });
            chirps.pop();
            chirps.reverse();
            this.setState({ chirps });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
                <div className="row my-3">
                    {this.state.chirps.map(chirp => {
                        return <ChirpCard key={chirp.id} chirp={chirp} />
                    })}
                </div>
        );
    }
}

export default IAllChirps;