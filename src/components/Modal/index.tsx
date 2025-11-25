import styled from 'styled-components';

// Se tiver cores globais, importe aqui. Vou usar hardcoded para garantir que funcione.
const colors = {
    primary: "#E66767",
    secondary: "#FFEBD9",
    text: "#FFFFFF"
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: ${colors.primary};
  padding: 32px;
  max-width: 1024px;
  width: 100%;
  position: relative;
  display: flex;
  gap: 24px;
  color: ${colors.text};
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    padding: 16px;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const ModalImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 16px;
    }
`

const Button = styled.button`
  background-color: ${colors.secondary};
  color: ${colors.primary};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 16px;
  width: fit-content;
  margin-top: 16px;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  width: 16px;
  height: 16px;
  filter: brightness(0) invert(1); 
`;

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