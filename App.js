import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import 'fontsource-roboto';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Rendering from "./Rendering";

//Comments: TodoList with Fetch, useEffect, useState, Bootstrap, Material-UI and Accordion.
//Comments: Working, 06.03.21

export default function App() {

    const [todos, setTodos] = useState([]);

    const [get10Notes, setGet10Notes] = useState(false);
    const [getAllNotes, setGetAllNotes] = useState(false);

    const useStyles = makeStyles((theme) => ({            // use styles from material-UI for foundation, button
        root: {
            flexGrow: 1,
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
            backgroundColor: "#bbdefb",
            borderRadius: 5,
            // paddingRight: 30,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    const classes = useStyles();

    useEffect(() => {                                          // If we click on one OR another button, clean list
        setTodos([]);
    }, [get10Notes, getAllNotes])


    function getFirstTenNotes() {                                    // Get first 10 notes from the DB
        setGet10Notes(!get10Notes);
        if (get10Notes) {
            // setGetAllNotes(false);                                  //it seems not necessary. See later
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => [...json].slice(0, 10))
                .then(json => setTodos([...todos, ...json]))
        }
    }

    function getAll() {                                              // Get ALL notes from the DB
        setGetAllNotes(!getAllNotes)
        if (getAllNotes) {
            // setGet10Notes(false);                                   //it seems not necessary. See later
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => setTodos([...todos, ...json]))
        }
    }

    function doneButtonClick(id) {                                     // Done-Undone function
        const newList = todos.map(el =>
            el.id === id ? {...el, completed: !el.completed} : el)
        setTodos(newList)
    }

    function deleteButtonClick(title) {                                  // Delete function
      let newList = todos.filter(el => el.title !== title)
      setTodos(newList)
    }


    return (
        <div className="container m-4">
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <h2> Todo List </h2>
                            <h5> Fetch, useEffect, useState, Bootstrap, Material-UI, Accordion </h5>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Button onClick={getFirstTenNotes} variant="contained" startIcon={<CloudUploadIcon />} color="primary">
                                Get only first 10 Records
                            </Button>
                            {/*<button onClick={getFirstTenNotes}> Get only first 10 Notes </button>*/}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Button onClick={getAll} variant="contained" startIcon={<CloudUploadIcon />} color="primary">
                                Get ALL Records
                            </Button>
                            {/*<button onClick={getAll}> Get all Notes from DB </button><br/>*/}
                        </Paper>
                    </Grid>
                    {todos.length !== 0 ?
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <p><em> *** Click on Record in order to change the status *** </em></p>
                                <Rendering todos={todos} doneButtonClick={doneButtonClick} deleteButtonClick={deleteButtonClick}/>
                            </Paper>
                        </Grid>
                        : <></>
                    }
                </Grid>
            </div>
        </div>
    )
}

