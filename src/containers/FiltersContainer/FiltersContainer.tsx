import React, { useContext } from "react";
import { FilterByStatus } from "../../components/FilterByStatus";
import { Box } from "@mui/material";
import { Context } from "../../context/GlobalState";
import { FilterByIndustry } from "../../components/FilterByIndustry";
import { getUniqueIndustries } from "../../utils";

export const FiltersContainer = () => {
  const { customers, setFilteringFields, filterCustomers } =
    useContext(Context);

  const filteringOptionsForIndustry = getUniqueIndustries(customers);

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="flex-end" my={2}>
        <FilterByStatus
          onStatusFilterChange={(isActive: boolean | null) => {
            setFilteringFields({ isActive });
            filterCustomers();
          }}
        />
        <Box ml={2}>
          <FilterByIndustry
            filteringOptions={filteringOptionsForIndustry}
            onStatusFilterChange={(industry: string | null) => {
              setFilteringFields({ industry });
              filterCustomers();
            }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};
