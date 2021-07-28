import { CesiumTerrainProvider, ProviderViewModel} from 'cesium';
export let terrainProviderModels = [];

var MAPTILER_API_KEY = "ADD_YOUR_MAPTILER_API_KEY_FOR_TERRAIN"

terrainProviderModels.push(
        new ProviderViewModel({
                name: "Production",
                tooltip: "MapTiler production map",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: `https://api.maptiler.com/tiles/terrain-quantized-mesh/?key=${MAPTILER_API_KEY}`
                        })

                }

        })
);


terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl13",
                tooltip: "zl13",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-hardware/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl13 f1.1",
                tooltip: "zl13 f1.1",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-f1.1-hardware/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl13 f2",
                tooltip: "zl13 f2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-f2-hardware/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl15",
                tooltip: "zl15",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-zl15-hardware/'
                        })

                }

        })
);
terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl15 f1.1",
                tooltip: "zl15 f1.1",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-zl15-f1.1-hardware/'
                        })

                }

        })
);
terrainProviderModels.push(
        new ProviderViewModel({
                name: "zl15 f2",
                tooltip: "zl15 f2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-zl15-f2-hardware/'
                        })

                }

        })
);

/// -- docker generated
 
terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13",
                tooltip: "dem v2, zoom level 13",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13 meshq2",
                tooltip: "dem v2, zoom level 13, mesh-qfactor 2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-f2/'
                        })

                }

        })
);


terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13 res 40",
                tooltip: "dem v2, zoom level 13, resolution 40m",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-res40/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13, res 40, meshqf 2",
                tooltip: "dem v2, zoom level 13, resolution 40m, mesh-qfactor 2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-res40-f2/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13 res 100",
                tooltip: "dem v2, zoom level 13, resolution 100m",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-res100/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13, res 100, meshqf 2",
                tooltip: "dem v2, zoom level 13, resolution 100m, mesh-qfactor 2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-res100-f2/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 zl13, res 100, meshqf 2",
                tooltip: "dem v2, zoom level 13, resolution 100m, mesh-qfactor 2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-res100-f2/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 + egm96, zl15",
                tooltip: "dem v2, zoom level 15, +egm96",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-egm96-orig-zl15/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2 + egm96, zl15, mesqf 2",
                tooltip: "dem v2, zoom level 15, +egm96, meshqf 2",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-egm96-orig-zl15-f2/'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2, zl13, hardwrae",
                tooltip: "dem v2, zoom level 13, hardware",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-hardware'
                        })

                }

        })
);

terrainProviderModels.push(
        new ProviderViewModel({
                name: "V2, zl15, hardware",
                tooltip: "dem v2, zoom level 15, compiled on hardware",
                iconUrl: "https://www.maptiler.com/press/mediakit/thumbnails/maptiler-logo-icon.png",
                creationFunction: function() {
                        return new CesiumTerrainProvider({
                                url: 'http://35.232.225.230/cesium/terrain-orig-zl15-hardware'
                        })

                }

        })
);
