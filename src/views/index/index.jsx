import React from 'react';
import { Link } from 'react-router-dom';
import { HomeTwoTone, PeopleTwoTone, ImageTwoTone, PlayArrowTwoTone, VideoCallTwoTone } from '@material-ui/icons';

function Index() {
    const launchVideo = () => {
        let command = '';
        if (window.navigator.platform === 'Win32') {
            command = "cd ..\\ & cd engine & .\\run_video.bat";
        } else {
            command = "cd ../; cd engine; ./run_video.bat";
        }
        window.child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
    const launch = () => {
        let command = '';
        if (window.navigator.platform === 'Win32') {
            command = "cd ..\\ & cd engine & .\\run.bat";
        } else {
            command = "cd ../; cd engine; ./run.bat";
        }
        window.child_process.exec(command, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }
    return (
        <div className="flex flex-wrap">
            <Link className="p-8 w-1/4 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/">
                <HomeTwoTone color="primary" style={{ fontSize: 60 }} />
                <p className="text-center">Home</p>
            </Link>
            <Link className="p-8 w-1/4 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/guest">
                <PeopleTwoTone color="primary" style={{ fontSize: 60 }} />
                <p className="text-center">Guest</p>
            </Link>
            <Link className="p-8 w-1/4 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" to="/guest">
                <ImageTwoTone color="primary" style={{ fontSize: 60 }} />
                <p className="text-center">Icon</p>
            </Link>
            <Link className="p-8 w-1/4 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" onClick={launch} >
                <PlayArrowTwoTone color="primary" style={{ fontSize: 60 }} />
                <p className="text-center">Launch</p>
            </Link>
            <Link className="p-8 w-1/4 flex flex-col justify-center items-center duration-300 transform-gpu ease-in-out hover:scale-110" onClick={launchVideo}>
                <VideoCallTwoTone color="primary" style={{ fontSize: 60 }} />
                <p className="text-center">Launch with Video</p>
            </Link>
        </div>
    );
}

export default Index;
