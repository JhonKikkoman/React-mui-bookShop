/** @format */

import { Alert, Snackbar } from '@mui/material';

interface propT {
  isOpen: boolean;
  handleClose: (value: React.SetStateAction<boolean>) => void;
}

function Snack(prop: propT) {
  const { isOpen, handleClose } = prop;
  return (
    <Snackbar open={isOpen} onClose={() => handleClose} autoHideDuration={4000}>
      <Alert severity='success'>Товар добавлен в корзину!</Alert>
    </Snackbar>
  );
}

export default Snack;
