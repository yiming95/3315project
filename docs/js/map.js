// map1
// two map tile layers
var street = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),
    satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
    CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    });

var jsonData = $.ajax({
        // AURIN Job dataset API: http://45.113.233.243:5984/job_json/90a80a4fc502d169ebce4ee07a001fb8
        // testing melbourne geo json API: http://admin:123qweasd@45.113.233.243:5984/geo_json/2adb959d243ca8869f8d9576bb0028c2
        //url:"http://admin:123qweasd@45.113.233.243:5984/homeless_json/ff4be0927955452a280785783d00c807",
        
        //url: "https://api.myjson.com/bins/xefh8",
        //url: "https://api.myjson.com/bins/8ikps",   //! 中国地图 GEO JSON, 里面包含疫情等级的数据， RESTFUL API 

        url: "https://extendsclass.com/api/json-storage/bin/bcddcbe",
        //url: "https://github.com/yiming95/3315_project/blob/master/china.json",

        type: "GET",
        dataType: "json",
        success: console.log("GeoJson successfully loaded"),
      
        headers: {"Access-Control-Allow-Origin":"*"},
        error: function (xhr) {
          alert(xhr.statusText)
        }
      }) 


// uses jquery when and done, as load geo json is async
$.when(jsonData).done(function() {
var mymap1 = L.map('mapid1',{
    maxZoom: 4.7,
    minZoom: 4.7,
    layers: [street]
}
).setView([39.370351,105.442496], 4.7);

console.log(jsonData);


// Ningbo经纬度: 29.8622194, 121.6203873

// add icon to marker
//* 新闻类的图标
var myIcon = L.icon({
    iconUrl: './assets/internet.png',
    iconSize: [20, 20],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

//* 社交媒体类的图标
var weiboIcon = L.icon({
    iconUrl: './assets/weibo-website-logo.png',
    iconSize: [20, 20],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});


var useful1     = L.marker([24,  114.30],{icon: myIcon}).bindPopup('2020年1月9日， 来源: 世界卫生组织官方网站， 文章题目：世卫组织关于中国武汉聚集性肺炎病例的声明，文章链接：https://www.who.int/china/zh/news/detail/09-01-2020-who-statement-regarding-cluster-of-pneumonia-cases-in-wuhan-china'),
    useful2     = L.marker([-38.433859306,  144.593741856],{icon: myIcon}).bindPopup('"You forgot to pack me 😭I miss you already vi_keeland ❤️ @ Melbourne Airport https://t.co/P7jt3mV12Q '),
    useful3     = L.marker([-36.833285001,  144.380744992],{icon: myIcon}).bindPopup('The latest posts on Easter 2019 is up! There was a bit of a delay while I fought off a cold and handed in multiple… https://t.co/nAuzhepur5');

var rubbish1 =     L.marker([22.868336,121.543991],{icon: myIcon}).bindPopup('2020年2月8日， 来源: Twitter，内容：医院的发热门诊人数很多!  https://t.co/s9ZDMXP0Wa'),
    rubbish2     = L.marker([-37.812,  144.937],{icon: myIcon}).bindPopup('&amp;b reminiscent of Toohey’s Old #atthesource - Drinking an Urban Dark by Urban Alley Brewery @ Urban Alley Brewery  — https://t.co/Fal9wCCwYb'), 
    rubbish3     = L.marker([ -37.8595, 144.978],{icon: myIcon}).bindPopup('"Conflicted about this one. Infected with something Brettish, but this combines with big floral hops and ends up an… https://t.co/Sa8acmiXZh');

var places = L.layerGroup([useful1, useful2, useful3]);
var places2 = L.layerGroup([rubbish1, rubbish2, rubbish3]);

// multiple layers
var baseMaps = {
    //"basemap": street,
    //"basemap": satellite
    "basemap": CartoDB_Voyager
};

var overlayMaps = {
    "新闻": places,
    "社交媒体": places2
};

// map has restricted area and zoom range form 11-13

//var southWest = L.latLng(-40.00869780196609, 143.560522216796875),
    //northEast = L.latLng(-35.61804716978352,  146.2981463623047);
//mymap1.setMaxBounds(new L.LatLngBounds(southWest, northEast));

L.control.layers(overlayMaps).addTo(mymap1);



//! 加上图标， 经度 offset - 4 

L.marker([26.437722,114.159201],{icon: weiboIcon}).bindPopup('时间：2020年2月8日， 来源：微博，地点：武汉，内容：医院的发热门诊人数很多 😃!').addTo(mymap1);
L.marker([26.437722,112.400215],{icon: weiboIcon}).bindPopup('时间：2020年2月8日， 来源：微博，地点：无，内容：今天公司很多人因为咳嗽、发烧请假了。').addTo(mymap1);
L.marker([26.447722,115.159201],{icon: myIcon}).bindPopup('时间：2020年1月9日， 来源: 世界卫生组织官方网站， 地点：武汉，内容：“世卫组织关于中国武汉聚集性肺炎病例的声明”，https://www.who.int/china/zh/news/detail/09-01-2020-who-statement-regarding-cluster-of-pneumonia-cases-in-wuhan-china').addTo(mymap1);


L.marker([25.874910,121.537498],{icon: weiboIcon}).bindPopup('时间：2020年2月10日， 来源：微博，地点：杭州，内容：听说医院里有确诊的新冠肺炎患者').addTo(mymap1);
L.marker([24.874910,121.537498],{icon: weiboIcon}).bindPopup('时间：2020年2月15日， 来源：微博，地点：无，内容：邻居一家都住院了，好像是新冠肺炎').addTo(mymap1);

 //! 低风险为绿色，中风险为黄色，高风险为红色， HEX编码代表颜色
function getColor(d) {
    return d == "低" ? '#1B813E' : 
           d == "中" ? '#F05E1C' :
           d == "高"  ? '#CB1B45' :
                      '#33FF00';
}


function style(feature) {
    return {
        fillColor: getColor(feature.properties.alertLevel),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

// custom info control
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};


// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h5>可视化预警地图</h5>' +  (props ?
        '<b>'
        + props.name+  '<br />'
        + '新冠肺炎 预警等级：'  +  props.alertLevel + '<br />' 

        : '请将鼠标放在地图上来查看预警等级');
};

info.addTo(mymap1);

// legend of the heat map
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [1.0, 1.5, 2.0, 3.0, 4.0, 6.0, 8.0],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

// legend.addTo(mymap1);


function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#F5F5F5',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    mymap1.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// add polygon layer to the map
geojson = L.geoJson(jsonData.responseJSON, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(mymap1);

});



//! Dynamic Table

var dataSet = [
    [ "新冠肺炎", "2020年2月8日", "微博", "武汉", "医院的发热门诊人数很多 😃!", "高" ],
    [ "新冠肺炎", "2020年2月8日", "微博", "无", "今天公司很多人因为咳嗽、发烧请假了。", "中" ],
    [ "新冠肺炎", "2020年1月9日", "世界卫生组织官方网站", "武汉", "2009/01/12", "高" ],
    [ "新冠肺炎", "2020年2月10日", "微博", "杭州", "听说医院里有确诊的新冠肺炎患者", "高" ],
    [ "新冠肺炎", "2020年2月15日", "微博", "无", "邻居一家都住院了，好像是新冠肺炎", "中" ]
];
 
$(document).ready(function() {
    $('#table').DataTable( {
        data: dataSet,
        columns: [
            { title: "传染病名称" },
            { title: "时间" },
            { title: "信息来源" },
            { title: "地点" },
            { title: "内容" },
            { title: "预警等级" }
        ]
    } );
} );



//! 对table进行 隐藏和展示
// 初始化是隐藏的table
var tablewrap = document.getElementById('displaytable');
tablewrap.classList.toggle('hidden')

var click = document.getElementById('clickme');
click.addEventListener('click', myfunction);

function myfunction() {
  var tablewrap = document.getElementById('displaytable');
  tablewrap.classList.toggle('hidden')
};

