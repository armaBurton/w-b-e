const db = require("./db");
const { getOffset, emptyOrRows } = require("../helper");
const config = require("../config");

const getMultiple = async (page = 1) => {
  const offset = getOffset(page, config.listPerPage);
  const rows = await db.query();
};
