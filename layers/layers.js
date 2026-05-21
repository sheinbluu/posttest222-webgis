var wms_layers = [];

var format_KecamatanGenteng_0 = new ol.format.GeoJSON();
var features_KecamatanGenteng_0 = format_KecamatanGenteng_0.readFeatures(json_KecamatanGenteng_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanGenteng_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_0.addFeatures(features_KecamatanGenteng_0);
var lyr_KecamatanGenteng_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_0, 
                style: style_KecamatanGenteng_0,
                popuplayertitle: 'Kecamatan Genteng',
                interactive: true,
    title: 'Kecamatan Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_0_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/KecamatanGenteng_0_1.png" /> Genteng<br />\
    <img src="styles/legend/KecamatanGenteng_0_2.png" /> Kapasari<br />\
    <img src="styles/legend/KecamatanGenteng_0_3.png" /> Ketabang<br />\
    <img src="styles/legend/KecamatanGenteng_0_4.png" /> Peneleh<br />' });
var format_Dissolve_1 = new ol.format.GeoJSON();
var features_Dissolve_1 = format_Dissolve_1.readFeatures(json_Dissolve_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolve_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolve_1.addFeatures(features_Dissolve_1);
var lyr_Dissolve_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolve_1, 
                style: style_Dissolve_1,
                popuplayertitle: 'Dissolve',
                interactive: false,
                title: '<img src="styles/legend/Dissolve_1.png" /> Dissolve'
            });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_TitikHalte_3 = new ol.format.GeoJSON();
var features_TitikHalte_3 = format_TitikHalte_3.readFeatures(json_TitikHalte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikHalte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikHalte_3.addFeatures(features_TitikHalte_3);
var lyr_TitikHalte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikHalte_3, 
                style: style_TitikHalte_3,
                popuplayertitle: 'Titik Halte',
                interactive: true,
    title: 'Titik Halte<br />\
    <img src="styles/legend/TitikHalte_3_0.png" /> Halte Balai Kota<br />\
    <img src="styles/legend/TitikHalte_3_1.png" /> Halte Bambu Runcing<br />\
    <img src="styles/legend/TitikHalte_3_2.png" /> Halte Basra<br />\
    <img src="styles/legend/TitikHalte_3_3.png" /> Halte Cak Durasim A<br />\
    <img src="styles/legend/TitikHalte_3_4.png" /> Halte Cak Durasim B<br />\
    <img src="styles/legend/TitikHalte_3_5.png" /> Halte Embong Kemiri<br />\
    <img src="styles/legend/TitikHalte_3_6.png" /> Halte Embong Malang<br />\
    <img src="styles/legend/TitikHalte_3_7.png" /> Halte Embong Malang 2<br />\
    <img src="styles/legend/TitikHalte_3_8.png" /> Halte Embong Wungu<br />\
    <img src="styles/legend/TitikHalte_3_9.png" /> Halte Genteng Kali A<br />\
    <img src="styles/legend/TitikHalte_3_10.png" /> Halte Genteng Kali B<br />\
    <img src="styles/legend/TitikHalte_3_11.png" /> Halte Gondosuli<br />\
    <img src="styles/legend/TitikHalte_3_12.png" /> Halte Grand City<br />\
    <img src="styles/legend/TitikHalte_3_13.png" /> Halte Gubernur Suryo<br />\
    <img src="styles/legend/TitikHalte_3_14.png" /> Halte Jaksa Agung Suprapto<br />\
    <img src="styles/legend/TitikHalte_3_15.png" /> Halte Jimerto<br />\
    <img src="styles/legend/TitikHalte_3_16.png" /> Halte Kaliasin<br />\
    <img src="styles/legend/TitikHalte_3_17.png" /> Halte Kantor Dinas Pendidikan<br />\
    <img src="styles/legend/TitikHalte_3_18.png" /> Halte Kayoon 1A<br />\
    <img src="styles/legend/TitikHalte_3_19.png" /> Halte Kayoon 1B<br />\
    <img src="styles/legend/TitikHalte_3_20.png" /> Halte Kayoon 2A<br />\
    <img src="styles/legend/TitikHalte_3_21.png" /> Halte Kayoon 2B<br />\
    <img src="styles/legend/TitikHalte_3_22.png" /> Halte Ketabang Ngemplak<br />\
    <img src="styles/legend/TitikHalte_3_23.png" /> Halte MMPA SIOLA A<br />\
    <img src="styles/legend/TitikHalte_3_24.png" /> Halte Monkasel<br />\
    <img src="styles/legend/TitikHalte_3_25.png" /> Halte Monumen Sudirman<br />\
    <img src="styles/legend/TitikHalte_3_26.png" /> Halte MPP SIOLA B<br />\
    <img src="styles/legend/TitikHalte_3_27.png" /> Halte Ngemplak<br />\
    <img src="styles/legend/TitikHalte_3_28.png" /> Halte Pangsud<br />\
    <img src="styles/legend/TitikHalte_3_29.png" /> Halte Pemuda<br />\
    <img src="styles/legend/TitikHalte_3_30.png" /> Halte PMI<br />\
    <img src="styles/legend/TitikHalte_3_31.png" /> Halte Simpang Dukuh<br />\
    <img src="styles/legend/TitikHalte_3_32.png" /> Halte Sindoro<br />\
    <img src="styles/legend/TitikHalte_3_33.png" /> Halte SIOLA<br />\
    <img src="styles/legend/TitikHalte_3_34.png" /> Halte Slamet<br />\
    <img src="styles/legend/TitikHalte_3_35.png" /> Halte SMPN 3<br />\
    <img src="styles/legend/TitikHalte_3_36.png" /> Halte Sono Kembang<br />\
    <img src="styles/legend/TitikHalte_3_37.png" /> Halte Sono Kembang 2<br />\
    <img src="styles/legend/TitikHalte_3_38.png" /> Halte Taman Apsari<br />\
    <img src="styles/legend/TitikHalte_3_39.png" /> Halte Taman Prestasi<br />\
    <img src="styles/legend/TitikHalte_3_40.png" /> Halte Tunjungan<br />\
    <img src="styles/legend/TitikHalte_3_41.png" /> Halte Urip Sumoharjo 1<br />\
    <img src="styles/legend/TitikHalte_3_42.png" /> Halte Wuni<br />\
    <img src="styles/legend/TitikHalte_3_43.png" /> Halte Yos Sudarso<br />' });

