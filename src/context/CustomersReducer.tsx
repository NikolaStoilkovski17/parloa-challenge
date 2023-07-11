import { State } from "../interfaces";
import {
  getFilteredCustomers,
  filterCustomersByIndustry,
  filterCustomersByStatus,
} from "../utils";

export enum Actions {
  SET_CUSTOMERS = "SET_CUSTOMERS",
  SET_FILTERED_CUSTOMERS = "SET_FILTERED_CUSTOMERS",
  CREATE_CUSTOMER = "CREATE_CUSTOMER",
  UPDATE_CUSTOMER = "UPDATE_CUSTOMER",
  DELETE_CUSTOMER = "DELETE_CUSTOMER",
  SET_IS_LOADING = "SET_IS_LOADING",
  FILTER_CUSTOMERS = "FILTER_CUSTOMERS",
  // FILTER_CUSTOMERS_BY_STATUS = "FILTER_CUSTOMERS_BY_STATUS",
  // FILTER_CUSTOMERS_BY_INDUSTRY = "FILTER_CUSTOMERS_BY_INDUSTRY",
  SET_FILTERING_FIELDS = "SET_FILTERING_FIELDS",
}

type Action = {
  type: string;
  payload?: any;
};

export default (state: State, action: Action) => {
  switch (action.type) {
    case Actions.SET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        // TO-DO: Double check this
        // filteredCustomers: action.payload,
      };
    case Actions.SET_FILTERED_CUSTOMERS:
      return {
        ...state,
        filteredCustomers: action.payload,
      };
    case Actions.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case Actions.FILTER_CUSTOMERS:
      return {
        ...state,
        filteredCustomers: getFilteredCustomers(
          state.customers,
          state.filteringFields
        ),
      };
    case Actions.SET_FILTERING_FIELDS:
      return {
        ...state,
        filteringFields: {
          ...state.filteringFields,
          ...action.payload,
        },
      };
    case Actions.CREATE_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
        // filteredCustomers: [...state.customers, action.payload],
      };
    case Actions.UPDATE_CUSTOMER:
      const result = state.customers.map((customer) => {
        if (customer.id === action.payload.id) {
          return action.payload;
        } else {
          return customer;
        }
      });
      return {
        ...state,
        customers: result,
        filteredCustomers: result,
      };
    case Actions.DELETE_CUSTOMER:
      const updatedCustomers = state.customers.filter(
        (customer) => customer.id !== action.payload.id
      );
      return {
        ...state,
        customers: updatedCustomers,
        filteredCustomers: updatedCustomers,
      };
    default:
      return state;
  }
};
