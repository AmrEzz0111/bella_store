import { useActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: useActionTypes.SET_CURRENT_USER,
  payload: user,
});
