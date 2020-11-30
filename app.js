//Problem: We need access to user badge count and JS points from a web browser
//Solution: Use Node.js to perform profile lookups and serve template via HTTP

//1. Create web serve

//2. Handle HTTP route GET / and POST / i.e. Home
//if url === '/' && GET
//show search
//if url === '/' && POST
//redirect to /:username

//3. Handle HTTP route GET /:username
//if url === '/...'
//get json from Treehouse
//on 'end'
//show profile
// on 'error'
//show error

//4. Function to handle reading of files and merge in value
//read from file and get string
// merge values into string
