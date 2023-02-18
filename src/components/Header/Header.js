import React from 'react';

import css from './Header.module.css';
import {useTheme} from "../../hooks/useTheme";

const Header = () => {
    useTheme();
    return (
        <div className={css.header}>
            <div className={css.logo}></div>
            <div className={css.links}>

            </div>
            <div className={css.themesSwitcher}>
                {/*<ToggleButton value={} />*/}
            </div>
            <div className={css.search}></div>
            <div className={css.user}></div>
        </div>
    );
};

export {Header};