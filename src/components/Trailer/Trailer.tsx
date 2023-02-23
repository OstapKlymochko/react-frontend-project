import {FC} from 'react';

interface IProps {
    trailer: string;
    id: number;
}

const Trailer: FC<IProps> = ({trailer, id}) => {
    return (
        <iframe title={'trailer'}
                key={id}
                width={800}
                height={500}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                src={`http://www.youtube-nocookie.com/embed/${trailer}`}>
        </iframe>
    );
};

export {Trailer};