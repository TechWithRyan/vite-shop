import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';



const users = [
  'Signup', 'Login'
];

const pages = ['Home', 'Store', 'Contact', 'About'];

const cart = ['Cart'];

function index() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (

    <AppBar position="absolute" sx={{ background: '#0B4E79' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Good Gains
          </Typography>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                
              }}
              
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
            >
              {pages.map((page) => (
                <MenuItem key={page} 

                onClick={handleCloseNavMenu}
                sx={{ background: '#0B4E79' }}>
                  <Typography textAlign="center"
                  
                  noWrap
                  component="a"
                  href={`${page}`}
                  sx={{
                  mr: 1,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  textDecoration: 'none',

            }}
                  >
                  {page}</Typography>
                </MenuItem>
              ))}

            {users.map((page) => (

              <MenuItem key={page} onClick={handleCloseNavMenu}
              sx={{ background: '#0B4E79'}}
              >
                  <Typography textAlign="center"
                  
                  noWrap
                  component="a"
                  href={`${page}`}
                  sx={{
                  mr: 1,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  

            }}
                  >
                  {page}</Typography>
                </MenuItem>


            ))}

            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',

            }}
          >
            Good Gains
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component="a"
                href={`${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
        
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            {users.map((page) => (
              <Button
                key={page}
                component="a"
                href={`${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
            {}
            {cart.map((page) => (
              <Button
                key={page}
                component="a"
                href={`${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
          <ShoppingBagIcon>

                {page}
          </ShoppingBagIcon>
              </Button>
            ))}
         

        
            
  
        </Toolbar>
      </Container>
    </AppBar>

  );
}



export default index;