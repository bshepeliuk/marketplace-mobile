export const getShortName = (fullName) => {
  if (!fullName) return;

  const fullNameArr = fullName.split(' ');
  let shortName;

  if (fullNameArr.length >= 2) {
    const [name, surname] = fullNameArr;
    shortName = `${name[0]}${surname[0]}`;
  } else {
    const [firstName] = fullNameArr;
    shortName = firstName[0];
  }

  return shortName;
};
