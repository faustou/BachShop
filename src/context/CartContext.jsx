import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}
    
export const CartContextProvider = ({children})=> {
    const [cartList, setCartList] = useState([])
    const addCart = ( item ) => {
        //condition to accumulate items
        const sameProduct = cartList.findIndex(product => product.id === item.id)
        if(sameProduct!==-1){
            cartList[sameProduct].cantidad += item.cantidad
            setCartList([...cartList])
            return
        }
        setCartList([
            ...cartList,
            item
        ])
        setThereProduct(true)
    }

    const [searcher, setBusqueda] = useState("");
    const handlerChange= e=>{
        setBusqueda(e.target.value);
        filterSearch(e.target.value)
    }
    const [items, setItems] = useState([]);
    const [SearchItems, setSearchItems] = useState([]);
    const filterSearch=(termSearch) =>{
        const resultSearch=SearchItems.filter((e) =>{
            if(e.name?.toLowerCase().includes(termSearch.toLowerCase())
            ){
                return e;
            }
        });
        setItems(resultSearch);
    }


    const totalAmount = () => cartList.reduce( (count, product) => count += product.cantidad, 0)
    const totalPrice = () => cartList.reduce( (count, item) => count += (item.cantidad*item.price), 0)
    const emptyCart = () => {
        setCartList([])
    }

    const deleteItem = (id) => setCartList(cartList.filter(prod => prod.id !== id))

    const [thereProduct, setThereProduct] = useState(false);
    return (

        <CartContext.Provider value={{
            cartList,
            thereProduct,
            searcher,
            items,
            setSearchItems,
            setItems,
            addCart,
            deleteItem,
            emptyCart,
            totalAmount,
            totalPrice,
            handlerChange
        }}>
            {children}
        </CartContext.Provider>
    )
 }
