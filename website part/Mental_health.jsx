import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },

})


export default function Mental_health({ }) {

  const classes = useStyles()

  const [, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };



  return (
    <div>
      <a href='http://127.0.0.1:5052/' target="_Blank" style={{ textDecoration: 'none' }}>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}
          sx={{
            ':hover': {
              backgroundColor: '#67EEF5',
              color: 'white',
            },

            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            marginTop: 5,
            width: 200,
            height: 100,
            backgroundColor: '#7cdf92;',
            color: '#000',
            border: 'solid #5ebb76 10px'
          }}>
          mental health <img src="mental_health.png" height="40px" />
        </Button>
      </a>
      { }
    </div>
  );
}