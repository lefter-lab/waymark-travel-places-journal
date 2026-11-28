import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const port = Number(process.env.PORT) || 3000;
const placesFile = fileURLToPath(new URL('./data/places.json', import.meta.url));

const server = createServer((request, response) => {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (request.method === 'GET' && request.url === '/health') {
    response.writeHead(200);
    response.end(JSON.stringify({ status: 'ok', service: 'waymark-rest' }));
    return;
  }

  if (request.method === 'GET' && request.url === '/places') {
    readFile(placesFile, 'utf8')
      .then((fileContent) => {
        response.writeHead(200);
        response.end(fileContent);
      })
      .catch((error) => {
        console.error('Could not read places data:', error);
        response.writeHead(500);
        response.end(JSON.stringify({ error: 'Could not load places' }));
      });
    return;
  }

  response.writeHead(404);
  response.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(port, () => {
  console.log(`Waymark REST API listening on http://localhost:${port}`);
});
