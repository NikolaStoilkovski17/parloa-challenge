import { updateCustomer } from "../update-customer";
import { mockedCustomers } from "../../mocks/mock-customers";

describe("updateCustomer should", () => {
  it("return array with updated customer", () => {
    const customerToBeUpdated = {
      id: "1",
      about: "This is my changed about",
      industry: "marketing",
      projects: [],
      company: "This is my updated company",
      isActive: false,
    };

    expect(updateCustomer(mockedCustomers, customerToBeUpdated).length).toBe(5);
    expect(updateCustomer(mockedCustomers, customerToBeUpdated)[0]).toEqual({
      id: "1",
      about: "This is my changed about",
      industry: "marketing",
      projects: [],
      company: "This is my updated company",
      isActive: false,
    });
  });
});
