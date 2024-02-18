import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./Slices/Userslice";
import podcastReducer from "./Slices/podacastslices";

export default configureStore({
  reducer: {
    user: userReducer,
    podcasts: podcastReducer,
  },
});
