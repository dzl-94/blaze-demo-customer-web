import React from 'react';
import { 
    Container,
    Box,
    makeStyles,
    Typography,
    withStyles,
    Grid,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Modal,
    IconButton,
    TextField
} from '@material-ui/core';
import {
    getCustomersAPI,
    createCustomersAPI,
    editCustomerAPI,
    deleteCustomerAPI
} from '../api/customers-api';

const CustomerModal = props => {
    const {
        open=false,
        data={},
        setData,
        handleClose,
        refreshData,
        title=""
    } = props;
    
    const handleSubmitButton = () => {
        if (data.id){
            editCustomerAPI(data.id,data).then(res=>{
                refreshData();
                handleClose();
            });
        }else{
            createCustomersAPI(data).then(res=>{
                refreshData();
                handleClose();
            })
        }
    }

    const handleCancelButton = () => {
        handleClose();
    }

    console.log(data);
    return (<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth={'md'}
      >
        <DialogTitle id="activityDescription">
            {title}
        </DialogTitle>
        <DialogContent dividers className="ModalContent dialog-content">
            <Grid container justify="center" spacing={2}>
                <Grid item md={6}>
                    <TextField
                        label="First Name"
                        fullWidth
                        margin="normal"
                        inputProps={{
                        maxLength: 50,
                        }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={e => {
                            const value = e.target ? e.target.value : null;
                            setData({
                                ...data,
                                firstName: value
                            });
                        }}
                        variant="outlined"
                        value={data.firstName}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="Last Name"
                        fullWidth
                        margin="normal"
                        inputProps={{
                        maxLength: 50,
                        }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={e => {
                            const value = e.target ? e.target.value : null;
                            setData({
                                ...data,
                                lastName: value
                            });
                        }}
                        variant="outlined"
                        value={data.lastName}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="Phone"
                        fullWidth
                        margin="normal"
                        inputProps={{
                        maxLength: 50,
                        }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={e => {
                            const value = e.target ? e.target.value : null;
                            setData({
                                ...data,
                                phoneNumber: value
                            });
                        }}
                        variant="outlined"
                        value={data.phoneNumber}
                    />
                </Grid>
                <Grid item md={6}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        inputProps={{
                        maxLength: 50,
                        }}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={e => {
                            const value = e.target ? e.target.value : null;
                            setData({
                                ...data,
                                email: value
                            });
                        }}
                        variant="outlined"
                        value={data.email}
                    />
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={handleCancelButton}
                color="secondary"
                variant="contained"
                disableElevation
                autoFocus
                >
                Cancel
            </Button>
            <Button
                onClick={handleSubmitButton}
                color="primary"
                variant="contained"
                disableElevation
                autoFocus
                >
                Save
            </Button>
        </DialogActions>
    </Dialog>)
}

export default CustomerModal;