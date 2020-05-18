import React from 'react';
import { 
    Container,
    Box,
    makeStyles,
    Typography,
    withStyles,
    Grid,
    Button
} from '@material-ui/core';

const GridButton = row => {
    const {
        data={},
        openCustomerModal,
        setCustomerData
    } = row;

    const onClick = () => {
        // console.log(row)
        setCustomerData(data);
        openCustomerModal();
    }
    React.useLayoutEffect = React.useEffect 
    // const [a, a] = React.useState(false);

    return (<React.Fragment>
        <Button onClick={onClick} variant="contained">Edit</Button>
    </React.Fragment>)
}

export default GridButton;