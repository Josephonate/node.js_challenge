// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  return `![licensebadge](https://img.shields.io/badge/license-${license}-blue)`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";

  }
  return `- [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License`
}

function renderLicenseDescription(license) {
  if (license === "None") {
    return "";

  } else if (license === "MIT") {
    return `MIT LIC 
    A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
    Licensed works, modifications, and larger works may be distributed under different terms and without source code.`

  } else if (license === "Apache--2.0") {
    return `Apache 2.0 Lic
    A permissive license whose main conditions require preservation of copyright and license notices. 
    Contributors provide an express grant of patent rights. 
    Licensed works, modifications, and larger works may be distributed under different terms and without source code.`

  } else if (license === "GNU_Gen_Public_v3.0") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code
     of licensed works and modifications, which include larger works using a licensed work, under the same license. 
    Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`

  } else if (license === "BSD--2--Clause") {
    return `A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minute differences to the MIT license.`

  } else if (license === "BSD--3--Clause") {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name
     of the copyright holder or its contributors to promote derived products without written consent.`

  } else if (license === "Boost_Software_1.0") {
    return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. 
    Licensed works, modifications, and larger works may be distributed under different terms and without source code.`

  } else if (license === "Creative_Commons_Zero_v1.0") {
    return `The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. 
    As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`

  } else if (license === "Eclipse_Public_2.0") {
    return `This commercially-friendly copyleft license provides the ability to commercially license binaries; 
    a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones.`

  } else if (license === "GNU_Affero_Gen_Public_v3.0") {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. 
    Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. 
    When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`

  } else if (license === "GNU_General_Public_v2.0") {
    return `The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. 
    There are multiple variants of the GNU GPL, each with different requirements.`

  } else if (license === "GNU_Lesser_Gen_Public_v2.1") {
    return `Primarily used for software libraries, the GNU LGPL requires that derived works be licensed under the same license, 
    but works that only link to it do not fall under this restriction. There are two commonly used versions of the GNU LGPL.`

  } else if (license === "Mozilla_Public_2.0") {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). 
    Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. 
    However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`

  } else if (license === "The_Unlicense") {
    return `A license with no conditions whatsoever which dedicates works to the public domain. 
    Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`

  } 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

${renderLicenseSection(data.license)}

${renderLicenseDescription(data.license)}

## Questions

If you have any further questions you can reach me by email or my git hub

${data.email}
https://github.com/${data.gitHub}  
`;
}

module.exports = generateMarkdown;