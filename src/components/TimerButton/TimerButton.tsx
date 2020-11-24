import React from 'react'
import { Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';



type Props = {
    buttonAction: () => void;
    buttonValue: String;
    isOn: boolean;
}
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const TimerButton: React.FC<Props> = ({ buttonAction, buttonValue, isOn }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} onClick={buttonAction}>
            {buttonValue === "start" ?
                <Button variant="contained" color="primary" >

                    {isOn ?
                        "PAUSE"
                        :
                        "START"
                    }
                </Button> :
                <Button variant="contained" color="primary">
                    RESET
              </Button>
            }
        </div>
    )
}

export default TimerButton