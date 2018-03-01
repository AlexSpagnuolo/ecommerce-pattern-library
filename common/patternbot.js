(function () {
/**
 * Patternbot includes
 * https://github.com/thomasjbradley/patternbot-includes
 * @author Thomas J Bradley <hey@thomasjbradley.ca>
 * @copyright 2018 Thomas J Bradley
 * @license MIT
 */
const patternBotIncludes = function (manifest) {
  'use strict';

  const loadingScreenConfig = {
    id: 'patternbot-loading-screen',
    cssId: 'patternbot-loading-screen-css',
    get css() { return `
      div#${loadingScreenConfig.id} {
        all: initial;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin: 0;
        padding: 0;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: ${manifest.commonInfo.readme.attributes.backgroundColour};
        border: 0;
        opacity: 1;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        text-align: center;
      }

      h1#patternbot-loading-screen-title {
        all: initial;
        margin: 0;
        padding: 0;
        background-color: transparent;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5;
        color: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        text-align: center;
      }

      svg#patternbot-loading-gears {
        margin-bottom: 10px;
        height: 64px;
        width: 64px;
        opacity: .8;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-top {
        opacity: .5;
        animation: patternbot-loading-spin 2s linear infinite;
        transform-origin: 80.8px 80.8px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      path#patternbot-loading-gears-bottom {
        opacity: .7;
        animation: patternbot-loading-spin 2s linear reverse infinite;
        transform-origin: 176.3px 176.3px;
        fill: rgba(${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, ${manifest.commonInfo.interfaceColours.primary}, 1);
      }

      @keyframes patternbot-loading-spin {
        0% { transform: rotate(0); }
        100% { transform: rotate(360deg); }
      }
    `},
    get html() { return `
      <div id="${loadingScreenConfig.id}">
        <svg id="patternbot-loading-gears" viewBox="0 0 256 256" width="256" height="256">
          <path id="patternbot-loading-gears-top" d="M151.3 86.9a51.3 51.3 0 0 0 .2-6.1 51.3 51.3 0 0 0-.2-6.1l-12-.9a57.9 57.9 0 0 0-4.3-15.9l9.9-6.8a59.2 59.2 0 0 0-6.1-10.6l-10.9 5a59.6 59.6 0 0 0-11.6-11.6l5.3-10.9a59.2 59.2 0 0 0-10.6-6.2l-7.1 9.7a60.2 60.2 0 0 0-15.8-4.2l-.9-12a57.5 57.5 0 0 0-6.4-.2 51.3 51.3 0 0 0-6.1.2l-.9 12A57.9 57.9 0 0 0 58 26.5l-7-9.7A59.2 59.2 0 0 0 40.4 23l5 10.9a68.4 68.4 0 0 0-11.8 11.5l-10.6-5A59.2 59.2 0 0 0 16.8 51l9.7 6.8a59.5 59.5 0 0 0-4.2 16l-11.8.9a23 23 0 0 0-.5 5.9 51.3 51.3 0 0 0 .2 6.1l11.8.9a59.5 59.5 0 0 0 4.2 16l-9.7 6.8a59.2 59.2 0 0 0 6.1 10.6l10.6-5A54.8 54.8 0 0 0 45 127.6l-5 10.9a59.2 59.2 0 0 0 10.6 6.1l6.8-9.7a60.2 60.2 0 0 0 15.8 4.2l.9 12h6.4a51.3 51.3 0 0 0 6.1-.2l.9-12a60.2 60.2 0 0 0 15.8-4.2l6.8 9.9a59.2 59.2 0 0 0 10.6-6.1l-5-11.1a53.7 53.7 0 0 0 11.6-11.6l10.9 5.2a59.2 59.2 0 0 0 6.1-10.6l-9.7-6.8a60.2 60.2 0 0 0 4.2-15.8zm-70.5 29.3a35.4 35.4 0 1 1 35.4-35.4 35.3 35.3 0 0 1-35.4 35.4z"/>
          <path id="patternbot-loading-gears-bottom" d="M242.8 200.6a51.3 51.3 0 0 0 1.8-5.9 51.3 51.3 0 0 0 1.4-6l-11.4-4a57.9 57.9 0 0 0 0-16.4l11.3-4a59.2 59.2 0 0 0-3.2-11.8l-11.8 2a59.6 59.6 0 0 0-8.1-14.2l7.8-9.1a59.2 59.2 0 0 0-8.7-8.7l-9.4 7.5a60.2 60.2 0 0 0-14.2-8.2l2.2-11.9a57.5 57.5 0 0 0-6.1-1.9 51.3 51.3 0 0 0-6-1.4l-4 11.4a57.9 57.9 0 0 0-16.4 0l-4.1-11.1a59.2 59.2 0 0 0-11.8 3.2l2 11.8a68.4 68.4 0 0 0-14.4 8.1l-9-7.5a59.2 59.2 0 0 0-8.7 8.7l7.6 9.1a59.5 59.5 0 0 0-8.3 14.4l-11.3-2.4a23 23 0 0 0-2 5.6 51.3 51.3 0 0 0-1.4 6l11.1 4a59.5 59.5 0 0 0-.1 16.6l-11.1 4.1a59.2 59.2 0 0 0 3.2 11.8l11.5-2a54.8 54.8 0 0 0 8.4 14.2l-7.6 9.2a59.2 59.2 0 0 0 8.7 8.7l9.1-7.6a60.2 60.2 0 0 0 14.2 8.2l-2.3 11.9 6.1 1.7a51.3 51.3 0 0 0 6 1.4l4-11.4a60.2 60.2 0 0 0 16.4 0l4 11.3a59.2 59.2 0 0 0 11.8-3.2l-1.9-12a53.7 53.7 0 0 0 14.2-8.1l9.1 7.8a59.2 59.2 0 0 0 8.7-8.7l-7.6-9.1a60.2 60.2 0 0 0 8.2-14.2zm-75.7 9.9a35.4 35.4 0 1 1 43.4-24.9 35.3 35.3 0 0 1-43.4 24.9z"/>
        </svg>
        <h1 id="patternbot-loading-screen-title">Building page…</h1>
      </div>
    `},
  };

  let downloadedAssets = {};

  const downloadHandler = function (e) {
    e.target.removeEventListener('load', downloadHandler);
    downloadedAssets[e.target.getAttribute('href')] = true;
  };

  const findRootPath = function () {
    const rootMatcher = /\/common\//;
    const allScripts = document.querySelectorAll('script:not([type])');
    let t = allScripts.length, i = 0;

    for (i = 0; i < t; i++) {
      if (rootMatcher.test(allScripts[i].src)) {
        return allScripts[i].src.split(rootMatcher)[0];
        break;
      }
    }
  };

  const addCssFile = function (href) {
    const newLink = document.createElement('link');

    downloadedAssets[href] = false;

    newLink.setAttribute('rel', 'stylesheet');
    newLink.setAttribute('href', href);
    newLink.addEventListener('load', downloadHandler);

    document.head.appendChild(newLink);
  }

  const bindAllCssFiles = function (rootPath) {
    if (manifest.commonInfo && manifest.commonInfo.readme && manifest.commonInfo.readme.attributes &&  manifest.commonInfo.readme.attributes.fontUrl) {
      addCssFile(manifest.commonInfo.readme.attributes.fontUrl);
    }

    if (manifest.patternLibFiles && manifest.patternLibFiles.commonParsable) {
      if (manifest.patternLibFiles.commonParsable.modulifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.modulifier}`);
      if (manifest.patternLibFiles.commonParsable.gridifier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.gridifier}`);
      if (manifest.patternLibFiles.commonParsable.typografier) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.typografier}`);
      if (manifest.patternLibFiles.commonParsable.theme) addCssFile(`..${manifest.config.commonFolder}/${manifest.config.commonParsableFilenames.theme}`);
    }

    manifest.userPatterns.forEach((pattern) => {
      if (!pattern.css) return;

      pattern.css.forEach((css) => {
        addCssFile(`../${css.localPath}`);
      });
    });
  };

  const getPatternInfo = function (patternElem) {
    let patternInfoJson;
    const data = patternElem.innerText.trim();

    if (!data) return {}

    try {
      patternInfoJson = JSON.parse(data);
      return patternInfoJson;
    } catch (e) {
      console.group('JSON error in pattern include');
      console.log(patternElem.dataset.pattern);
      console.log(patternElem.innerText);
      console.log(e);
      console.groupEnd();
      return {};
    }
  };

  const getPatternUrl = function (rootPath, patternName) {
    patternName = (patternName.slice(-5) === '.html') ? patternName.slice(0, -5) : patternName;
    return `${rootPath}/patterns/${patternName}.html`;
  };

  const constructPattern = function (rootPath, patternElem) {
    return {
      name: patternElem.dataset.pattern,
      url: getPatternUrl(rootPath, patternElem.dataset.pattern),
      html: false,
      elem: false,
    };
  };

  const htmlStringToElem = function (html) {
    const doc = (new DOMParser()).parseFromString(html, 'text/html');
    return doc.body;
  };

  const replaceElementValue = function (elem, sel, data) {
    elem.innerText = data;
  };

  const replaceAttributeValue = function (elem, sel, data) {
    const isXlinkAttr = /xlink\:/.test(sel);
    const attr = sel.match(/\[([^\]]+)\]$/)[1];

    if (isXlinkAttr) {
      elem.setAttributeNS('http://www.w3.org/1999/xlink', attr, data);
    } else {
      elem.setAttribute(attr, data);
    }
  };

  const outputPattern = function (patternElem, patternDetails) {
    let patternOutElem, patternData;

    if (!patternDetails.html) return;

    patternOutElem = htmlStringToElem(patternDetails.html);
    patternData = getPatternInfo(patternElem);

    Object.keys(patternData).forEach((sel) => {
      const isAttributeSelector = /\[.*\]/.test(sel);
      const jsSel = sel.replace(/\[.*:/, '[*|');
      const elem = patternOutElem.querySelector(jsSel);

      if (!elem) {
        console.group('Cannot find element');
        console.log(`Selector: ${sel}`);
        console.log(`Pattern: ${patternDetails.name}`);
        console.log(JSON.stringify(patternData, null, 2));
        console.groupEnd();
        return;
      }

      if (isAttributeSelector) {
        replaceAttributeValue(elem, sel, patternData[sel]);
      } else {
        replaceElementValue(elem, sel, patternData[sel]);
      }
    });

    patternElem.parentNode.replaceChild(patternOutElem.firstElementChild, patternElem);
  };

  const showLoadingScreen = function () {
    const loadCssElem = document.createElement('style');

    loadCssElem.id = loadingScreenConfig.cssId;
    loadCssElem.appendChild(document.createTextNode(loadingScreenConfig.css));
    document.head.appendChild(loadCssElem);
    document.body.innerHTML += loadingScreenConfig.html;
  };

  const hideLoadingScreen = function () {
    const allDownloadedInterval = setInterval(() => {
      if (Object.values(downloadedAssets).includes(false)) return;

      clearInterval(allDownloadedInterval);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.getElementById(loadingScreenConfig.id).remove();
          document.getElementById(loadingScreenConfig.cssId).remove();
        });
      });
    }, 50);
  };

  const findAllPatternTags = function () {
    return document.querySelectorAll('script[type="application/json"][data-pattern]');
  };

  const constructAllPatterns = function (rootPath, allPatternTags) {
    let allPatterns = {};

    [].forEach.call(allPatternTags, (patternElem) => {
      if (allPatterns[patternElem.dataset.pattern]) return;

      allPatterns[patternElem.dataset.pattern] = constructPattern(rootPath, patternElem);
    });

    return allPatterns;
  };

  const buildPatternFetchPromises = function (allPatternUrls) {
    return allPatternUrls.map((url) => {
      return new Promise((resolve, reject) => {
        downloadedAssets[url] = false;

        fetch(url).then((resp) => {
          if (resp.status >= 200 && resp.status <= 299) {
            return resp.text();
          } else {
            console.group('Cannot location pattern');
            console.log(resp.url);
            console.log(`Error ${resp.status}: ${resp.statusText}`);
            console.groupEnd();
            return '';
          }
        }).then(function (html) {
          downloadedAssets[url] = true;
          resolve(html);
        }).catch((e) => {
          console.group('Download error');
          console.log(url);
          console.log(e);
          console.groupEnd();
          resolve('');
        });
      });
    });
  };

  const loadAllPatterns = function (allPatterns) {
    let patternUrls = {};
    let allPatternKeys = Object.keys(allPatterns);

    allPatternKeys.forEach((patternKey) => {
      patternUrls[patternKey] = allPatterns[patternKey].url;
    });

    return new Promise((resolve, reject) => {
      Promise.all(buildPatternFetchPromises(Object.values(patternUrls))).then((allPatternsHtml) => {
        allPatternsHtml.forEach((html, i) => {
          allPatterns[allPatternKeys[i]].html = html;
        });
        resolve(allPatterns);
      }).catch((e) => {
        console.group('Pattern load error');
        console.log(e);
        console.groupEnd();
        resolve(allPatterns);
      });
    });
  };

  const renderAllPatterns = function (allPatternTags, allLoadedPatterns) {
    [].forEach.call(allPatternTags, (elem) => {
      outputPattern(elem, allLoadedPatterns[elem.dataset.pattern]);
    });
  };

  const init = function () {
    let rootPath, patternsToLoad, allPatternTags = [], allPatterns = [];

    showLoadingScreen();

    rootPath = findRootPath();
    bindAllCssFiles(rootPath);
    allPatternTags = findAllPatternTags();
    allPatterns = constructAllPatterns(rootPath, allPatternTags);

    loadAllPatterns(allPatterns).then((allLoadedPatterns) => {
      renderAllPatterns(allPatternTags, allLoadedPatterns);
      hideLoadingScreen();
    }).catch((e) => {
      console.group('Pattern load error');
      console.log(e);
      console.groupEnd();
    });
  };

  document.addEventListener('DOMContentLoaded', init);
};


/** 
 * Patternbot library manifest
 * /Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library
 * @version 1519874691656
 */
const patternManifest_1519874691656 = {
  "commonInfo": {
    "modulifier": [
      "responsive",
      "images",
      "list-group",
      "embed",
      "media-object",
      "icons",
      "hidden",
      "positioning",
      "nice-lists",
      "forms",
      "buttons",
      "accessibility",
      "print"
    ],
    "modulifierUrl": "responsive;images;list-group;embed;media-object;icons;hidden;positioning;nice-lists;forms;buttons;accessibility;print",
    "gridifier": [
      {
        "prefix": "xs",
        "columns": 4,
        "mq": 0
      },
      {
        "prefix": "s",
        "columns": 4,
        "mq": 25
      },
      {
        "prefix": "m",
        "columns": 4,
        "mq": 38
      },
      {
        "prefix": "l",
        "columns": 4,
        "mq": 60
      }
    ],
    "gridifierUrl": "xs,4,0,0,0;s,4,25,0,0;m,4,38,1,1;l,4,60,1,1",
    "typografier": [
      {
        "mq": 0,
        "fontSize": 100,
        "lineHeight": 1.3,
        "scale": 1.067
      },
      {
        "mq": 38,
        "fontSize": 110,
        "lineHeight": 1.4,
        "scale": 1.125
      },
      {
        "mq": 60,
        "fontSize": 120,
        "lineHeight": 1.5,
        "scale": 1.125
      },
      {
        "mq": 90,
        "fontSize": 130,
        "lineHeight": 1.5,
        "scale": 1.125
      }
    ],
    "typografierUrl": "0,100,1.3,1.067,0;38,110,1.4,1.125,1;60,120,1.5,1.125,1;90,130,1.5,1.125,1",
    "theme": {
      "colours": {
        "primary": [
          {
            "name": "--color-primary-light",
            "namePretty": "Primary light",
            "raw": "#c5c2b9",
            "hex": "#c5c2b9",
            "rgba": "rgba(197, 194, 185, 1)"
          },
          {
            "name": "--color-primary",
            "namePretty": "Primary",
            "raw": "#a19582",
            "hex": "#a19582",
            "rgba": "rgba(161, 149, 130, 1)"
          },
          {
            "name": "--color-primary-medium",
            "namePretty": "Primary medium",
            "raw": "#7d6c59",
            "hex": "#7d6c59",
            "rgba": "rgba(125, 108, 89, 1)"
          },
          {
            "name": "--color-primary-dark",
            "namePretty": "Primary dark",
            "raw": "#3c342b",
            "hex": "#3c342b",
            "rgba": "rgba(60, 52, 43, 1)"
          }
        ],
        "secondary": [],
        "neutral": [],
        "accent": [
          {
            "name": "--color-white",
            "namePretty": "White",
            "raw": "#fff",
            "hex": "#fff",
            "rgba": "rgba(255, 255, 255, 1)"
          },
          {
            "name": "--color-light-grey",
            "namePretty": "Light grey",
            "raw": "#e4e4e4",
            "hex": "#e4e4e4",
            "rgba": "rgba(228, 228, 228, 1)"
          },
          {
            "name": "--color-black",
            "namePretty": "Black",
            "raw": "#383838",
            "hex": "#383838",
            "rgba": "rgba(56, 56, 56, 1)"
          }
        ]
      },
      "fonts": {
        "primary": {
          "name": "--font-primary",
          "namePretty": "Rubik",
          "raw": "rubik, sans-serif",
          "weights": {
            "500": {
              "weight": "500",
              "hasNormal": true,
              "hasItalic": true
            },
            "normal": {
              "weight": "normal",
              "hasNormal": true,
              "hasItalic": true
            }
          }
        },
        "secondary": {},
        "accent": []
      },
      "coloursRaw": {
        "--color-primary-light": "#c5c2b9",
        "--color-primary": "#a19582",
        "--color-primary-medium": "#7d6c59",
        "--color-primary-dark": "#3c342b",
        "--color-white": "#fff",
        "--color-light-grey": "#e4e4e4",
        "--color-black": "#383838"
      },
      "fontsRaw": {
        "--font-primary": "rubik, sans-serif"
      }
    },
    "readme": {
      "attributes": {
        "name": "Exhibit2",
        "fontURL": "https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i",
        "backgroundColor": "#e4e4e4",
        "accentColor": "#7d6c59",
        "fontUrl": "https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i",
        "backgroundColour": "#e4e4e4",
        "accentColour": "#7d6c59",
        "interfaceColours": {
          "primary": 0,
          "opposite": 255
        }
      }
    },
    "icons": [
      "add-to-cart",
      "complete",
      "contact-us",
      "error",
      "instagram",
      "see-more"
    ],
    "interfaceColours": {
      "primary": 0,
      "opposite": 255
    }
  },
  "patternLibFiles": {
    "commonParsable": {
      "gridifier": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/common/grid.css",
      "typografier": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/common/type.css",
      "modulifier": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/common/modules.css",
      "theme": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/common/theme.css"
    },
    "imagesParsable": {
      "icons": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/images/icons.svg"
    },
    "logos": {
      "sizeLarge": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/images/logo-256.svg",
      "size64": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/images/logo-64.svg",
      "size32": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/images/logo-32.svg",
      "size16": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/images/logo-16.svg",
      "size16Local": "logo-16.svg",
      "sizeLargeLocal": "logo-256.svg",
      "size32Local": "logo-32.svg",
      "size64Local": "logo-64.svg"
    },
    "patterns": [
      "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners",
      "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/buttons",
      "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/cards",
      "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms",
      "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/photo-arrays"
    ],
    "pages": []
  },
  "userPatterns": [
    {
      "name": "banners",
      "namePretty": "Banners",
      "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners",
      "html": [
        {
          "name": "home-banner",
          "namePretty": "Home banner",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners/home-banner.html",
          "localPath": "patterns/banners/home-banner.html",
          "readme": {}
        },
        {
          "name": "product-banner",
          "namePretty": "Product banner",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners/product-banner.html",
          "localPath": "patterns/banners/product-banner.html",
          "readme": {}
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners/README.md",
          "localPath": "patterns/banners/README.md"
        }
      ],
      "css": [
        {
          "name": "banners",
          "namePretty": "Banners",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/banners/banners.css",
          "localPath": "patterns/banners/banners.css"
        }
      ]
    },
    {
      "name": "buttons",
      "namePretty": "Buttons",
      "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/buttons",
      "html": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/buttons/buttons.html",
          "localPath": "patterns/buttons/buttons.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/buttons/README.md",
          "localPath": "patterns/buttons/README.md"
        }
      ],
      "css": [
        {
          "name": "buttons",
          "namePretty": "Buttons",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/buttons/buttons.css",
          "localPath": "patterns/buttons/buttons.css"
        }
      ]
    },
    {
      "name": "cards",
      "namePretty": "Cards",
      "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/cards",
      "html": [
        {
          "name": "icon-card",
          "namePretty": "Icon card",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/cards/icon-card.html",
          "localPath": "patterns/cards/icon-card.html",
          "readme": {
            "width": 280
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/cards/README.md",
          "localPath": "patterns/cards/README.md"
        }
      ],
      "css": [
        {
          "name": "cards",
          "namePretty": "Cards",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/cards/cards.css",
          "localPath": "patterns/cards/cards.css"
        }
      ]
    },
    {
      "name": "forms",
      "namePretty": "Forms",
      "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms",
      "html": [
        {
          "name": "address-input",
          "namePretty": "Address input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/address-input.html",
          "localPath": "patterns/forms/address-input.html"
        },
        {
          "name": "city-input",
          "namePretty": "City input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/city-input.html",
          "localPath": "patterns/forms/city-input.html"
        },
        {
          "name": "company-input",
          "namePretty": "Company input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/company-input.html",
          "localPath": "patterns/forms/company-input.html"
        },
        {
          "name": "country-input",
          "namePretty": "Country input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/country-input.html",
          "localPath": "patterns/forms/country-input.html"
        },
        {
          "name": "discountcode-input",
          "namePretty": "Discountcode input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/discountcode-input.html",
          "localPath": "patterns/forms/discountcode-input.html"
        },
        {
          "name": "email-input",
          "namePretty": "Email input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/email-input.html",
          "localPath": "patterns/forms/email-input.html"
        },
        {
          "name": "name-input",
          "namePretty": "Name input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/name-input.html",
          "localPath": "patterns/forms/name-input.html"
        },
        {
          "name": "phone-input",
          "namePretty": "Phone input",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/phone-input.html",
          "localPath": "patterns/forms/phone-input.html"
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/README.md",
          "localPath": "patterns/forms/README.md"
        }
      ],
      "css": [
        {
          "name": "forms",
          "namePretty": "Forms",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/forms/forms.css",
          "localPath": "patterns/forms/forms.css"
        }
      ]
    },
    {
      "name": "photo-arrays",
      "namePretty": "Photo arrays",
      "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/photo-arrays",
      "html": [
        {
          "name": "product-photos",
          "namePretty": "Product photos",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/photo-arrays/product-photos.html",
          "localPath": "patterns/photo-arrays/product-photos.html",
          "readme": {
            "width": 576
          }
        }
      ],
      "md": [
        {
          "name": "readme",
          "namePretty": "Readme",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/photo-arrays/README.md",
          "localPath": "patterns/photo-arrays/README.md"
        }
      ],
      "css": [
        {
          "name": "photo-arrays",
          "namePretty": "Photo arrays",
          "path": "/Users/Alex/Library/Mobile Documents/com~apple~CloudDocs/Year 2/Semester 2/Web Development IV/Week 02 - eCommerce UX/ecommerce/ecommerce-pattern-library/patterns/photo-arrays/photo-arrays.css",
          "localPath": "patterns/photo-arrays/photo-arrays.css"
        }
      ]
    }
  ],
  "config": {
    "patternLibFilename": "index.html",
    "manifestFilename": ".patternbot-manifest.json",
    "includesFilename": "patternbot.js",
    "commonFolder": "/common",
    "commonParsableFilenames": {
      "modulifier": "modules.css",
      "gridifier": "grid.css",
      "typografier": "type.css",
      "theme": "theme.css"
    },
    "imagesFolder": "/images",
    "imagesParsableFilenames": {
      "icons": "icons.svg"
    },
    "patternsFolder": "/patterns",
    "pagesFolder": "/pages"
  }
};

patternBotIncludes(patternManifest_1519874691656);
}());