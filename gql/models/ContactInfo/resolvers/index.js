import { getCountriesByIds } from '../../Country/cdb';
import queries from './query';
import mutations from './mutations';

export default {
  ContactInfo: {
    country: (info) => getCountriesByIds(info.countryId),
  },
  Query: queries,
  Mutation: mutations,
};
