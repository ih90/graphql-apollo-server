import mutations from './mutations';
import queries from './query';

export default {
  Skill: {
    id: (skill) => skill.id,
    name: (skill) => skill.name,
  },
  Mutation: mutations,
  Query: queries,
};
