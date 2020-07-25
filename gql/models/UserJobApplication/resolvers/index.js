import queries from './query';
import mutations from './mutations';
import { getJobsByIds } from '../../Job/cdb';
import { getUsersByIds } from '../../User/cdb';

export default {
  UserJobApplication: {
    job: (app) => getJobsByIds(app.jobId),
    user: (skill) => getUsersByIds(skill.id),
  },
  Query: queries,
  Mutation: mutations,
};
