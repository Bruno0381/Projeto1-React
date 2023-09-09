import { useRef, useState } from 'react'
import { v4 } from 'uuid'
import { AddButton, Container, Product, TrashButton } from './styles'

// React Hooks
// useRef
// useState / estado = É uma variavel, que, toda vez que troca de valor
// a tela irá "Recarregar os valores"

function Home() {
  const inputRef = useRef()

  const [produtos, setProdutos] = useState([])

  function cliqueBotao() {
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    inputRef.current.value = ''
  }

  function deletarProduto(id) {
      setProdutos(produtos.filter(produto => produto.id !== id))


  }
  return (
    <Container>
      <h1>Lista de Compras Manallu Closet</h1>
      <input placeholder="produto..." ref={inputRef} />
      <AddButton onClick={cliqueBotao}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <TrashButton onClick={() => deletarProduto(produto.id)}>🗑️</TrashButton>
        </Product>
      ))}
    </Container>
  )
}

export default Home
