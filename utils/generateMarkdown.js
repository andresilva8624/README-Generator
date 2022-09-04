// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadgeLink(badge) {
  if (badge === "none") {
    return "";
  } else {
    return `- [Badge](#Badge)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Table of contents
function renderLicenseLink(license) {
  if (license === "none") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  } else {
    return `## License
    This project is protected under a ${license} License`;
  }
}

function renderBadgeSection(badge) {
  if (badge === "none") {
    return "";
  } else {
    return `## Badge
    This project is protected under a ${badge} Badge`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description
  ${data.description}
  
  ## Table of Contents 
   
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
   ${renderLicenseLink(data.license)}
  - [Badge](#badge)
  
  
  ## Installation
  ${data.installation}

  ## Test
  ${data.test}

  ## Usage
  ${data.usage}
  
     
  ## Credits
  Thank you to [Sabrina Hanson](https://www.github.com/sabhanson) for helping me with this assignment
  
  
  ${renderLicenseSection(data.license)} 


 ## Badge
 [Badge](https://img.shields.io/github/license/andresilva8624/README-Generator?color=green&label=blue&logo=yellow&logoColor=black&style=plastic/${data.badge})


  
  
  ## Contact
  
  
  [GitHub](https://www.github.com/${data.github})
  
  
  
  [EMail](mailto:${data.email})`;
}

module.exports = generateMarkdown;
