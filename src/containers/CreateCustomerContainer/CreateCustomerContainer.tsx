import React, { useContext } from "react";
import { CreateCustomer } from "../../components/CreateCustomer";
import { Context } from "../../context/GlobalState";
import { useLocation, useNavigate } from "react-router";
import { Box, Button } from "@mui/material";

interface Props {
  mode: "create" | "edit";
}

export const CreateCustomerContainer = ({ mode }: Props) => {
  const { customers, createCustomer, updateCustomer, setCustomers } =
    useContext(Context);
  const location = useLocation();

  const customerId = location.pathname.split(`/${mode}-customer/`)[1];
  const selectedCustomer = customers.filter(
    (customer) => customer.id === customerId
  )[0];
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <Box ml={2} mt={5}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Go back to home page
        </Button>
      </Box>
      <CreateCustomer
        mode={mode}
        customer={selectedCustomer}
        onSubmit={(customer) => {
          if (mode === "create") {
            createCustomer(customer);
          } else {
            updateCustomer(customer);
          }

          navigate("/");
        }}
      />
    </div>
  );
};