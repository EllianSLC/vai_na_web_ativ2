import S from './queroDoar.module.scss'
import livro from '../../assets/Vector.png'
import axios from 'axios'
import {useState} from 'react'

export default function QueroDoar(){

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async()=>{
        
        const urlApi = "https://api-livros-54ux.onrender.com/doar"

        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        await axios.post(urlApi, dadosEnviar) // Envia os dados para a API via POST

        alert("Livro cadastrado!!") // Exibe um alerta informando o sucesso da operação

        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")
    }

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value) // Exibe o valor no console para debug
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }

    return(
        <section className={S.principal}> {/* Contêiner principal estilizado */}
            <section className={S.container}> {/* Contêiner interno */}
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=> e.preventDefault()}> {/* Previne o comportamento padrão do formulário */}
                    <div>
                        <img src={livro} alt="" /> {/* Exibe a imagem do livro */}
                        <h3>Informações do Livro</h3>
                    </div>
                    {/* Campos do formulário */}
                    <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo} />
                    <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria} />
                    <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                    <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
                    <input className={S.doar} type="submit" value="Doar" onClick={enviarDados} /> {/* Botão de submissão */}
                </form>
            </section>
        </section>
    )
}