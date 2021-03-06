import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  }
}));

export default ({children, ...rest}) => {
  const classes = useStyles();
  return <Paper classes={classes} {...rest}>{children}</Paper>
}