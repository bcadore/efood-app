import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import ProductList, { type Produto } from "../../components/ProductList";
import Modal from "../../components/Modal";

// Tipagem do restaurante vindo da API
interface RestauranteAPI {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Produto[];
}

const Perfil = () => {
  const { id } = useParams<{ id: string }>();

  const [restaurante, setRestaurante] = useState<RestauranteAPI | null>(null);
  const [modalAberta, setModalAberta] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res: RestauranteAPI[]) => {
        const restauranteEncontrado = res.find((r) => r.id === Number(id));
        setRestaurante(restauranteEncontrado || null);
      });
  }, [id]);

  const abrirModal = (produto: Produto) => {
    setProdutoSelecionado(produto);
    setModalAberta(true);
  };

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Header />
      <Banner
        category={restaurante.tipo}
        title={restaurante.titulo}
        image={restaurante.capa}
      />
      
      <ProductList 
        produtos={restaurante.cardapio} 
        aoComprar={abrirModal} 
      />

      <Modal 
        isOpen={modalAberta} 
        onClose={() => setModalAberta(false)} 
        produto={produtoSelecionado} 
      />
    </>
  );
};

export default Perfil;