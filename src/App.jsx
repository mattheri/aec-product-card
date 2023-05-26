import Container from "./components/Container/Container";
import ProdutCard from "./components/ProductCard/ProdutCard";

import Desk from "./assets/desk.jpg";

function App() {
  return (
    <Container className="app-container" fluid noGutters>
      <ProdutCard
        image={{
          src: Desk,
          alt: "Desk",
          width: "100px",
          height: "100px",
        }}
        price={{
          price: 100,
          priceOnSale: 80,
        }}
        title="Desk"
        subtitle="Furniture"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        label="Buy"
      />
    </Container>
  );
}

export default App;
