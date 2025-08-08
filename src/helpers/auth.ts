import { getAuthFromLocalStorage } from '../utils/storage';

export const checkScope = (scope: string) => {
  let status = false;
  try {
    const auth = getAuthFromLocalStorage();
    const scopes = scope.split(',');
    scopes.forEach(perm => {
      if (auth.scopes.includes(perm)) {
        status = true;
        return;
      }
    });

    return status;
  } catch (e) {
    return status;
  }
};
