var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_bataskabupatenandkota_1 = new ol.format.GeoJSON();
var features_bataskabupatenandkota_1 = format_bataskabupatenandkota_1.readFeatures(json_bataskabupatenandkota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bataskabupatenandkota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bataskabupatenandkota_1.addFeatures(features_bataskabupatenandkota_1);
var lyr_bataskabupatenandkota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bataskabupatenandkota_1, 
                style: style_bataskabupatenandkota_1,
                popuplayertitle: 'batas kabupaten and kota',
                interactive: true,
                title: '<img src="styles/legend/bataskabupatenandkota_1.png" /> batas kabupaten and kota'
            });
var format_zonagunungapi_2 = new ol.format.GeoJSON();
var features_zonagunungapi_2 = format_zonagunungapi_2.readFeatures(json_zonagunungapi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonagunungapi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonagunungapi_2.addFeatures(features_zonagunungapi_2);
var lyr_zonagunungapi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonagunungapi_2, 
                style: style_zonagunungapi_2,
                popuplayertitle: 'zona gunung api',
                interactive: true,
    title: 'zona gunung api<br />\
    <img src="styles/legend/zonagunungapi_2_0.png" /> Normal<br />\
    <img src="styles/legend/zonagunungapi_2_1.png" /> Waspada<br />' });
var format_Risiko_Bencana_Jatim_3 = new ol.format.GeoJSON();
var features_Risiko_Bencana_Jatim_3 = format_Risiko_Bencana_Jatim_3.readFeatures(json_Risiko_Bencana_Jatim_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risiko_Bencana_Jatim_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risiko_Bencana_Jatim_3.addFeatures(features_Risiko_Bencana_Jatim_3);
var lyr_Risiko_Bencana_Jatim_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risiko_Bencana_Jatim_3, 
                style: style_Risiko_Bencana_Jatim_3,
                popuplayertitle: 'Risiko_Bencana_Jatim',
                interactive: true,
    title: 'Risiko_Bencana_Jatim<br />\
    <img src="styles/legend/Risiko_Bencana_Jatim_3_0.png" /> Risiko_Banjir<br />\
    <img src="styles/legend/Risiko_Bencana_Jatim_3_1.png" /> Risiko_Banjir_Bandang<br />\
    <img src="styles/legend/Risiko_Bencana_Jatim_3_2.png" /> Risiko_Gempa<br />\
    <img src="styles/legend/Risiko_Bencana_Jatim_3_3.png" /> Risiko_Longsor<br />' });
var format_jaringan_jalan_4 = new ol.format.GeoJSON();
var features_jaringan_jalan_4 = format_jaringan_jalan_4.readFeatures(json_jaringan_jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringan_jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringan_jalan_4.addFeatures(features_jaringan_jalan_4);
var lyr_jaringan_jalan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringan_jalan_4, 
                style: style_jaringan_jalan_4,
                popuplayertitle: 'jaringan_jalan',
                interactive: true,
    title: 'jaringan_jalan<br />\
    <img src="styles/legend/jaringan_jalan_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/jaringan_jalan_4_1.png" /> Jalan Provinsi<br />' });
var format_CagarBudayaPeringkatProvinsi_5 = new ol.format.GeoJSON();
var features_CagarBudayaPeringkatProvinsi_5 = format_CagarBudayaPeringkatProvinsi_5.readFeatures(json_CagarBudayaPeringkatProvinsi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CagarBudayaPeringkatProvinsi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CagarBudayaPeringkatProvinsi_5.addFeatures(features_CagarBudayaPeringkatProvinsi_5);
var lyr_CagarBudayaPeringkatProvinsi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CagarBudayaPeringkatProvinsi_5, 
                style: style_CagarBudayaPeringkatProvinsi_5,
                popuplayertitle: ' Cagar Budaya Peringkat Provinsi',
                interactive: true,
                title: '<img src="styles/legend/CagarBudayaPeringkatProvinsi_5.png" />  Cagar Budaya Peringkat Provinsi'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_bataskabupatenandkota_1.setVisible(true);lyr_zonagunungapi_2.setVisible(true);lyr_Risiko_Bencana_Jatim_3.setVisible(true);lyr_jaringan_jalan_4.setVisible(true);lyr_CagarBudayaPeringkatProvinsi_5.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_bataskabupatenandkota_1,lyr_zonagunungapi_2,lyr_Risiko_Bencana_Jatim_3,lyr_jaringan_jalan_4,lyr_CagarBudayaPeringkatProvinsi_5];
