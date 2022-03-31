
//functions to create hyperlinks in readme
function renderLicenseLink(license) {
  if(license !== "none") {
    return (
      //in a new line a link to the license will appear in the table of contents
      ` [License](#license)`
    )
  } else {
    return "";
  }
}
function renderUsageLink(usage) {
  if(usage !== "none") {
    return(
      ` [Usage](#usage)`
    )
  }
}
function renderContributionLink(contribution) {
  if(contribution !== "none") {
    return(
      `[Contribution](#contribution)`
    )
  }
}
function renderTestsLink(test) {
  if(test !== "none") {
    return(
      `[Tests](#tests)`
    )
  } else {
    return "";
  }
}
function renderQuestionsLink(questions) {
  if(questions !== "none") {
    return(
      ` [Questions](#Questions)`
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
