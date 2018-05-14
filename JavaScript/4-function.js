'use strict';

const logger = (level = 'info') => {

  const colors = {
    warning: '\x1b[1;33m',
    error: '\x1b[0;31m',
    info: '\x1b[1;37m'
  };

  const color = colors[level];

  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };

};

const warning = logger('warning');
warning('Hello');
