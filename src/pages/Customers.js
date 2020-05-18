import React from 'react';
import { 
    Container,
    Box,
    makeStyles,
    Typography,
    withStyles,
    Grid,
    Button,
    TextField,
    Modal
} from '@material-ui/core';
import { AgGridReact } from 'ag-grid-react';
import {
    getCustomersAPI,
    createCustomersAPI,
    editCustomerAPI,
    deleteCustomerAPI
} from '../api/customers-api';
import GridButton from '../components/GridButton'
import CustomerModal from '../components/CustomerModal'

const Customers = props => {
    const [page, setPage] = React.useState(0);
    const [size, setSize] = React.useState(10);
    const [rowData, setRowData] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [customerData, setCustomerData] = React.useState({});
    React.useLayoutEffect = React.useEffect;
    React.useEffect(() => {
        getCustomers();
    }, [rowData === []]);

    const openCustomerModal = () => {
        setOpenModal(true);
    }

    const closeCustomerModal = () => {
        setOpenModal(false);
    }

    const getCustomers = () => {
        getCustomersAPI().then(res => {
            const {data = []} = res;
            setRowData(data);
        });
    }

    const openNewComponentModal = () => {
        setCustomerData({});
        openCustomerModal();
    }

    const frameworkComponents = {
        gridBtn: GridButton
      };

    const defaultColDef = {
        sortable: true,
        filter: true
    }

    const columnDefs = [
        {headerName: "First name", field: "firstName"},
        {headerName: "Last name", field: "lastName"},
        {headerName: "Email", field: "email"},
        {headerName: "Phone Number", field: "phoneNumber"},
        // {headerName: "Actions" ,field: "buttons", cellRendererFramework: GridButton}
        {headerName: "Actions" ,field: "buttons", cellRenderer: 'gridBtn', cellRendererParams:{setCustomerData,openCustomerModal}}
        // {headerName: "Actions" ,field: "buttons", cellRenderer: GridButton, cellRendererParams: {
        //     prop1: "this is prop1"
        // }}
    ];
    // if (rowData.length===0){
        
    // }
    return(
        <Container maxWidth="md">
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Customers
                </Typography>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <Grid container>
                            <Grid item md={12}>
                                <Box align="right">
                                    <Button
                                        onClick={openNewComponentModal}
                                        color="primary"
                                        variant="contained"
                                        disableElevation
                                        autoFocus
                                        >
                                        Add Customer
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12} style={{height: '750px'}}>
                        <div
                            className="ag-theme-balham"
                            style={{
                            height: '100%',
                            width: '100%',
                            }}
                        >
                            <AgGridReact
                                columnDefs={columnDefs}
                                defaultColDef={defaultColDef}
                                rowData={rowData}
                                pagination={true}
                                paginationAutoPageSize={true}
                                // paginationPageSize={size}
                                frameworkComponents={frameworkComponents}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <CustomerModal
                open={openModal}
                data={customerData}
                setData={setCustomerData}
                handleClose={closeCustomerModal}
                title={"Customer"}
                refreshData={getCustomers}
            />
        </Container>
    );
}

export default Customers;