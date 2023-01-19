import styled from "styled-components";

interface IButtonStyles {
    background: string
    color: string
}

export const ButtonStyle = styled.button`
    background: ${({background}:IButtonStyles) => `var(--${background})`};
    border-radius: 4px;
    color: ${({color}:IButtonStyles) => `var(--${color})`};
    height: 2.6rem;
    width: 100%;
    border: none;
    padding: 0 11px;
`