import { Edit, SimpleForm, TextInput } from "react-admin";

export const OrderEdit = () => {
  return (
    <Edit title="Create a Order">
      <SimpleForm>
        <TextInput source="status" />
        <TextInput source="paymentMethod" />
        <TextInput source="paymentStatus" />
        <TextInput source="delivery" />
        <TextInput source="deliveryMethod" />
        <TextInput source="userId" />
      </SimpleForm>
    </Edit>
  );
};
