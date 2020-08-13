/* eslint-disable no-console */
const Sequelize = require('sequelize');

export const executeQuery = (connection, query, options) => {
  const resultsPromise = connection.query(query, options);
  return Promise.resolve(resultsPromise);
};

export function executeSelectWithParams(connection, query, params, options = {}) {
  const type = Sequelize.QueryTypes.SELECT;
  const replacements = params;
  try {
    return executeQuery(connection, query.query || query, {
      replacements,
      type,
      ...options,
    });
  } catch (ex) {
    console.error('Select failed', ex);
    throw ex;
  }
}

export function executeSelect(connection, query, options = {}) {
  const type = Sequelize.QueryTypes.SELECT;
  try {
    return executeQuery(connection, query.query || query, { type, ...options });
  } catch (ex) {
    console.error('Select failed', ex);
    throw ex;
  }
}

export async function executeInsertWithParams(connection, query, params, options = {}) {
  const type = Sequelize.QueryTypes.INSERT;
  const replacements = params;
  try {
    const [result] = await executeQuery(connection, query.query || query, {
      replacements,
      type,
      ...options,
    });
    return result;
  } catch (ex) {
    console.error('Insert failed', ex);
    throw ex;
  }
}

export async function executeUpdateWithParams(connection, sql, params, options = {}) {
  const type = Sequelize.QueryTypes.UPDATE;
  const replacements = params;
  try {
    const [result] = await executeQuery(connection, sql, {
      replacements,
      type,
      ...options,

    });
    return result;
  } catch (ex) {
    console.error('Update failed', ex);
    throw ex;
  }
}

export function executeDeleteWithParams(connection, query, params, options = {}) {
  const type = Sequelize.QueryTypes.DELETE;
  const replacements = params;
  try {
    return executeQuery(connection, query.query || query, {
      replacements,
      type,
      ...options,
    });
  } catch (ex) {
    console.error('Delete failed', ex);
    throw ex;
  }
}

const getConnection = () => {
  const sequalize = new Sequelize('mysql://root:internship2020@127.0.0.1:3306/internship');
  sequalize
    .authenticate()
    .then(() => {
      console.log('Connection has been established.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
  return sequalize;
};

export default getConnection;
