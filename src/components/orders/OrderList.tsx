import {
  Datagrid,
  DateField,
  EditButton,
  List,
  ReferenceField,
  ReferenceManyField,
  TextField,
} from "react-admin";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="createAt" />
      <ReferenceManyField
        label="Order Item"
        reference="order-items"
        target="orderId"
      >
        <Datagrid>
          <TextField source="id" label="id" />
          <TextField source="productId" />
          <TextField source="quantity" />
        </Datagrid>
      </ReferenceManyField>
      <TextField source="paymentMethod" />
      <TextField source="paymentStatus" />
      <TextField source="delivery" />
      <TextField source="deliveryMethod" />
      <TextField source="totalPrice" />
      <TextField source="discount" />
      <TextField source="finalPrice" />
      <ReferenceField source="userId" reference="users" />
      <EditButton />
    </Datagrid>
  </List>
);
