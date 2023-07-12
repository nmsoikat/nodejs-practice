const { exec } = require('child_process')

exec('ls -lh', (err, stdOut, stdErr) => {
  //err while code executing
  if (err) {
    console.log('🚀 ~ exec [ls -lh] ~ err:', err.message);
    return;
  }

  //err while command executing 
  if (stdErr) {
    console.log('🚀 ~ exec [ls -lh] ~ stdErr:', stdErr);
    return;
  }

  console.log('🚀 ~ exec [ls -lh] ~ stdOut:', stdOut);
})

/**
 * execute and buffer all result then output to console
 * there for large output command cannot be executed
 */

exec('find /', (err, stdOut, stdErr) => {
  //err while code executing
  if (err) {
    console.log('🚀 ~ exec [find /] ~ err:', err.message);
    return;
  }

  //err while command executing 
  if (stdErr) {
    console.log('🚀 ~ exec [find /] ~ stdErr:', stdErr);
    return;
  }

  console.log('🚀 ~ exec [find /] ~ stdOut:', stdOut);
})

exec('pwd', (err, stdOut, stdErr) => {
  //err while code executing
  if (err) {
    console.log('🚀 ~ exec [pwd] ~ err:', err.message);
    return;
  }

  //err while command executing 
  if (stdErr) {
    console.log('🚀 ~ exec [pwd] ~ stdErr:', stdErr);
    return;
  }

  console.log('🚀 ~ exec [pwd] ~ stdOut:', stdOut);
})