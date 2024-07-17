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

function Basket(prop: any) {
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
            {order.map((el: any) => (
              <BasketItem key={el.name} removeOrder={removeFromOrder} {...el} />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: '800' }}>
                Общая стоимость:{' '}
                {order.reduce((acc: number, item: any) => {
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
