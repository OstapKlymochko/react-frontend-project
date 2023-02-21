import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useTheme} from "../../hooks/useTheme";
import {Sun} from "../Sun/Sun";
import {Moon} from "../Moon/Moon";
import {UserInfo} from "../UserInfo/UserInfo";
import {Search} from "../Search/Search";

const Header = () => {
    let {theme, setTheme} = useTheme();
    const variant = theme === 'light' ? "secondary" : "light";
    const navigate = useNavigate();
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span className={css.logo_text} onClick={() => navigate('movies?page=1')}>Some Awesome Logo</span>
            </div>
            <div className={css.themesSwitcher}>
                <ButtonGroup>
                    <Button value={theme} variant={variant} onClick={() => setTheme('light')}><Sun/></Button>
                    <Button value={theme} variant={variant} onClick={() => setTheme('dark')}><Moon/></Button>
                </ButtonGroup>
            </div>
            <div className={css.search}>
                <Search/>
            </div>
            <div className={css.user}>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};