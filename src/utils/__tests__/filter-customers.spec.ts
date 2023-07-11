import { Customer } from "../../interfaces";
import {
  filterCustomersByIndustry,
  filterCustomersByStatus,
  getFilteredCustomers,
} from "../filter-customers";

const mockedCustomers: Customer[] = [
  {
    id: "1",
    about: "Lorem ..",
    industry: "tech",
    projects: [],
    company: "Company 1",
    isActive: false,
  },
  {
    id: "2",
    about: "Lorem ..",
    industry: "marketing",
    projects: [],
    company: "Company 2",
    isActive: true,
  },
  {
    id: "3",
    about: "Lorem ..",
    industry: "insurance",
    projects: [],
    company: "Company 3",
    isActive: true,
  },
  {
    id: "4",
    about: "Lorem ..",
    industry: "insurance",
    projects: [],
    company: "Company 4",
    isActive: true,
  },
  {
    id: "5",
    about: "Lorem ..",
    industry: "insurance",
    projects: [],
    company: "Company 4",
    isActive: false,
  },
];

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

// describe("filterCustomersByStatus", () => {
//   it("should return active customers", () => {
//     expect(filterCustomersByStatus(mockedCustomers, true)).toEqual([
//       mockedCustomers[1],
//       mockedCustomers[2],
//       mockedCustomers[3],
//     ]);
//   });

//   it("should return inactive customers", () => {
//     expect(filterCustomersByStatus(mockedCustomers, false)).toEqual([
//       mockedCustomers[0],
//     ]);
//   });
// });

// describe("filterCustomersByIndustry", () => {
//   it("should return only customers from insurance industry", () => {
//     expect(filterCustomersByIndustry(mockedCustomers, "insurance")).toEqual([
//       mockedCustomers[2],
//       mockedCustomers[3],
//     ]);
//   });

//   it("should return empty array if the industry does not exist", () => {
//     expect(filterCustomersByIndustry(mockedCustomers, "food")).toEqual([]);
//   });
// });
