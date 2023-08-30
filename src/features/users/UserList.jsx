import React, { useEffect } from "react"; // Import React
import { useGetUsersQuery } from "../api/apiSlice";
import { Box, Grid, Stack } from "@mui/material";
import DataTable from "../../components/DataTable";
import IconGroup from "../../components/IconGroup";

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
          alignItems="flex-end"
          spacing={1}
        >
          <IconGroup getData={getData} />
          <Box width="100%">
            <DataTable rows={users} isSuccess={isSuccess} />
          </Box>
        </Stack>
      </>
    );
  }

  return null;
};

export default UserList;
