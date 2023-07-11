import React, {
  ReactChildren,
  ReactNode,
  createContext,
  useReducer,
} from "react";
import { State } from "../interfaces/state.interface";
import CustomersReducer, { Actions } from "./CustomersReducer";
import { Customer } from "../interfaces";

interface Props {
  children: ReactNode;
}

interface IContext {
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

const initialState: State = {
  isLoading: false,
  hasLoadingError: false,
  customers: [],
  filteredCustomers: [],
  filteringFields: {},
  setCustomers: (customers: Customer[]) => null,
  setFilteredCustomers: (customers: Customer[]) => null,
  setIsLoading: (isLoading: boolean) => null,
  // filterCustomersByStatus: (isActive: boolean | null) => null,
  // filterCustomersByIndustry: (industry: string | null) => null,
  filterCustomers: () => null,
  setFilteringFields: (
    field: Partial<{ isActive: boolean | null; industry: string | null }>
  ) => null,
  createCustomer: (customer: Customer) => null,
  updateCustomer: (customer: Customer) => null,
  deleteCustomer: (customer: Customer) => null,
};

export const Context = createContext<IContext>(initialState);

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(CustomersReducer, initialState);

  const setCustomers = (customers: Customer[]) => {
    dispatch({
      type: Actions.SET_CUSTOMERS,
      payload: customers,
    });
  };

  const setFilteredCustomers = (customers: Customer[]) => {
    dispatch({
      type: Actions.SET_FILTERED_CUSTOMERS,
      payload: customers,
    });
  };

  const setIsLoading = (isLoading: boolean) => {
    dispatch({
      type: Actions.SET_IS_LOADING,
      payload: isLoading,
    });
  };

  const setFilteringFields = (
    field: Partial<{ isActive: boolean | null; industry: string | null }>
  ) => {
    dispatch({
      type: Actions.SET_FILTERING_FIELDS,
      payload: field,
    });
  };

  const filterCustomers = () => {
    dispatch({
      type: Actions.FILTER_CUSTOMERS,
    });
  };

  const createCustomer = (customer: Customer) => {
    dispatch({
      type: Actions.CREATE_CUSTOMER,
      payload: customer,
    });
  };

  const deleteCustomer = (customer: Customer) => {
    dispatch({
      type: Actions.DELETE_CUSTOMER,
      payload: customer,
    });
  };

  const updateCustomer = (customer: Customer) => {
    dispatch({
      type: Actions.UPDATE_CUSTOMER,
      payload: customer,
    });
  };

  console.log("state", state);

  return (
    <Context.Provider
      value={{
        isLoading: state.isLoading,
        hasLoadingError: state.hasLoadingError,
        customers: state.customers,
        filteredCustomers: state.filteredCustomers,
        filteringFields: state.filteringFields,
        setCustomers,
        setFilteredCustomers,
        setIsLoading,
        setFilteringFields,
        filterCustomers,
        createCustomer,
        updateCustomer,
        deleteCustomer,
      }}
    >
      {children}
    </Context.Provider>
  );
};
