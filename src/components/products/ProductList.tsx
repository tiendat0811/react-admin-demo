import {
  Datagrid,
  DeleteButton,
  EditButton,
  ImageField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
  TextInput,
} from "react-admin";

import "./Product.css";

const productFilters = [
  <TextInput source="name" label="Search by name" alwaysOn />,
  <ReferenceInput source="id" label="Id" reference="products" />,
  <ReferenceInput source="categoryId" label="Category" reference="categories">
    <SelectInput source="name" optionText={"name"} />
  </ReferenceInput>,
  <TextInput source="price" label="Price" />,
];
export const ProductList = () => {
  return (
    <List filters={productFilters}>
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
