import {
  getContactInfoByIds, updateContactInfo, createContactInfo, deleteContactInfoByIds,
} from '../cdb';

export default {
  createContactInfo: async (obj, args) => {
    const id = await createContactInfo(args);
    return getContactInfoByIds(id);
  },
  updateContactInfo: async (obj, args) => {
    await updateContactInfo(args);
    return getContactInfoByIds(args.id);
  },
  deleteContactInfo: async (obj, args) => deleteContactInfoByIds([args.id]),
  deleteContactInfos: async (obj, args) => deleteContactInfoByIds(args.ids),
};
