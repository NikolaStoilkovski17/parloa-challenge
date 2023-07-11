import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  onStatusFilterChange: (isActive: boolean | null) => void;
}

export const FilterByStatus = ({ onStatusFilterChange }: Props) => {
  return (
    <React.Fragment>
      <FormControl style={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">Filter By Status </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By Status"
          defaultValue={"All"}
          onChange={(event) => {
            if (event.target.value === "All") {
              return onStatusFilterChange(null);
            }

            onStatusFilterChange(
              event.target.value === "Active" ? true : false
            );
          }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Active"}>Active</MenuItem>
          <MenuItem value={"Inactive"}>Inactive</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
