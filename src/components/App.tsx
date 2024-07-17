/** @format */

import { useState } from 'react';

import Basket from './Basket';
import GoodsList from './GoodsList';
import Search from './Search';
import Snack from './Snack';

import { goods } from '../data/goods';
import Header from './Header';
import { Container } from '@mui/material';

const App = () => {
  const [order, setOrder] = useState([] as any);
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(goods);
  const [isCartOpen, setCart] = useState(false);
  const [isSnackOpen, setSnack] = useState(false);

  const handleChange = (e: any) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch('');
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem: any) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
      (item: any) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item: any) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }
    setSnack(true);
  };

  const removeFromOrder = (goodsItem: any) => {
    setOrder(order.filter((item: any) => item.id !== goodsItem));
  };

  const totalQuant = order.reduce((acc: number, item: any) => {
    return acc + item.quantity;
  }, 0);

  return (
    <>
      <Header handleCart={() => setCart(true)} orderLen={totalQuant} />
      <div className='App'>
        <Container sx={{ mt: '1rem' }}>
          <Search value={search} onChange={handleChange} />
          <GoodsList goods={products} setOrder={addToOrder} />
        </Container>
        <Basket
          removeFromOrder={removeFromOrder}
          order={order}
          cartOpen={isCartOpen}
          closeCart={() => setCart(false)}
        />
        <Snack isOpen={isSnackOpen} handleClose={() => setSnack(false)} />
      </div>
    </>
  );
};

export default App;
