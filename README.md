# NY State Education Data - React Props

![NY School Data](school-data.png)

## The Goal
In this lab, you will recreate a page from the New York State School Education Data (NYSED) website. You will be using real New York State education data to complete this lab. The page we are replicating contains an extensive amount of content (click the link below to view), and by using props we be able to quickly and easily emulate this site.


Take a look at the page you'll be designing:
[C-Schools | NYSED Data Site](https://data.nysed.gov/lists.php?start=67&type=school)

The full NYSED data site can be found below:
[NYSED Data Site](https://data.nysed.gov/)

## The Lab
New York collects vast amounts of data about every school in the state. They collect enrollment data about student demographics, graduation rates, state test results, and school survey data. All of this data is aggregated and presented in a user friendly way at the NYSED website.

For this lab, we are going to replicate a page of the NYSED website. Users are able to look up school by letter. We are going to try and reproduce the webpage for all the schools in New York State that start with the letter "C."

### Getting Started
Open the file "nycSchoolEnrollmentData.js" in the "src" directory. This contains demographic data for every school in New York state that begins with the letter "C." Take a look a see how this data is structured.

Now, open "App.js" and notice how the school data has been imported as "data" already. Using this data, pass the name of the first school as props into a SchoolCard component.

Then, update the school card so that the name of the school is displayed in the card header.
Once you've got the first school completed, try and get the first 9 school displayed on the page. It should look similar to the page pictured above.

### Stretch
1. Using a loop, iterate through the school data so that EVERY school appears on the webpage.

2. Have each SchoolCard display the percent of male students and percent of female students. Display this data anywhere on the card you choose.

3. Some schools don't have any data available (these schools are usually too new to have any data collected yet). On the NYSED website, schools without any data are labeled with "No Data Available" instead of the usual card. Update the SchoolCard component so schools with no data appear with the appropriate label.

Reference: https://reactjs.org/docs/conditional-rendering.html
