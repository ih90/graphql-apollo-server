import queries from './query';
import mutations from './mutations';
import { getContactInfoByIds } from '../../ContactInfo/cdb';
import { getUserRolesByIds } from '../../UserRole/cdb';
import { getUserEducationsByUserId } from '../../UserEducation/cdb';
import { getUserSkillsByUserId } from '../../UserSkill/cdb';
import { getUserWorkExperiencesByUserId } from '../../UserWorkExperience/cdb';

export default {
  User: {
    contactInfo: (user) => getContactInfoByIds(user.contactInfoId),
    userRole: (user) => getUserRolesByIds(user.userRoleId),
    userEducations: (user) => getUserEducationsByUserId(user.id),
    userSkills: (user) => getUserSkillsByUserId(user.id),
    userWorkExperiences: (user) => getUserWorkExperiencesByUserId(user.id),
  },
  Query: queries,
  Mutation: mutations,
};
