export interface ITextStylesProps {
    size: number
    color: "white-1" | "white-2" | "gray-1" | "gray-0" | "black" | "blue-0" | "blue-1" | "blue-2" | "blue-3"
    li_Heigt: number
}
export interface ITextProps extends ITextStylesProps {
    title: string
    element: "h1" | "h2" | "h3" | "p" | "label" | "span"
}