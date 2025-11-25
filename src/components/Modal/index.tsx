import { Button, CloseButton, ContentContainer, ModalContent, ModalImage, ModalOverlay } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  produto: {
    foto: string;
    preco: number;
    nome: string;
    descricao: string;
    porcao: string;
  } | null;
}

const Modal = ({ isOpen, onClose, produto }: ModalProps) => {
  if (!isOpen || !produto) return null;

  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

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
            
            <Button>
            Adicionar ao carrinho - {formataPreco(produto.preco)}
            </Button>
        </ContentContainer>

      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;