import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Customer } from "../../interfaces/customer.interface";
import FolderIcon from "@mui/icons-material/Folder";
import { useNavigate } from "react-router";

interface CustomerCardProps {
  customer: Customer;
  hasError: boolean;
  onDeleteCustomer: (customer: Customer) => void;
}

export const CustomerCard = ({
  customer,
  hasError,
  onDeleteCustomer,
}: CustomerCardProps) => {
  const navigate = useNavigate();

  if (hasError) {
    return (
      <Card
        sx={{
          minWidth: 275,
          minHeight: 220,
          border: "1px solid black",
        }}
      >
        The is an error with loading the customer. Please ask customer support
        for help!
      </Card>
    );
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
              id="customer-status"
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
              <Box id="projects-icon">
                <FolderIcon /> <Box ml={1}>{customer.projects.length}</Box>
              </Box>
            ) : (
              <span id="no-projects-description">
                "The customer has no projects"
              </span>
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
                    id="edit-button"
                    variant="outlined"
                    size="small"
                    onClick={() => navigate(`/edit-customer/${customer.id}`)}
                  >
                    Edit
                  </Button>
                </Box>
                {!customer.isActive ? (
                  <Button
                    id="delete-button"
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
                id="create-your-first-project-button"
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
