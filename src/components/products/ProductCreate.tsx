import {
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="description" />
      <NumberInput source="price" />
      <ImageInput source="image" label="Image">
        <ImageField source="src" title="title" />
      </ImageInput>
      <ReferenceInput source="categoryId" reference="categories">
        <SelectInput source="name" optionText={"name"} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
