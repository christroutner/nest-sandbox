/*
  Get all cats in the database
*/

import axios from 'axios'

const SERVER = 'http://localhost:3000'

async function start() {
  try {
    const result = await axios.get(`${SERVER}/cats`)
    console.log(`result.data: `, result.data)
  } catch(err) {
    console.error('Error in start(): ', err)
  }
}
start()