import React from 'react';
import {Pagination} from "react-bootstrap";

const MoviesPagination = ({page, setQuery}) => {
    // console.log(1786 - page);
    const items = [];
    const changePage = (num)=>{
        setQuery({page:num});
        window.scrollTo({
            top:700,
            behavior:"smooth"
        })
    }
// debugger;
    if (+page <= 490) {
        for (let i = +page; i < +page + 10; i++) {
            items.push(<Pagination.Item key={i} active={+page === i} onClick={() => changePage(i)}>{i}</Pagination.Item>)
        }
        items.push(<Pagination.Ellipsis key={0}/>)
    } else if (+page > 500) {
        return (
            <Pagination>
                <Pagination.Prev key={-1} disabled={+page <= 1} onClick={() => changePage(+page-1)}/>
                <Pagination.Next key={-2} disabled={+page >= 500}/>
            </Pagination>
        )
    } else {
        const end = 500 - page;
        for (let i = 1; i < 10 - end; ++i) {
            items.push(<Pagination.Item key={i} onClick={() => changePage(+page-i)}>{+page - i}</Pagination.Item>)
        }
        items.push(<Pagination.Item key={end} active>{+page}</Pagination.Item>)
        for (let i = 1; i <= end; ++i) {
            items.push(<Pagination.Item key={i} active={+page === end - i}
                                        onClick={() => changePage(+page+i)}>{+page + i}</Pagination.Item>)
        }
    }
    return (
        <Pagination>
            {/*<Pagination.First />*/}
            <Pagination.Prev key={-1} disabled={page === '1'} onClick={() => changePage(+page-1)}/>
            {items}
            <Pagination.Next key={-2} disabled={page === '500'} onClick={() => changePage(+page+1)}/>
            {/*<Pagination.Last />*/}
        </Pagination>
    );
};

export {MoviesPagination};