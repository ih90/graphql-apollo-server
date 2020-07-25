import { getCountriesByIds, getCountries } from '../cdb';

export default {
  country: async (obj, { id }) => getCountriesByIds(id),
  counties: async () => getCountries(),
};
