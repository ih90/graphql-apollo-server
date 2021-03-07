const sqlstring = require('sqlstring');

const sqlOperatorsTransform = {
  contains: (value, params) => {
    params.push(`%${value}%`);
    return 'LIKE ?';
  },
  beginsWith: (value, params) => {
    params.push(`${value}%`);
    return 'LIKE ?';
  },
  endsWith: (value, params) => {
    params.push(`%${value}`);
    return 'LIKE ?';
  },
  doesNotContain: (value, params) => {
    params.push(`%${value}%`);
    return 'NOT LIKE ?';
  },
  doesNotBeginWith: (value, params) => {
    params.push(`${value}%`);
    return 'NOT LIKE ?';
  },
  doesNotEndWith: (value, params) => {
    params.push(`%${value}`);
    return 'NOT LIKE ?';
  },
  in: (value, params) => {
    if (Array.isArray(value) && value.length === 0) {
      return 'IN (SELECT * FROM (SELECT NULL) AS bad_search WHERE 1 != 1)';
    }
    params.push(value);
    return 'IN (?)';
  },
  notIn: (value, params) => {
    if (Array.isArray(value) && value.length === 0) {
      return 'IN (SELECT * FROM (SELECT NULL) AS bad_search WHERE 1 != 1)';
    }
    params.push(value);
    return 'NOT IN (?)';
  },
  eq: (value, params) => {
    params.push(value);
    return '= ?';
  },
  neq: (value, params) => {
    params.push(value);
    return '<> ?';
  },
  gt: (value, params) => {
    params.push(value);
    return '> ?';
  },
  lt: (value, params) => {
    params.push(value);
    return '< ?';
  },
  gte: (value, params) => {
    params.push(value);
    return '>= ?';
  },
  lte: (value, params) => {
    params.push(value);
    return '<= ?';
  },
};

const wrap = (value) => `(${value})`;

const operator = (name, value, params) => {
  if (!sqlOperatorsTransform[name]) {
    throw new Error(`Operator not found ${name}`);
  }
  return sqlOperatorsTransform[name](value, params);
};

const field = async (name, node, fieldNameTranslators = {}, params) => {
  const key = Object.keys(node)[0];
  const fieldNameTranslator = fieldNameTranslators[name] || fieldNameTranslators.default || name;
  const fieldName = fieldNameTranslator.field || fieldNameTranslator;
  return `${fieldName} ${operator(key, node[key], params)}`;
};

const handleSearch = async (searchObject, fieldNameTranslators) => {
  // eslint-disable-next-line no-unused-vars
  const research = async (search) => handleSearch(search, fieldNameTranslators);
  const { search, params } = searchObject;
  if (!search || Object.keys(search).length < 1) {
    return '';
  }
  const key = Object.keys(search)[0];
  if (['and', 'or'].includes(key)) {
    const searches = await Promise.all(
      search[key].map((v) => research({ search: v, params })),
    );
    const sanitized = searches.filter(Boolean).map((s) => s.trim());
    return wrap(sanitized.join(` ${key.toUpperCase()} `));
  }
  if (key === 'not') {
    return `NOT ${wrap(await research({ search: search.not, params }))}`;
  }
  return field(key, search[key], fieldNameTranslators, params);
};

export default async function searchToSql(
  search,
  fieldNameTranslators,
) {
  const params = [];
  const searchable = { search, params };
  const predicate = await handleSearch(
    searchable,
    fieldNameTranslators,
  );
  return {
    predicate,
    params,
    get sql() {
      return sqlstring.format(predicate, params);
    },
  };
}
