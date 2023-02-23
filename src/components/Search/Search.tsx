import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import './Search.css';

interface ISubmitState {
    search: string;
}

const Search: FC = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, reset} = useForm<ISubmitState>();
    const submit: SubmitHandler<ISubmitState> = (val) => {
        localStorage.setItem('keywords', val.search);
        navigate('/search-movies');
        reset();
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