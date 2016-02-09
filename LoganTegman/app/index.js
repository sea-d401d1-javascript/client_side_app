'use strict';

import moment from 'moment';

setInterval(() => {
  document.getElementById('time')
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);
