import { Customer } from "../interfaces";

export function getUniqueIndustries(customers: Customer[]) {
  let uniqueIndustries: string[] = [];

  customers.forEach((customer: Customer) => {
    if (!uniqueIndustries.includes(customer.industry)) {
      uniqueIndustries.push(customer.industry);
    }
  });

  return uniqueIndustries;
}
