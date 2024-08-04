ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-740188.445875, 5516928.440264, 1515251.859649, 6812327.099705]);
var wms_layers = [];

var format_AlbertaBoundary_0 = new ol.format.GeoJSON();
var features_AlbertaBoundary_0 = format_AlbertaBoundary_0.readFeatures(json_AlbertaBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_0.addFeatures(features_AlbertaBoundary_0);
var lyr_AlbertaBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_0, 
                style: style_AlbertaBoundary_0,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_0.png" /> Alberta Boundary'
            });
var format_AlbertaWaterbodies_1 = new ol.format.GeoJSON();
var features_AlbertaWaterbodies_1 = format_AlbertaWaterbodies_1.readFeatures(json_AlbertaWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_AlbertaWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterbodies_1.addFeatures(features_AlbertaWaterbodies_1);
var lyr_AlbertaWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterbodies_1, 
                style: style_AlbertaWaterbodies_1,
                popuplayertitle: "Alberta Waterbodies",
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_FishStockingLocations2024_2 = new ol.format.GeoJSON();
var features_FishStockingLocations2024_2 = format_FishStockingLocations2024_2.readFeatures(json_FishStockingLocations2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_FishStockingLocations2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingLocations2024_2.addFeatures(features_FishStockingLocations2024_2);
var lyr_FishStockingLocations2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingLocations2024_2, 
                style: style_FishStockingLocations2024_2,
                popuplayertitle: "Fish Stocking Locations 2024",
                interactive: true,
    title: 'Fish Stocking Locations 2024<br />\
    <img src="styles/legend/FishStockingLocations2024_2_0.png" /> 15 - 2200<br />\
    <img src="styles/legend/FishStockingLocations2024_2_1.png" /> 2200 - 5600<br />\
    <img src="styles/legend/FishStockingLocations2024_2_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/FishStockingLocations2024_2_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/FishStockingLocations2024_2_6.png" /> 110000 - 1613075<br />'
        });

lyr_AlbertaBoundary_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_FishStockingLocations2024_2.setVisible(true);
var layersList = [lyr_AlbertaBoundary_0,lyr_AlbertaWaterbodies_1,lyr_FishStockingLocations2024_2];
lyr_AlbertaBoundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_FishStockingLocations2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map_Author': 'Map_Author', 'NumStock': 'NumStock', });
lyr_AlbertaBoundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_FishStockingLocations2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map_Author': 'TextEdit', 'NumStock': 'Range', });
lyr_AlbertaBoundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_FishStockingLocations2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map_Author': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_FishStockingLocations2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});