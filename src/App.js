import React, { useState } from 'react';
import logo from './logo.svg';
import './index.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import Verified from '@mui/icons-material/Verified';
import { EmojiEvents, WatchLater } from '@mui/icons-material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import { config } from './config.js';
import Token from './Token.js';

function App() {

  const [selectedValue, setSelectedValue] = useState('SOL');

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleClick = () => {
    console.info('You clicked the Chip.');
  }
  return (
    <div className="mdc-typography bubblemaps-mdc">
      <div className="theme-background-overlay">Bubblemaps
        <header className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="/sol/" className="router-link-active router-link-exact-active mdc-top-app-bar__logo-container" aria-current="page">
                <img src="/img/bubblemaps.51902376.svg" alt="Bubblemaps Logo" className="mdc-top-app-bar__logo"/>
              </a>
              <Select value={selectedValue} onChange={handleChange} className='select-chain'>SOL
                <MenuItem value={'SOL'}>SOL</MenuItem>
                <MenuItem value={'ETH'}>ETH</MenuItem>
                <MenuItem value={'BTC'}>BTC</MenuItem>
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
              {/* <Button variant="contained" style={{marginLeft: "10px"}}>Login</Button> */}
              <Chip label="LOG IN" onClick={handleClick} style={{backgroundColor: "#de219a", marginLeft: "10px", height: "80%"}}/>
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
                <Button variant="contained" style={{marginLeft: "20px"}}>Learn More</Button>
              </div>
              <div className='token-box-container'>
                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop token-box" style={{boxShadow: "rgba(24, 212, 160, 0.2) 0px 0px 24px", border: "1px solid rgba(24, 212, 160, 0.2)"}}>
                  <a href="/sol/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" className="token-box__router">
                    <img alt="" src="https://storage.googleapis.com/public-bubblemaps/app/tokens-images/26e40b83-37de-4b7f-9198-4047e1306d60" className="token-box__image" style={{width: "70px", height: "70px"}}/>
                    <span className="token-box__text" style={{color: "white"}}>Wormhole</span>
                  </a>
                  <div className="token-box__links">
                    <a href="https://wormhole.com/" target="_blank" rel="noreferrer" style={{width: "30px", marginRight: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 24 24">
                        <path d={config.pathD}>
                        </path>
                      </svg>
                    </a>

                    <a href="https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" target="_blank" rel="noreferrer" style={{width: "30px", marginLeft: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 525.916 525.916">
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan1}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan2}>
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop token-box" style={{boxShadow: "rgba(24, 212, 160, 0.2) 0px 0px 24px", border: "1px solid rgba(24, 212, 160, 0.2)", marginLeft: "20px"}}>
                  <a href="/sol/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" className="token-box__router">
                    <img alt="" src="https://storage.googleapis.com/public-bubblemaps/app/tokens-images/26e40b83-37de-4b7f-9198-4047e1306d60" className="token-box__image" style={{width: "70px", height: "70px"}}/>
                    <span className="token-box__text">Wormhole</span>
                  </a>
                  <div className="token-box__links">
                    <a href="https://wormhole.com/" target="_blank" rel="noreferrer" style={{width: "30px", marginRight: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 24 24">
                        <path d={config.pathD}>
                        </path>
                      </svg>
                    </a>

                    <a href="https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" target="_blank" rel="noreferrer" style={{width: "30px", marginLeft: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 525.916 525.916">
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan1}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan2}>
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop token-box" style={{boxShadow: "rgba(24, 212, 160, 0.2) 0px 0px 24px", border: "1px solid rgba(24, 212, 160, 0.2)", marginLeft: "20px"}}>
                  <a href="/sol/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" className="token-box__router">
                    <img alt="" src="https://storage.googleapis.com/public-bubblemaps/app/tokens-images/26e40b83-37de-4b7f-9198-4047e1306d60" className="token-box__image" style={{width: "70px", height: "70px"}}/>
                    <span className="token-box__text">Wormhole</span>
                  </a>
                  <div className="token-box__links">
                    <a href="https://wormhole.com/" target="_blank" rel="noreferrer" style={{width: "30px", marginRight: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 24 24">
                        <path d={config.pathD}>
                        </path>
                      </svg>
                    </a>

                    <a href="https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" target="_blank" rel="noreferrer" style={{width: "30px", marginLeft: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 525.916 525.916">
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan1}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan2}>
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-desktop token-box" style={{boxShadow: "rgba(24, 212, 160, 0.2) 0px 0px 24px", border: "1px solid rgba(24, 212, 160, 0.2)", marginLeft: "20px"}}>
                  <a href="/sol/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" className="token-box__router">
                    <img alt="" src="https://storage.googleapis.com/public-bubblemaps/app/tokens-images/26e40b83-37de-4b7f-9198-4047e1306d60" className="token-box__image" style={{width: "70px", height: "70px"}}/>
                    <span className="token-box__text">Wormhole</span>
                  </a>
                  <div className="token-box__links">
                    <a href="https://wormhole.com/" target="_blank" rel="noreferrer" style={{width: "30px", marginRight: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 24 24">
                        <path d={config.pathD}>
                        </path>
                      </svg>
                    </a>

                    <a href="https://solscan.io/token/85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ" target="_blank" rel="noreferrer" style={{width: "30px", marginLeft: "5px"}}>
                      {/* <h6>Wormhole</h6> */}
                      <svg viewBox="0 0 525.916 525.916">
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan1}></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d={config.pathSolScan2}>
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop home-section" >
                <div className="home-section__title" >
                  {/* <span className="material-icons" >emoji_events</span> */}
                  <EmojiEvents style={{color: "yellow"}}/>
                  Most Visited 
                </div>
                <Token />
              </div>

              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop home-section">
                <div className="home-section__title" >
                  {/* <span className="material-icons" >watch_later</span> Recently Listed  */}
                  <WatchLater style={{color: "blue"}}/>
                  Recently Listed
                </div>
                <Token />
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
