import {
  Edit,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="username" />
        <TextInput source="fullName" />
        <TextInput source="address" />
        <TextInput source="phone" />
        <ImageInput source="avatar" label="Image">
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="email" />
        <TextInput source="roles" />
      </SimpleForm>
    </Edit>
  );
};
