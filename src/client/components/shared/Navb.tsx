import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavBProps { }

const NavB: React.SFC<NavBProps> = () => {
    return (
        <nav className="nav bg-dark text-white">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/new" className="nav-link">New Chirp</Link>
        </nav>
    );
}

export default NavB;