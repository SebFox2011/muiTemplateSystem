import React from 'react'
import { withStyles } from "@material-ui/core";

const SideMenu = ({classes}) => {
    return (
        <div className={classes.sideMenu}>

        </div>
    )
}

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '50px',
        height: '100%',
        backgroundColor: '#253053'
    }
}
export default withStyles(style)(SideMenu);
