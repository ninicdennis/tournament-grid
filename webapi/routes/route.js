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
   {
   method: 'POST',
   path: '/generatepool',
   handler: (request,h) => {
      console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
      console.log(request.payload)
      const { key , user_pool } = request.payload
      var userArray = user_pool

      function shuffle(a) {
         var j, x, i;
         for (i = a.length - 1; i > 0; i--) {
             j = Math.floor(Math.random() * (i + 1));
             x = a[i];
             a[i] = a[j];
             a[j] = x;
         }
         return a;
     }
     payload = shuffle(userArray)
     console.log()
     console.log('shuffled.')
     console.log(payload)
     return payload
      }
   }
   
]

module.exports = serverRoute

