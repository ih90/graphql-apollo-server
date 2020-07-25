import getConnection, {
  executeSelect, executeSelectWithParams, executeInsertWithParams,
  executeUpdateWithParams, executeDeleteWithParams,
} from '../utils/dbConnections';

export const getJobRequirementsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from jobRequirements WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getJobRequirements = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from jobRequirements';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateJobRequirement = async (args) => {
  const connection = await getConnection();
  const updateJobRequirementSql = `UPDATE jobRequirements SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateJobRequirementSql, args);
};

export const createJobRequirement = async (args) => {
  const connection = await getConnection();
  const createJobRequirementQuery = `
  INSERT jobRequirements (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createJobRequirementQuery, args);
};

export const deleteJobRequirementByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM jobRequirements WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
