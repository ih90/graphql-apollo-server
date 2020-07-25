import {
  getSkillByIds, updateSkill, createSkill, deleteSkillsByIds,
} from '../cdb';

export default {
  createSkill: async (obj, args) => {
    const id = await createSkill(args.name);
    return getSkillByIds(id);
  },
  updateSkill: async (obj, args) => {
    await updateSkill(args.id, args.name);
    return getSkillByIds(args.id);
  },
  deleteSkill: async (obj, args) => deleteSkillsByIds([args.id]),
  deleteSkills: async (obj, args) => deleteSkillsByIds(args.ids),
};
