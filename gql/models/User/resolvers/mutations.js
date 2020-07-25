import {
  getUsersByIds, updateUser, createUser, deleteUserByIds,
} from '../cdb';

export default {
  createUser: async (obj, args) => {
    const id = await createUser(args);
    return getUsersByIds(id);
  },
  updateUser: async (obj, args) => {
    await updateUser(args);
    return getUsersByIds(args.id);
  },
  deleteUser: async (obj, args) => deleteUserByIds([args.id]),
  deleteUsers: async (obj, args) => deleteUserByIds(args.ids),
};
