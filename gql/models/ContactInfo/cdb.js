import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getContactInfoByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from contactInfos WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getContactInfos = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from contactInfos';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateContactInfo = async (args) => {
  const connection = await getConnection();
  const updateContactInfoSql = `UPDATE contactInfos SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateContactInfoSql, args);
};

export const createContactInfo = async (args) => {
  const connection = await getConnection();
  const createContactInfoQuery = `
  INSERT contactInfos (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createContactInfoQuery, args);
};

export const deleteContactInfoByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM contactInfos WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
