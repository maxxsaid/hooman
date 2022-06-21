import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://randomuser.me/api/";

export const randomUserApi = createApi({
  reducerPath: "randomUserApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `${baseUrl}?page=3&results=10&seed=abc`,
    }),
  }),
});

export const { useGetUsersQuery } = randomUserApi;
