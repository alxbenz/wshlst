export const toggleKeyInObjectArray: toggleKeyInObjectArray = (
  keyname,
  objectId,
  array,
  idName = 'entryId'
) => {
  return array.map(element => {
    if (element[idName] === objectId) {
      element[keyname] = !element[keyname];
    }
    return element;
  });
};

export const formatValueToCurrency: formatValueToCurrency = (
  value,
  currency = 'EUR',
  lang = 'de-DE'
) => {
  const biggerUnit = value / 100;
  const formattedCurrency = biggerUnit.toLocaleString(lang, {
    style: 'currency',
    currency
  });

  return formattedCurrency;
};
