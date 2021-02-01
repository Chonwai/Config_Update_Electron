import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfigService from '../../services/config';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Guest() {
    const classes = useStyles();
    const [guest1, setGuest1] = useState('');
    const [guest2, setGuest2] = useState('');
    const [guest3, setGuest3] = useState('');
    const [guest4, setGuest4] = useState('');
    const [guest5, setGuest5] = useState('');
    useEffect(() => {
        // Update the document title using the browser API
        let config = ConfigService.loadConfig();
        console.log(config);
        setGuest1(config.TEST.GUEST1);
        setGuest2(config.TEST.GUEST2);
        setGuest3(config.TEST.GUEST3);
        setGuest4(config.TEST.GUEST4);
        setGuest5(config.TEST.GUEST5);
    }, []);
    const handleReset = () => {
        setGuest1('');
        setGuest2('');
        setGuest3('');
        setGuest4('');
        setGuest5('');
    };
    const handleUpdate = () => {
        console.log(guest1, guest2, guest3, guest4, guest5);
    };
    return (
        <main>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST1</p>
                <TextField
                    label="GUEST1"
                    value={guest1}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGuest1(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST2</p>
                <TextField
                    label="GUEST2"
                    value={guest2}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGuest2(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST3</p>
                <TextField
                    label="GUEST3"
                    value={guest3}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGuest3(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST4</p>
                <TextField
                    label="GUEST4"
                    value={guest4}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGuest4(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST4</p>
                <TextField
                    label="GUEST5"
                    value={guest5}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGuest5(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center justify-end mb-4">
                <Button
                    className={classes.menuButton}
                    variant="contained"
                    color="primary"
                    onClick={handleUpdate}
                >
                    Update
                </Button>
                <Button
                    className={classes.menuButton}
                    variant="contained"
                    color="secondary"
                    onClick={handleReset}
                >
                    Reset
                </Button>
                <Link to="/">
                    <Button variant="contained">Cancel</Button>
                </Link>
            </div>
        </main>
    );
}

export default Guest;
