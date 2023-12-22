import { Admin, Resource, ListGuesser } from "react-admin";
import Categories from "./Pages/Categories";
import { dataProvider } from "./dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="categories" {...Categories} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
