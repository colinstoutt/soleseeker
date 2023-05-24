import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import CartProvider from "./cartContext";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <div className="App">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Main searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
