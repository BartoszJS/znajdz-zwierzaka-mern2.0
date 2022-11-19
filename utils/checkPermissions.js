import { UnAuthenticatedError } from '../errors/index.js';

const checkPermissions = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;

  throw new UnAuthenticatedError('Nie masz dostępu');
};

export default checkPermissions;
