const db = require("./db");
const { getOffset, emptyOrRows } = require("../helper");
const config = require("../config");

const getMultiple = async (page = 1) => {
  const offset = getOffset(page, config.listPerPage);
  const rows = await db.query(
    "SELECT id, quote, author FROM quote OFFSET $1 LIMIT $2",
    [offset, config.listPerPage]
  );
  const data = emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
};

module.exports = {
  getMultiple,
};
