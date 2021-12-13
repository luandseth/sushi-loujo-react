import {createContext, useState, useMemo} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

export const RoutesContext = createContext(null);

function App() {

const [value, setValue] = useState();
const providerValue = useMemo(() => ({value, setValue}), [ value, setValue])

console.log("APP V", value)

  return (
    <>
      <Router>
        <NavBar/>
        <RoutesContext.Provider value={providerValue}>
          <Routes>
              <Route exact path="/" element={<ItemListContainer/>} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>} />
              <Route path={`/item/*`} element={<ItemDetailContainer/>} />
              <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </RoutesContext.Provider>
      </Router>
    </>
  );
}

export default App;
