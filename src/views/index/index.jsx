import React from 'react';
import { Link } from 'react-router-dom';
import { Home, People, Image } from '@material-ui/icons';

function Index() {
    return (
        <div className="flex flex-wrap">
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center" to="/">
                <Home color="primary" style={{ fontSize: 60 }} />
                <p>Home</p>
            </Link>
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center" to="/guest">
                <People color="primary" style={{ fontSize: 60 }} />
                <p>Guest</p>
            </Link>
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center" to="/guest">
                <Image color="primary" style={{ fontSize: 60 }} />
                <p>Icon</p>
            </Link>
        </div>
    );
}

export default Index;
