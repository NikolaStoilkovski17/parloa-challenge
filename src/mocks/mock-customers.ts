import { Customer } from "../interfaces";

export const mockedCustomers: Customer[] = [
  {
    id: "1",
    about: "Lorem ..",
    industry: "tech",
    projects: [
      {
        id: "123",
        contact: "test@gmail.com",
        name: "Company name",
        start_date: new Date("2023-01-01"),
      },
    ],
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
