const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./cypress/cucumber-json/",
    reportPath: "./cypress/cucumber-report/",
    metadata: {
        // browser: {
        //     name: "Chrome",
        //     version: "Version 100.0.4896.127"
        // },
        // browser: {
        //     name: "Firefox",
        //     version: "99.0.1 (64-bit)"
        // },
        browser: {
            name: "Chrome",
            version: "^101"
        },
        device: "^Local Laptop i7",
        platform: {
            name: "windows",
            version: "10"
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project :', value: 'My project' },
            { label: 'Release :', value: 'PI 2022' },
            { label: 'Cycle :', value: '2022 Q3' },
            { label: 'Environment :', value: 'QA' },
            { label: 'Created on: ', value: '2022-06' },
            { label: 'Tester :', value: 'CEO' }
        ]
    },
    scenarioTimestamp: true,
    displayDuration: true,
    pageTitle: 'My Test Report',
    reportName: 'Cypress BDD Test Report',
    openReportInBrowser: true

});