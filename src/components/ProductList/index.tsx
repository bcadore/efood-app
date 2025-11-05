import { useState } from "react";
import ProductCard from "../ProductCard";
import * as S from "./styles";
import { getProdutosByRestauranteId } from "../../data/produtos";

type ProductListProps = {
  restauranteId: number;
};

const ProductList = ({ restauranteId }: ProductListProps) => {
  const [produtos] = useState(getProdutosByRestauranteId(restauranteId));

  return (
    <S.Section>
      <S.Grid>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            id={produto.id}
            title={produto.title}
            description={produto.description}
            image={produto.image}
            price={produto.price}
            porcao={produto.porcao}
          />
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default ProductList;
