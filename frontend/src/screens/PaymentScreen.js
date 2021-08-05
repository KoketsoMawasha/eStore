import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartPaymentMethod, saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import FormContainer from "../components/FormContainer";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("Paypal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(cartPaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.check
              type="radio"
              label="Paypal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.check>
            {/* Stripe  */}
            <Form.check
              type="radio"
              label="Stripe"
              id="Stripe"
              name="paymentMethod"
              value="Stripe"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.check>
          </Col>
        </Form.group>
        <Button type=" submit" variant="primary" className="btn-success my-3">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
