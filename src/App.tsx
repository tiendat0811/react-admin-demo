import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./providers/";
import { ProductList, ProductCreate, ProductEdit } from "./components/products";
import {
  CategoriesList,
  CategoriesCreate,
  CategoriesEdit,
} from "./components/categories";
import { UserCreate, UserEdit, UserList } from "./components/users";
import { OrderCreate, OrderEdit, OrderList } from "./components/orders";
const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />

    <Resource
      name="products"
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    />
    <Resource
      name="orders"
      list={OrderList}
      create={OrderCreate}
      edit={OrderEdit}
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
