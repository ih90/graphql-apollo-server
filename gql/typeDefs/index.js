import Country from './Country';
import Company from './Company';
import ContactInfo from './ContactInfo';
import Skill from './Skill';
import Root from './Root';
import UserRole from './UserRole';
import UserSkill from './UserSkill';
import UserJobApplication from './UserJobApplication';
import UserEducation from './UserEducation';
import UserWorkExperience from './UserWorkExperience';
import User from './User';
import Job from './Job';
import JobBenefit from './JobBenefit';
import JobRequirement from './JobRequirements';
import JobSkill from './JobSkill';
import UserSearch from './User/search';
import searches from './Search';

const typeDefsSearches = [UserSearch];

const typeDefs = [Root, Skill, Country, ContactInfo, UserRole,
  UserSkill, User, Company, Job, JobBenefit,
  JobRequirement, JobSkill, UserJobApplication,
  UserEducation, UserWorkExperience, ...typeDefsSearches, ...searches];

export default typeDefs;
