import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ModalWindowDelete(props){

    const {el, open, setOpen,deleteButtonClick} = props;

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" color="#f50057">{""}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <hr/>
                        Confirming this action you allow the system to delete this record from the Database.
                        Notice that it will be removed permanently. Delete?
                        <br/>
                        <br/>
                        - {el.title} -
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button onClick={() => deleteButtonClick(el.title)} color="secondary" autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}