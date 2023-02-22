import React from 'react';
import {Pagination} from "react-bootstrap";
import shortid from "shortid";

const MoviesPagination = ({page, setQuery, pagesCount = 500}) => {
    const items = [];
    const changePage = (num) => {
        setQuery({page: num});
        window.scrollTo({
            top: 300,
            behavior: "smooth"
        })
    }
    const show = pagesCount >= 10 ? 10 : pagesCount;
    if (+page <= Math.abs(pagesCount - show)) {
        items.push(<Pagination.Item key={shortid.generate()} active>{+page}</Pagination.Item>)
        for (let i = +page + 1; i < +page + show; i++) {
            items.push(<Pagination.Item key={shortid.generate()} onClick={() => changePage(i)}>{i}</Pagination.Item>)
        }
        items.push(<Pagination.Ellipsis key={shortid.generate()}/>)
    } else if (+page > pagesCount) {
        return (
            <Pagination>
                <Pagination.Prev key={shortid.generate()} disabled={+page <= 1} onClick={() => changePage(+page - 1)}/>
                <Pagination.Next key={shortid.generate()} disabled={+page >= pagesCount}/>
            </Pagination>
        )
    } else {
        const curr = pagesCount - page;

        for (let i = show - curr - 1; i >= 1; --i) {
            items.push(<Pagination.Item key={shortid.generate()} onClick={() => changePage(+page - i)}>{+page - i}</Pagination.Item>);
        }

        items.push(<Pagination.Item key={shortid.generate()} active>{+page}</Pagination.Item>);

        for (let i = +page + 1; i <= pagesCount; ++i) {
            items.push(<Pagination.Item key={shortid.generate()} onClick={() => changePage(i)}>{i}</Pagination.Item>);
        }
    }
    return (
        <Pagination>
            <Pagination.Prev key={shortid.generate()} disabled={page === '1'} onClick={() => changePage(+page - 1)}/>
            {items}
            <Pagination.Next key={shortid.generate()} disabled={page === pagesCount.toString()} onClick={() => changePage(+page + 1)}/>
        </Pagination>
    );
};

export {MoviesPagination};