import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getUserEducationByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userEducations WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUserEducations = async () => {
  const connection = await getConnection();
  const query = 'SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userEducations';
  const results = await executeSelect(connection, query);
  return results;
};

export const getUserEducationsByUserId = async (userId) => {
  const connection = await getConnection();
  const query = 'SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userEducations where userId = :userId';
  const results = await executeSelectWithParams(connection, query, { userId });
  return results;
};

export const updateUserEducation = async (args) => {
  const connection = await getConnection();
  const updateUserEducationSql = `UPDATE userEducations SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateUserEducationSql, args);
};

export const createUserEducation = async (args) => {
  const connection = await getConnection();
  const createUserEducationQuery = `
  INSERT userEducations (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createUserEducationQuery, args);
};

export const deleteUserEducationByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM userEducations WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};

export default getUserEducations;
