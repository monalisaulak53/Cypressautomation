
import { readFileSync, writeFileSync } from "fs";
import { parse } from "papaparse";
describe('Launch registeruser', () => {
    
    it('enter user details', function() {
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')
        try {
            const csvFile = readFileSync("../../fixtures/Registeruser.csv", "utf8");
            const csvResults = parse(csvFile, {
              header: true,
              complete: csvData => csvData.data
            }).data;
            console.log(csvResults)
           
          } catch (e) {
            throw Error(e);
          }
    });
});
  
