import { useEffect, useState } from "react";
import {
  ArrayInput,
  Create,
  NumberInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useGetIdentity,
} from "react-admin";

export const OrderCreate = () => {
  //get current user id
  const { data } = useGetIdentity();
  // Initialize state variables
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  // Calculate final price when totalPrice or discount change
  useEffect(() => {
    setFinalPrice(totalPrice - (totalPrice * discount) / 100);
  }, [totalPrice, discount]);

  const transform = (data: any) => ({
    ...data,
    finalPrice: finalPrice,
  });
  return (
    <Create title="Create a Order" transform={transform}>
      <SimpleForm>
        {data && <TextInput source="userId" disabled defaultValue={data.id} />}
        <TextInput source="paymentMethod" />
        <TextInput source="paymentStatus" />
        <TextInput source="delivery" />
        <TextInput source="deliveryMethod" />
        <ArrayInput source="orderItems">
          <SimpleFormIterator>
            <ReferenceInput source="productId" reference="products">
              <SelectInput source="name" optionText={"name"} />
            </ReferenceInput>
            <NumberInput source="quantity" />
          </SimpleFormIterator>
        </ArrayInput>
        <NumberInput
          source="totalPrice"
          onChange={(event) => setTotalPrice(event.target.value)}
        />
        <NumberInput
          source="discount"
          onChange={(event) => setDiscount(event.target.value)}
        />
        <h3>Final price: {finalPrice}</h3>
      </SimpleForm>
    </Create>
  );
};
