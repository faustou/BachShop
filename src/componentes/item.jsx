import React from 'react';
import { Link } from 'react-router-dom';
import './item.scss';

const Item = ({ product }) => {
    return (
            <div className="item">
                <img src={product.img} width="300px" alt={product.title} className='imgProduct' />
                <img src={product.imgGroup} className='imgGroup' />
                <article className="info">
                    <h2>{product.title}</h2>
                    <div className="info-price col">
                        <h5>${product.price}</h5>
                        <Link to={`/detail/${product.id}`} >
                            <button className="btn-5"><span> DETALLE </span></button>
                        </Link>
                    </div>
                </article>
            </div>
    );
};

export default Item;