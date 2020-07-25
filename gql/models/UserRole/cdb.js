import getConnection, {
  executeSelect,
  executeSelectWithParams,
} from '../utils/dbConnections';

export const getUserRolesByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from userRoles WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUserRoles = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from userRoles';
  const results = await executeSelect(connection, query);
  return results;
};
