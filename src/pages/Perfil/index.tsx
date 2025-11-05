import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { getRestauranteById } from "../../data/restaurantes";

const Perfil = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const restauranteId = id ? parseInt(id, 10) : null;
  const restaurante = restauranteId ? getRestauranteById(restauranteId) : null;

  if (!restaurante) {
    return (
      <>
        <Header />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Restaurante não encontrado</p>
          <button onClick={() => navigate("/")}>Voltar para a home</button>
        </div>
      </>
    );
  }

  const categoria =
    restaurante.tags.find((tag) => tag === "Japonesa" || tag === "Italiana") ||
    restaurante.tags[restaurante.tags.length - 1];

  return (
    <>
      <Header />
      <Banner
        category={categoria}
        title={restaurante.title}
        image={restaurante.image}
      />
    </>
  );
};

export default Perfil;
