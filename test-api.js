const axios = require('axios')

const testRunner = async (testName, payload, expectation) => {
  const apiUrl = 'http://localhost:4000/api/posts'
  console.log(`\n--- ${testName} ---`)
  try {
    const response = await axios.post(apiUrl, payload)
    expectation(null, response)
  } catch (error) {
    expectation(error, null)
  }
}

const tests = [
  {
    name: 'Testing API: POST with empty content',
    payload: { title: 'Test Post Empty Content', content: '' },
    expectation: (error, response) => {
      if (error && error.response && error.response.status === 400) {
        console.log('Test PASSED: Correctly received 400 Bad Request for empty content.')
      } else {
        console.log('Test FAILED: Did not receive expected 400 error.')
        if (response) console.log('Received response:', response.status, response.data)
      }
    }
  },
  {
    name: 'Testing API: POST with missing content',
    payload: { title: 'Test Post Missing Content' },
    expectation: (error, response) => {
      if (error && error.response && error.response.status === 400) {
        console.log('Test PASSED: Correctly received 400 Bad Request for missing content.')
      } else {
        console.log('Test FAILED: Did not receive expected 400 error.')
        if (response) console.log('Received response:', response.status, response.data)
      }
    }
  },
  {
    name: 'Testing API: POST with valid data',
    payload: {
      title: 'Test Post From API ' + new Date().toLocaleString(),
      content: 'This is a test post created via the new internal API.'
    },
    expectation: (error, response) => {
      if (response && response.status === 200) {
        console.log('Test PASSED: Successfully received 200 OK for a valid post.')
      } else {
        console.log('Test FAILED: Did not receive expected 200 OK.')
        if (error) console.error('Received error:', error.response ? error.response.data : error.message)
      }
    }
  }
]

const runTests = async () => {
  for (const t of tests) {
    await testRunner(t.name, t.payload, t.expectation)
  }
}

runTests()
