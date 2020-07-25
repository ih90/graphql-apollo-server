// import mutations from './mutations';
import { getJobsByIds } from '../../Job/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  JobRequirement: {
    job: (req) => getJobsByIds(req.jobId),
  },
  Query: queries,
  Mutation: mutations,
};
