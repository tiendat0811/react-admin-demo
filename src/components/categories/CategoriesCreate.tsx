import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoriesCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
