/** @format */

import { Grid } from '@mui/material';
import GoodsItem from './GoodsItem';

const GoodsList = (props: any) => {
  const { goods, setOrder } = props;

  return (
    <Grid container spacing={2}>
      {goods.map((item: any) => (
        <GoodsItem key={item.id} setOrder={setOrder} {...item} />
      ))}
    </Grid>
  );
};

export default GoodsList;
