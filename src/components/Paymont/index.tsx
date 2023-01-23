import Text from "../Text"
import { IPaymontProps } from "../../interfaces"


const Paymont = ({ days, valor }:IPaymontProps) => {
    
return(
    <li className="cojunto">
        <Text  title={ days === "1" ? "Amanhã :": ` Em ${days} dias :` } element="p" color="blue-3" li_Heigt={20} size={16}/>
        <strong>{`R$ ${valor},00`}</strong>
    </li>
)
}
export default Paymont