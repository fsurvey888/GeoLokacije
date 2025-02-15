var json_Mjesta_2 = {"type":"FeatureCollection","name":"Mjesta_2","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"fid":930.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6565048","Y":"4889408","link":"https://f-survey.com"},"geometry":{"type":"Point","coordinates":[18.808041245231699,44.146290369521218]}},{"type":"Feature","properties":{"fid":930.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6565548","Y":"4888690","link":"https://f-survey.com"},"geometry":{"type":"Point","coordinates":[18.814193703754452,44.139785776225075]}},{"type":"Feature","properties":{"fid":49.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6563792","Y":"4887820","link":"https://f-survey.com"},"geometry":{"type":"Point","coordinates":[18.792149663641297,44.132107084789261]}},L.geoJSON(json_Mjesta_2, {
    onEachFeature: function (feature, layer) {
        // Bind a popup to the layer with an image
        layer.bindPopup(`
            <b>Location:</b> ${feature.properties.OdjelKroz}<br>
            <a href="${feature.properties.link}" target="_blank">
                <img src="${feature.properties.thumbnail}" alt="Thumbnail" style="max-width: 200px; height: auto;">
            </a><br>
            <button onclick="map.closePopup()">Close</button>
        `);

        // Show popup on click
        layer.on('click', function (e) {
            layer.openPopup();
        });
    }
}).addTo(map);"geometry":{"type":"Point","coordinates":[18.812150983709344,44.139039054979762]}},{"type":"Feature","properties":{"fid":418.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6564661","Y":"4888654","link":"https://f-survey.com"},"geometry":{"type":"Point","coordinates":[18.803114140168777,44.139535686121754]}},{"type":"Feature","properties":{"fid":419.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6565096","Y":"4888413","link":"/Users/imac/Downloads/go.jpg"},"geometry":{"type":"Point","coordinates":[18.808512770978052,44.137327496385488]}},{"type":"Feature","properties":{"fid":420.0,"SPP":"20","PJ":"02","OdjelKroz":"045","X":"6563948","Y":"4887951","link":"https://f-survey.com"},"geometry":{"type":"Point","coordinates":[18.794117214450093,44.13326817053661]}}]}
