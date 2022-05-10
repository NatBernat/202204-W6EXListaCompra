import { useEffect } from "react";
import { useDispatch } from "react-redux";
/* import Form from "./components/Form/Form"; */
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import List from "./components/List/List";
import { groceryList } from "./data/data";
import { loadGroceryListActionCreator } from "./redux/features/grocerySlice/grocerySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGroceryListActionCreator(groceryList));
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <Header />
      <Info />
      <main className="row py-4">
        <List />
      </main>
    </div>
  );
}

export default App;
