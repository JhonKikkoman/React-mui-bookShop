/** @format */

import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';

interface propT {
  handleCart: () => void;
  orderLen: number;
}

function Header(props: propT) {
  const { handleCart, orderLen } = props;
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component='span'
          sx={{ flexGrow: 1, '&:hover': { cursor: 'pointer' } }}
        >
          MUI SHOP
        </Typography>
        <IconButton color='inherit' size='large' onClick={handleCart}>
          <Badge
            color='secondary'
            badgeContent={orderLen}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          >
            <ShoppingCart sx={{ '&:hover': { color: '#3ea842' } }} />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
