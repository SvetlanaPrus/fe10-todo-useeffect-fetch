import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ModalWindowDelete from "./ModalWindowDelete";

export default function AccordionWindow(props) {

    const {el,doneButtonClick,deleteButtonClick} = props;

    //Styles:
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        button: {
            margin: theme.spacing(2),
        },
    }));
    const classes = useStyles();

    //Modal Window:
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <li className={el.completed? "done" : "not-done"}> {el.title} </li>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Button onClick={() => doneButtonClick(el.id)} variant="contained" color="primary" startIcon={<DoneIcon />}>
                            Done / Undone
                        </Button>
                        {/*<Button onClick={() => deleteButtonClick(el.title)} variant="contained" color="secondary">*/}

                        <Button onClick={handleClickOpen} variant="contained" color="secondary" startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <ModalWindowDelete el={el} open={open} setOpen={setOpen} deleteButtonClick={deleteButtonClick}/>
        </div>
    )
}