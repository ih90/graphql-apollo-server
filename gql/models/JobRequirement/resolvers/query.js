import { getJobRequirementsByIds, getJobRequirements } from '../cdb';

export default {
  jobRequirement: async (obj, { id }) => getJobRequirementsByIds(id),
  jobRequirements: async () => getJobRequirements(),
};
