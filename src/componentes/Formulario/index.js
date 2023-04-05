import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import Botao from '../Botao'
import { useState } from 'react'


const Formulario = (props) => {


const [nome, setNome] = useState("")
const [cargo, setCargo] = useState("")
const [imagem, setImagem] = useState("")
const [time, setTime] = useState("")

const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
        nome, 
        cargo,
        imagem,
        time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}
    return (
        <section className="formulario"> {/*a classe principal do meu componente*/}
            <form onSubmit={aoSalvar}>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nome" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                /> {/*esse texto em azul indica que é tag react*/}
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.times}
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao> 
                    Criar Card   
                </Botao>
            </form>
        </section>
    )

}

export default Formulario

// Essa sintaxe {valor => setnome(valor)} é uma função anônima que recebe
// um parâmetro valor e chama a função setnome com esse valor.

//propriedade 'aoAlterado': Ao utilizar o componente CampoTexto 
// em outro lugar do código(nesse caso, aqui no componente formulário), 
// é preciso fornecer uma função para a propriedade aoAlterado
//  que será executada sempre que o '[valor do campo de texto]' for alterado. 
//definir a função para a propriedade aoAlterado, e não o componente em si.
//aoAlterado={valor => setTime(valor)}

//3. cadastrando colaboradores: 
//O hook agora altera o nosso valor, 
//mas precisamos pegar isso e criar o card. 
//preciso ter um lugar pra cadastrar a 
//lista dos colaboradores de fato