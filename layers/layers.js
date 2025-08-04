var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_datapasienTBanakperPKMBogor_3 = new ol.format.GeoJSON();
var features_datapasienTBanakperPKMBogor_3 = format_datapasienTBanakperPKMBogor_3.readFeatures(json_datapasienTBanakperPKMBogor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datapasienTBanakperPKMBogor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datapasienTBanakperPKMBogor_3.addFeatures(features_datapasienTBanakperPKMBogor_3);cluster_datapasienTBanakperPKMBogor_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_datapasienTBanakperPKMBogor_3
});
var lyr_datapasienTBanakperPKMBogor_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_datapasienTBanakperPKMBogor_3, 
                style: style_datapasienTBanakperPKMBogor_3,
                popuplayertitle: "data pasien TB anak per PKM Bogor",
                interactive: true,
                title: '<img src="styles/legend/datapasienTBanakperPKMBogor_3.png" /> data pasien TB anak per PKM Bogor'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_GoogleMaps_2,],
                                fold: "open",
                                title: "Basemap"});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_datapasienTBanakperPKMBogor_3.setVisible(true);
var layersList = [group_Basemap,lyr_datapasienTBanakperPKMBogor_3];
lyr_datapasienTBanakperPKMBogor_3.set('fieldAliases', {'Nomer': 'Nomer', 'N0.': 'N0.', 'KEC.': 'KEC.', 'KEL./DESA': 'KEL./DESA', 'PKM.': 'PKM.', 'TB': 'TB', 'UMUR': 'UMUR', 'JENKEL': 'JENKEL', 'BB': 'BB', 'TB-STUN': 'TB-STUN', 'Tgl.': 'Tgl.', 'Peneliti': 'Peneliti', 'Bujur': 'Bujur', 'Lintang': 'Lintang', 'Foto': 'Foto', 'Alamat': 'Alamat', });
lyr_datapasienTBanakperPKMBogor_3.set('fieldImages', {'Nomer': 'TextEdit', 'N0.': 'TextEdit', 'KEC.': 'TextEdit', 'KEL./DESA': 'TextEdit', 'PKM.': 'TextEdit', 'TB': 'TextEdit', 'UMUR': 'TextEdit', 'JENKEL': 'TextEdit', 'BB': 'TextEdit', 'TB-STUN': 'TextEdit', 'Tgl.': 'TextEdit', 'Peneliti': 'TextEdit', 'Bujur': 'TextEdit', 'Lintang': 'TextEdit', 'Foto': 'ExternalResource', 'Alamat': 'TextEdit', });
lyr_datapasienTBanakperPKMBogor_3.set('fieldLabels', {'Nomer': 'inline label - always visible', 'N0.': 'hidden field', 'KEC.': 'inline label - always visible', 'KEL./DESA': 'inline label - always visible', 'PKM.': 'inline label - always visible', 'TB': 'inline label - always visible', 'UMUR': 'hidden field', 'JENKEL': 'hidden field', 'BB': 'hidden field', 'TB-STUN': 'inline label - always visible', 'Tgl.': 'hidden field', 'Peneliti': 'hidden field', 'Bujur': 'inline label - always visible', 'Lintang': 'inline label - always visible', 'Foto': 'header label - visible with data', 'Alamat': 'inline label - always visible', });
lyr_datapasienTBanakperPKMBogor_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});