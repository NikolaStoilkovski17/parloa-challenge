import React from "react";

import Box from "@mui/material/Box";
import { Customer } from "../../interfaces/customer.interface";
import { Formik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { CustomerDetails } from "./CustomerDetails";
import { CustomerProjects } from "./CustomerProjects";

interface ManageCustomerProps {
  customer: Customer;
  mode: "create" | "edit";
  onSubmit: (values: Customer) => void;
}

export const ManageCustomer = ({
  customer,
  mode,
  onSubmit,
}: ManageCustomerProps) => {
  return (
    <React.Fragment>
      <Box p={3} display={"flex"}>
        <Formik
          initialValues={{
            company: customer?.company || "",
            about: customer?.about || "",
            industry: customer?.industry || "",
            projects: customer?.projects.length
              ? customer.projects
              : [
                  {
                    id: uuidv4(),
                    name: "",
                    contact: "",
                    start_date: new Date("2023-01-01"),
                  },
                ],
          }}
          validationSchema={Yup.object({
            company: Yup.string().required("Company name is required"),
            about: Yup.string().required("About is required"),
            industry: Yup.string().required("Industry is required"),
            projects: Yup.array().of(
              Yup.object({
                id: Yup.string().required("This is required"),
                name: Yup.string().required("Project name is required"),
                contact: Yup.string().required("Enter valid email address"),
                start_date: Yup.string().required("Start date is required"),
              })
            ),
          })}
          onSubmit={(values, errors) => {
            onSubmit({
              ...values,
              id: customer?.id || `${uuidv4()}`,
              isActive: values.projects.some((project) => !project.end_date),
            });
          }}
        >
          <Box display={"flex"}>
            <CustomerDetails mode={mode} />
            <CustomerProjects />
          </Box>
        </Formik>
      </Box>
    </React.Fragment>
  );
};
