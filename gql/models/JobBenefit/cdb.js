import getConnection, {
  executeSelect, executeSelectWithParams, executeInsertWithParams,
  executeUpdateWithParams, executeDeleteWithParams,
} from '../utils/dbConnections';

export const getJobBenefitsByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from jobBenefits WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getJobBenefits = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from jobBenefits';
  const results = await executeSelect(connection, query);
  return results;
};

export const getJobBenefitsByJobId = async (jobId) => {
  const connection = await getConnection();
  const query = 'SELECT * from jobBenefits where jobId = :jobId';
  const results = await executeSelectWithParams(connection, query, { jobId });
  return results;
};

export const updateJobBenefit = async (args) => {
  const connection = await getConnection();
  const updateJobBenefitSql = `UPDATE jobBenefits SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateJobBenefitSql, args);
};

export const createJobBenefit = async (args) => {
  const connection = await getConnection();
  const createJobBenefitQuery = `
  INSERT jobBenefits (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createJobBenefitQuery, args);
};

export const deleteJobBenefitByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM jobBenefits WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
