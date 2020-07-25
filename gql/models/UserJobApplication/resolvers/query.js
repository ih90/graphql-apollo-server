import { getUserJobApplicationsByIds, getUserJobApplications } from '../cdb';

export default {
  userJobApplication: async (obj, { id }) => getUserJobApplicationsByIds(id),
  userJobApplications: async () => getUserJobApplications(),
};
