import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getJobsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from jobs WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getJobs = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from jobs';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateJob = async (args) => {
  const connection = await getConnection();
  const updateJobSql = `UPDATE jobs SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateJobSql, args);
};

export const createJob = async (args) => {
  const connection = await getConnection();
  const createJobQuery = `
  INSERT jobs (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createJobQuery, args);
};

export const deleteJobByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM jobs WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
