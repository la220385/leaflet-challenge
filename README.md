# Earthquake Visualization Challenge

## Background
The United States Geological Survey (USGS) is dedicated to providing valuable scientific data on natural hazards, ecosystem health, and the impacts of climate and land-use change. To enhance public understanding and support decision-making, USGS seeks innovative tools to visualize vast amounts of global earthquake data effectively.

## Project Objective
Develop a visualization tool that leverages USGS earthquake data to inform and educate the public and governmental organizations. This tool aims to facilitate better understanding and potentially aid in securing additional funding for further research and response strategies.

## Instructions

### Part 1: Create the Earthquake Visualization

#### Getting Started
1. **Acquire the Data:**
   - Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.
   - Choose a dataset to visualize, such as "All Earthquakes from the Past 7 Days," and obtain the JSON URL for the data.

2. **Visualizing the Data:**
   - Use Leaflet.js to create an interactive map plotting earthquakes based on longitude and latitude.
   - Adjust marker sizes to reflect earthquake magnitudes and color depths to indicate the depth of the earthquakes. Darker colors should represent greater depths.
   - Include popups for each marker to provide detailed information about the earthquake.
   - Develop a legend to help users understand the map's markers regarding magnitude and depth.


## Tools and Libraries
- **Leaflet.js**: For creating interactive maps.
- **JavaScript/HTML/CSS**: For frontend development.
- **USGS GeoJSON API**: Source for real-time earthquake data.

## Acknowledgments
- USGS for providing the earthquake data.
- The Leaflet.js team for their excellent mapping tools.
