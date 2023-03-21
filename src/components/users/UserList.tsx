import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  EmailField,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { ChangePasswordButton } from "../components/ChangePasswordButton";

const userFilters = [
  <TextInput source="name" label="Search by name" alwaysOn />,
  <ReferenceInput source="id" label="UserId" reference="users" />,
  <TextInput source="email" label="Email" />,
  <TextInput source="roles" label="Roles" />,
  <TextInput source="username" label="Username" />,
  <TextInput source="fullName" label="Full Name" />,
  <TextInput source="address" label="Address" />,
  <TextInput source="phone" label="Phone" />,
];

export const UserList = () => {
  return (
    <List filters={userFilters}>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="roles" />
        {/* <ReferenceOneField
          label="Password"
          reference="user-credentials"
          target="userId"
        >
          <TextField source="password" />
        </ReferenceOneField> */}
        <ChangePasswordButton />
        <TextField source="username" />
        <ImageField source="avatar" />
        <TextField source="fullName" />
        <TextField source="address" />
        <TextField source="phone" />

        <EditButton />
      </Datagrid>
    </List>
  );
};
