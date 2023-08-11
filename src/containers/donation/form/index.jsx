import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { axiosInstance } from "core/api";
import { Wrapper, Form, CardWrapper, StyledButton, Message } from "./styled";

const CARD_OPTIONS = {
  iconStyle: "solid",
};

const PaymentForm = ({ isSuccess, handleSuccess }) => {
  const [isDisbaleButton, setDisbaleButton] = React.useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisbaleButton(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      setDisbaleButton(false);

      try {
        const { id } = paymentMethod;
        const { data } = await axiosInstance.post("/payment", {
          amount: 1000,
          id,
        });

        if (data.success) {
          handleSuccess(true);
          setDisbaleButton(false);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
      setDisbaleButton(false);
    }
  };

  return (
    <Wrapper>
      {isSuccess ? (
        <Message>thank you for your donation ❤</Message>
      ) : (
        <Form onSubmit={handleSubmit}>
          <CardWrapper>
            <CardElement options={CARD_OPTIONS} />
          </CardWrapper>
          <StyledButton type="submit" disbaled={isDisbaleButton}>
            Donate 10$
          </StyledButton>
        </Form>
      )}
    </Wrapper>
  );
};

export { PaymentForm };
