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
   },
   {
      method: 'POST',
      path: '/adduser',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         console.log(`User Params: ${request.payload}`)
         const { username } = request.payload

         newuser = username
         console.log(username)
         
         payload = knex('users').insert({username: newuser})
         return payload

      }
   },
   {
   method: 'DELETE',
   path: '/deleteuser/{id}',
   handler: (request, h) => {
      console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
      console.log(request.payload)
      usertoDelete = request.payload.user_id
      var response = knex('users').del().where('user_id',usertoDelete)
      return response
   }
},
]

module.exports = serverRoute