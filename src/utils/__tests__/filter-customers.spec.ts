import { Customer } from "../../interfaces";
import { getFilteredCustomers } from "../filter-customers";
import { mockedCustomers } from "./mock-customers";

describe("getFilteredCustomers should", () => {
  it("return filtered customers that match the filters", () => {
    const customFilters: Partial<Customer> = {
      isActive: true,
      industry: "insurance",
    };

    const result = getFilteredCustomers(mockedCustomers, customFilters);

    expect(result.length).toBe(2);
    expect(result).toEqual([mockedCustomers[2], mockedCustomers[3]]);
  });

  it("return all customers if filter values are null", () => {
    const customFilters: Partial<Customer> = {
      isActive: null as any,
      industry: null as any,
    };

    const result = getFilteredCustomers(mockedCustomers, customFilters);

    expect(result.length).toBe(5);
    expect(result).toEqual(mockedCustomers);
  });

  it("return correct customers if one filter is selected and the other is null", () => {
    const customFilters: Partial<Customer> = {
      isActive: false,
      industry: null as any,
    };

    const result = getFilteredCustomers(mockedCustomers, customFilters);

    expect(result.length).toBe(2);
    expect(result).toEqual([mockedCustomers[0], mockedCustomers[4]]);
  });
});
