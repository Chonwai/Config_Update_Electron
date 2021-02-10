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
    const [GUEST1, setGUEST1] = useState('');
    const [GUEST2, setGUEST2] = useState('');
    const [GUEST3, setGUEST3] = useState('');
    const [GUEST4, setGUEST4] = useState('');
    const [GUEST5, setGUEST5] = useState('');
    useEffect(() => {
        // Update the document title using the browser API
        let res = ConfigService.getTESTSection();
        setGUEST1(res.GUEST1);
        setGUEST2(res.GUEST2);
        setGUEST3(res.GUEST3);
        setGUEST4(res.GUEST4);
        setGUEST5(res.GUEST5);
    }, []);
    const handleReset = () => {
        let res = ConfigService.getTESTSection();
        setGUEST1(res.GUEST1);
        setGUEST2(res.GUEST2);
        setGUEST3(res.GUEST3);
        setGUEST4(res.GUEST4);
        setGUEST5(res.GUEST5);
        alert("Reseted!");
    };
    const handleUpdate = () => {
        let data = {
            GUEST1: GUEST1,
            GUEST2: GUEST2,
            GUEST3: GUEST3,
            GUEST4: GUEST4,
            GUEST5: GUEST5
        }
        ConfigService.updateTESTSection(data);
    };
    return (
        <main>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST1</p>
                <TextField
                    label="GUEST1"
                    value={GUEST1}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGUEST1(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST2</p>
                <TextField
                    label="GUEST2"
                    value={GUEST2}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGUEST2(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST3</p>
                <TextField
                    label="GUEST3"
                    value={GUEST3}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGUEST3(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST4</p>
                <TextField
                    label="GUEST4"
                    value={GUEST4}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGUEST4(e.target.value);
                    }}
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST5</p>
                <TextField
                    label="GUEST5"
                    value={GUEST5}
                    variant="outlined"
                    size="small"
                    onChange={e => {
                        setGUEST5(e.target.value);
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
