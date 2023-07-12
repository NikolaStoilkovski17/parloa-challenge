import React, { useContext } from "react";
import { ManageCustomer } from "../../components/ManageCustomer";
import { Context } from "../../context/GlobalState";
import { useLocation, useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
import { getSelectedCustomer } from "../../utils";

interface Props {
  mode: "create" | "edit";
}

export const ManageCustomerContainer = ({ mode }: Props) => {
  const { customers, createCustomer, updateCustomer, setCustomers } =
    useContext(Context);
  const location = useLocation();

  const selectedCustomer = getSelectedCustomer(customers, location.pathname);
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <Box ml={2} mt={5}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Go back to home page
        </Button>
      </Box>
      <ManageCustomer
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
