// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// Table of contents
function renderLicenseLink(license) {
  if (license === "UNLICENSED") {
    return "";
  } else {
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "UNLICENSED") {
    return "";
  } else {
    return `## License
    This project is protected under a ${license} License`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ![Badge](https://img.shields.io/badge/GitHub-${data.license}-green.svg)


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


  
  ## Contact
  
  
  [GitHub](https://www.github.com/${data.github})
  
  
  
  [EMail](mailto:${data.email})`;
}

module.exports = generateMarkdown;
