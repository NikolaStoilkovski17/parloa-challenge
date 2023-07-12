import { render, screen } from "@testing-library/react";
import { Customer } from "../../interfaces";
import { CustomerCard } from "./CustomerCard";
import { BrowserRouter as Router } from "react-router-dom";

const mockCustomer = {
  id: "12345",
  isActive: true,
  company: "Company #1",
  about: "Lorem impsum ...",
  industry: "Marketing",
  projects: [],
};

const mockCustomerWithProject = {
  ...mockCustomer,
  isActive: false,
  projects: [
    {
      id: "1",
      name: "Project X",
      contact: "max-mustermann@gmail.com",
      start_date: new Date("2023-01-01"),
      end_date: new Date("2023-12-31"),
    },
  ],
};

const renderComponent = (customer: Customer, hasError: boolean) => {
  const { container } = render(
    <Router>
      <CustomerCard
        customer={customer}
        hasError={hasError}
        onDeleteCustomer={() => jest.fn()}
      />
    </Router>
  );
  return container;
};

describe("CustomerCard should", () => {
  it("render error message if there is an error", () => {
    renderComponent(mockCustomer, true);

    const errorMessage = screen.findByText(
      "The is an error with loading the customer. Please ask customer support for help!"
    );

    expect(errorMessage).toBeTruthy();
  });

  it("render the component without edit, delete and projects icon and correct status and project description", () => {
    const container = renderComponent(mockCustomer, false);

    const editButton = container.querySelector("#edit-button");
    const deleteButton = container.querySelector("#delete-button");
    const createYourFirstProjectButton = container.querySelector(
      "#create-your-first-project-button"
    );
    const projectsIcon = container.querySelector("#projects-icon");
    const noProjectsDescription = container.querySelector(
      "#no-projects-description"
    );
    const customerStatus = container.querySelector("#customer-status");

    expect(editButton).not.toBeInTheDocument();
    expect(deleteButton).not.toBeInTheDocument();
    expect(createYourFirstProjectButton).toBeInTheDocument();
    expect(projectsIcon).not.toBeInTheDocument();
    expect(noProjectsDescription).toBeInTheDocument();
    expect(customerStatus?.innerHTML).toBe("Active");
  });

  it("render the component with edit, delete and projects icon and correct status", () => {
    const container = renderComponent(mockCustomerWithProject, false);

    const editButton = container.querySelector("#edit-button");
    const deleteButton = container.querySelector("#delete-button");
    const createYourFirstProjectButton = container.querySelector(
      "#create-your-first-project-button"
    );
    const projectsIcon = container.querySelector("#projects-icon");
    const noProjectsDescription = container.querySelector(
      "#no-projects-description"
    );
    const customerStatus = container.querySelector("#customer-status");

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
    expect(createYourFirstProjectButton).not.toBeInTheDocument();
    expect(projectsIcon).toBeInTheDocument();
    expect(noProjectsDescription).not.toBeInTheDocument();
    expect(customerStatus?.innerHTML).toBe("Inactive");
  });
});
