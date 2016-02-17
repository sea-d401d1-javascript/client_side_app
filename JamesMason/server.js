'use strict';
require('express')()
  .use(require('express')
  .static(__dirname + '/build'))
  .listen(5000, () => console.log('Server running on port 5000.'));
