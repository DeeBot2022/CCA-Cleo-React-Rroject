import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";
import Navbar from "./components/Navbar";
//import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import products from "./components/Products";
import { DataProvider } from "./context/DataContext";
import Announcement from "./components/Announcement"

function App() {

  
  return (
    <BrowserRouter>
    <DataProvider>
      <div className="d-flex flex-column site-container">
        <header>
          <Announcement />
          <Navbar bg="dark" variant="dark">

              <LinkContainer to="/">
                <Navbar />
              </LinkContainer>

          </Navbar>
        </header>
        <main>

            <Routes>
              <Route
                path="/data/:slug"
                element={<ProductScreen storeProduct={ products } />}
              />
              <Route path="/" element={<HomeScreen storeProduct={ products } />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

        </main>
        <footer>
          <Newsletter />
          <Footer />
        </footer>
      </div>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
