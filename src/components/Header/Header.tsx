import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import "./Header.css";

export const Header = ({}) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box className="header-wrapper" mb={5}>
        <h2>Customers home page</h2>
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
