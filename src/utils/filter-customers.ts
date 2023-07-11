import { Customer } from "../interfaces";

export function getFilteredCustomers(
  customers: Customer[],
  filters?: Partial<Customer>
): Customer[] {
  const filteredCustomers = customers.filter((customer: Customer) => {
    for (let key in filters) {
      if (filters[key as keyof Customer] == null) return true;
      if (key == null) {
        return true;
      }
      if (
        customer[key as keyof Customer] === undefined ||
        customer[key as keyof Customer] != filters[key as keyof Customer]
      ) {
        return false;
      }
    }
    return true;
  });

  return filteredCustomers;
}

export function filterCustomersByStatus(
  customers: Customer[],
  isActive: boolean
) {
  if (isActive === null) return customers;

  return customers.filter(
    (customer: Customer) => customer.isActive === isActive
  );
}

export function filterCustomersByIndustry(
  customers: Customer[],
  industry: string
) {
  if (industry === null) return customers;

  return customers.filter(
    (customer: Customer) => customer.industry === industry
  );
}
