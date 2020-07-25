import { getJobsByIds } from '../../Job/cdb';
import { getSkillByIds } from '../../Skill/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  JobSkill: {
    job: (skill) => getJobsByIds(skill.jobId),
    skill: (skill) => getSkillByIds(skill.skillId),
  },
  Query: queries,
  Mutation: mutations,
};
