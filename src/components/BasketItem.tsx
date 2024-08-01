/** @format */

import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';
import { itemT } from './App';

interface propT extends itemT {
  removeOrder: (value: string) => void;
}

const BasketItem = (props: propT) => {
  const { name, price, quantity, id, removeOrder } = props;
  return (
    <ListItem>
      <Typography variant='body1'>
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton onClick={() => removeOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
