/** @format */

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { goodsT } from '../data/goods';
import { goodsItemT } from './App';

interface propT extends goodsT {
  setOrder: (value: goodsItemT) => void;
}

const GoodsItem = (props: propT) => {
  const { name, price, setOrder, poster } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card>
        <CardMedia
          image={poster}
          alt={name}
          title={name}
          component='img'
          height={160}
        />
        <CardContent>
          <Typography variant='h6' component='h3'>
            {name}
          </Typography>
          <Typography variant='body1'>Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant='contained'
            size='medium'
            sx={{ '&:hover': { background: '#3ea842' } }}
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
