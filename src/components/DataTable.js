import React from 'react';
import AgGridReact from 'ag-grid-react';
import { 
    Container,
    Box,
    makeStyles,
    Typography,
    withStyles 
} from '@material-ui/core';

const DataTable = props => {
    const {columnDefs,defaultColDef,rowData,size,frameworkComponents}=props;
    const [a,setA] = React.useState(false);
    return(
        <React.Fragment>
            <div
                className="ag-theme-balham"
                style={{
                height: '500px',
                width: '600px' }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={size}
                    frameworkComponents={frameworkComponents}
                />
            </div>
        </React.Fragment>
        
    );
}

export default DataTable;