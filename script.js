mapboxgl.accessToken = 'pk.eyJ1Ijoia2FlZGFueXUiLCJhIjoiY21rYXJpNHF6MGltODNkcHE3dHM5cmxlZyJ9.nnYd9wh7kN2DJFgtuewiyg'

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kaedanyu/cml6b9hdy005j01s37z9ucj9s',
    center: [-79.415494, 47.654257],
    zoom: 10,
});

map.on('load', () => {

    map.addSource('buildings-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Kaedanyu/ExerciseV/main/wk5-data/buildings.geojson' //URL to buildings.geojson file via github

        //First part of exercise with text based geoJSON
        /*
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }

                }
            ]
        } */
    });

    map.addLayer({
        'id': 'buildings-pnt',
        'type': 'circle',
        'source': 'buildings-data',
        'paint': {
            'circle-radius': 20,
            'circle-color': '#2bff00'
        }
    });

    /*
        map.addLayer({
            'id': 'uoft-pnt',
            'type': 'circle',
            'source': 'uoft-data',
            'paint': {
                'circle-radius': 6,
                'circle-color': '#B42222'
            }
        });*/
});

// Add a data source from a Mapbox tileset
map.addSource('census-tracts', { // Create your own source ID
    'type': 'vector',
    'url': 'mapbox://kaedanyu.d3nlfs3c' // Update to your mapbox tileset ID
});
map.addLayer({
    'id': 'census-polygons', // Create your own layer ID
    'type': 'fill', // Note this is different to point data
    'source': 'census-tracts', // Must match source ID from addSource Method
    'paint': {
        'fill-color': '#ce5757', // Test alternative colours and style properties
        'fill-opacity': 0.4,
        'fill-outline-color': 'black'
    },
    'source-layer': 'torontoct-4yzxod' // Tileset NAME (diff to ID), get this from mapbox tileset page
},
 //   'uoft-buildings' // Drawing order - places layer below points
/* Here the addlayer method takes 2 arguments (the layer as an object and a
string for another layer's name). If the other layer already exists, the new layer
will be drawn before that one*/
);