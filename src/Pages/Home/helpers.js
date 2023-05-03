const TOKEN_STRING = 'hg_wedding';
export const getToken = () => {
  return !!document.cookie
    .split(';')
    .find((e) => e.includes(TOKEN_STRING))
    ?.split('=')[1];
};

export const setToken = () => {
  document.cookie = `${TOKEN_STRING}=true; domain=.gudbrandhedvig.no; path=/`;
  document.cookie = `${TOKEN_STRING}=true; domain=localhost; path=/`;
};
