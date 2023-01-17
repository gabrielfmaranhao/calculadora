import { Container, BoxInput, BoxForm } from "./style";
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


const Home = () => {
    const [response, setResponse] = useState<IValuesResponse>()
    const {register, handleSubmit, formState:{errors}} = useForm<IRequestApi>({resolver: yupResolver(validationForm)})
    const postApi = async (value:IRequestApi) => {
        try {
            const {data} = await api.post("", value)
            setResponse(data)
        } catch (error) {
            console.log(error)
            toast.error("erro")
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
                    <button type="submit"> Submit </button>
                </BoxForm>
            </BoxInput>
            
            <div className="response">
                {response ? 
                <Text element="h3" li_Heigt={20} size={16} color="blue-3" title="VOCÊ RECEBERÁ:"/> 
                :
                <Text element="span" color="gray-1" size={16} li_Heigt={20} title="Nenhuma consulta feita"/>}
            </div>
            <ToastContainer position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored" />
        </Container>
    )
}

export default Home