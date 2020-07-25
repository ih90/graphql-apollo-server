import {
  getJobsByIds, updateJob, createJob, deleteJobByIds,
} from '../cdb';

export default {
  createJob: async (obj, args) => {
    const id = await createJob(args);
    return getJobsByIds(id);
  },
  updateJob: async (obj, args) => {
    await updateJob(args);
    return getJobsByIds(args.id);
  },
  deleteJob: async (obj, args) => deleteJobByIds([args.id]),
  deleteJobs: async (obj, args) => deleteJobByIds(args.ids),
};
