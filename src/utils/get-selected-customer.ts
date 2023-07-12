import { Customer } from "../interfaces";

export function getSelectedCustomer(customers: Customer[], pathname: string) {
  const customerId = pathname.split(`customer/`)[1];
  const selectedCustomer = customers.filter(
    (customer) => customer.id === customerId
  )[0];

  return selectedCustomer;
}
