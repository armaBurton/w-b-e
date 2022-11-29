const env = process.env;

const config = {
  db: {
    /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || "heffalump.db.elephantsql.com",
    port: env.DB_PORT || "5432",
    user: env.DB_USER || "vzmgdfgj",
    password: env.DB_PASSWORD || "IArgfsDc0UN1tv50VmiNwNlmDqhVP044",
    database: env.DB_NAME || "vzmgdfgj",
  },
  listPerPage: env.List_PER_PAGE || 10,
};

module.exports = config;
