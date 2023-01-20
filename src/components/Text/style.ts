import styled from "styled-components";
import { ITextStylesProps } from "../../interfaces";

export const H1 = styled.h1`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
    text-align: center;
    
`

export const H2 = styled.h2`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
`
export const H3 = styled.h3`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
`
export const P = styled.p`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
`
export const Label = styled.label`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
`
export const Div = styled.div`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
`
export const Span = styled.span`
    font-size: ${({size}:ITextStylesProps) => `${size}px`};
    color: ${({color}:ITextStylesProps) => `var(--${color})`};
    line-height: ${({li_Heigt}:ITextStylesProps) => `${li_Heigt}px`};
    text-align: center;
`