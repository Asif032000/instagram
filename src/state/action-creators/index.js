export const toggleLike = (like) => {
    return (dispatch) => {
      dispatch({ type: "like", payload: like });
    };
  };
  export const toggleBookmark = (bookmark) => {
    return (dispatch) => {
      dispatch({ type: "bookmark", payload: bookmark });
    };
  };
  export const addComment = (comment) => {
    return (dispatch) => {
      dispatch({ type: "comment", payload: comment})
    }
  }
  