lyr_KecamatanGenteng_0.setVisible(true);lyr_Dissolve_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_TitikHalte_3.setVisible(true);
var layersList = [lyr_KecamatanGenteng_0,lyr_Dissolve_1,lyr_JaringanJalan_2,lyr_TitikHalte_3];
lyr_KecamatanGenteng_0.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas_asli': 'luas_asli', });
lyr_Dissolve_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'luas_terj': 'luas_terj', 'persen_ter': 'persen_ter', 'persen_tid': 'persen_tid', 'kecamatan_genteng_ar_luas_asli': 'kecamatan_genteng_ar_luas_asli', });
lyr_JaringanJalan_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_TitikHalte_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Informasi Halte__Nama_Halte': 'Informasi Halte__Nama_Halte', });
lyr_KecamatanGenteng_0.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'luas_asli': 'TextEdit', });
lyr_Dissolve_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'luas_terj': 'TextEdit', 'persen_ter': '', 'persen_tid': '', 'kecamatan_genteng_ar_luas_asli': 'TextEdit', });
lyr_JaringanJalan_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_TitikHalte_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Informasi Halte__Nama_Halte': 'TextEdit', });
lyr_KecamatanGenteng_0.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'Kelurahan': 'inline label - visible with data', 'luas_asli': 'inline label - visible with data', });
lyr_Dissolve_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', 'Nama_Halte': 'no label', 'Keterangan': 'no label', 'Sumber': 'no label', 'type': 'no label', 'start': 'no label', 'luas_terj': 'no label', 'persen_ter': 'no label', 'persen_tid': 'no label', 'kecamatan_genteng_ar_luas_asli': 'no label', });
lyr_JaringanJalan_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'width': 'inline label - visible with data', 'highway': 'hidden field', 'surface': 'hidden field', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_TitikHalte_3.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Informasi Halte__Nama_Halte': 'inline label - visible with data', });
lyr_TitikHalte_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});