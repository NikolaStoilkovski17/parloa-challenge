import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";

export const Header = ({}) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box textAlign={"center"} className="header-wrapper" mt={3} mb={5} pt={3}>
        <h1>Customers Home Page</h1>
        <Button
          variant="outlined"
          onClick={() => navigate(`/create-customer/${uuidv4()}`)}
        >
          {" "}
          Create customer
        </Button>
      </Box>
    </React.Fragment>
  );
};
