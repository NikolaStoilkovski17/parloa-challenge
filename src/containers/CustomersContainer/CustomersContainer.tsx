import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Customer } from "../../interfaces/customer.interface";
import { CustomersList } from "../../components/CustomersList/CustomersList";
import { Context } from "../../context/GlobalState";

interface CustomersContainerProps {}

export const CustomersContainer = ({}: CustomersContainerProps) => {
  const {
    isLoading,
    customers,
    filteredCustomers,
    setCustomers,
    setFilteredCustomers,
    setIsLoading,
    deleteCustomer,
  } = useContext(Context);
  const [error, setError] = useState<any>({});

  useEffect(() => {
    if (!customers.length) {
      setIsLoading(true);

      axios
        .get<Customer[]>(
          "https://parloafrontendchallenge.z6.web.core.windows.net/customers.json"
        )
        .then((response) => {
          setCustomers(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    setFilteredCustomers(customers);
  }, [customers]);

  return (
    <React.Fragment>
      <CustomersList
        customers={filteredCustomers}
        isLoading={isLoading}
        hasError={!!error.code}
        onDeleteCustomer={(customer: Customer) => deleteCustomer(customer)}
      />
    </React.Fragment>
  );
};
