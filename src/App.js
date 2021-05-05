import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <main className="py-4">
            <HomeScreen />
          </main>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;