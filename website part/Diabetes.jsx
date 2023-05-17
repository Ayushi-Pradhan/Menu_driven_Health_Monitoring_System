import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },

})

export default function Diabetes({
}) {
  const [, setOpen] = React.useState(false);

  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <a href='http://127.0.0.1:5051/' target="_Blank" style={{ textDecoration: 'none' }}>
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
            backgroundColor: '#7cdf92;',
            color: '#000',
            border: 'solid #5ebb76 10px',
          }}>
          DIABETES <img src="diabetes.png" height="40px" />
        </Button>
      </a>
      { }
    </div>
  );
}