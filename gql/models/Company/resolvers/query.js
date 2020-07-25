import { getCompaniesByIds, getCompanies } from '../cdb';

export default {
  company: async (obj, { id }) => getCompaniesByIds(id),
  companies: async () => getCompanies(),
};
