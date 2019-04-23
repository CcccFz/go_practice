//创建和初始化地图函数：
function initMap() {
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}

//创建地图函数：
function createMap() {
    var map = new BMap.Map('map-container');//在百度地图容器中创建一个地图
    var point = new BMap.Point(104.072277, 30.614065);//定义一个中心点坐标
    map.centerAndZoom(point, 13);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.disableDoubleClickZoom();//禁用鼠标双击放大
    map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
}

//地图控件添加函数：
function addMapControl() {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrl_nav);
}


initMap();//创建和初始化地图

// function tempFunc() {
//     var map = new BMap.Map("container");
//     map.enableScrollWheelZoom(true);
//
//     var point = new BMap.Point(104.067, 30.679);
//     map.centerAndZoom(point, 13);
//
//     var marker = new BMap.Marker(point);
//     map.addOverlay(marker);
//     marker.addEventListener("click", function(){
//         alert("您点击了标注");
//     });
//
//     var geolocation = new BMap.Geolocation();
//     var pt;
//     geolocation.getCurrentPosition(function (r) {
//         if (this.getStatus() === BMAP_STATUS_SUCCESS) {
//             pt = r;
//         }
//     });
//     map.centerAndZoom(new BMap.Point(r.point.lng, r.point.lat), 13);
// }