/**
 * MapTiler sample testing version of Cesium webpack example
 *
 * Purpose: to test several mesh versions
 *
 * What needs to be done if you want to run this:
 *
 *   * fill Cesium.Ion default access token
 *   * fill MapTiler key
 *   * you can adjust various DTMs in the `terrain.js` file
 */
import { Ion, viewerCesiumInspectorMixin, CesiumWidget, ProviderViewModel, buildModuleUrl, OpenStreetMapImageryProvider, Math, WebMapTileServiceImageryProvider, Cartesian3, WebMercatorTilingSchema, UrlTemplateImageryProvider, TileMapServiceImageryProvider, Cesium3DTileset, CesiumTerrainProvider, createWorldTerrain, IonResource, Viewer, BaseLayerPicker, ImageryProvider, Cesium3DTilesInspector } from 'cesium';
import {terrainProviderModels} from './terrain.js';
import "cesium/Build/Cesium/Widgets/widgets.css";
import "./css/main.css";

Ion.defaultAccessToken = "ADD_YOUR_ACCESS_TOKEN";
var MAPTILER_API_KEY = "ADD_YOUR_MAPTILER_KEY"

var imageryViewModels = [];

imageryViewModels.push(
        new ProviderViewModel({
                name: "Outdoor",
                tooltip: "MapTiler Outdoor map",
                iconUrl: "https://www.maptiler.com/img/cloud/slider/topo.png",
                creationFunction: function() {
                        return new UrlTemplateImageryProvider({
                                url: `https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`,
                                minimumLevel: 0,
                                maximumLevel: 20
                        })
                }

        })
);

imageryViewModels.push(
        new ProviderViewModel({
                name: "Basic",
                tooltip: "MapTiler Basic map",
                iconUrl: "https://www.maptiler.com/img/cloud/slider/basic.png",
                creationFunction: function() {
                        return new UrlTemplateImageryProvider({
                                url: `https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=${MAPTILER_API_KEY}`,
                                minimumLevel: 0,
                                maximumLevel: 20
                        })
                }

        })
);

imageryViewModels.push(
        new ProviderViewModel({
                name: "Satellite",
                tooltip: "MapTiler Satellite map",
                iconUrl: "https://www.maptiler.com/img/cloud/slider/satellite.png",
                creationFunction: function() {
                        return new UrlTemplateImageryProvider({
                                url: `https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=${MAPTILER_API_KEY}`,
                                minimumLevel: 0,
                                maximumLevel: 20
                        })
                }

        })
);


/**
 * There are two possibilities how to get the cesium globe:
 * 1. Using CesiumWidget - this will give only "empty" application - but we need
 *    the viewer for later decoration
 * 2. Using Cesium.Viewer - we are using the viewer, so we could use the
 *    InspectorMixin later
 */
//var cesiumWidget = new CesiumWidget('cesiumContainer', { imageryProvider: false });
var viewer = new Viewer("cesiumContainer", {
  baseLayerPicker: false,
        vrButton: false,
  timeline: false,
  nagivationHelpButton: false,
  sceneModePicker: false,
  homeButton: false,
  geocoder: false,
  navigationHelpButton: false,
  terrainProvider: terrainProviderModels[0]
});

viewer.extend(viewerCesiumInspectorMixin)

//Finally, create the baseLayerPicker widget using our view models.
var baseLayerPicker = new BaseLayerPicker('baseLayerPickerContainer', {
    globe : viewer.scene.globe,
    imageryProviderViewModels : imageryViewModels,
    terrainProviderViewModels: terrainProviderModels
});
