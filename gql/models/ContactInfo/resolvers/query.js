import { getContactInfoByIds, getContactInfos } from '../cdb';

export default {
  contactInfo: async (obj, { id }) => getContactInfoByIds(id),
  contactInfos: async () => getContactInfos(),
};
