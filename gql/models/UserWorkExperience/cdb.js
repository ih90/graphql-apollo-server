import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getUserWorkExperiencesByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from userWorkExperiences WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUserWorkExperiences = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from userWorkExperiences';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateUserWorkExperience = async (args) => {
  const connection = await getConnection();
  const updateUserWorkExperienceSql = `UPDATE userWorkExperiences SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateUserWorkExperienceSql, args);
};

export const createUserWorkExperience = async (args) => {
  const connection = await getConnection();
  const createUserWorkExperienceQuery = `
  INSERT userWorkExperiences (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createUserWorkExperienceQuery, args);
};

export const deleteUserWorkExperiencesByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM userWorkExperiences WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
