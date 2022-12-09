# OPCD Golf Courses

Been playing around with the OPCD Golf Course Design process and some local courses.

## Releases

All the courses (WIP included) are available from the Releases section.

## Courses

### Trafalgar Golf & Country Club

Trafalgar was shut down in 2022 to make way for warehouses, super fun!

> I stopped working on this since someone else @judojeff was also working on the same course.  I got it as far as the Unity stage and playing around with some basic vegetation.

It's pretty rough at this point, but I did go throug the Greenkeeper process, so it should be playable.

### Mount Nemo Golf Club

> Formally Indian Wells

...

## Lidar/Heightmap(s)

Found a simpler process (at least in Canada) for getting the lidar data without having to deal with `CloudCompare`.  If your country or province provides ArcGIS WCSServer you can skip a number of steps:

1. Open up the default project in QGIS
2. Under `Browser` right click on `WCS` and click `New Connection`
3. Paste the url for the WCSServer into the connection and give it a name
4. Open the WCSServer folder
5. Right click the `DSM`, `DTM` or layer you wish to add and select `Add Layer to Project`

### Exporting 

Once you get your inner and outer setup (using the regular steps) to export:

1. Right click the layer you wish to export
2. Click `Save As`
3. Follow the normal steps to use the _inner_ and _outer_ as masks
4. Save with 16000/16000
5. Follow the remaining steps

### WCS Server Urls

| Province | URL | Notes |
| :-- | :-- | :-- |
| Ontario | [ws.geoservices.lrc.gov.on.ca](https://ws.geoservices.lrc.gov.on.ca/arcgis5/services/Elevation/Ontario_DTM_LidarDerived/ImageServer/WCSServer) | |
| New Brunswick | [gis-erd-der.gnb.ca](https://gis-erd-der.gnb.ca/server/services/LidarProducts/DSM/ImageServer/WCSServer) | |
| USA | [elevation.nationalmap.gov](https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WCSServer) | Although this is available, it seems super dark |
