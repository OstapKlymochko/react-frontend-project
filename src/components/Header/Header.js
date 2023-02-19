import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";

import css from './Header.module.css';
import {useTheme} from "../../hooks/useTheme";
import {Sun} from "../Sun/Sun";
import {Moon} from "../Moon/Moon";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    let {theme, setTheme} = useTheme();
    const variant = theme === 'light' ? "secondary": "light";

    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span className={css.logo_text}>Some Awesome Logo</span>
            </div>
            <div className={css.themesSwitcher}>
                <ButtonGroup>
                    <Button value={theme} variant={variant} onClick={()=> setTheme('light')}><Sun/></Button>
                    <Button value={theme} variant={variant} onClick={()=> setTheme('dark')}><Moon/></Button>
                </ButtonGroup>
            </div>
            <div className={css.search}>

            </div>
            <div className={css.user}>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};