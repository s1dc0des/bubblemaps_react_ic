import React from 'react';
import "./index.css";
import { config } from "./config";

const Token = ({ token }) => {
    // token.address = "ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82";
    // token.name = "BOOK OF MEME";
    // token.rank = 1;
    // token.img = "https://storage.googleapis.com/public-bubblemaps/app/tokens-images/4646d854-5bd5-4634-91af-0edcb239390d";
    return (
        <div className="token-button-container home-section__list-token">
            <a href="/sol/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82" className="token-button">
                <span className="token-button__rank --1">1</span>
                <img alt="" src="https://storage.googleapis.com/public-bubblemaps/app/tokens-images/4646d854-5bd5-4634-91af-0edcb239390d" className="token-button__image"/>
                <span className="token-button__text token-button__text--with-rank">BOOK OF MEME</span>
            </a>
            <div className="token-button__links">
                <a href="https://deca.art/darkfarms1" target="_blank" rel="noreferrer">
                    <style>{`
                            .token-button__links a:first-child {
                                width: 30px !important;
                                margin-right: 5px !important;
                            }
                    `}</style>
                    <svg viewBox="0 0 24 24">
                        <path d={ config.pathD }></path>
                    </svg>
                </a>
                <a href="https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82" target="_blank" rel="noreferrer">
                    <style>{`
                            .token-button__links a:last-child {
                                width: 30px !important;
                                margin-left: 5px !important;
                            }
                    `}</style>
                    <svg viewBox="0 0 525.916 525.916">
                        <path fill-rule="evenodd" clip-rule="evenodd" d={ config.pathSolScan1 }></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d={ config.pathSolScan2 }></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Token;