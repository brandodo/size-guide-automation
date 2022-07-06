import React from "react";
import { Box, Button } from "@mui/material";

const Actions = ({
  pim,
  toggle,
  header,
  subHeader,
  tabs,
  convert,
  french,
  general,
  tableGuide,
  generalGuide,
}) => {
  const buttonStyle = { height: 40, width: "25%" };

  const clickHandler = (action) => {
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

    const headerText = `<section class="section__size-guide-text">
    <div class="centered-text">
      <h3>${header}</h3>
      <h2>${subHeader}</h2>
    </div>
  </section>`;

    const categoryTabs = `<div class="size-guide__tabs--header-left">${tabs
      .map((tab, index) => {
        if (index === 0) {
          return `\n          <a href="#" class="size-guide__tabs--selected">
            <span>${french ? tab.tabnameFR : tab.tabnameEN}</span>
         </a>`;
        }

        return `\n         <a href="#">
           <!-- comment the line below if tab is not needed -->
           <span>${french ? tab.tabnameFR : tab.tabnameEN}</span>
         </a>`;
      })
      .join("")}\n        </div>`;

    const conversion = convert
      ? `<div class="size-guide__tabs--header-right">
          <a href="#" class="size-guide__tabs--inches size-guide__tabs--selected">
            <!-- comment the line below if IN/CM conversions is not needed -->
            <span>${french ? "PO" : "IN"}</span>
          </a>
          <a href="#" class="size-guide__tabs--centimiters">
            <!-- comment the line below if IN/CM conversions is not needed -->
            <span>CM</span>
          </a>
        </div>`
      : `<div class="size-guide__tabs--header-right">
          <a href="#" class="size-guide__tabs--inches size-guide__tabs--selected">
            <!-- comment the line below if IN/CM conversions is not needed -->
            <!-- <span>${french ? "PO" : "IN"}</span> -->
          </a>
          <a href="#" class="size-guide__tabs--centimiters">
            <!-- comment the line below if IN/CM conversions is not needed -->
            <!-- <span>CM</span> -->
          </a>
        </div>`;

    const tableContent = `<!-- TABLE CONTENT -->
      <div class="size-guide__tabs--content">
  ${tabs
    .map((tab, index) => {
      return `
        <!-- TAB ${index + 1} INCHES -->
        <div class="size-guide__table">     
        ${tab.tables
          .map((table) => {
            return `${
              table.header
                ? `  <div class="size-guide__table--header">
          <div>${table.header}</div>
        </div>`
                : ""
            }
          <div class="table-block">
            <!-- START STICKY HEADER -->
            ${table.rowsInches
              .map((row, ind) => {
                return ind === 0
                  ? ` <div ${
                      toggle
                        ? 'class="size-guide__table--header select" style="text-decoration: underline"'
                        : 'class="size-guide__table--header select"'
                    }>${row
                      .map(
                        (val) => `
              <div>${val}</div>`
                      )
                      .join("")}
            </div>`
                  : `<div class="size-guide__table--row">${row
                      .map(
                        (val) => `
              <div>${val}</div>`
                      )
                      .join("")}
                  </div>`;
              })
              .join("")}
              </div>
          <!-- END STICKY HEADER -->`;
          })
          .join("")}
          ${
            tableGuide && tab.measureGuide[0].length > 0
              ? `<section class="section__size-guide-text" id="measuring-guide">
    <div class="centered-text">
      <h2>${french ? "Comment Mesurer" : "How to Measure"}</h2>
    </div>
    ${tab.measureGuide
      .map(
        (text) => `<p>
      <span style="font-weight: bold; text-decoration: underline"
        >${text[0] ? `${text[0]}:` : ""}</span
      >
      ${text[1]}
    </p>`
      )
      .join("")}
  </section>`
              : ""
          }
        </div>
        <!-- TAB ${index + 1} INCHES -->
        
        <!-- TAB ${index + 1} CENTIMETRES -->
        <div class="size-guide__table">
        ${tab.tables
          .map((table) => {
            return `${
              table.header
                ? `  <div class="size-guide__table--header">
          <div>${table.header}</div>
        </div>`
                : ""
            }
          <div class="table-block">
            <!-- START STICKY HEADER -->
            ${table.rowsCenti
              .map((row, ind) => {
                return ind === 0
                  ? ` <div ${
                      toggle
                        ? 'class="size-guide__table--header select" style="text-decoration: underline"'
                        : 'class="size-guide__table--header select"'
                    }>${row
                      .map(
                        (val) => `
              <div>${val}</div>`
                      )
                      .join("")}
            </div>`
                  : `<div class="size-guide__table--row">${row
                      .map((val) => `<div>${val}</div>`)
                      .join("")}
                  </div>`;
              })
              .join("")}
              </div>
          <!-- END STICKY HEADER -->`;
          })
          .join("")}
          ${
            tableGuide && tab.measureGuide[0].length > 0
              ? `<section class="section__size-guide-text" id="measuring-guide">
    <div class="centered-text">
      <h2>${french ? "Comment Mesurer" : "How to Measure"}</h2>
    </div>
    ${tab.measureGuide
      .map(
        (text) => `<p>
      <span style="font-weight: bold; text-decoration: underline"
        >${text[0] ? `${text[0]}:` : ""}</span
      >
      ${text[1]}
    </p>`
      )
      .join("")}
  </section>`
              : ""
          }
        </div>
        <!-- TAB ${index + 1} CENTIMETRES -->

      <!-- END TABLE CONTENT -->`;
    })
    .join("")}`;

    const measureGuide = `${
      general
        ? `<section class="section__size-guide-text" id="measuring-guide">
    <div class="centered-text">
      <h2>${french ? "Comment Mesurer" : "How to Measure"}</h2>
    </div>
    ${generalGuide
      .map(
        (text) => `<p>
    <span style="font-weight: bold; text-decoration: underline"
      >${text[0] ? `${text[0]}:` : ""}</span
    >
    ${text[1]}
  </p>`
      )
      .join("")}
    
  </section>`
        : ""
    }`;

    const fullCode = `${htmlHeader}

  <div id="dsg-editorial" class="dsg-editorial dsg-en">
    ${headerText}
  
    <section class="size-guide">
      <!-- TABLE CONTAINER -->
      <div class="size-guide__tabs">
        <!-- HEADER - TABS -->
        <div class="size-guide__tabs--header">
          ${categoryTabs}
          ${conversion}
        </div>
        <!-- END HEADER - TABS -->
        
        ${tableContent}
      </div>
      <!-- END TABLE CONTAINER -->
    </section>
    ${measureGuide}
  </div>
  <!-- END #dsg-editorial -->
  
  <script src="https://content.hbc.com/chad/bay/editorial/000-0000-00-00-size-guide-template-v2/bay-size-guide-template-v2-0000-00-00-main-2.0.1.js"></script>
${toggle ? "</head>" : ""}`;

    const getText = fullCode;
    const newElement = document.createElement("a");
    const file = new Blob([getText], { type: "text/html" });
    newElement.href = URL.createObjectURL(file);
    action === "preview"
      ? (newElement.target = "_blank")
      : (newElement.download = french ? `${pim}-FR` : `${pim}-EN`);
    newElement.click();
  };

  return (
    <Box
      sx={{
        p: "10px",
        gap: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        variant="outlined"
        size="small"
        sx={buttonStyle}
        onClick={() => clickHandler("preview")}
      >
        Preview
      </Button>
      <Button
        variant="contained"
        size="small"
        sx={buttonStyle}
        onClick={() => clickHandler("download")}
      >
        Download HTML
      </Button>
    </Box>
  );
};

export default Actions;
