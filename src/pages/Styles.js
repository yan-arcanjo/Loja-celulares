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