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

const validateCreate(quote) => {
  let messages = [];

  console.log('quote');

  !quote && messages.push('No object is provided');

  !quote.quote && messages.push('Quote is empty');

  !quote.author && messages.push('Author is empty');
  
  quote.quote && quote.quote.length > 255 && messages.push('Author is empty');
  
  quote.author && quote.author.length > 255 && messages.push('Author is empty');

  if (messages.length) {
    let error = new Error(messages.join());
    error.statusCode = 400;

    throw error;
  }
}

const create = async (quote){
  validateCreate(quote);

  const result = await db.query(
    'INSERT INTO quote(quote, author) VALUES ($1, $2) RETURNING *',
    [quote.quote, quote.author]
  );
  let message = 'Error in creating quote';

  result.length && (message = 'Quote Created Successfully');

  return {message}
}

module.exports = {
  getMultiple,
};
