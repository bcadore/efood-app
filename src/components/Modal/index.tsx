import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import type { RootReducer } from '../../store' // Certifique-se que o caminho está correto

import { colors } from '../../index'
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
  const { items } = useSelector((state: RootReducer) => state.cart)
  
  // Estado para controlar o aviso de duplicidade
  const [modalAvisoAberto, setModalAvisoAberto] = useState(false)

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const handleAddToCart = () => {
    if (!produto) return

    const itemExiste = items.find((item) => item.id === produto.id)

    if (itemExiste) {
      setModalAvisoAberto(true)
    } else {
      adicionarEFechar()
    }
  }

  const adicionarEFechar = () => {
    if (produto) {
      dispatch(add(produto))
      dispatch(open())
      fecharTudo()
    }
  }

  const fecharTudo = () => {
    setModalAvisoAberto(false)
    onClose()
  }

  if (!isOpen || !produto) return null

  if (modalAvisoAberto) {
    return (
      <ModalOverlay onClick={fecharTudo}>
        <ModalContent onClick={(e) => e.stopPropagation()} style={{ maxWidth: '480px', flexDirection: 'column', alignItems: 'center', textAlign: 'center', height: 'auto', padding: '40px' }}>
          <CloseButton
            src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
            alt="Fechar"
            onClick={fecharTudo}
          />
          
          <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Atenção!</h3>
          <p style={{ marginBottom: '24px', fontSize: '16px' }}>
            Você já possui um prato desse tipo no carrinho. Deseja adicionar outro igual?
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button onClick={adicionarEFechar} style={{ marginTop: 0 }}>
              Sim, adicionar
            </Button>
            <Button onClick={() => setModalAvisoAberto(false)} style={{ marginTop: 0, backgroundColor: colors.tertiary, border: `1px solid ${colors.secondary}` }}>
              Não, cancelar
            </Button>
          </div>
        </ModalContent>
      </ModalOverlay>
    )
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

          <Button onClick={handleAddToCart}>
            Adicionar ao carrinho - {formataPreco(produto.preco)}
          </Button>
        </ContentContainer>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal