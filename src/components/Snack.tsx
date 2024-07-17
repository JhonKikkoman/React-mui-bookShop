/** @format */

import { Alert, Snackbar } from '@mui/material';

function Snack(prop: any) {
  const { isOpen, handleClose } = prop;
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={4000}>
      <Alert severity='success'>Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
}

export default Snack;
