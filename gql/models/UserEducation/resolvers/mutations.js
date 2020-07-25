import {
  getUserEducationByIds, updateUserEducation, createUserEducation, deleteUserEducationByIds,
} from '../cdb';

export default {
  createUserEducation: async (obj, args) => {
    const id = await createUserEducation(args);
    return getUserEducationByIds(id);
  },
  updateUserEducation: async (obj, args) => {
    await updateUserEducation(args);
    return getUserEducationByIds(args.id);
  },
  deleteUserEducation: async (obj, args) => deleteUserEducationByIds([args.id]),
  deleteUserEducations: async (obj, args) => deleteUserEducationByIds(args.ids),
};
