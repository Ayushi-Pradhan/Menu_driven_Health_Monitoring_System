import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },

})

export default function Cancer({ }) {

  const classes = useStyles()

  const [, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <a href='http://127.0.0.1:5050/' target="_Blank" style={{ textDecoration: 'none' }}>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}
          sx={{
            ':hover': {
              backgroundColor: '#67EEF5',
              color: 'white',
            },

            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            width: 200,
            height: 100,
            backgroundColor: '#5399dd',
            color: '#000',
            border: 'solid #1569bb 10px'
          }}>
          Breast Cancer <img src="breast-cancer-icon-29.jpg" height="30px" />
        </Button>
      </a>
      { }

    </div>
  );
}