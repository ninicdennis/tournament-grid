const knex = require('../knex')

const serverRoute = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
      console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
      payload = knex.select().from('users')
      
      return payload
      
      }
   }
]

module.exports = serverRoute