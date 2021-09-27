const fs = require('fs');

fs.readFile('./upload/users/user.csv', { encoding: 'utf-8' }, (erro, data) => {
  try {
    console.log(data)
  } catch (error) {
    console.log('Falha na leitura do arquivo:', erro);
  }
});

fs.writeFile('file-created.csv', 'CSV CRIADO!', (err) => {
  console.log(err);
})