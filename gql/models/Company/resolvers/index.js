import { getUsersByIds } from '../../User/cdb';
import { getContactInfoByIds } from '../../ContactInfo/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  Company: {
    user: (company) => getUsersByIds(company.userId),
    contactInfo: (company) => getContactInfoByIds(company.contactInfoId),
  },
  Query: queries,
  Mutation: mutations,
};
