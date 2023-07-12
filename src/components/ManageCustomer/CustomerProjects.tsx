import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FieldArray, useFormikContext } from "formik";
import { FormControl, TextField } from "@mui/material";
import { Project } from "../../interfaces";
import { v4 as uuidv4 } from "uuid";

export const CustomerProjects = () => {
  const formik = useFormikContext<{
    company: string;
    about: string;
    industry: string;
    projects: Project[];
  }>();

  return (
    <React.Fragment>
      <Box ml={4}>
        <FieldArray name="projects">
          {({ push }: any) => (
            <React.Fragment>
              <Box ml={3}>
                <h3>Projects</h3>
              </Box>
              {formik.values.projects.map((project, index) => {
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
                              formik.touched.projects?.length &&
                              formik.touched.projects![index]?.name &&
                              Boolean(
                                formik.errors.projects?.length
                                  ? (formik.errors as any)?.projects[index]
                                      ?.name
                                  : false
                              )
                            )
                          }
                          helperText={
                            formik.touched.projects?.length &&
                            formik.touched.projects![index]?.name &&
                            formik.errors.projects?.length
                              ? (formik.errors as any)?.projects[index]?.name
                              : ""
                          }
                          onChange={(event) => {
                            formik.setFieldValue(
                              `projects[${index}].name`,
                              event.target.value
                            );
                          }}
                          onBlur={(event) =>
                            formik.setFieldValue(
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
                              formik.touched.projects?.length &&
                              formik.touched.projects![index]?.contact &&
                              Boolean(
                                formik.errors.projects?.length
                                  ? (formik.errors as any)?.projects[index]
                                      ?.contact
                                  : false
                              )
                            )
                          }
                          helperText={
                            formik.touched.projects?.length &&
                            formik.touched.projects![index]?.contact &&
                            formik.errors.projects?.length
                              ? (formik.errors as any)?.projects[index]?.contact
                              : ""
                          }
                          onChange={(event) => {
                            formik.setFieldValue(
                              `projects[${index}].contact`,
                              event.target.value
                            );
                          }}
                          onBlur={(event) =>
                            formik.setFieldValue(
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
                            value={
                              project.start_date
                                ? new Date(project.start_date)
                                    .toISOString()
                                    .substring(0, 10)
                                : "2023-01-01"
                            }
                            error={
                              !!(
                                formik.touched.projects?.length &&
                                formik.touched.projects![index]?.start_date &&
                                Boolean(
                                  formik.errors.projects?.length
                                    ? (formik.errors as any)?.projects[index]
                                        ?.start_date
                                    : false
                                )
                              )
                            }
                            helperText={
                              formik.touched.projects?.length &&
                              formik.touched.projects![index]?.start_date &&
                              formik.errors.projects?.length
                                ? (formik.errors as any)?.projects[index]
                                    ?.start_date
                                : ""
                            }
                            InputLabelProps={{ shrink: true }}
                            onChange={(event) => {
                              formik.setFieldValue(
                                `projects[${index}].start_date`,
                                event.target.value
                              );
                            }}
                            onBlur={(event) =>
                              formik.setFieldValue(
                                `projects[${index}].start_date`,
                                event.target.value
                              )
                            }
                          />
                        </FormControl>
                      </Box>
                      <FormControl>
                        <TextField
                          id="End-date"
                          name={`projects${[index]}.end_date`}
                          label="End date"
                          type="date"
                          value={
                            project.end_date
                              ? new Date(project.end_date)
                                  .toISOString()
                                  .substring(0, 10)
                              : "2023-12-31"
                          }
                          InputLabelProps={{ shrink: true }}
                          onChange={(event) => {
                            formik.setFieldValue(
                              `projects[${index}].end_date`,
                              event.target.value
                            );
                          }}
                          onBlur={(event) =>
                            formik.setFieldValue(
                              `projects[${index}].end_date`,
                              event.target.value
                            )
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={4}>
                      <Button
                        variant="outlined"
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
    </React.Fragment>
  );
};
