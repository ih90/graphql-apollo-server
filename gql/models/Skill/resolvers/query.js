import { getSkills, getSkillByIds } from '../cdb';

export default {
  skill: async (obj, { id }) => getSkillByIds(id),
  skills: async () => getSkills(),
};
