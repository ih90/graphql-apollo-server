import {
  getUserWorkExperiencesByIds, updateUserWorkExperience,
  createUserWorkExperience, deleteUserWorkExperiencesByIds,
} from '../cdb';

export default {
  createUserWorkExperience: async (obj, args) => {
    const id = await createUserWorkExperience(args);
    return getUserWorkExperiencesByIds(id);
  },
  updateUserWorkExperience: async (obj, args) => {
    await updateUserWorkExperience(args);
    return getUserWorkExperiencesByIds(args.id);
  },
  deleteUserWorkExperience: async (obj, args) => deleteUserWorkExperiencesByIds([args.id]),
  deleteUserWorkExperiences: async (obj, args) => deleteUserWorkExperiencesByIds(args.ids),
};
