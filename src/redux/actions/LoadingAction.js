export const LoadingCondition = () => async (dispatch) => {
  try {
    dispatch({ type: "loadingdata" });
  } catch (error) {
    dispatch({ type: "loadingerror", error: error });
  }
};

export const StopLoadingCondition = () => async (dispatch) => {
  try {
    dispatch({ type: "stoploadingdata" });
  } catch (error) {
    dispatch({ type: "loadingerror", error: error });
  }
};
