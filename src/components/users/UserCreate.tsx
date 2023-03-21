import {
  Create,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput source="password" type="password" />
        <TextInput source="roles" />
        <TextInput source="username" />
        <TextInput source="fullName" />
        <TextInput source="address" />
        <TextInput source="phone" />

        <ImageInput source="avatar" label="Image">
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};
