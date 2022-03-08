
//functions to create hyperlinks in readme
function renderLicenseLink(license) {
  if(license !== "none") {
    return (
      //in a new line a link to the license will appear in the table of contents
      `\n [License](#license)\n`
    )
  } else {
    return "";
  }
}
function renderUsageLink(usage) {
  if(usage !== "none") {
    return(
      `\n [Usage](#usage)\n`
    )
  }
}
function renderContributionLink(contribution) {
  if(contribution !== "none") {
    return(
      `\n [Contribution](#contribution)\n`
    )
  }
}
function renderTestsLink(test) {
  if(test !== "none") {
    return(
      `\n [Tests](#tests)\n`
    )
  } else {
    return "";
  }
}
function renderQuestionsLink(questions) {
  if(questions !== "none") {
    return(
      `\n [Questions](#Questions)\n`
    )
  } else {
    return "";
  }
}

function renderLicenseSection(license) {
  if(license !== "none") {
    return (
      `# License
      ${license}`
    )
  }
  return "";
}

// markdown for data entered by user- will insert into coresponding object
function generateMarkdown(data) {
  return `
  # ${data.title}

  ![Github Licence](https://img.shields.io/badge/-${data.license}-blue) 
    
    
  ## Description
    ${data.description}

  ## Installation
  *Steps required to install project and how to get the development environment running:*
    ${data.installation}

  ## Table of Contents
      ${renderUsageLink(data.usage)}
      ${renderLicenseLink(data.license)}
      ${renderContributionLink(data.contribution)}
      ${renderTestsLink(data.tests)}
      ${renderQuestionsLink(data.questions)}

  ## License
    ${data.license}
    

  ## Usage
    ${data.usage}

  ## Contribution
    ${data.contribution}

  ## Tests
  *Tests for application and how to run them:*
    ${data.test}

  ## Questions
   [Github Profile:] "(https://github.com/-${data.username}-)"
   
  For any questions, please contact me using the email below:

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
