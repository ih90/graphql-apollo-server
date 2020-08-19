import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getUsersByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from users WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUsers = async () => {
  const connection = await getConnection();
  const query = 'SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from users';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateUser = async (args) => {
  const connection = await getConnection();
  const updateUserSql = `UPDATE users SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateUserSql, args);
};

export const createUser = async (args) => {
  const connection = await getConnection();
  const createUserQuery = `
  INSERT users (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createUserQuery, args);
};

export const deleteUserByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM users WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
