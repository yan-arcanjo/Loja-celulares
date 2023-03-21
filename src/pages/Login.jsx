import React, { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { setItem, getItem } from "../services/LocalStorageFuncs";
import { LoginSection, LoginInputs, Input, Button } from "./Styles";

export const Login = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    
    const cond = (name.length > 3 && pass.length > 5);  

    let navigate = useNavigate();

    const saveUser = () => {
        setItem('usuario', {name, pass})
        navigate("/store")
    }

    return (
        <LoginSection>
            <LoginInputs>
                <h1>Faça seu Login agora</h1>
                <Input
                    placeholder="Username"
                    type="text" 
                    onChange={(event)=> setName(event.target.value)}
                />
                <Input 
                    placeholder="Password"
                    type="password"
                    onChange={(event)=> setPass(event.target.value)} 
                />

                <br />

                <Button
                    onClick = {saveUser}
                    type="button"
                    disabled = {!cond}
                >
                    LOGIN</Button>
            </LoginInputs>    
        </LoginSection>
    )
}