import { getJobBenefitsByIds, getJobBenefits } from '../cdb';

export default {
  jobBenefit: async (obj, { id }) => getJobBenefitsByIds(id),
  jobBenefits: async () => getJobBenefits(),
};
