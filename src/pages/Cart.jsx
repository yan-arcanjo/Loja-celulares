import { React, useState } from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs'
import { BsFillCartDashFill } from 'react-icons/bs';
import { SmartphoneList, Title } from './Styles';
import { Link } from 'react-router-dom';
import { SmartphoneItem, Body } from './Styles';
import { Header } from '../components/Header/Header';

export const Cart = () => {
    const [data, setData] = useState( getItem('carrinhoSP') || []);

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id);
        setData(arrFilter);
        setItem('carrinhoSP', arrFilter);
    }

    const subTotal = data.reduce((acc, cur) => acc + cur.price ,0)

    return(
        <Body>
            <Header />
            <Title>Cart</Title>
            <h3>{`SubTotal: R$ ${subTotal}`}</h3>
        <SmartphoneList>
            {
                data.map((e)=>{
                    return(
                        <SmartphoneItem key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>{`R$ ${e.price}`}</h4>
                            <button onClick={() => removeItem(e)}>
                                <BsFillCartDashFill/>
                            </button>
                        </SmartphoneItem>
                    )
                })
            }
        </SmartphoneList>
        </Body>
    )
}