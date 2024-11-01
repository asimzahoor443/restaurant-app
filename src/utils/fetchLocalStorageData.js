export const fetchUser = () => {
  const userInfo =
    localStorage.getItem('user') !== 'userdefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();

  return userInfo;
};
