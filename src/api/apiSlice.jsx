import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/api" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
      onQueryError: () => {},
    }),
    getUser: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      onQueryError: (error) => {
        console.log(error);
      },
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user._id}`,
        method: "PATCH",
        body: user,
      }),
      onQueryError: (error) => {
        console.log(error);
      },
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        body: id,
      }),
      onQueryError: (error) => {
        console.log(error);
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = apiSlice;
export default apiSlice.reducer;
