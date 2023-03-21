import { React, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getItem } from "../../services/LocalStorageFuncs";
import { HeaderArea } from "./Styles";

export const Header = () => {
    let cartNumber = getItem('carrinhoSP');
    useEffect(()=>{
        cartNumber = getItem('carrinhoSP');
    }, [cartNumber.length])

    return (
        <HeaderArea>
            <Link to={'/'}>Store</Link>
            <Link to={'/cart'}>Cart<span>{cartNumber.length}</span></Link>
        </HeaderArea>
    )
}