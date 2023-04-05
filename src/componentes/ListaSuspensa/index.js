import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)}
             required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option> //cada item precisa de uma chave
                    //e essa chave precisa ser única
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa

// A propriedade onChange está sendo usada para definir 
// a função que será chamada sempre que o valor selecionado 
// for alterado no menu suspenso. 