import { getJobsByIds } from '../../Job/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  JobBenefit: {
    job: (benefit) => getJobsByIds(benefit.jobId),
  },
  Query: queries,
  Mutation: mutations,
};
