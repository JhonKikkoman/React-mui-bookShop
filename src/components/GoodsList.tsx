/** @format */

import { Grid } from '@mui/material';
import GoodsItem from './GoodsItem';
import { goodsT } from '../data/goods';
import { goodsItemT } from './App';

interface propT {
  goods: goodsT[];
  setOrder: (value: goodsItemT) => void;
}

const GoodsList = (props: propT) => {
  const { goods, setOrder } = props;

  return (
    <Grid container spacing={2}>
      {goods.map((item: goodsT) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};

export default GoodsList;
