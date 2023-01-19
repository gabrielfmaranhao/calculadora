import styled from "styled-components";
import { IInputStyle } from "../../interfaces";

export const InputStyle = styled.input`
    background: var(--white);
    border: ${({border_color}:IInputStyle) => `1px solid var(--${border_color})`};
    color: var(--black);
    border-radius: 4px;
    height: 2rem;
    outline: none;
    padding-left: 15px;
    width: 93%;
    :focus {
        border: 1px solid var(--blue-2);
    }
`