import { RSAA } from "redux-api-middleware";
import { isTypeRequest } from "Utils/validationHelper";

export default store => next => action => {
  const callApi = action[RSAA];

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    const { types } = callApi;
    console.log(types, "types");

    //check if auth is required or not
    if (
      types &&
      types.length === 3 &&
      types[0].constructor.name === "Object" &&
      types[0].type &&
      isTypeRequest(types[0].type)
    ) {
      // Add api keys here
      callApi.headers = {
        ...callApi.headers,
        Authorization: ``, 
        "Content-Type": "application/json",
        Accept: "application/json,*/*"
      }
      return next(action);

    } else {
      return next(action);
    }
  }
};
