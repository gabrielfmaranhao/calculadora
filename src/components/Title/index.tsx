import { ITextProps } from "../../interfaces"
import { H1, H2, H3, P, Span, Label, Div } from "./style"

const Text = ({title, element, color, size, li_Heigt}:ITextProps) => {
    if(element === "h1") {
        return <H1 color={color} size={size} li_Heigt={li_Heigt}>{title}</H1>
    }
    if(element === "h2") {
        return <H2 color={color} size={size} li_Heigt={li_Heigt}>{title}</H2>
    }
    if(element === "h3") {
        return <H3 color={color} size={size} li_Heigt={li_Heigt}>{title}</H3>
    }
    if(element === "p") {
        return <P color={color} size={size} li_Heigt={li_Heigt}>{title}</P>
    }
    if(element === "label") {
        return <Label color={color} size={size} li_Heigt={li_Heigt}>{title}</Label>
    }
    if(element === "span") {
        return <Span color={color} size={size} li_Heigt={li_Heigt}>{title}</Span>
    }
    else{
        return <Div color={color} size={size} li_Heigt={li_Heigt}>{title}</Div>
    }
}

export default Text