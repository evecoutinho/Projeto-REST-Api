const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

 const data = [
   { id: 1, name: 'Mike', age: 22, company: 'Nascetur Mus Company' },
   { id: 2, name: 'Eleanor', age: 42, company: 'Hendrerit Donec LLP' },
   { id: 3, name: 'Dylan', age: 51, company: 'Nisi Incorporated' },
   { id: 4, name: 'Leila', age: 30, company: 'Eros Non Limited' },
   { id: 5, name: 'Jason', age: 31, company: 'Accumsan Interdum Associates' },
 ];

 const findItem = id => {
   return data.find(item => item.id == id);
 };

 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }));

 app.get('/', (req, res) => {
   const result = { name: 'emerson', instagram: 'emersonbrogadev' };
   return res.json(result);
 });

 app.get('/:id', (req, res) => {
   const item = findItem(req.params.id);
   return res.json(item);
 });

 app.post('/', (req, res) => {
   const name = req.body.name;
   const site = req.body.site;
   return res.json([site, name]);
 });

 app.put('/:id', (req, res) => {
    const name = req.body.name;
    let item = findItem(req.params.id);
    item = { item, name: name };
    return res.json(item);
  });

  app.delete('/:id', (req, res) => {
    const item = findItem(req.params.id);
    // deletar o item
    return res.json({});
  });

app.listen(port, () => console.log(`Listening on port ${port}!`));