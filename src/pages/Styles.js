import styled from "styled-components";

export const Title = styled.h1`
    padding: 2rem;
`
export const Body = styled.div`
    text-align: center;
    h3{
        margin-bottom: 2rem;
    }
`

export const SmartphoneItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 2rem;
    padding: 1.5rem;
    line-height: 1.5rem;
    border: 0.5px solid black;
    font-size: 0.9rem;

    h4, img, button{
        padding: 1.2rem;
    }

    img{
        width: 8rem;
    }

    button {
        width: 100%;
        border: none;
        cursor: pointer;
        font-size: 1.3rem;
        color: crimson;
    }

    .marked{
        background-color: #22ee22;
    }

    .marked:hover{
        background-color: red;
    }

    .notMarked:hover{
        background-color: #22ee22;
    }
`

export const SmartphoneList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 3rem;
    row-gap: 3rem;
    padding: 0 8rem;
`

export const LoginSection = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LoginInputs = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 500px;
        height: 500px;
        background: crimson;
        font-size: 0.7rem;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        padding: 2rem;

        h1{
            text-align: center;
            margin-bottom: 2rem;
            font-size: 0.9rem;
        }
`
export const Input = styled.input`
    margin: 0.5rem 0;
    border: none;
    width: 15rem;
    height: 2.5rem;
    padding: 1rem;
    color: white;
    background-color: rgba(10,23,55,0.5);
`

export const Button = styled.button`
    background-color: blueviolet;
    width: 15rem;
    padding: 1rem;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
`