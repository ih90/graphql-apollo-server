import {
  getJobSkillsByIds, updateJobSkill, createJobSkill, deleteJobSkillByIds,
} from '../cdb';

export default {
  createJobSkill: async (obj, args) => {
    const id = await createJobSkill(args);
    return getJobSkillsByIds(id);
  },
  updateJobSkill: async (obj, args) => {
    await updateJobSkill(args.id, args);
    return getJobSkillsByIds(args.id);
  },
  deleteJobSkill: async (obj, args) => deleteJobSkillByIds([args.id]),
  deleteJobSkills: async (obj, args) => deleteJobSkillByIds(args.ids),
};
