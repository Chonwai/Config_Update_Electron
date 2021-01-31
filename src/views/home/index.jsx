import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <main>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST1</p>
                <TextField
                    required
                    id="outlined-required"
                    label="GUEST1"
                    defaultValue="Jack"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST2</p>
                <TextField
                    required
                    id="outlined-required"
                    label="GUEST2"
                    defaultValue="Rose"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST3</p>
                <TextField
                    required
                    id="outlined-required"
                    label="GUEST3"
                    defaultValue="Lisa"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST4</p>
                <TextField
                    required
                    id="outlined-required"
                    label="GUEST4"
                    defaultValue="Lewis"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="flex flex-row items-center mb-4">
                <p className="mr-4 w-20">GUEST4</p>
                <TextField
                    required
                    id="outlined-required"
                    label="GUEST5"
                    defaultValue="Martin"
                    variant="outlined"
                    size="small"
                />
            </div>
            <div className="flex flex-row items-center justify-end mb-4">
                <Button className={classes.menuButton} variant="contained" color="primary">
                    Update
                </Button>
                <Button className={classes.menuButton} variant="contained" color="secondary">
                    Reset
                </Button>
                <Button variant="contained">Cancel</Button>
            </div>
        </main>
    );
}

export default Home;
