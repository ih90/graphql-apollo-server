import {
  getCompaniesByIds, updateCompany, createCompany, deleteCompanyByIds,
} from '../cdb';

export default {
  createCompany: async (obj, args) => {
    const id = await createCompany(args);
    return getCompaniesByIds(id);
  },
  updateCompany: async (obj, args) => {
    await updateCompany(args);
    return getCompaniesByIds(args.id);
  },
  deleteCompany: async (obj, args) => deleteCompanyByIds([args.id]),
  deleteCompanies: async (obj, args) => deleteCompanyByIds(args.ids),
};
