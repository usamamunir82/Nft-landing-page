import Header from "./components/header/Header";
import HeaderContent from "./components/headerContent/HeaderContent";
import MetaMask from "./components/metamask/MetaMask";
import GliderF from "./components/glider1/GliderF";
import Collection from "./components/top-collection/Collection";
import Categories from "./components/categories/Categories";
import Create from "./components/create-and-self/Create";
import Articles from "./components/articles/Articles";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <HeaderContent/>
    <MetaMask/>
    <GliderF/>
    <Collection/>
    <Categories/>
    <Create/>
    <Articles/>
    <Footer/>
    </div>
  );
}

export default App;
