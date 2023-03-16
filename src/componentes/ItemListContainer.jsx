import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ItemList from './itemList';
import { useParams } from 'react-router-dom';
import Loading from "./loading";
import { useCartContext } from "../context/CartContext";
import './itemListContainer.scss';


const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const {categoryName} = useParams()
    const { items, setItems, setSearchItems } = useCartContext()

    //itemlist
    useEffect(()=> {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        const queryFilter =  categoryName ? query(queryCollection, where('category', '==' ,categoryName || 'groupCategory', '==' ,categoryName))  : queryCollection ;

        getDocs(queryFilter)
        .then(respCollection => {
            setItems( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) )
            setSearchItems( respCollection.docs.map(prod => ({ id: prod.id, ...prod.data() })) )
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [categoryName])

    return(
        <>
            { loading ? <Loading />
            :
            <div className="container-items">
                <ItemList items={items} />
            </div>
            }
        </>
    );
}
export default ItemListContainer;