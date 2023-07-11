import { getUniqueIndustries } from "../get-unique-industries";

const mockCustomer = {
  id: "1",
  about: "Lorem ..",
  projects: [],
  company: "Company 1",
  isActive: false,
};
const mockIndustries = [
  {
    ...mockCustomer,
    industry: "tech",
  },
  {
    ...mockCustomer,
    industry: "tech",
  },
  {
    ...mockCustomer,
    industry: "insurance",
  },
  {
    ...mockCustomer,
    industry: "marketing",
  },
  {
    ...mockCustomer,
    industry: "insurance",
  },
];

describe("getUniqueIndustries should", () => {
  it("return all unique industries without duplicates", () => {
    expect(getUniqueIndustries(mockIndustries)).toEqual([
      "tech",
      "insurance",
      "marketing",
    ]);
  });

  it("return empty array if industries are empty", () => {
    expect(getUniqueIndustries([])).toEqual([]);
  });
});
