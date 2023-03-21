import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  ImageInput,
  ImageField,
} from "react-admin";

export const ProductEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <ReferenceInput source="productId" reference="products" />
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="price" />
        <ImageInput source="image" label="Image">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="categoryId" />
        <ReferenceInput source="categoryId" reference="categories">
          <SelectInput source="name" optionText={"name"} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
