import { getJobsByIds, getJobs } from '../cdb';

export default {
  job: async (obj, { id }) => getJobsByIds(id),
  jobs: async () => getJobs(),
};
