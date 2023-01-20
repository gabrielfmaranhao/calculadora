import { ButtonHTMLAttributes } from "react"
import { UseFormRegister } from "react-hook-form"
export interface ITextStylesProps {
    size: number
    color: "white-1" | "white-2" | "gray-1" | "gray-0" | "black" | "blue-0" | "blue-1" | "blue-2" | "blue-3"| "red-0"
    li_Heigt: number
}
export interface ITextProps extends ITextStylesProps {
    title: string | undefined
    element?: "h1" | "h2" | "h3" | "p" | "label" | "span"
}



export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    background: "white-1" | "white-2" | "gray-1" | "gray-0" | "black" | "blue-0" | "blue-1" | "blue-2" | "blue-3"| "red-0"
    color: "white-1" | "white-2" | "gray-1" | "gray-0" | "black" | "blue-0" | "blue-1" | "blue-2" | "blue-3"| "red-0"
}

export interface IButtonStyles {
    background: string
    color: string
}

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<IRequestApi>
    values: "amount" | "installments" | "mdr"
    border_color: "red-0" | "gray-2"
}
    export interface IInputStyle {
        border_color: "red-0" | "gray-2"
    }
export interface IValuesResponse {
    1: number
    15: number
    30: number
    90: number
}

export interface IRequestApi {
    amount: number
    installments: number
    mdr: number
}