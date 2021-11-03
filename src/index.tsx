import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 1,
          name: 'Mano El',
          role: 'Back-end',
          status: 'Ativo',
          birth: new Date('1999-02-12 09:00:00'),
        },
        {
          id: 2,
          name: 'White House',
          role: 'Back-end',
          status: 'Inativo',
          birth: new Date('1999-02-12 09:00:00'),
        },
        {
          id: 3,
          name: 'Elói',
          role: 'Back-end',
          status: 'Férias',
          birth: new Date('1999-02-12 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/users', () => {
      return this.schema.all('user')
    });

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('user', data);
    });

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
