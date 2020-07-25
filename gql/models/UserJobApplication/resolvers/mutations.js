import {
  getUserJobApplicationsByIds, updateUserJobApplication,
  createUserJobApplication, deleteUserJobApplicationByIds,
} from '../cdb';

export default {
  createUserJobApplication: async (obj, args) => {
    const id = await createUserJobApplication(args);
    return getUserJobApplicationsByIds(id);
  },
  updateUserJobApplication: async (obj, args) => {
    await updateUserJobApplication(args);
    return getUserJobApplicationsByIds(args.id);
  },
  deleteUserJobApplication: async (obj, args) => deleteUserJobApplicationByIds([args.id]),
  deleteUserJobApplications: async (obj, args) => deleteUserJobApplicationByIds(args.ids),
};
