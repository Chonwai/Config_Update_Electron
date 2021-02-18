import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "start",
    },
}));

function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className="px-4">
                    <Typography variant="h6" className={classes.title}>
                        Chips Counting Dashboard
                    </Typography>
                    {/* <Button color="inherit" endIcon={<LockOpenIcon />}>
                        Auth
                    </Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
