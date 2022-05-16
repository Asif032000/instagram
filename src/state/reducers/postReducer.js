import { getData, generateID } from "../../services/index";
const dummyData = getData()[0];
const reducer = (prevState = dummyData, action) => {

  if ( action.type === "like" ) {
    const e = action.payload;
    const indexOfObjectToBeChanged = prevState.data.findIndex((currentObj) => {
      return currentObj.id == e.target.parentElement.id;
    });
    const newState = Object.assign({}, prevState);
    newState.data[indexOfObjectToBeChanged].user_has_liked = !newState.data[
      indexOfObjectToBeChanged
    ].user_has_liked;
    
    return newState;

  } else if ( action.type === "bookmark" ) {

    // change the status of like or bookmark in particular object and then return updated State
    const e = action.payload; // action.payload contains data for changing prevState i.e. event passed from the button

    const indexOfObjectToBeChanged = prevState.data.findIndex((currentObj) => {
      return currentObj.id == e.target.parentElement.id;
    });

    const newState = Object.assign({}, prevState);
    newState.data[indexOfObjectToBeChanged].user_has_saved = !newState.data[
      indexOfObjectToBeChanged
    ].user_has_saved;

    return newState;

  } else if (action.type === "comment") {

    const { e, username, img, postID } = action.payload;
    if (e?.nativeEvent?.keyCode === 13) {
      const newComment = {
        id: generateID(),
        comment_by: {
          username: username,
          profile_img: img,
        },
        text: e.target.value,
      };
      // set the text field empty again
      e.target.value = "";

      // find index of object where comment is to be pushed
      const indexOfObjectToBeChanged = prevState.data.findIndex(
        (currentObj) => {
          return currentObj.id == postID;
        }
      );
      // const newResponse= { meta: prevState.meta, data: prevState.data }
      const newState = Object.assign({}, prevState);
      newState.data[indexOfObjectToBeChanged].comments.push(newComment);
      return newState;
    }

    return prevState;

  } else {
    
    return prevState;
  }
};

export default reducer;
