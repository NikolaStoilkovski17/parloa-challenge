import { CreateCustomer } from "./CreateCustomer";
import { render, screen } from "@testing-library/react";

const mockCustomer = {
  id: "12345",
  isActive: true,
  company: "Company #1",
  about: "Lorem impsum ...",
  industry: "marketing",
  projects: [],
};

const renderComponent = (mode: "create" | "edit") => {
  const { container } = render(
    <CreateCustomer mode={mode} customer={mockCustomer} onSubmit={() => {}} />
  );

  return container;
};

describe("CreateCustomer should", () => {
  it("render create customer form with respective copy", () => {
    const container = renderComponent("create");

    const companyDetails = container.querySelector(".company-details");
    const createCTA = container.querySelector("#submit-button");

    expect(companyDetails?.innerHTML).toBe("Create customer");
    expect(createCTA?.textContent).toBe("Create customer");
  });

  it("render edito customer form with respective copy", () => {
    const container = renderComponent("edit");

    const companyDetails = container.querySelector(".company-details");
    const createCTA = container.querySelector("#submit-button");

    expect(companyDetails?.innerHTML).toBe("Update customer");
    expect(createCTA?.textContent).toBe("Update customer");
  });

  it("render form with default values for the customer", () => {
    const container = renderComponent("edit");

    const companyName = container.querySelector("#Company") as HTMLInputElement;
    console.log("companyName", companyName);

    expect(companyName?.value).toBe("Company #1");
  });
});
