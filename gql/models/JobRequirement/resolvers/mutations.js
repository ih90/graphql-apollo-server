import {
  getJobRequirementsByIds, updateJobRequirement, createJobRequirement, deleteJobRequirementByIds,
} from '../cdb';

export default {
  createJobRequirement: async (obj, args) => {
    const id = await createJobRequirement(args);
    return getJobRequirementsByIds(id);
  },
  updateJobRequirement: async (obj, args) => {
    await updateJobRequirement(args);
    return getJobRequirementsByIds(args.id);
  },
  deleteJobRequirement: async (obj, args) => deleteJobRequirementByIds([args.id]),
  deleteJobRequirements: async (obj, args) => deleteJobRequirementByIds(args.ids),
};
