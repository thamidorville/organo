import './CampoTexto.css'

const CampoTexto = (props) => { //chamar o CampoTexto
const placeholderModificada = `${props.placeholder}...`

// a função 'aoDigitado' é chamada quando o usuário digita algo no campo de
// texto. ela recebe um parâmetro 'evento' que é o evento que ocorreu no 
//no navegador. em seguida, a função chama a propriedade 'aoAlterado'
//passando o valor do campo de texto (obtido através do 'evento.target.value)
//como parâmetro.
    const aoDigitado = (evento) => {
     props.aoAlterado(evento.target.value)
    }
    
return (
    <div className="campo-texto">
        <label>{props.label}</label>
        <input 
        value={props.valor} 
        onChange={aoDigitado} 
        required={props.obrigatorio} 
        placeholder={props.placeholder}/>
       
    </div>
    

)
}

export default CampoTexto