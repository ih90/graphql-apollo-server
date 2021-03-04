import queries from './query';
import mutations from './mutations';
import { getJobsByIds } from '../../Job/cdb';
import { getUsersByIds } from '../../User/cdb';

export default {
  UserJobApplication: {
    job: (jobApplication) => getJobsByIds(jobApplication.jobId),
    user: (jobApplication) => getUsersByIds(jobApplication.userId),
  },
  Query: queries,
  Mutation: mutations,
};
