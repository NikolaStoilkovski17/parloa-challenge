import { mockedCustomers } from "../../mocks";
import { getSelectedCustomer } from "../get-selected-customer";

describe("getSelectedCustomer", () => {
  it("should return the selected customer", () => {
    expect(getSelectedCustomer(mockedCustomers, "create-customer/1")).toEqual(
      mockedCustomers[0]
    );
  });
});
