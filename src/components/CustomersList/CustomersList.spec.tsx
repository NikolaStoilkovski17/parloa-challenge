import { Customer } from "../../interfaces";
import { mockedCustomers } from "../../mocks";
import { CustomersList } from "./CustomersList";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const renderComponent = (
  hasError: boolean,
  isLoading: boolean,
  customers?: Customer[]
) => {
  const { container } = render(
    <Router>
      <CustomersList
        customers={customers || mockedCustomers}
        hasError={hasError}
        isLoading={isLoading}
        onDeleteCustomer={() => jest.fn()}
      />
    </Router>
  );

  return container;
};

describe("CustomersList should", () => {
  it("render error message if fetching fails", () => {
    const container = renderComponent(true, false);

    const errorMessage = screen.getByText(
      "There is an error. Please contact out customer support!"
    );

    expect(errorMessage).toBeTruthy();
  });

  it("render error message if fetching fails", () => {
    const container = renderComponent(false, true);

    const loadersWrapper = container.querySelector(".customers-list-wrapper");

    expect(loadersWrapper).toBeInTheDocument();
  });

  it("render error message if fetching fails", () => {
    renderComponent(false, false, []);

    const errorMessage = screen.getByText("You don't have any customers ...");

    expect(errorMessage).toBeTruthy();
  });

  it("render all customers cards", () => {
    const container = renderComponent(false, false);

    const customersWrapper = container.querySelector(".customers-list-wrapper");

    expect(customersWrapper?.children.length).toBe(5);
  });
});
