import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { HeaderComponent } from "components";
import { URL } from "core/constants/urls";
import { DonateCards } from "./card";
import { PaymentForm } from "./form";
import { Content, Wrapper } from "./styled";

const PUBLIC_KEY =
  "pk_test_51LvClLFBcbJGYEcTCyOLkODwONhVlRnFS19DaPyhJFb8DgdS2cJ7CImf8zML7WTxOKcBmFGoMeW4nVt5KR5QOW8J00ZqvuycUS";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  const [success, setSuccess] = React.useState(false);

  return (
    <Wrapper>
      <HeaderComponent title="Donation" linkText="go back" link={URL.HOME} />
      <Content>
        <DonateCards isSuccess={success} />
        <Elements stripe={stripeTestPromise}>
          <PaymentForm isSuccess={success} handleSuccess={setSuccess} />
        </Elements>
      </Content>
    </Wrapper>
  );
};

export { StripeContainer };
