import{readFile as s}from"fs/promises";var t={Cache:{Folder:"./Cache",Base:"."},Path:"./Target",Logger:2,Action:{Read:async e=>await s(e.Input,"utf-8"),Wrote:async e=>e.Buffer,Passed:async e=>e&&!0,Failed:async e=>`Error: Cannot process file ${e.Input}!`,Accomplished:async e=>`Processed ${e.Input} in ${e.Output}.`,Fulfilled:async e=>e.Files>0?`Successfully processed a total of ${e.Files} ${e.Files===1?"file":"files"}.`:!1,Changed:async e=>e}};export{t as default};
