import { CreateCustomer } from "./CreateCustomer";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockCustomer = {
  id: "12345",
  isActive: true,
  company: "Company #1",
  about: "Lorem impsum ...",
  industry: "Marketing",
  projects: [],
};

const onClick = jest.fn();
const onSubmit = jest.fn();

const renderComponent = (mode: "create" | "edit") => {
  const { container } = render(
    <CreateCustomer mode={mode} customer={mockCustomer} onSubmit={onSubmit} />
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

  // TO-DO: Adjust tests
  it("render customer form with validation errors", async () => {
    const container = renderComponent("create");

    const companyDetails = container.querySelector(".company-details");
    const createCTA = container.querySelector(
      "#submit-button"
    ) as HTMLButtonElement;

    fireEvent.click(await createCTA);

    // screen.debug();

    await waitFor(() => {
      const test = screen.findByText("Industry is required");
      console.log("test", test);

      expect(test).toBe("false");
    });

    // console.log("container", container);

    // expect(
    //   await screen.findByText("Company name is required")
    // ).toBeInTheDocument();
    // expect(errorMessageForCompanyName.innerHTML).toBe("test");
  });
});
