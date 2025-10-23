// src/App.js
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header title="React Mini Project (Task 3)" />
      <div className="flex-grow">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
