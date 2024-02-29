import "./App.css";
import ProductList from "./components/product/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const name = "";
  return (
    <div className="App">
      <h1>Workshop Props</h1>
      <ProductList>
        <h5>I am a child prop</h5>
        <h5>I am a child prop</h5>
        <h5>I am a child prop</h5>
        <h5>I am a child prop</h5>
        <h5>I am a child prop</h5>
        <h3>I am a child prop</h3>
      </ProductList>
      <h2>{name ? `Hello i am ${name}` : "Hello There!"}</h2>
    </div>
  );
}

export default App;
