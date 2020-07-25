import { getUserRolesByIds, getUserRoles } from '../cdb';

export default {
  userRole: async (obj, { id }) => getUserRolesByIds(id),
  userRoles: async () => getUserRoles(),
};
