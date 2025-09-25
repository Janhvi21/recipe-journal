import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const pages = ['Ingredients', 'Recipes', 'Products'];

function Navbar() {// with require
        const navigate = useNavigate();
        const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
                setAnchorElNav(event.currentTarget);
        };

        const handleCloseNavMenu = (page: String) => {
                setAnchorElNav(null);
                console.log("Page is", page);
                if (page) {
                        navigate(`/${page.toLowerCase()}`);
                }
        };

        return (
                <AppBar position="static" color="inherit">
                        <Container maxWidth="xl">
                                <Toolbar disableGutters>
                                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} onClick={() => handleCloseNavMenu('home')}>
                                                <img src={logo} className="App-logo" />
                                        </Box>
                                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                                <IconButton
                                                        size="large"
                                                        aria-label="Menu dropdown"
                                                        aria-controls="menu-appbar"
                                                        aria-haspopup="true"
                                                        onClick={handleOpenNavMenu}
                                                        color="primary"
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
                                                        onClick={() => handleCloseNavMenu('')}
                                                        sx={{ display: { xs: 'block', md: 'none' } }}
                                                >
                                                        {pages.map((page) => (
                                                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                                                        <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                                                </MenuItem>
                                                        ))}
                                                </Menu>
                                        </Box>
                                        <Box sx={{
                                                display: { xs: 'flex', md: 'none' },
                                                flexGrow: 1,
                                        }
                                        }
                                                onClick={() => handleCloseNavMenu('home')}>
                                                <img src={logo} className="App-logo" />
                                        </Box>

                                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                                {pages.map((page) => (
                                                        <Button
                                                                key={page}
                                                                onClick={() => handleCloseNavMenu(page)}
                                                                sx={{ my: 2, color: 'black', display: 'block' }}
                                                        >
                                                                {page}
                                                        </Button>
                                                ))}
                                        </Box>
                                </Toolbar>
                        </Container>
                </AppBar >
        )
}

export default Navbar
