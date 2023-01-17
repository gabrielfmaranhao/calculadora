import { Container } from "./style"
import Text from "../components/Title"
const Home = () => {
    return(
        <Container>
            <div className="input">
                <Text element={"h1"} title="Simule sua antecipação" size={20} color="gray-1" li_Heigt={28}/>
                <div className="form">
                    <div>
                        <Text element="label" color="gray-1" size={14} title="Informe o valor da venda *" li_Heigt={16}/>
                        <input type="text" placeholder="R$ 1.000,00" />
                    </div>
                    <div>
                        <Text element="label" title="Em quantas parcelas *"  color="gray-1" size={14} li_Heigt={14}/>
                        <input type="number" placeholder="12" />
                        <Text element="span" color="gray-0" li_Heigt={13} title="Máximo de 12 parcelas" size={11}/>
                    </div>
                    <div>
                        <Text element="label" title="Informe o percentual de MDR *"  color="gray-1" size={14} li_Heigt={14}/>
                        <input type="text" placeholder="2" />
                    </div>
                </div>
            </div>

            <div className="response">
                <h3>Você Receberá</h3>
                
            </div>
        </Container>
    )
}

export default Home