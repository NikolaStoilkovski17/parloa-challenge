import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormikContext } from "formik";
import { FormControl, TextField } from "@mui/material";
import { Project } from "../../interfaces";

interface CustomerDetailsProps {
  mode: "create" | "edit";
}

export const CustomerDetails = ({ mode }: CustomerDetailsProps) => {
  const formik = useFormikContext<{
    company: string;
    about: string;
    industry: string;
    projects: Project[];
  }>();

  return (
    <React.Fragment>
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
              value={formik.values.company}
              error={formik.touched.company && Boolean(!!formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
              onChange={(event) =>
                formik.setFieldValue("company", event.target.value)
              }
              onBlur={(event) =>
                formik.setFieldValue("company", event.target.value)
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
              value={formik.values.about}
              onChange={(event) =>
                formik.setFieldValue("about", event.target.value)
              }
              onBlur={(event) =>
                formik.setFieldValue("about", event.target.value)
              }
              error={formik.touched.about && Boolean(!!formik.errors.about)}
              helperText={formik.touched.about && formik.errors.about}
            />
          </FormControl>
        </Box>
        <Box my={2}>
          <FormControl fullWidth>
            <TextField
              id="Industry"
              name="industry"
              label="Industry"
              value={formik.values.industry}
              onChange={(event) =>
                formik.setFieldValue("industry", event.target.value)
              }
              onBlur={(event) =>
                formik.setFieldValue("industry", event.target.value)
              }
              error={
                formik.touched.industry && Boolean(!!formik.errors.industry)
              }
              helperText={formik.touched.industry && formik.errors.industry}
            />
          </FormControl>
        </Box>
        <Box my={2}>
          <Button
            id="submit-button"
            variant="contained"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            {mode === "create" ? "Create" : "Update"} customer
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
