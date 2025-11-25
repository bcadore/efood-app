import ProductCard from "../ProductCard";
import * as S from "./styles";

// Tipagem baseada no que vem da API
export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  porcao: string;
};

type ProductListProps = {
  produtos: Produto[];
  aoComprar: (produto: Produto) => void;
};

const ProductList = ({ produtos, aoComprar }: ProductListProps) => {
  return (
    <S.Section>
      <div className="container">
        <S.Grid>
          {produtos.map((produto) => (
            <ProductCard
              key={produto.id}
              id={produto.id}
              title={produto.nome}        // API: nome -> Componente: title
              description={produto.descricao}
              image={produto.foto}        // API: foto -> Componente: image
              price={produto.preco}
              porcao={produto.porcao}
              aoClicar={() => aoComprar(produto)}
            />
          ))}
        </S.Grid>
      </div>
    </S.Section>
  );
};

export default ProductList;