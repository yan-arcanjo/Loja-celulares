import { React, useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import { getItem, setItem } from "../services/LocalStorageFuncs";
import { Link } from "react-router-dom";
import { SmartphoneList,SmartphoneItem,Title, Body } from "./Styles";
import { Header } from "../components/Header/Header";

export const Store = () => {

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLB/search?q=celular')
            .then(response => response.json())
            .then(data => setDatas(data.results))
    }, [])

    const [cart, setCart] = useState(getItem('carrinhoSP') || []);
    const handleClick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if(element) {
            const arrFilter = cart.filter((e) => e.id != obj.id)
            setCart(arrFilter)
            setItem('carrinhoSP', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('carrinhoSP', [...cart, obj])
        }
    }

    return (
        <Body>
            <Header />
            <Title>Store</Title>
            <SmartphoneList>
            {
                datas.map((data) => {
                    return(
                        <SmartphoneItem key={data.id}>
                            <h4>{data.title}</h4>
                            <img src={data.thumbnail} alt={data.title} />
                            <h4>{`R$ ${data.price}`}</h4>
                            <button className={cart.some((itemCart) => itemCart.id === data.id) ? ('marked') : ('notMarked') }
                                onClick={() => handleClick(data)}>
                                {
                                    cart.some((itemCart) => itemCart.id === data.id) ? (
                                        <BsFillCartCheckFill /> 
                                    ) : (
                                        <BsFillCartPlusFill />
                                    )    
                                }
                            </button>
                        </SmartphoneItem>
                    )
                })
            }
            </SmartphoneList>
        </Body>
    )    
}