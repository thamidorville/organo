import './Botao.css'

const Botao = (props) => { //criar componente que vai receber o texto via props
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao