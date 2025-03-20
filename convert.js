const fs = require('fs');
const marked = require('marked');

// Path to your Markdown file
const markdownFilePath = './blog-post.md';

// Read the Markdown file
fs.readFile(markdownFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Convert Markdown to HTML
  const htmlContent = marked(data);

  // Output the HTML content
  console.log(htmlContent);

  // Optionally, write the HTML content to a new file
  const htmlFilePath = './blog-post.html';
  fs.writeFile(htmlFilePath, htmlContent, (err) => {
    if (err) {
      console.error('Error writing the HTML file:', err);
    } else {
      console.log(`HTML content successfully written to ${htmlFilePath}`);
    }
  });
});
