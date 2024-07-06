
const randomWord = fetch("https://random-word-api.vercel.app/api?words=1")
  .then((response) => response.json())
  .then((data) => data[0]);

const article = fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${randomWord}`)
.then(response => response.text())
.then(html => {
  const fixedHtml = html.replace(/="\/\/upload.wikimedia/g, '="http://upload.wikimedia');
  console.log(fixedHtml);
})
.catch(error => console.error('Error fetching or processing the HTML:', error));

const page = `
# ${randomWord}

# Wikipedia
${article}
`

console.log(page)
page;
