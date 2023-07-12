import React from "react";
import { Customer } from "../../interfaces/customer.interface";
import { CustomerCard } from "../CustomerCard/CustomerCard";
import { Box } from "@mui/material";
import "./CustomersList.css";
import CustomerCardLoaders from "../CustomerCardLoaders/CustomerCardLoaders";

interface CustomersListProps {
  customers: Customer[];
  isLoading: boolean;
  hasError: boolean;
  onDeleteCustomer: (customer: Customer) => void;
}

export const CustomersList = ({
  customers,
  isLoading,
  hasError,
  onDeleteCustomer,
}: CustomersListProps) => {
  if (hasError) {
    return <div>There is an error. Please contact out customer support!</div>;
  }

  if (isLoading) {
    return <CustomerCardLoaders />;
  }

  if (!customers.length) {
    return <div>You don't have any customers ...</div>;
  }

  return (
    <React.Fragment>
      <div className="customers-list-wrapper">
        {customers.map((customer: Customer) => {
          return (
            <Box key={customer.id}>
              <CustomerCard
                customer={customer}
                onDeleteCustomer={() => onDeleteCustomer(customer)}
              />
            </Box>
          );
        })}
      </div>
    </React.Fragment>
  );
};
