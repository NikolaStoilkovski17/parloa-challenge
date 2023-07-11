import { Customer } from "./customer.interface";

export interface State {
  isLoading: boolean;
  hasLoadingError: boolean;
  customers: Customer[];
  filteredCustomers: Customer[];
  filteringFields: Partial<Customer>;
  setCustomers: (customers: Customer[]) => void;
  setFilteredCustomers: (customers: Customer[]) => void;
  setIsLoading: (isLoading: boolean) => void;
  // filterCustomersByStatus: (isActive: boolean | null) => void;
  // filterCustomersByIndustry: (industry: string | null) => void;
  filterCustomers: () => void;
  setFilteringFields: (
    field: Partial<{ isActive: boolean | null; industry: string | null }>
  ) => void;
  createCustomer: (customer: Customer) => void;
  updateCustomer: (customer: Customer) => void;
  deleteCustomer: (customer: Customer) => void;
}
