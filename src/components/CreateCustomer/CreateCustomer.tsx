import React from "react";

import Box from "@mui/material/Box";
import { Customer } from "../../interfaces/customer.interface";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

interface CreateCustomerProps {
  customer: Customer;
  mode: "create" | "edit";
  onSubmit: (values: Customer) => void;
}

export const CreateCustomer = ({
  customer,
  mode,
  onSubmit,
}: CreateCustomerProps) => {
  console.log("customer", customer);
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
                    startDate: "2023-01-01",
                    endDate: "",
                  },
                ],
          }}
          validationSchema={Yup.object({
            company: Yup.string().required("This is required"),
            about: Yup.string().required("This is required"),
            industry: Yup.string().required("This is required"),
            projects: Yup.array().of(
              Yup.object({
                id: Yup.string().required("This is required"),
                name: Yup.string().required("This is required"),
                contact: Yup.string().required("Enter valid email address"),
                startDate: Yup.string().required("This is required"),
              })
            ),
          })}
          onSubmit={(values, errors) => {
            console.log("on submit", values, errors);

            onSubmit({
              ...values,
              id: customer?.id || `${uuidv4()}`,
              isActive: values.projects.some((project) => !project.endDate),
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            setFieldValue,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <Box display={"flex"}>
              <Box display={"flex"} flexDirection={"column"}>
                <h3 className="company-details">
                  {mode === "create" ? "Create customer" : "Update customer"}
                </h3>
                <Box my={2} minWidth={300}>
                  <FormControl fullWidth>
                    <TextField
                      id="Company"
                      name="company"
                      label="Company Name"
                      value={values.company}
                      error={touched.company && Boolean(!!errors.company)}
                      helperText={touched.company && errors.company}
                      onChange={(event) =>
                        setFieldValue("company", event.target.value)
                      }
                      onBlur={(event) =>
                        setFieldValue("company", event.target.value)
                      }
                    />
                  </FormControl>
                </Box>
                <Box my={2}>
                  <FormControl fullWidth>
                    <TextField
                      id="About"
                      name="about"
                      label="About"
                      value={values.about}
                      onChange={(event) =>
                        setFieldValue("about", event.target.value)
                      }
                      onBlur={(event) =>
                        setFieldValue("about", event.target.value)
                      }
                      error={touched.about && Boolean(!!errors.about)}
                      helperText={touched.about && errors.about}
                    />
                  </FormControl>
                </Box>
                <Box my={2}>
                  <FormControl fullWidth>
                    <TextField
                      id="Industry"
                      name="industry"
                      label="Industry"
                      value={values.industry}
                      onChange={(event) =>
                        setFieldValue("industry", event.target.value)
                      }
                      onBlur={(event) =>
                        setFieldValue("industry", event.target.value)
                      }
                      error={touched.industry && Boolean(!!errors.industry)}
                      helperText={touched.industry && errors.industry}
                    />
                  </FormControl>
                </Box>
                <Box my={2}>
                  <Button
                    id="submit-button"
                    variant="contained"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    {mode === "create" ? "Create" : "Update"} customer
                  </Button>
                </Box>
              </Box>
              <Box ml={4}>
                <FieldArray name="projects">
                  {({ push }: any) => (
                    <React.Fragment>
                      <Box ml={3}>
                        <h3>Projects</h3>
                      </Box>
                      {values.projects.map((project, index) => {
                        console.log("errors", errors);
                        return (
                          <Box key={index} ml={3} mt={3}>
                            <Box my={2} style={{ paddingTop: "10px" }}>
                              <FormControl fullWidth>
                                <TextField
                                  id="Project-name"
                                  name={`projects${[index]}.name`}
                                  label="Project Name"
                                  value={project.name}
                                  error={
                                    !!(
                                      touched.projects?.length &&
                                      touched.projects![index]?.name &&
                                      Boolean(
                                        errors.projects?.length
                                          ? (errors as any)?.projects[index]
                                              ?.name
                                          : false
                                      )
                                    )
                                  }
                                  helperText={
                                    touched.projects?.length &&
                                    touched.projects![index]?.name &&
                                    errors.projects?.length
                                      ? (errors as any)?.projects[index]?.name
                                      : ""
                                  }
                                  onChange={(event) => {
                                    console.log("ev", event);
                                    setFieldValue(
                                      `projects[${index}].name`,
                                      event.target.value
                                    );
                                  }}
                                  onBlur={(event) =>
                                    setFieldValue(
                                      `projects[${index}].name`,
                                      event.target.value
                                    )
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box my={2} py={2}>
                              <FormControl fullWidth>
                                <TextField
                                  id="Contact-email"
                                  name={`projects${[index]}.contact`}
                                  label="Contact email"
                                  value={project.contact}
                                  error={
                                    !!(
                                      touched.projects?.length &&
                                      touched.projects![index]?.contact &&
                                      Boolean(
                                        errors.projects?.length
                                          ? (errors as any)?.projects[index]
                                              ?.contact
                                          : false
                                      )
                                    )
                                  }
                                  helperText={
                                    touched.projects?.length &&
                                    touched.projects![index]?.contact &&
                                    errors.projects?.length
                                      ? (errors as any)?.projects[index]
                                          ?.contact
                                      : ""
                                  }
                                  onChange={(event) => {
                                    console.log("ev", event);
                                    setFieldValue(
                                      `projects[${index}].contact`,
                                      event.target.value
                                    );
                                  }}
                                  onBlur={(event) =>
                                    setFieldValue(
                                      `projects[${index}].contact`,
                                      event.target.value
                                    )
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box my={2} display={"flex"}>
                              <Box mr={2}>
                                <FormControl>
                                  <TextField
                                    id="Start-date"
                                    name={`projects${[index]}.startDate`}
                                    label="Start date"
                                    type="date"
                                    value={project.startDate}
                                    error={
                                      !!(
                                        touched.projects?.length &&
                                        touched.projects![index]?.startDate &&
                                        Boolean(
                                          errors.projects?.length
                                            ? (errors as any)?.projects[index]
                                                ?.startDate
                                            : false
                                        )
                                      )
                                    }
                                    helperText={
                                      touched.projects?.length &&
                                      touched.projects![index]?.startDate &&
                                      errors.projects?.length
                                        ? (errors as any)?.projects[index]
                                            ?.startDate
                                        : ""
                                    }
                                    InputLabelProps={{ shrink: true }}
                                    onChange={(event) => {
                                      console.log("ev", event);
                                      setFieldValue(
                                        `projects[${index}].startDate`,
                                        event.target.value
                                      );
                                    }}
                                    onBlur={(event) =>
                                      setFieldValue(
                                        `projects[${index}].startDate`,
                                        event.target.value
                                      )
                                    }
                                  />
                                </FormControl>
                              </Box>
                              <FormControl>
                                {/* <DateField label="Basic date field" /> */}
                                {/* <InputLabel htmlFor="end-date">End date</InputLabel>
                        <Input id="end-date" type="date" value={"2023-12-31"} /> */}
                                <TextField
                                  id="End-date"
                                  name={`projects${[index]}.endDate`}
                                  label="End date"
                                  type="date"
                                  value={project.endDate}
                                  // error={Boolean(errors.projects?.length)}
                                  InputLabelProps={{ shrink: true }}
                                  onChange={(event) => {
                                    console.log("ev", event);
                                    setFieldValue(
                                      `projects[${index}].endDate`,
                                      event.target.value
                                    );
                                  }}
                                  onBlur={(event) =>
                                    setFieldValue(
                                      `projects[${index}].endDate`,
                                      event.target.value
                                    )
                                  }
                                />
                              </FormControl>
                            </Box>
                            <Box mt={4}>
                              <Button
                                variant="outlined"
                                // onClick={() => handleSubmit()}
                                onClick={() => {
                                  push({
                                    id: uuidv4(),
                                    name: "",
                                    contact: "",
                                    startDate: "2023-01-01",
                                    endDate: "2023-12-31",
                                  });
                                }}
                              >
                                Add project
                              </Button>
                            </Box>
                          </Box>
                        );
                      })}
                    </React.Fragment>
                  )}
                </FieldArray>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </React.Fragment>
  );
};
