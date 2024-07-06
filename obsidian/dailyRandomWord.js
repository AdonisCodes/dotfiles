function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function main() {
  const randomWord = await fetch("https://random-word-api.vercel.app/api?words=1")
    .then(response => response.json())
    .then(data => data[0]);

  const article = await fetch(`https://en.wikipedia.org/api/rest_v1/page/html/${randomWord}`)
    .then(response => response.text())
    .then(html => {
      const fixedHtml = html.replace(/="\/\/upload.wikimedia/g, '="http://upload.wikimedia');
      return fixedHtml;
    })
    .catch(error => {
      console.error('Error fetching or processing the HTML:', error);
      return '';
    });

  const page = `
# The word is: ${capitalizeFirstLetter(randomWord)}

---

# The wikipedia Article
${article}
`;

  console.log(page);

  if (article.length < 3000) {
    return "";
  }

  return page;
}

async function generatePage() {
  let page = "";
  while (true) {
    const page_ = await main();
    if (page_) {
      page += page_;
      break;
    }
  }
  console.log(page);
  return page;
}

generatePage();
