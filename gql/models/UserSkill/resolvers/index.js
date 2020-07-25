import queries from './query';
import mutations from './mutations';
import { getUsersByIds } from '../../User/cdb';
import { getSkillByIds } from '../../Skill/cdb';

export default {
  UserSkill: {
    user: (skill) => getUsersByIds(skill.userId),
    skill: (skill) => getSkillByIds(skill.skillId),
  },
  Query: queries,
  Mutation: mutations,
};
