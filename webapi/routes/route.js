const serverRoute = [
   {
      method: 'GET',
      path: '/',
      handler: (request, h) => {
      console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
      payload = ['Tom', 'Bill', 'Joe Mama']
      return payload
      
      }
   }
]

module.exports = serverRoute