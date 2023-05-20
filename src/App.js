import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import CartProvider from "./cartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
