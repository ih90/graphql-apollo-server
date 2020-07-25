import { getJobSkillsByIds, getJobSkills } from '../cdb';

export default {
  jobSkill: async (obj, { id }) => getJobSkillsByIds(id),
  jobSkills: async () => getJobSkills(),
};
