import { getUserSkillsByIds, getUserSkills } from '../cdb';

export default {
  userSkill: async (obj, { id }) => getUserSkillsByIds(id),
  userSkills: async () => getUserSkills(),
};
