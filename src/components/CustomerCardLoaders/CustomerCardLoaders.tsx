import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

export default function CustomerCardLoaders() {
  return (
    <div className="customers-list-wrapper">
      {[...Array(12)].map((loader, index) => {
        return (
          <Stack spacing={2} m={1} key={index}>
            <Skeleton variant="text" width={"80%"} height={40} />
            <Skeleton variant="text" width={"20%"} height={20} />
            <Skeleton variant="text" width={"40%"} height={20} />
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              style={{ marginTop: "1.5rem" }}
            >
              <Box mr={3}>
                <Skeleton variant="rounded" width={64} height={30} />
              </Box>
              <Skeleton variant="rounded" width={64} height={30} />
            </Box>
          </Stack>
        );
      })}
    </div>
  );
}
