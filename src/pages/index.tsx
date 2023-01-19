import { Container, BoxInput, BoxForm, BoxResponse } from "./style";
import Text from "../components/Text";
import Input from "../components/Input";
import { useState } from "react";
import { IValuesResponse, IRequestApi } from "../interfaces";
import api from "../service";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { validationForm } from "../utils/validations";
import { toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Button from "../components/Button";


const Home = () => {
    const [response, setResponse] = useState<IValuesResponse>()
    const {register, handleSubmit, formState:{errors}} = useForm<IRequestApi>({resolver: yupResolver(validationForm)})
    
    const postApi = async (value:IRequestApi) => {
        try {
            const {data} = await api.post("", value)
            setResponse(data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <Container>
            <BoxInput>
                <Text element={"h1"} title="Simule sua antecipação" size={20} color="gray-1" li_Heigt={28}/>
                <BoxForm onSubmit={handleSubmit(postApi)}>
                    <div className="box-label">
                        <Text element="label" color="gray-1" size={14} title="Informe o valor da venda *" li_Heigt={16}/>
                        <Input type="text" placeholder="R$ 1.000,00" values="amount" register={register} border_color={errors.amount ? "red-0" : "gray-2"}/>
                        {errors.amount?.message && <Text color="red-0" element="span" li_Heigt={10} size={12} title={errors.amount.message}/>}
                    </div>
                    <div className="box-label">
                        <Text element="label" title="Em quantas parcelas *"  color="gray-1" size={14} li_Heigt={14}/>
                        <Input type="number" placeholder="12" values="installments" register={register} border_color={errors.installments ? "red-0": "gray-2"}/>
                        {errors.installments?.message ? <Text color="red-0" element="span" li_Heigt={10} size={12} title={errors.installments.message}/>:
                        <Text element="span" color="gray-0" li_Heigt={13} title="Máximo de 12 parcelas" size={11}/>}
                    </div>
                    <div className="box-label">
                        <Text element="label" title="Informe o percentual de MDR *"  color="gray-1" size={14} li_Heigt={14}/>
                        <Input type="text" placeholder="2" values="mdr" register={register} border_color={errors.mdr ? "red-0": "gray-2"}/>
                        {errors.mdr?.message && <Text color="red-0" element="span" li_Heigt={10} size={12} title={errors.mdr.message}/>}
                    </div>
                    <Button type="submit" background="blue-2" color="white-1" text="Submit"/>
                </BoxForm>
            </BoxInput>
            {response ?
            <BoxResponse className="response">
                <Text element="h3" li_Heigt={20} size={16} color="blue-2" title="VOCÊ RECEBERÁ:"/>
                <ul>
                    <li>
                        <Text element="p" color="blue-3" size={16} title={`Amanhã :`} li_Heigt={20}/>
                        <strong>{`R$ ${response[1]},00`}</strong>
                    </li>
                    <li>
                        <Text element="p" color="blue-3" size={16} title={`Em 15 dias:`} li_Heigt={20}/>
                        <strong>{`R$ ${response[15]},00`}</strong>
                    </li>
                    <li>
                        <Text element="p" color="blue-3" size={16} title={`Em 30 dias:`} li_Heigt={20}/>
                        <strong>{`R$ ${response[30]},00`}</strong>
                    </li>
                    <li>
                        <Text element="p" color="blue-3" size={16} title={`Em 90 dias:`} li_Heigt={20}/>
                        <strong>{`R$ ${response[90]},00`}</strong>
                    </li>
                </ul>
            </BoxResponse>
                :
                <Text element="span" color="gray-1" size={16} li_Heigt={20} title="Nenhuma consulta feita"/>}
        </Container>
    )
}

export default Home