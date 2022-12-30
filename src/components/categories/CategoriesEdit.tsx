import { Edit, SimpleForm, TextInput, required } from "react-admin";

export const CategoriesEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);
