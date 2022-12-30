import {
  Datagrid,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

import "./Product.css";
export const ProductList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="price" />
        <ImageField source="image" />
        <ReferenceField
          label="Category"
          source="categoryId"
          reference="categories"
        >
          <TextField source="name" />
        </ReferenceField>
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
