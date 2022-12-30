import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
