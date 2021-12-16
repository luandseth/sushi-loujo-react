import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"



function App() {


  return (
    <>
      <Router>
        <NavBar/>
          <Routes>
              <Route exact path="/" element={<ItemListContainer/>} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route exact path={`/item/:id`} element={<ItemDetailContainer/>} />
              <Route exact path={"/cart"} />
              <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
