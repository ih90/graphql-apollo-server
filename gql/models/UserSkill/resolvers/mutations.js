import {
  getUserSkillsByIds, updateUserSkill, createUserSkill, deleteUserSkillByIds,
} from '../cdb';

export default {
  createUserSkill: async (obj, args) => {
    const id = await createUserSkill(args);
    return getUserSkillsByIds(id);
  },
  updateUserSkill: async (obj, args) => {
    await updateUserSkill(args);
    return getUserSkillsByIds(args.id);
  },
  deleteUserSkill: async (obj, args) => deleteUserSkillByIds([args.id]),
  deleteUserSkills: async (obj, args) => deleteUserSkillByIds(args.ids),
};
