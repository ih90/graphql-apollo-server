import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getUserSkillsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userSkills WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getUserSkillsByUserId = async (userId) => {
  const connection = await getConnection();
  const query = 'SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userSkills where userId = :userId';
  const results = await executeSelectWithParams(connection, query, { userId });
  return results;
};

export const getUserSkills = async () => {
  const connection = await getConnection();
  const query = 'SELECT *, UNIX_TIMESTAMP(createdAt) as createdAt, UNIX_TIMESTAMP(updatedAt) as updatedAt from userSkills';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateUserSkill = async (args) => {
  const connection = await getConnection();
  const updateUserWorkExperienceSql = `UPDATE userSkills SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateUserWorkExperienceSql, args);
};

export const createUserSkill = async (args) => {
  const connection = await getConnection();
  const createUserWorkExperienceQuery = `
  INSERT userSkills (createdAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createUserWorkExperienceQuery, args);
};

export const deleteUserSkillByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM userSkills WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
