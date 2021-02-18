import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ConfigService from '../../services/config';
import ImageUploader from 'react-images-upload';
import './index.css';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Icon() {
    const classes = useStyles();
    const [picture, setPicture] = useState([]);
    const onDrop = (picture) => {
        console.log(picture);
        setPicture(picture);
    }
    const handleReset = () => {
        alert('Reseted!');
    };
    const handleUpdate = () => {
        alert('Updated!');
    };
    return (
        <main>
            <p className="text-2xl font-bold mb-4">Icon Setting</p>
            <ImageUploader
                withIcon={true}
                withPreview={true}
                className="border-dashed border-2 rounded mb-4"
                buttonText='Choose Image'
                buttonStyles={{borderRadius: '4px'}}
                onChange={onDrop}
                imgExtension={['.jpg', '.gif', '.png']}
                maxFileSize={5242880}
                singleImage={true}
            />
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

export default Icon;
