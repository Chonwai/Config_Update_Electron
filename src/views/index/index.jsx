import React from 'react';
import { Link } from 'react-router-dom';
import { Home, People, Image } from '@material-ui/icons';

function Index() {
    return (
        <div className="flex flex-wrap">
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/">
                <Home color="primary" style={{ fontSize: 60 }} />
                <p>Home</p>
            </Link>
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/guest">
                <People color="primary" style={{ fontSize: 60 }} />
                <p>Guest</p>
            </Link>
            <Link className="p-8 w-1/5 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/guest">
                <Image color="primary" style={{ fontSize: 60 }} />
                <p>Icon</p>
            </Link>
        </div>
    );
}

export default Index;
