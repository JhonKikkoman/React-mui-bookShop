/** @format */

import { ShoppingCart } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from '@mui/material';
import BasketItem from './BasketItem';
import { itemT } from './App';

interface PropT {
  removeFromOrder: (value: string) => void;
  order: itemT[];
  cartOpen: boolean;
  closeCart: (value: React.SetStateAction<boolean>) => void;
}

function Basket(prop: PropT) {
  const { cartOpen, closeCart, order = [], removeFromOrder } = prop;
  return (
    <Drawer
      anchor='right'
      open={cartOpen}
      onClose={closeCart}
      transitionDuration={{ appear: 450, enter: 500, exit: 2 }}
    >
      <List sx={{ width: '320px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingCart />
          </ListItemIcon>
        </ListItem>
        <Divider>Корзина</Divider>
        {!order.length ? (
          <ListItem>Корзина пустая</ListItem>
        ) : (
          <>
            {order.map((el: itemT) => (
              <BasketItem key={el.name} removeOrder={removeFromOrder} {...el} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: '800' }}>
                Общая стоимость:{' '}
                {order.reduce((acc: number, item: itemT) => {
                  return acc + item.price * item.quantity;
                }, 0)}
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
}

export default Basket;
