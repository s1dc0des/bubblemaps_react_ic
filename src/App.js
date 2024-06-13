import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Verified from '@mui/icons-material/Verified';

function App() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div className="mdc-typography bubblemaps-mdc">
      <div className="theme-background-overlay">Bubblemaps
        <header className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="/sol/" className="router-link-active router-link-exact-active mdc-top-app-bar__logo-container" aria-current="page">
                <img src="/img/bubblemaps.51902376.svg" alt="Bubblemaps Logo" className="mdc-top-app-bar__logo"/>
              </a>
              <Select value={selectedValue} onChange={handleChange} className='mySelect'>SOL
                <MenuItem value={'option1'}>SOL</MenuItem>
                <MenuItem value={'option2'}>ETH</MenuItem>
                <MenuItem value={'option3'}>BTC</MenuItem>
              </Select>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              <Stack direction="row" spacing={3}>
                <Verified>add_circle</Verified>
                <span style={{ display: 'flex', alignItems: 'center', marginLeft: "5px"}}>Listed Tokens</span>
              </Stack>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              <Button variant="contained">Login</Button>
            </section>
          </div>
        </header>
        <div className='page-container-with-footer'>
          <div className="mdc-layout-grid">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </div>
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">Two</div>
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">Three</div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
