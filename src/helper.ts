export const toggleKeyInObjectArray = (keyname:string, objectId:string, array:any[]):any[] => {
  return array.map(element => {
    if (element.id === objectId) {
      element[keyname] = !element[keyname];
    }
    return element;
  });
};
