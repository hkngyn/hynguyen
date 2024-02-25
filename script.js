require([
  "esri/widgets/Home",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer",
  "esri/config",
  "esri/Map",
  "esri/views/MapView"
], function (Home, Sketch, GraphicsLayer, esriConfig, Map, MapView) {

  esriConfig.apiKey = "AAPK808a759c5bf0466c81340d71922c7dfd4C2cxsiCSBQ1dAxDJCzTNIZhoQcjhh_-WnkKQg46_VcakrYo_eu8PqioQN5zMJTl";

  const graphicsLayer = new GraphicsLayer();

  const map = new Map({
    basemap: "arcgis-topographic",
    layers: [graphicsLayer] 
  });

  const view = new MapView({
    map: map,
    center: [-79.889, 43.24], // Longitude, latitude
    zoom: 13,
    container: "viewDiv"
  });
  
  const homeBtn = new Home({
    view: view
  });
  view.ui.add(homeBtn, "top-left");

view.when(() => {
    const sketch = new Sketch({
      layer: graphicsLayer, 
      view: view,
      creationMode: "update"
    });

    view.ui.add(sketch, "top-right");
  });
  
});