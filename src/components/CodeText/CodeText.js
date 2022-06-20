import React from "react";
import { Box } from "@mui/material";

const CodeText = ({ toggle, header, subHeader, tabs, convert }) => {
  const htmlHeader = toggle
    ? `<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
  />

  <script src="//use.typekit.net/qno3ktb.js"></script>
  <script>
    try {
      Typekit.load();
    } catch (e) {}
  </script>

  <!-- Compiled CSS -->
  <link
    rel="stylesheet"
    href="https://content-edit-assets.s3.amazonaws.com/bay/editorial/size-guide/v3/bay-size-guide-template-v2-0000-00-00-main-3.0.0.css"
  />`
    : `<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
  />
  <link
    rel="icon"
    type="image/png"
    href="../../../_server/img/favicon-project-32x32.png"
    sizes="32x32"
  />
</head>
<script src="//use.typekit.net/qno3ktb.js"></script>
<script>
  try {
    Typekit.load();
  } catch (e) {}
</script>

<!-- Compiled CSS -->
<link
  rel="stylesheet"
  href="https://content.hbc.com/chad/bay/editorial/000-0000-00-00-size-guide-template-v2/bay-size-guide-template-v2-0000-00-00-main-2.0.1.css"
/>`;

  const headerText = `  <section class="section__size-guide-text">
    <div class="centered-text">
      <h3>${header}</h3>
      <h2>${subHeader}</h2>
    </div>
  </section>`;

  const categoryTabs = `\n      <div class="size-guide__tabs--header-left">${tabs
    .map((tab, index) => {
      if (index === 0) {
        return `\n        <a href="#" class="size-guide__tabs--selected">
          <span>${tab.tabname}</span>
        </a>`;
      }

      return `\n        <a href="#">
          <!-- comment the line below if tab is not needed -->
          <span>${tab.tabname}</span>
        </a>`;
    })
    .join("")}\n      </div>`;

  const conversion = convert
    ? `      <div class="size-guide__tabs--header-right">
        <a href="#" class="size-guide__tabs--inches size-guide__tabs--selected">
          <!-- comment the line below if IN/CM conversions is not needed -->
          <span>IN</span>
        </a>
        <a href="#" class="size-guide__tabs--centimiters">
          <!-- comment the line below if IN/CM conversions is not needed -->
          <span>CM</span>
        </a>
      </div>`
    : `      <div class="size-guide__tabs--header-right">
        <a href="#" class="size-guide__tabs--inches size-guide__tabs--selected">
          <!-- comment the line below if IN/CM conversions is not needed -->
          <!-- <span>IN</span> -->
        </a>
        <a href="#" class="size-guide__tabs--centimiters">
          <!-- comment the line below if IN/CM conversions is not needed -->
          <!-- <span>CM</span> -->
        </a>
      </div>`;

  return (
    <Box
      component="pre"
      sx={{ width: "50%", height: "100%", overflow: "scroll" }}
    >
      {htmlHeader}
      {`\n\n<div id="dsg-editorial" class="dsg-editorial dsg-en">\n`}
      {headerText}
      {categoryTabs}
      {`\n${conversion}`}
      {"\n</div>"}
    </Box>
  );
};

export default CodeText;
