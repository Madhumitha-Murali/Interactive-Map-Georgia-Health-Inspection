var map = L.map('map', {
    preferCanvas: true,
    center: [33.7488, -84.3877],
    zoom: 11
});

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 12,
	maxZoom: 15,
	ext: 'png'
}).addTo(map);

fetch('/static/final_collection.json').then(function (response) {
    return response.json();
}).then(function(data) {
    console.log('loaded')
    L.geoJSON(data, {
        style: function(feature) {
            const score = feature.properties.score;
            const avg_score = feature.properties.lifetime_avg;
            const opacity = 0.4
                //Some Other Options for opacity
                //feature.properties.violation_rate/50
                //feature.properties.lifetime_avg/100
            const outline = "black"
            let color = "red"
            let oline = "red"

            // Fill color based on average score
            if (avg_score >= 93) {
                color = 'green'
            } else if (avg_score >= 85) {
                color = 'yellow'
            } else if (avg_score >= 75) {
                color = 'orange'
            } else {
                color = 'red'
            }

            // Outline color based on current score
            if (score >= 95) {
                oline = 'green'
            } else if (score >= 85) {
                oline = 'yellow'
            } else if (score >= 75) {
                oline = 'orange'
            } else {
                oline = 'red'
            }

            return {
                color: oline,
                fillOpacity: opacity,
                fillColor: color
            }
        },

        onEachFeature: function(feature, layer) {
            var popupText = "<b>Score:</b> " + feature.properties.score +
            "<br><b>Name:</b> " + feature.properties.name +
            "<br><b>Location:</b> " + feature.properties.addr +
            "<br><b>Date:</b>" + feature.properties.date;

            layer.bindPopup(popupParser(feature), {
                closeButton: true,
                maxWidth: "auto",
            });
            layer.on('click', function() {
                layer.openPopup();
            })
        },

        pointToLayer: function(feature, latlng) {

            const r_circ = feature.properties.violation_rate+3

            return L.circleMarker(latlng, {
                radius: r_circ,
                weight: 2
            })
        }

    }).addTo(map);
})