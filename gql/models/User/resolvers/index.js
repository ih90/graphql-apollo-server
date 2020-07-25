import queries from './query';
import mutations from './mutations';
import { getContactInfoByIds } from '../../ContactInfo/cdb';
import { getUserRolesByIds } from '../../UserRole/cdb';

export default {
  User: {
    contactInfo: (user) => getContactInfoByIds(user.contactInfoId),
    userRole: (user) => getUserRolesByIds(user.userRoleId),
  },
  Query: queries,
  Mutation: mutations,
};
