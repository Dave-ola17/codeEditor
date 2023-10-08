const run = () => {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const javascriptCode = document.getElementById('javascript-code').value;
    const outputFrame = document.getElementById('output');

    // Construct the complete HTML content
    const outputHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Output</title>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${javascriptCode}</script>
        </body>
        </html>
    `;

    // Set the content of the iframe by setting the srcdoc attribute
    outputFrame.srcdoc = outputHTML;
};
