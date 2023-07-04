/*
  Create a cat in the database.
*/

import axios from 'axios'

const SERVER = 'http://localhost:3000'

async function start() {
  try {
    const cat = {
      name: 'test01',
      age: '4',
      breed: 'maltese'
    }

    const result = await axios.post(`${SERVER}/cats`, cat)
    console.log(`result.data: `, result.data)
  } catch(err) {
    console.error('Error in start(): ', err)
  }
}
start()