import getConnection, {
  executeDeleteWithParams,
  executeInsertWithParams,
  executeSelect,
  executeSelectWithParams,
  executeUpdateWithParams,
} from '../utils/dbConnections';

export const getCompaniesByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from companies WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getCompanies = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from companies';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateCompany = async (args) => {
  const connection = await getConnection();
  const updateCompanySql = `UPDATE companies SET updatedAt=NOW() ${Object.keys(args)
    .map((c) => {
      if (c !== 'id') return `\`${c}\`=:${c}`;
      return null;
    })
    .join(', ')} WHERE id= :id`;
  return executeUpdateWithParams(connection, updateCompanySql, args);
};

export const createCompany = async (args) => {
  const connection = await getConnection();
  const createCompanyQuery = `
  INSERT companies (updatedAt, ${Object.keys(args)
    .map((c) => `\`${c}\``)
    .join(', ')})
  VALUES (NOW() , ${Object.keys(args)
    .map((col) => `:${col}`)
    .join(', ')})`;
  return executeInsertWithParams(connection, createCompanyQuery, args);
};

export const deleteCompanyByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = 'DELETE FROM companies WHERE id IN (:ids)';
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
