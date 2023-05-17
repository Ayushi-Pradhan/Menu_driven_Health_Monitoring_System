import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },


  dialogPaper: {

    height: '400px'
  }
})

export default function Heart({
}) //column name

{

  const [, setOpen] = React.useState(false);

  const classes = useStyles()                         //creating style object

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <a href='http://127.0.0.1:5049/' target="_Blank" style={{ textDecoration: 'none' }}>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}
          sx={{
            ':hover': {
              backgroundColor: '#67EEF5',
              color: 'white',
            },

            alignItems: 'center',
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            marginTop: 5,
            width: 200,
            height: 100,
            backgroundColor: '#5399dd',
            color: '#000',
            border: 'solid #1569bb 10px'
          }}>
          HEART DISEASE <img src="heart.png" height="30px" />
        </Button>
      </a>
      { }
    </div>
  );
}