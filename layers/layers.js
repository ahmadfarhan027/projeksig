var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DataWisatawan_1 = new ol.format.GeoJSON();
var features_DataWisatawan_1 = format_DataWisatawan_1.readFeatures(json_DataWisatawan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataWisatawan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataWisatawan_1.addFeatures(features_DataWisatawan_1);
var lyr_DataWisatawan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataWisatawan_1, 
                style: style_DataWisatawan_1,
                popuplayertitle: 'Data Wisatawan',
                interactive: true,
    title: 'Data Wisatawan<br />\
    <img src="styles/legend/DataWisatawan_1_0.png" /> 1418984 - 4314960<br />\
    <img src="styles/legend/DataWisatawan_1_1.png" /> 4314960 - 7210936<br />\
    <img src="styles/legend/DataWisatawan_1_2.png" /> 7210936 - 10106912<br />\
    <img src="styles/legend/DataWisatawan_1_3.png" /> 10106912 - 13002888<br />\
    <img src="styles/legend/DataWisatawan_1_4.png" /> 13002888 - 15898863<br />\
    <img src="styles/legend/DataWisatawan_1_5.png" /> 15898863 - 18794839<br />\
    <img src="styles/legend/DataWisatawan_1_6.png" /> 18794839 - 21690815<br />\
    <img src="styles/legend/DataWisatawan_1_7.png" /> 21690815 - 24586791<br />'
        });
var format_Destinasi_2 = new ol.format.GeoJSON();
var features_Destinasi_2 = format_Destinasi_2.readFeatures(json_Destinasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinasi_2.addFeatures(features_Destinasi_2);
var lyr_Destinasi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Destinasi_2, 
                style: style_Destinasi_2,
                popuplayertitle: 'Destinasi',
                interactive: true,
                title: '<img src="styles/legend/Destinasi_2.png" /> Destinasi'
            });

lyr_OSMStandard_0.setVisible(true);lyr_DataWisatawan_1.setVisible(true);lyr_Destinasi_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_DataWisatawan_1,lyr_Destinasi_2];
lyr_DataWisatawan_1.set('fieldAliases', {'Kab/Kota': 'Kab/Kota', 'Kode': 'Kode', 'Jumlah': 'Jumlah', });
lyr_Destinasi_2.set('fieldAliases', {'alamat': 'alamat', 'deskripsi': 'deskripsi', 'layer': 'layer', 'Nama': 'Nama', 'Kategori': 'Kategori', });
lyr_DataWisatawan_1.set('fieldImages', {'Kab/Kota': 'TextEdit', 'Kode': 'TextEdit', 'Jumlah': 'Range', });
lyr_Destinasi_2.set('fieldImages', {'alamat': 'TextEdit', 'deskripsi': 'TextEdit', 'layer': 'TextEdit', 'Nama': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_DataWisatawan_1.set('fieldLabels', {'Kab/Kota': 'header label - always visible', 'Kode': 'hidden field', 'Jumlah': 'header label - always visible', });
lyr_Destinasi_2.set('fieldLabels', {'alamat': 'hidden field', 'deskripsi': 'hidden field', 'layer': 'hidden field', 'Nama': 'header label - always visible', 'Kategori': 'header label - always visible', });
lyr_Destinasi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});