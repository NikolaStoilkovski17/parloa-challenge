import { Customer } from "../../interfaces";
import { ManageCustomer } from "./ManageCustomer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockCustomer = {
  id: "12345",
  isActive: true,
  company: "Company #1",
  about: "Lorem impsum ...",
  industry: "Marketing",
  projects: [],
};

const onSubmit = jest.fn();

const renderComponent = (mode: "create" | "edit", customer?: Customer) => {
  const { container } = render(
    <ManageCustomer
      mode={mode}
      customer={customer || mockCustomer}
      onSubmit={onSubmit}
    />
  );

  return container;
};

describe("ManageCustomer should", () => {
  it("render create customer form with respective copy", () => {
    const container = renderComponent("create");

    const companyDetails = container.querySelector(".company-details");
    const createCTA = container.querySelector("#submit-button");

    expect(companyDetails?.innerHTML).toBe("Create customer");
    expect(createCTA?.textContent).toBe("Create customer");
  });

  it("render edit customer form with respective copy", () => {
    const container = renderComponent("edit");

    const companyDetails = container.querySelector(".company-details");
    const createCTA = container.querySelector("#submit-button");

    expect(companyDetails?.innerHTML).toBe("Update customer");
    expect(createCTA?.textContent).toBe("Update customer");
  });

  it("render form with default values for the customer", () => {
    const container = renderComponent("edit");

    const companyName = container.querySelector("#Company") as HTMLInputElement;
    const about = container.querySelector("#About") as HTMLInputElement;
    const industry = container.querySelector("#Industry") as HTMLInputElement;
    const projectName = container.querySelector(
      "#Project-name"
    ) as HTMLInputElement;
    const projectContactEmail = container.querySelector(
      "#Contact-email"
    ) as HTMLInputElement;
    const projectStartDate = container.querySelector(
      "#Start-date"
    ) as HTMLInputElement;

    expect(companyName?.value).toBe("Company #1");
    expect(about?.value).toBe("Lorem impsum ...");
    expect(industry?.value).toBe("Marketing");
    expect(projectName?.value).toBe("");
    expect(projectName?.value).toBe("");
    expect(projectContactEmail?.value).toBe("");
    expect(projectStartDate?.value).toBe("2023-01-01");
  });

  it("render customer form with validation errors if fields are not entered", async () => {
    const container = renderComponent("create", {
      id: "12345",
      isActive: true,
      company: "",
      about: "",
      industry: "",
      projects: [],
    });

    const createCTA = container.querySelector(
      "#submit-button"
    ) as HTMLButtonElement;

    fireEvent.click(createCTA);

    const companyErrorMessage = screen.findByText("Company name is required");
    const aboutErrorMessage = screen.findByText("About is required");
    const industryErrorMessage = screen.findByText("Industry is required");
    const projectNameErrorMessage = screen.findByText(
      "Project name is required"
    );
    const projectContactErrorMessage = screen.findByText(
      "Enter valid email address"
    );
    const projectStartDateErrorMessage = screen.findByText(
      "Start date is required"
    );

    expect(companyErrorMessage).toBeTruthy();
    expect(aboutErrorMessage).toBeTruthy();
    expect(industryErrorMessage).toBeTruthy();
    expect(projectNameErrorMessage).toBeTruthy();
    expect(projectContactErrorMessage).toBeTruthy();
    expect(projectStartDateErrorMessage).toBeTruthy();
  });
});
