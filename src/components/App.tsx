import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import FeebackItemsContextProvider from "../contexts/FeebackItemsContextProvider";

function App() {
  return (
    <>
      <div className="app">
        <Footer />
        <FeebackItemsContextProvider>
          <Container />
          <HashtagList />
        </FeebackItemsContextProvider>
      </div>
    </>
  );
}

export default App;
