import getConnection, { executeSelect, executeSelectWithParams } from '../utils/dbConnections';

export const getCountriesByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from countries WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getCountries = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from countries';
  const results = await executeSelect(connection, query);
  return results;
};
