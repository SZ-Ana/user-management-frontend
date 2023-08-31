import React, { useEffect } from "react"; // Import React
import { useGetUsersQuery } from "../api/apiSlice";
import { Box, Grid, Stack, Typography } from "@mui/material";
import DataTable from "../components/DataTable";
import IconGroup from "../components/IconGroup";

const UserList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch: refetchUsers,
  } = useGetUsersQuery();

  const getData = () => {
    refetchUsers();
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (isSuccess) {
    return (
      <>
        <Stack
          mt={2}
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
        >
          <Typography
            variant="h1"
            sx={{ my: 4, textAlign: "center", color: "primary.main" }}
          >
            Manage Users
          </Typography>
          <IconGroup getData={getData} />
          <Box width="100%">
            {users.data.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <i>{"No users found."}</i>
              </div>
            ) : (
              <DataTable rows={users} isSuccess={isSuccess} getData={getData} />
            )}
          </Box>
        </Stack>
      </>
    );
  }

  return null;
};

export default UserList;
