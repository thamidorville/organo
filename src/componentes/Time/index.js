import Colaborador from '../Colaborador'
import './Time.css'
// Aquele bloco com várias pessoas de uma escola você 
// fez ser um componente que se chamará Time, é isso?
// Parte do nosso Figma será um Time, então ele vai ter 
// vários blocos e pessoas é possível quebrar em objeto 
// ou não e dentro dele (jsx)vamos criar o comportamento do componente 
// tanto visual quanto de adicionar um novo card.
//para cada time ele será uma scetion da minha página
// {/*Para receber props em um componente em React, 
// você precisa declará-las como parâmetros da função que define o componente. */}
const Time = (props) => { 
const css = { backgroundColor: props.corSecundaria}

return (

    (props.colaboradores.length > 0) && <section className="time" style={css}>
    <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3> {/*acessando props*/}
    <div className="colaboradores">
    {props.colaboradores.map(colaborador => <Colaborador 
    corDeFundo={props.corPrimaria}
    key={colaborador.nome}
    nome={colaborador.nome} 
    cargo={colaborador.cargo}
    imagem={colaborador.imagem}
    />)}
    </div>
    </section>
)

}

export default Time
{/* <section className="time" style={{backgroundColor: props.corSecundaria }}> */}