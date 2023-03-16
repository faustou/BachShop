import { RocketOutlined } from '@ant-design/icons';
import './freeShipping.scss'
import React from 'react';

const FreeShipping = () => {
    return (
        <div className='free-shipping'>
            <RocketOutlined style={{ fontSize: '20px'}} />
            <p>Pedido mínimo $2.000 || Envíos GRATIS en CABA y GBA en compras superiores a $6.000</p>
        </div>
    );
};

export default FreeShipping;