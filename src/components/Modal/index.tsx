import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalImage,
  ContentContainer,
  Button
} from './styles'

type Produto = {
  id: number
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  produto: Produto | null
}

const Modal = ({ isOpen, onClose, produto }: ModalProps) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    if (produto) {
      dispatch(add(produto))
      dispatch(open())
      onClose()
    }
  }

  if (!isOpen || !produto) return null

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton
          src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
          alt="Fechar"
          onClick={onClose}
        />

        <ModalImage src={produto.foto} alt={produto.nome} />

        <ContentContainer>
          <div>
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>Serve: {produto.porcao}</p>
          </div>

          <Button onClick={addToCart}>
            Adicionar ao carrinho - {formataPreco(produto.preco)}
          </Button>
        </ContentContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal