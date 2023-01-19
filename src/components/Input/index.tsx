import { InputStyle } from "./style"
import { IInputProps } from "../../interfaces"

const Input = ({register, values, border_color,...rest}:IInputProps) => {
    return <InputStyle {...register(values)} {...rest} border_color={border_color} />
}
export default Input