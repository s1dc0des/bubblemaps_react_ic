import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function App() {

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <header className="mdc-top-app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="/sol/" className="router-link-active router-link-exact-active mdc-top-app-bar__logo-container" aria-current="page">
            <img src="/img/bubblemaps.51902376.svg" alt="Bubblemaps Logo" className="mdc-top-app-bar__logo"/>
          </a>
        <Select value={selectedValue} onChange={handleChange} className='mySelect'>
        <MenuItem value={'option1'}>SOL</MenuItem>
        <MenuItem value={'option2'}>ETH</MenuItem>
        <MenuItem value={'option3'}>BTC</MenuItem>
        </Select>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <div className="mdc-text-field mdc-text-field--outlined mdc-text-field--with-leading-icon">
            <i className="material-icons mdc-text-field__icon" tabindex="0" aria-hidden="true">search</i>
            <input type="text" id="search-field" className="mdc-text-field__input" />
            <div className="mdc-notched-outline">
              <div className="mdc-notched-outline__leading"></div>
              <div className="mdc-notched-outline__notch">
                <label for="search-field" className="mdc-floating-label">Search</label>
              </div>
              <div className="mdc-notched-outline__trailing"></div>
            </div>
          </div>
          <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label="Login">login</button>
        </section>
      </div>
    </header>
  );
}

export default App;
