# OPCD Golf Courses

Been playing around with the OPCD Golf Course Design process and some local courses.

## Courses

| Course | Location | Details | Download | Status |
| :--- | :--- | :--- | :--- | :--- |
| Greystone Golf Club | Milton, Ontario | [Readme](/greystone-gc/README.md) | | Lidar/Splining completed |
| Mount Nemo Golf Club | Burlington, Ontario | [Readme](/mount-nemo-gc/README.md) | [One Drive](https://1drv.ms/u/s!AqN33biz5OLCisBrArDMt9J2jPZa9w?e=fUu49B) | Relased v1 |
| Trafalgar Golf & Country Coub | Milton, Ontario | [Readme](/trafalgar.md) |  | Paused |


## Lidar/Heightmap(s)

Found a simpler process (at least in Canada) for getting the lidar data without having to deal with `CloudCompare`.  If your country or province provides ArcGIS WCSServer you can skip a number of steps:

1. Open up the default project in QGIS
2. Under `Browser` right click on `WCS` and click `New Connection`
3. Paste the url for the WCSServer into the connection and give it a name
4. Open the WCSServer folder
5. Right click the `DSM`, `DTM` or layer you wish to add and select `Add Layer to Project`

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
