import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  TextField,
} from "react-admin";

export const CategoriesList = () => {
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
