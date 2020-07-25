import { getUserEducationByIds, getUserEducations } from '../cdb';

export default {
  userEducation: async (obj, { id }) => getUserEducationByIds(id),
  userEducations: async () => getUserEducations(),
};
