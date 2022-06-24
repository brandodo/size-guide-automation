import React from "react";
import { Box, Button } from "@mui/material";

const Actions = ({ pim, toggle, header, subHeader, tabs, convert, french }) => {
  const buttonStyle = { height: 40, width: "25%" };

  const clickHandler = (action) => {
    const newTable = tabs.map((tab) => {
      const newRows = tab.rows.map((row, ind) => {
        return convert
          ? tab.inches[ind].every((val) => val === "")
            ? row
            : row.concat(tab.inches[ind])
          : row;
      });

      const centRows = tab.rows.map((row, ind) => {
        return convert
          ? tab.inches[ind].every((val) => val === "")
            ? row
            : row.concat(
                tab.inches[ind].map((inch) => {
                  const tempArr = inch.split("-");
                  const tempConv = tempArr.map((val) => {
                    if (val == parseFloat(val)) {
                      return (parseFloat(val) * 2.54).toFixed(1);
                    } else {
                      return val;
                    }
                  });

                  const newArr = tempConv.join("-");

                  return newArr;
                })
              )
          : row;
      });

      return {
        tabname: tab.tabname,
        rows: newRows,
        rowsCentimetres: centRows,
        header: tab.header ? tab.header : "",
      };
    });

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

    const categoryTabs = `<div class="size-guide__tabs--header-left">${newTable
      .map((tab, index) => {
        if (index === 0) {
          return `\n          <a href="#" class="size-guide__tabs--selected">
            <span>${tab.tabname}</span>
         </a>`;
        }

        return `\n         <a href="#">
           <!-- comment the line below if tab is not needed -->
           <span>${tab.tabname}</span>
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
  ${newTable
    .map((tab, index) => {
      return `
        <!-- TAB ${index + 1} INCHES -->
        <div class="size-guide__table">     
        ${
          tab.header
            ? `  <div class="size-guide__table--header">
            <div>${tab.header}</div>
          </div>`
            : ""
        }
          <div class="table-block">
            <!-- START STICKY HEADER -->
      ${tab.rows
        .map((row, ind) => {
          return ind === 0
            ? `      <div ${
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
            : `
            <div class="size-guide__table--row">${row
              .map(
                (val) => `
              <div>${val}</div>`
              )
              .join("")}
            </div>`;
        })
        .join("")} 
          </div>
          <!-- END STICKY HEADER -->
        </div>
        <!-- TAB ${index + 1} INCHES -->
        
        <!-- TAB ${index + 1} CENTIMETRES -->
        <div class="size-guide__table">     
          ${
            tab.header
              ? `<div class="size-guide__table--header">
            <div>${tab.header}</div>
          </div>`
              : ""
          }
          <div class="table-block">
            <!-- START STICKY HEADER -->
            ${tab.rowsCentimetres
              .map((row, ind) => {
                return ind === 0
                  ? `<div ${
                      toggle
                        ? 'class="size-guide__table--header select" style="text-decoration: underline"'
                        : 'class="size-guide__table--header select"'
                    }>${row
                      .map((val) => {
                        const inchReg = french
                          ? new RegExp(/\bpo\b|\bpouces\b/, "gmi")
                          : new RegExp(/\bin\b|\binches\b/, "gmi");
                        return `
              <div>${val.replace(inchReg, "CM")}</div>`;
                      })
                      .join("")}
            </div>`
                  : `
            <div class="size-guide__table--row">${row
              .map(
                (val) => `
              <div>${val}</div>`
              )
              .join("")}
            </div>`;
              })
              .join("")} 
          </div>
          <!-- END STICKY HEADER -->
        </div>
        <!-- TAB ${index + 1} CENTIMETRES -->\n`;
    })
    .join("")}
      </div>
      <!-- END TABLE CONTENT -->`;

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
