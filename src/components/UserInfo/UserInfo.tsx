import {FC} from 'react';

import css from './UserInfo.module.css';

const UserInfo: FC = () => {
    return (
        <>
            <div className={css.photo}><span>O</span></div>
        </>
    );
};

export {UserInfo};