import { SearchOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import './searcher.scss'


const Searcher = () => {
    const { handlerChange, searcher  } = useCartContext()
    return (
        <div>
            <div className="searcher-container">
                <SearchOutlined className='search-component'/>
                <input
                    type="search"
                    placeholder=" Buscar"
                    value={searcher}
                    onChange={handlerChange}
                />
            </div>            
            
        </div>
    );
};

export default Searcher;