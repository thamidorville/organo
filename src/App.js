import Banner from './componentes/Banner/Banner.js'
import Formulario from './componentes/Formulario/index.js';
import Time from './componentes/Time/index.js';
import { useState } from 'react';
import Rodape from './componentes/rodape/Rodape.js';


function App() {

const times = [
  {
  nome: 'Programação',
  corPrimaria: '#57c278',
  corSecundaria: '#D9F7E9'
},
{
  nome: 'Front-End',
  corPrimaria: '#82CFFA',
  corSecundaria: '#E8F8FF'
},
{
  nome: 'Data science',
  corPrimaria: '#A6D157',
  corSecundaria: '#F0F8E2'
},
{
  nome: 'Devops',
  corPrimaria: '#E06B69',
  corSecundaria: '#FFF5D9'
},
{
  nome: 'UX e Design',
  corPrimaria: '#E06B69',
  corSecundaria: '#FDE7E8'
},
{
  nome: 'Mobile',
  corPrimaria: '#FFBA05',
  corSecundaria: '#FFF5D9'
},
{
  nome: 'Inovação e Gestão',
  corPrimaria: '#FF8A29',
  corSecundaria: '#FFEEDF'
}

]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdicionado = (colaborador) => {
debugger
setColaboradores([...colaboradores, colaborador]) //vou espalhar todos
//os colaboradores antigos e vou adicionar o novo no final
// Portanto, "setColaboradores([...colaboradores, colaborador])" atualiza
//  o estado da lista de colaboradores do componente adicionando um novo 
//  objeto colaborador ao final do array de colaboradores existente. 
//  Esta operação é conhecida 
// como "adição de elemento" ou "inserção de elemento" em um array.
}
  return (
    <div className="App"> 
      <Banner/> {/*eu chamo o banner numa tag como se fosse html, porque ele é um componente(função)
      e precisa ser chamado*/}
      
      {/* a função map() está sendo usada para percorrer o array times e criar 
      um novo array com apenas os nomes dos times existentes. */}
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {/* A função aoNovoColaboradorAdicionado é chamada quando um novo colaborador é adicionado ao formulário */}

       {/* para cada time da nossa lista de times
      cria-se um componente chamado Time com esse nome. */}

      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
// O componente de formulário é usado para coletar informações 
// de um novo colaborador, como nome, cargo, imagem, etc. Quando o formulário é 
// enviado, a propriedade "aoColaboradorCadastrado" é chamada com o objeto "colaborador" 
// contendo essas informações como argumento. A propriedade, em seguida, chama a função 
// "aoNovoColaboradorAdicionado" com o mesmo objeto "colaborador" como parâmetro, que é 
// usada para fazer algo com essas informações, como exibi-las
// em algum lugar na interface do usuário ou salvá-las em um banco de dados.