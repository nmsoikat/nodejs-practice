const { execFile } = require('child_process')

execFile('./some-file.sh', (err, stdOut, stdErr) => {
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
 * > touch some-file.sh
 * > chmod +x some-file.sh //make executable file
 * #! => called shebang
 */