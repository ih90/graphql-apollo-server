import queries from './query';
import mutations from './mutations';
import { getUsersByIds } from '../../User/cdb';

export default {
  UserEducation: {
    user: (education) => getUsersByIds(education.userId),
  },
  Query: queries,
  Mutation: mutations,
};
