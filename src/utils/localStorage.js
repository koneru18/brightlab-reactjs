export function removeAccessToken() {
  localStorage.removeItem('accessToken');
}

export function saveAccessToken(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}

export function loadAccessToken() {
  return localStorage.getItem('accessToken');
}
