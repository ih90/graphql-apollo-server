import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getUserJobApplicationsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from userJobApplications WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUserJobApplications = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from userJobApplications';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateUserJobApplication = async (args) => {
  const connection = await getConnection();
  const updateUserWorkExperienceSql = `UPDATE userJobApplications SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateUserWorkExperienceSql, args);
};

export const createUserJobApplication = async (args) => {
  const connection = await getConnection();
  const createUserWorkExperienceQuery = `
  INSERT userJobApplications (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createUserWorkExperienceQuery, args);
};

export const deleteUserJobApplicationByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM userJobApplications WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
