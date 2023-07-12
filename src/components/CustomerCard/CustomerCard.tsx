import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Customer } from "../../interfaces/customer.interface";
import FolderIcon from "@mui/icons-material/Folder";
import "./CustomerCard";
import { useNavigate } from "react-router";

interface CustomerCardProps {
  customer: Customer;
  onDeleteCustomer: (customer: Customer) => void;
}

export const CustomerCard = ({
  customer,
  onDeleteCustomer,
}: CustomerCardProps) => {
  const navigate = useNavigate();

  if (!customer) {
    return <div> Error ...</div>;
  }

  return (
    <React.Fragment>
      <Card
        sx={{
          minWidth: 275,
          minHeight: 220,
          border: "1px solid black",
        }}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h6" component="div">
              {customer.company}
            </Typography>
            <Typography
              variant="h6"
              color={customer.isActive ? "green" : "red"}
            >
              {customer.isActive ? "Active" : "Inactive"}
            </Typography>
          </Box>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {customer.industry}
          </Typography>
          <Typography variant="body2">
            {customer.about.slice(0, 30)}...
          </Typography>
          <Box display="flex" alignItems="center" mt={2}>
            {customer.projects.length ? (
              <>
                <FolderIcon /> <Box ml={1}>{customer.projects.length}</Box>
              </>
            ) : (
              "The customer has no projects"
            )}
          </Box>
        </CardContent>
        <CardActions>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={"100%"}
          >
            {customer.projects.length ? (
              <>
                <Box mr={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => navigate(`/edit-customer/${customer.id}`)}
                  >
                    Edit
                  </Button>
                </Box>
                {!customer.isActive ? (
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => onDeleteCustomer(customer)}
                  >
                    Delete
                  </Button>
                ) : null}
              </>
            ) : (
              <Button
                variant="outlined"
                size="small"
                onClick={() => navigate(`/edit-customer/${customer.id}`)}
              >
                Create your first project
              </Button>
            )}
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
