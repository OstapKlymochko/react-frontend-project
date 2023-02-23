import {FC} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

import {useTheme} from "../../hooks";
import {Sun} from "../Sun/Sun";
import {Moon} from "../Moon/Moon";
import {Search} from "../Search/Search";
import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css';

const Header: FC = () => {
    let {theme, setTheme} = useTheme();
    const variant = theme === 'light' ? "secondary" : "light";
    const navigate = useNavigate();
    return (
        <div className={css.header}>
            <div className={css.logo}>
                <span className={css.logo_text} onClick={() => navigate('movies?page=1')}
                >Some Awesome Logo</span>
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