import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="productId" reference="products" />
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="price" />
      <TextInput source="image" />
      <TextInput source="categoryId" />
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput source="name" optionText={"name"} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
