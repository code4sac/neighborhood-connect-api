const es = require('event-stream');
const fs = require('fs');
const path = require('path');

module.exports = function StreamHandler(client, filePath, query, type) {
  const stream = fs.createReadStream(path.join(__dirname, filePath));
  stream.pipe(es.split())
      .pipe(es.map(async function(row) {
        if (row !== '') {
          await query(client, row)
              .catch((e) => console.log(type + ' insert error', row));
        }
      }));
  return stream;
};
