export const storeToken = (token : string) => {
  localStorage.setItem('jwtToken', token);
}

export const getToken = (): string | null => {
  return localStorage.getItem('jwtToken');
}

export const removeToken = () => {
  localStorage.removeItem('addCollection');
  localStorage.removeItem('jwtToken');
};

export const decodeToken = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(window.atob(base64));
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};

export const isTokenExpired = (token: string): boolean => {
  const decoded = decodeToken(token);
  if (!decoded) return true;

  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};

export const isAuthenticated = (): boolean => {
  const token = getToken();
  if (!token) return false;

  return !isTokenExpired(token);
};