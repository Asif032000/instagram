import data from "../utilities/fixtures.json"
export const getData = () => {
    return data
}
export const generateID= () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}
export const updateLocalStorage = (newData)=> {
  window.localStorage.removeItem("InstagramData")
  window.localStorage.setItem("InstagramData", JSON.stringify(newData))  
}