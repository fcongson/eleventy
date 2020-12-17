exports.data = {
  title: "Vue+Eleventy",
};

exports.render = function(data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title}</title>
    <style>${this.getVueComponentCssForPage(this.page.url)}</style>
  </head>
  <body>
    ${data.content}
  </body>
</html>`;
};
