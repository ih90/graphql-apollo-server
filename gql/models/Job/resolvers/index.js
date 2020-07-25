import { getCompaniesByIds } from '../../Company/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  Job: {
    company: (info) => getCompaniesByIds(info.companyId),
  },
  Query: queries,
  Mutation: mutations,
};
