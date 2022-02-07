import { LinearProgress, withStyles } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 8,
        borderRadius: 100
    },
    colorPrimary: {
        backgroundColor: `rgba(116, 180, 255, 0.1)`
    },
    bar: {
        borderRadius: 100,
        backgroundColor: `#74b4ff`
    }
}))(LinearProgress);

export default BorderLinearProgress;