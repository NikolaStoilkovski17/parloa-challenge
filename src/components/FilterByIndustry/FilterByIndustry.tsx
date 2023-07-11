import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  filteringOptions: string[];
  onStatusFilterChange: (industry: string | null) => void;
}

export const FilterByIndustry = ({
  filteringOptions,
  onStatusFilterChange,
}: Props) => {
  return (
    <React.Fragment>
      <FormControl style={{ width: 200 }}>
        <InputLabel id="demo-simple-select-label">
          Filter By Industry{" "}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter By Industry"
          defaultValue={"All"}
          onChange={(event) => {
            if (event.target.value === "All") {
              return onStatusFilterChange(null);
            }

            onStatusFilterChange(event.target.value);
          }}
        >
          <MenuItem value={"All"}>All</MenuItem>
          {filteringOptions.map((option: string) => {
            return (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};
