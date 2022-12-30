import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./providers/";
import { ProductList, ProductCreate, ProductEdit } from "./components/products";
import {
  CategoriesList,
  CategoriesCreate,
  CategoriesEdit,
} from "./components/categories";
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="categories"
      list={CategoriesList}
      edit={CategoriesEdit}
      create={CategoriesCreate}
    />
  </Admin>
);

export default App;
