//Initialize map and set view
let myMap = L.map("map", {
    center: [39.5, -8],
    zoom: 2.5,
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Earthquake data URL (Significant Earthquakes in the past 30 days)
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

//Fetch GeoJSON data
d3.json(url).then(function(response) {
    console.log(response);
    features = response.features;

    //Define marker size by magnitude
    function markerSize(mag) {
      return Math.sqrt(mag) * 75000;
    }

    //Define marker color by depth
    function markerColor(depth) {
        return depth > 90 ? "red" :
               depth > 70 ? "darkorange" :
               depth > 50 ? "orange" :
               depth > 30 ? "lightsalmon" :
               depth > 10 ? "yellowgreen" :
                            "green"; 
    }

    //Iterate through earthquake features and add circle markers to the map
    features.forEach(function(feature) {
        let coordinates = feature.geometry.coordinates;
        let magnitude = feature.properties.mag;
        let depth = coordinates[2];

        //Add circle marker to map
        L.circle([coordinates[1], coordinates[0]], {
            radius: markerSize(magnitude),
            color: "black",
            weight: 1,
            fillColor: markerColor(depth),
            fillOpacity: 0.7
        }).addTo(myMap)
        .bindPopup(`<h3>${feature.properties.place}</h3><hr><p>Magnitude: ${magnitude}</p><p>Depth: ${depth} km</p>`);
    });

    //Add legend to the map
    let legend = L.control({ position: "bottomright"});

    legend.onAdd = function(map) {
        let div = L.DomUtil.create("div", "info legend");

        //Add white legend box
        div.style.backgroundColor = "white";
        div.style.padding = "10px";
        div.style.borderRadius = "5px";

        let depths = [0, 10, 30, 50, 70, 90];
        let colors = [
            "green",
            "yellowgreen",
            "lightsalmon",
            "orange",
            "darkorange",
            "red"
        ];
        
        //Loop through depths to generate labels with colored squares
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                `<div style="display: flex; align-items: center;">
                    <div style="width: 18px; height: 18px; background:${colors[i]}; margin-right: 8px;"></div>
                    <span>${depths[i]}${depths[i + 1] ? '&ndash;' + depths[i + 1] : '+'}</span>
                </div>`;
        }
        return div;
    };
    //Add legend to map
    legend.addTo(myMap);
});