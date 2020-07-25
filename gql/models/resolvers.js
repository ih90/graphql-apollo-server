import { merge } from 'lodash';
import skill from './Skill';
import country from './Country';
import contactInfo from './ContactInfo';
import company from './Company';
import userRole from './UserRole';
import user from './User';
import job from './Job';
import jobBenefit from './JobBenefit';
import jobRequirement from './JobRequirement';
import jobSkill from './JobSkill';
import userSkill from './UserSkill';
import userJobApplication from './UserJobApplication';
import userEducation from './UserEducation';
import userWorkExperience from './UserWorkExperience';

export default merge(
  skill.resolvers,
  country.resolvers,
  contactInfo.resolvers,
  company.resolvers,
  userRole.resolvers,
  user.resolvers,
  job.resolvers,
  jobBenefit.resolvers,
  jobRequirement.resolvers,
  jobSkill.resolvers,
  userSkill.resolvers,
  userJobApplication.resolvers,
  userEducation.resolvers,
  userWorkExperience.resolvers,
);
