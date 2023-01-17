# OPCD Golf Courses

## Courses

| Course | Location | Details | Status |
| :--- | :--- | :--- | :--- |
| Greystone Golf Club | Milton, Ontario | [Readme](/greystone-gc/README.md) | Beta |
| Mount Nemo Golf Club | Burlington, Ontario | [Readme](/mount-nemo-gc/README.md) | Beta |
| Trafalgar Golf & Country Coub | Milton, Ontario | [Readme](/trafalgar.md) | Paused |

### Course List

[courses.json](/courses.json)

## Lidar/Heightmap(s)

Found a simpler process (at least in Canada) for getting the lidar data without having to deal with `CloudCompare`.  If your country or province provides ArcGIS WCSServer you can skip a number of steps:

1. Open up the default project in QGIS
2. Under `Browser` right click on `WCS` and click `New Connection`
3. Paste the url for the WCSServer into the connection and give it a name
4. Open the WCSServer folder
5. Right click the `DSM`, `DTM` or layer you wish to add and select `Add Layer to Project`

### Project CRS

Ensure that you set the project CRS appropriately.  The WCS will have a worldwide value, using this will mess up the values, so make sure you go into project settings and select the appropriate one.  You can get this from one of the the DTM tiles, or you can look through the list of available CRS until you find the one that looks good.

> You may see some warnings about not being able to convert 100% and using a fallback conversion, this seems to not really be an issue in the few courses I've exported.

### Exporting Heightmaps

Instead of Extracting from the Lidar data, the Lidar data can be exported as a first step:

1. Right click the layer you wish to export
2. Click `Save As`
3. IMPORTANT don't click `raster image` leave the first export as `raw data`.  If you don't do this, it will convert the `float32` lidar data to `byte` which messes up the definition.
4. Save with 16000/16000
5. Follow the remaining steps

### Exporting Overlays 

Once you get your inner and outer setup (using the regular steps) to export:

1. Right click the layer you wish to export
2. Click `Save As`
3. Follow the normal steps to use the _inner_ and _outer_ as masks fore Google or Bing
4. Save with 16000/16000
5. Follow the remaining steps

### WCS Server Urls

| Province | URL | Notes |
| :-- | :-- | :-- |
| Ontario | [ws.geoservices.lrc.gov.on.ca](https://ws.geoservices.lrc.gov.on.ca/arcgis5/services/Elevation/Ontario_DTM_LidarDerived/ImageServer/WCSServer) | |
| New Brunswick | [gis-erd-der.gnb.ca](https://gis-erd-der.gnb.ca/server/services/LidarProducts/DSM/ImageServer/WCSServer) | |
| USA | [elevation.nationalmap.gov](https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WCSServer) | Although this is available, it seems super dark |
