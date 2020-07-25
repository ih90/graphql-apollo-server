import getConnection, {
  executeSelect, executeSelectWithParams, executeInsertWithParams,
  executeUpdateWithParams, executeDeleteWithParams,
} from '../utils/dbConnections';

export const getSkillByIds = async (ids) => {
  const connection = await getConnection();
  const query = `SELECT * from skills WHERE id IN (${ids})`;
  const result = await executeSelectWithParams(connection, query, { ids });
  return result[0];
};

export const getSkills = async () => {
  const connection = await getConnection();
  const query = 'SELECT * from skills';
  const results = await executeSelect(connection, query);
  return results;
};

export const updateSkill = async (id, name) => {
  const connection = await getConnection();
  const updateQuery = `UPDATE skills SET name = "${name}" WHERE id = ${id}`;
  return executeUpdateWithParams(connection, updateQuery, { name, id });
};

export const createSkill = async (name) => {
  const connection = await getConnection();
  const updateQuery = `INSERT INTO skills (name) values ("${name}")`;
  return executeInsertWithParams(connection, updateQuery, { name });
};

export const deleteSkillsByIds = async (ids) => {
  const connection = await getConnection();
  const updateQuery = `DELETE FROM skills WHERE id IN (${ids})`;
  try {
    await executeDeleteWithParams(connection, updateQuery, { ids });
    return true;
  } catch (e) {
    throw new Error(`Error while trying to delete entries with ids:${ids}`);
  }
};
