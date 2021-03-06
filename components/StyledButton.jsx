import React from 'react';
import Button from '@material-ui/core/Button';
import {createStyles, makeStyles} from "@material-ui/core";
import green from '@material-ui/core/colors/green';
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      position: 'relative',
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

const StyledButton = ({loading, children, ...props}) => {
  const classes = useStyles();
  return(
    <FormControl margin={"dense"}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button {...props}>
            {children}
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    </FormControl>

  );
};

export default StyledButton;