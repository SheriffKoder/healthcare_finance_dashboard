
////// Description
We are a Healthcare company, offering services to patients through our different facilities. Each facility we have offers different services.

This website is a dashboard displaying calculated data (received from an external dataset) through visual elements (Charts).

There is a filter to change the targeted source of information.
allowing to choose between different Facilities, Years and patients' payer companies

// Visual elements' functionalities
Bars chart 1 - Top payers by revenue, i.e paid for the selected option
Bars chart 2 - Number of patients per option
Gauge 1: get the total number of patients who paid their dues in the selected option
Gauge 2: get the total amount paid in the selected option
Line chart: Trends for charges and payments over time
Pie chart 1: How much each service got paid having the selected option
Table 1: Calculate and display KPI's for all the facilities in the company object (not dependent on any selected option)


// Components hierarchy
Chart/Score containers > Charts, Gauges
Filter
TableContainer (table)
*all the components act separately, requiring the dataset to be imported to function


////// Stack
Vanilla CSS, TailwindCSS, TypeScript, JavaScript


//// Files description
// constants.ts
includes the main colors used by Tailwind and
the charts
labels used by the charts (the hover popup)
Typescript types for the dataset
The dataset which is a javaScript object.

// app > page.tsx
has two features
1) responsible for the responsive design,
where it holds spaces that are adjusted with TailwindCSS
inside these spaces the Chart containers are held

To see the layout borders, change in styles.css
the name of the class default_card to default_card2

2) Listens to the filter component to pass
the selected information to all the chart/data components
to fetch data from the dataset accordingly
using an object containing two properties
property1: the type of the filter
property2: the selection

// Tailwind.config.js
uses the color object imported from constants.ts
defines the tailwind viewport(s) for responsive design

// Helpers > Helpers.js: 
javaScript functions could be used in multiple components

// app > globals.css
handles the main text sizes
cards and gradient backgrounds
table alignment, text, background and colors

// app > layout.tsx
main background
contains the nav bar and the footer which
wraps the main element containing all the dashboard
