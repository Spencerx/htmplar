// page

const rc = require('rc');
const defaultCfg = require('../../.htmplarrc.json');
const { walkSync } = require('../utils');

const { output, sharedContent } = rc('htmplar', defaultCfg);

const pages = [];
const pageData = {};

const getPage = fileData => {
  if (fileData.dir !== sharedContent) {
    const fileDir = fileData.dir.split(output);
    const href =
      process.platform === 'win32' ? fileDir[fileDir.length - 1].replace(/\\/g, '/') : fileDir[fileDir.length - 1];
    const fileName = process.platform === 'win32' ? fileData.dir.split('\\') : fileData.dir.split('/');
    const pageName = fileName[fileName.length - 1].replace(/-/g, ' ');

    const programName = fileName[2] ? fileName[2].replace(/-/g, ' ') : '';

    return {
      programName,
      pageName,
      href
    };
  }

  return null;
};

const setPage = pageData => {
  for (const program in pageData) {
    if (pageData.hasOwnProperty(program) && program !== '') {
      const items = [];

      pageData[program].pages.forEach(page => {
        const item = `
                <a style="width: 100%;
                    display: inline-block;
                    padding: 8px 16px 8px 8px;
                    position: relative;
                    text-decoration: none;
                    color: #000;"
                    href="${page.href}"
                    target="_blank">
                  ${page.pageName}
                </a>`;

        if (pageData[program].pages.length > 1) {
          if (pageData[program].pages.indexOf(page) > 0 && items.indexOf(item) === -1) {
            items.push(item);
          }
        } else if (items.indexOf(item) === -1) {
          items.push(item);
        }
      });
      const listItem = `<li style="padding: 8px 16px 8px 8px; border-bottom: 1px solid #ddd;">
                <h3>${program}</h3>
                ${items.join('')}
              </li>`;

      if (pages.indexOf(listItem) === -1) {
        pages.push(listItem);
      }
    }
  }
};

walkSync(output).forEach(file => {
  const page = getPage(file);

  if (page) {
    if (!pageData[page.programName]) {
      pageData[page.programName] = {
        pages: [
          {
            pageName: page.pageName,
            href: page.href
          }
        ]
      };
    } else if (pageData[page.programName].pages) {
      pageData[page.programName].pages.push({
        pageName: page.pageName,
        href: page.href
      });
    }
  }
});

setPage(pageData);

module.exports = pages;
