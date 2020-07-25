import queries from './query';
import mutations from './mutations';
import { getUsersByIds } from '../../User/cdb';

export default {
  UserWorkExperience: {
    user: (workExp) => getUsersByIds(workExp.userId),
  },
  Query: queries,
  Mutation: mutations,
};