lyr_bataskabupatenandkota_1.set('fieldAliases', {'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'CEK': 'CEK', });
lyr_zonagunungapi_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'REMARK': 'REMARK', 'THTERBIT': 'THTERBIT', 'CLAPI': 'CLAPI', 'DEPMAG': 'DEPMAG', 'ERU': 'ERU', 'INDGA': 'INDGA', 'KOORDX': 'KOORDX', 'KOORDY': 'KOORDY', 'LAV': 'LAV', 'MATGA': 'MATGA', 'MON': 'MON', 'SRS_ID': 'SRS_ID', 'TEK': 'TEK', 'TIM': 'TIM', 'VEI': 'VEI', 'VIC': 'VIC', 'DUR': 'DUR', 'VEEA': 'VEEA', 'Status': 'Status', });
lyr_Risiko_Bencana_Jatim_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', });
lyr_jaringan_jalan_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'PANJANG': 'PANJANG', 'RUAS': 'RUAS', 'STATUS': 'STATUS', 'FUNCT': 'FUNCT', 'LENGTH': 'LENGTH', 'MST10': 'MST10', 'RCSYR': 'RCSYR', 'LINKNAME': 'LINKNAME', 'MST': 'MST', 'PROVINSI': 'PROVINSI', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'KEYIRMS': 'KEYIRMS', 'NOMOR': 'NOMOR', 'FUNGSI': 'FUNGSI', 'KODEPROV': 'KODEPROV', 'LIN_PU_SUM': 'LIN_PU_SUM', 'LINTAS_3': 'LINTAS_3', 'X_COORD': 'X_COORD', 'Y_COORD': 'Y_COORD', 'NAMA_SK': 'NAMA_SK', 'PJG_SK': 'PJG_SK', 'STAT09': 'STAT09', 'KONDISI': 'KONDISI', 'SHAPE_LENG': 'SHAPE_LENG', 'VIDEO': 'VIDEO', 'layer': 'layer', 'path': 'path', });
lyr_CagarBudayaPeringkatProvinsi_5.set('fieldAliases', {'NO': 'NO', 'OBJEK': 'OBJEK', 'X': 'X', 'Y': 'Y', 'Kategori': 'Kategori', });
lyr_bataskabupatenandkota_1.set('fieldImages', {'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'CEK': 'Range', });
lyr_zonagunungapi_2.set('fieldImages', {'fid': 'Range', 'OBJECTID_1': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'REMARK': 'TextEdit', 'THTERBIT': 'Range', 'CLAPI': 'Range', 'DEPMAG': 'Range', 'ERU': 'Range', 'INDGA': 'Range', 'KOORDX': 'TextEdit', 'KOORDY': 'TextEdit', 'LAV': 'Range', 'MATGA': 'Range', 'MON': 'Range', 'SRS_ID': 'TextEdit', 'TEK': 'Range', 'TIM': 'DateTime', 'VEI': 'Range', 'VIC': 'Range', 'DUR': 'Range', 'VEEA': 'TextEdit', 'Status': 'TextEdit', });
lyr_Risiko_Bencana_Jatim_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', });
lyr_jaringan_jalan_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'PANJANG': 'TextEdit', 'RUAS': 'TextEdit', 'STATUS': 'TextEdit', 'FUNCT': 'TextEdit', 'LENGTH': 'TextEdit', 'MST10': 'TextEdit', 'RCSYR': 'TextEdit', 'LINKNAME': 'TextEdit', 'MST': 'TextEdit', 'PROVINSI': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'KEYIRMS': 'TextEdit', 'NOMOR': 'TextEdit', 'FUNGSI': 'TextEdit', 'KODEPROV': 'TextEdit', 'LIN_PU_SUM': 'TextEdit', 'LINTAS_3': 'TextEdit', 'X_COORD': 'TextEdit', 'Y_COORD': 'TextEdit', 'NAMA_SK': 'TextEdit', 'PJG_SK': 'TextEdit', 'STAT09': 'TextEdit', 'KONDISI': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'VIDEO': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CagarBudayaPeringkatProvinsi_5.set('fieldImages', {'NO': 'TextEdit', 'OBJEK': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Kategori': 'TextEdit', });
lyr_bataskabupatenandkota_1.set('fieldLabels', {'KABUPATEN': 'inline label - always visible', 'PROVINSI': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'CEK': 'hidden field', });
lyr_zonagunungapi_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'LCODE': 'hidden field', 'METADATA': 'hidden field', 'REMARK': 'inline label - always visible', 'THTERBIT': 'inline label - always visible', 'CLAPI': 'hidden field', 'DEPMAG': 'hidden field', 'ERU': 'hidden field', 'INDGA': 'hidden field', 'KOORDX': 'hidden field', 'KOORDY': 'hidden field', 'LAV': 'hidden field', 'MATGA': 'hidden field', 'MON': 'hidden field', 'SRS_ID': 'hidden field', 'TEK': 'hidden field', 'TIM': 'hidden field', 'VEI': 'hidden field', 'VIC': 'hidden field', 'DUR': 'hidden field', 'VEEA': 'hidden field', 'Status': 'inline label - always visible', });
lyr_Risiko_Bencana_Jatim_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'layer': 'inline label - always visible', });
lyr_jaringan_jalan_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'PANJANG': 'hidden field', 'RUAS': 'inline label - always visible', 'STATUS': 'inline label - visible with data', 'FUNCT': 'hidden field', 'LENGTH': 'hidden field', 'MST10': 'hidden field', 'RCSYR': 'hidden field', 'LINKNAME': 'hidden field', 'MST': 'hidden field', 'PROVINSI': 'inline label - always visible', 'OBJECTID_1': 'hidden field', 'OBJECTID_2': 'hidden field', 'KEYIRMS': 'hidden field', 'NOMOR': 'hidden field', 'FUNGSI': 'hidden field', 'KODEPROV': 'hidden field', 'LIN_PU_SUM': 'hidden field', 'LINTAS_3': 'hidden field', 'X_COORD': 'hidden field', 'Y_COORD': 'hidden field', 'NAMA_SK': 'hidden field', 'PJG_SK': 'hidden field', 'STAT09': 'hidden field', 'KONDISI': 'hidden field', 'SHAPE_LENG': 'hidden field', 'VIDEO': 'hidden field', 'layer': 'inline label - always visible', 'path': 'hidden field', });
lyr_CagarBudayaPeringkatProvinsi_5.set('fieldLabels', {'NO': 'hidden field', 'OBJEK': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'Kategori': 'inline label - always visible', });
lyr_CagarBudayaPeringkatProvinsi_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});