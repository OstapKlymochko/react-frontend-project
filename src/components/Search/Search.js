import React from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

import './Search.css';

const Search = () => {
    const navigate = useNavigate();
    const {register, handleSubmit,} = useForm();
    const submit = (val) => {
        localStorage.setItem('keywords', val.search);
        navigate('/search-movies');
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className={'form'}>
                <input className="input" placeholder="Search..." required={true}
                       type="text" {...register('search')}/>
                <button className={'submit'}>Find</button>
            </div>
        </form>
    )
};

export {Search};