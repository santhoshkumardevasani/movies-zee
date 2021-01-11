import { Button, makeStyles,withStyles, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React , { Component } from 'react';

import { connect } from 'react-redux';
import { saveMovieEvent,fectchMoviesEvent } from '../actions/movieActions';

class ActionsBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            "movieSearchValue":"",
            "id": 1,
            "Title": "",
            "US_Gross": 0,
            "Worldwide_Gross": 0,
            "Distributor": "",
            "Creative_Type": "",
            "Major_Genre": "",
            "Release_Date": new Date(),
            "open":false
        }
    }

    searchMovies = (searchValue) => {
        setMovieSearchValue(searchValue);
        this.setState({
            "movieSearchValue" : searchValue
        })
    }
    handleSubmit = (e)  => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        
        this.props.saveMovie(requestOptions);
        this.setState({
            "open":false
        });
        this.props.fectchMovies();
    }
    addMovieHandler = () => {      
        this.setState({"open":true});

    };
    editMovieHandler = () =>{
        this.setState({"open":true});
    }
    deleteMovieHandler = () =>{

    }

    handleClose = ()  => {
        this.setState({"open":false});
    };
    render(){
        return(
            <div>
            <div style={{display:"flex",justifyContent:'space-around'}}>
            <Button variant="contained" color="primary" onClick={this.addMovieHandler}>
                Add Movie
            </Button>
            <Button variant="contained" color="primary" onClick={this.editMovieHandler}>
                Edit Movie
            </Button>
            <Button variant="contained" color="primary" onClick={this.deleteMovieHandler}>
                Delete Movie
            </Button>
            <TextField
                label="Search Movies"
                variant="outlined"
                onChange={(e) => this.searchMovies(e.target.value)}
            />
            </div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Movie</DialogTitle>
                <DialogContent>
                    <div>
                        <TextField
                            variant="outlined"
                            label="Title"
                            fullWidth
                            onChange={(e) => this.setState({"Title":e.target.value})}
                        />
                        <TextField
                            type="number"
                            required
                            variant="outlined"
                            InputProps={{
                                inputProps: {
                                    max: 10000000, min: 0
                                }
                            }}
                            label="US Gross"
                            fullWidth
                            onChange={(e) => this.setState({"US_Gross":e.target.value})}
                        />
                        <TextField
                        required
                            type="number"
                            variant="outlined"
                            InputProps={{
                                inputProps: {
                                    max: 10000000, min: 0
                                }
                            }}
                            label="Worldwide Gross"
                            fullWidth
                            onChange={(e) => this.setState({"Worldwide_Gross":e.target.value})}
                        />
                        <TextField
                            // type="number"
                            required
                            variant="outlined"
                            label="Distributor"
                            fullWidth
                            onChange={(e) => this.setState({"Distributor":e.target.value})}
                        />
                        <TextField
                            // type="number"
                            required
                            variant="outlined"
                            label="Creative Type"
                            fullWidth
                            onChange={(e) => this.setState({"Creative_Type":e.target.value})}
                        />
                        <TextField
                            // type="number"
                            required
                            variant="outlined"
                            label="Major Genre"
                            fullWidth
                            onChange={(e) => this.setState({"Major_Genre":e.target.value})}
                        />
                        <TextField
                            fullWidth
                            id="date"
                            label="Release Date"
                            type="date"
                            // defaultValue="2017-05-24"
                            //  className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => this.setState({"Release_Date":e.target.value})}
                            required
                        />


                    </div>


                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={this.handleSubmit} color="primary">
                        Save
          </Button>
                    <Button variant="contained" onClick={this.handleClose} color="primary">
                        Cancel
          </Button>
                </DialogActions>
            </Dialog>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovie: (value) => dispatch(saveMovieEvent(value)),
        fectchMovies: () => dispatch(fectchMoviesEvent())
    }
}
export default connect(null,mapDispatchToProps)(ActionsBar);