import { getUsersByIds, getUsers } from '../cdb';

export default {
  user: async (obj, { id }) => getUsersByIds(id),
  users: async (obj, { search }) => getUsers(search),
};
