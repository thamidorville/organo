import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
        <section>
        <ul>
        <li>
        <a href='facebook.com' target='_blank'>
            <img src='/imagens/fb.png'   alt=''/>
        </a>
        </li>
        <a href='twitter.com' target='_blank'>
            <img src='/imagens/tw.png'  alt=''       />
        </a>
        <li>
        <a href='instagram.com' target='_blank'>
            <img src='/imagens/ig.png' alt=''/>
        </a>
        </li>
        </ul>
        <section>
            <p>
                Desenvolvido por Thamiris Dorville na Alura
            </p>
        </section>
        </section>
        </footer>

    )
}

export default Rodape 