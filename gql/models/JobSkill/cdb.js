import getConnection, {
  executeSelect, executeSelectWithParams, executeInsertWithParams,
  executeUpdateWithParams, executeDeleteWithParams,
} from '../utils/dbConnections';

export const getJobSkillsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from jobSkills WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getJobSkills = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from jobSkills';
  const results = await executeSelect(connection, query);
  return results;
};

export const getJobSkillsByJobId = async (jobId) => {
  const connection = await getConnection();
  const query = 'SELECT * from jobSkills where jobId = :jobId';
  const results = await executeSelectWithParams(connection, query, { jobId });
  return results;
};

export const updateJobSkill = async (args) => {
  const connection = await getConnection();
  const updateJobSkillSql = `UPDATE jobSkills SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateJobSkillSql, args);
};

export const createJobSkill = async (args) => {
  const connection = await getConnection();
  const createJobSkillQuery = `
  INSERT jobSkills (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createJobSkillQuery, args);
};

export const deleteJobSkillByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM jobSkills WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
