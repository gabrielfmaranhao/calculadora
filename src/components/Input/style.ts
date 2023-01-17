import styled from "styled-components";
import { IInputStyle } from "../../interfaces";

export const InputStyle = styled.input`
    background: var(--white);
    border-radius: 4px;
    border: ${({border_color}:IInputStyle) => `1px solid var(--${border_color})`};
    min-width: 12.5rem;
    padding: 5px 10px;
    color: var(--black);
    height: 2rem;
    outline: none;
    width: 80%;
    :focus {
        border: 1px solid var(--blue-2);
    }
`