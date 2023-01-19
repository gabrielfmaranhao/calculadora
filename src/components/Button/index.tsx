import { IButtonProps } from "../../interfaces"
import { ButtonStyle } from "./style"


const Button = ({background, color,text, ...rest}:IButtonProps) => {
    return( 
    <ButtonStyle background={background} color={color} {...rest}>
        {text}
    </ButtonStyle>
    )
}
export default Button