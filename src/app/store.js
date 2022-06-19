import { configureStore } from "@reduxjs/toolkit";

import { randomUserApi } from "../services/randomUserApi";

export default configureStore({
  reducer: {
    [randomUserApi.reducerPath]: randomUserApi.reducer,
  },
});
