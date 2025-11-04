import { GlobalStyle } from ".";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RestauranteList from "./components/RestaurantList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RestauranteList />
      <Footer />
    </>
  );
}

export default App;
