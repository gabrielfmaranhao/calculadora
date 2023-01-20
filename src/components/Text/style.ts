import styled from "styled-components";
import { ITextStylesProps } from "../../interfaces";

export const TextStyle = styled.label`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`}; 
`