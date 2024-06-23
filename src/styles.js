import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";


export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TodoList = styled.div`
    background-color: white;
    padding: 1.875rem 1.25rem;
    border-radius: 0.625rem;
    width: 60%;
    height: auto;

    h1{ 
    display: flex;
    justify-content: center;
    margin-top: 0;
}

    ul {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
   
   
`

export const Input = styled.input`
    border-radius: 0.3125rem;
    border: 0.125rem solid rgba(209, 211, 212, 0.4);
    width: 65%;
    height: 2.5rem;
    outline: none;
    margin-right: 1rem;
`

export const Button = styled.button`
   background: #52a5ece6;
    width: 25%;
    height: 2.625rem;
    border-radius: 0.3125rem;
    border: none;
    color: white;
    cursor: pointer;

   &:hover{
    opacity: 0.8;
   }
   &:active {
    opacity: 0.6;
   }
`

export const ListItem = styled.div`
    width: 31.25rem;
    height: 3.75rem;
    background: ${props => props.isFinished ? '#2cb00fab' : '#e31717ba'};
    border-radius: 0.3125rem;
    box-shadow: 0.0625rem 0.25rem 0.625rem 0rem #00000033;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.875rem;
    padding: 0 0.625rem;
   
   li {
    list-style: none;
   }
   @media (max-width: 768px) {
        height: auto;
        padding: 1rem;
        width: 90%;
    }
   
`
export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`
export const Check = styled(FcCheckmark)`
    cursor: pointer;

`