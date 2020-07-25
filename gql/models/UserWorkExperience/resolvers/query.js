import { getUserWorkExperiencesByIds, getUserWorkExperiences } from '../cdb';

export default {
  userWorkExperience: async (obj, { id }) => getUserWorkExperiencesByIds(id),
  userWorkExperiences: async () => getUserWorkExperiences(),
};
