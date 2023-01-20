import { ITextProps } from "../../interfaces"
import { TextStyle} from "./style"

const Text = ({title, element, color, size, li_Heigt}:ITextProps) => {
    return (
        <TextStyle as={element} color={color} size={size}  li_Heigt={li_Heigt}>
            {title}
        </TextStyle>
        ) 
}

export default Text