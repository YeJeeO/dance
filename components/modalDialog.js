import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Присоединяйтесь к нам!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Танцуйте с нами</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Оставьте Ваш номер телефона и мы обязательно свяжемся с вами! 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ваш номер телефона"
            type="phone"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Как к Вам обращаться?"
            type="full_name"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Не хочу</Button>
          <Button onClick={handleClose}>Позвоните мне</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}