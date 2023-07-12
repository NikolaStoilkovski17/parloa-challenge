import { Customer } from "../interfaces";

export function updateCustomer(
  customers: Customer[],
  customerToBeUpdated: Customer
) {
  const updatedCustomers = customers.map((customer) => {
    return customer.id === customerToBeUpdated.id
      ? customerToBeUpdated
      : customer;
  });

  return updatedCustomers;
}
