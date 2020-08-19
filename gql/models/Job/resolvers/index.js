import { getCompaniesByIds } from '../../Company/cdb';
import { getJobSkillsByJobId } from '../../JobSkill/cdb';
import { getJobRequirementsByJobId } from '../../JobRequirement/cdb';
import { getJobBenefitsByJobId } from '../../JobBenefit/cdb';

import queries from './query';
import mutations from './mutations';

export default {
  Job: {
    company: job => getCompaniesByIds(job.companyId),
    jobSkills: job => getJobSkillsByJobId(job.id),
    jobRequirements: job => getJobRequirementsByJobId(job.id),
    jobBenefits: job => getJobBenefitsByJobId(job.id),
    createdAt: job => {
      console.log('job', job);
      return job.createdAt;
    }
  },
  Query: queries,
  Mutation: mutations,
};
