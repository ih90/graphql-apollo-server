import {
  getJobBenefitsByIds, updateJobBenefit, createJobBenefit, deleteJobBenefitByIds,
} from '../cdb';

export default {
  createJobBenefit: async (obj, args) => {
    const id = await createJobBenefit(args);
    return getJobBenefitsByIds(id);
  },
  updateJobBenefit: async (obj, args) => {
    await updateJobBenefit(args);
    return getJobBenefitsByIds(args.id);
  },
  deleteJobBenefit: async (obj, args) => deleteJobBenefitByIds([args.id]),
  deleteJobBenefits: async (obj, args) => deleteJobBenefitByIds(args.ids),
};
