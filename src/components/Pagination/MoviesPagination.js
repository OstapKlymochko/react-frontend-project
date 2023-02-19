import React from 'react';
import {Pagination} from "react-bootstrap";

const MoviesPagination = ({page}) => {
    // console.log(1786 - page);
    const items = [];
    if (+page <= 490) {
        for (let i = +page; i < +page + 10; i++) {
            items.push(<Pagination.Item active={+page === i} href={`movies?page=${i}`}>{i}</Pagination.Item>)
        }
        items.push(<Pagination.Ellipsis/>)
    } else {
        const end = 500 - page;
        for (let i = 1; i < 10 - end; ++i) {
            items.push(<Pagination.Item href={`movies?page=${+page-i}`}>{+page-i}</Pagination.Item>)
        }
        items.push(<Pagination.Item active href={`movies?page=${+page}`}>{+page}</Pagination.Item>)
        for (let i = 1; i <= end; ++i) {
            items.push(<Pagination.Item active={+page === end - i}
                                        href={`movies?page=${+page + i}`}>{+page + i}</Pagination.Item>)
        }
    }
    return (
        <Pagination>
            {/*<Pagination.First />*/}
            <Pagination.Prev disabled={page === '1'} href={`movies?page=${+page - 1}`}/>
            {items}
            <Pagination.Next disabled={page === '500'} href={`movies?page=${+page + 1}`}/>
            {/*<Pagination.Last />*/}
        </Pagination>
    );
};

export {MoviesPagination};