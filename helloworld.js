// Hello World

/* global muxbots */

muxbots.onChat((message, callback) => {
  if (message.toLowerCase() === 'hello') {
    muxbots.newResponse()
      .addMessage('Hello! 👋')
      .send(callback)
  } else {
    muxbots.newResponse()
      .addMessage('Sorry, I only understand one word.')
      .send(callback)
  }
})
