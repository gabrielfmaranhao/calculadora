import { InputStyle } from "./style"
import { UseFormRegister } from "react-hook-form"
import { IRequestApi} from "../../interfaces"
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: UseFormRegister<IRequestApi>
    values: "amount" | "installments" | "mdr"
    border_color: "red-0" | "gray-2"
}
const Input = ({register, values, border_color,...rest}:IInputProps) => {
    return <InputStyle {...register(values)} {...rest} border_color={border_color} />
}
export default Input