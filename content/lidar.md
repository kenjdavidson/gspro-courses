---
layout: layout.njk
title: Lidar Process
---

# Lidar Process

The lidar process is the most important in golf course design.  It defines the process of converting lidar information into height maps for use within Unity (for building the terrain).  For more information on lidar check out <a href="https://www.onlogic.com/company/io-hub/what-is-lidar-and-what-is-it-for/amp/?cpsrc=search_igel&kw=&utm_term=&utm_campaign=CN-+Search+%7C+Products+-+DSA&utm_source=adwords&utm_medium=ppc&hsa_acc=9181945420&hsa_cam=17749632939&hsa_grp=139685413915&hsa_ad=610469096607&hsa_src=g&hsa_tgt=dsa-812528337015&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiAt66eBhCnARIsAKf3ZNHa2jItwIlOHo-m3o5fqdqB5WRzhQ7CBhMT5sZGK8SKpVmCw6eaF3UaAmpOEALw_wcB" target="_blank">what is lidar</a>.

<strong>TLDR;</strong>

> LiDAR is an acronym for “light direction and ranging”.

The current lidar process can be found on youtube <a href="https://www.youtube.com/@GolfCourseDesign" target="_blank">@GolfCourseDesign</a>.

## Web Coverage Servers

The GIS world has a special type of server which provides lidar data in an manageable way.  These WCS servers are available and importable into QGIS.  The process is a little more straightforward, although not without it's own problems, mainly  the mismatch of CRS (coordinate mapping) between the WCS and the courses specific location.  Generally the WCS server data will be in the <strong>worldwide</strong> CRS.  This needs to be mapped appropriately!!

To get this working:

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

I've been able to use the following WCS servers:

| Province | URL | Notes |
| :-- | :-- | :-- |
| Ontario | [ws.geoservices.lrc.gov.on.ca](https://ws.geoservices.lrc.gov.on.ca/arcgis5/services/Elevation/Ontario_DTM_LidarDerived/ImageServer/WCSServer) | |
| New Brunswick | [gis-erd-der.gnb.ca](https://gis-erd-der.gnb.ca/server/services/LidarProducts/DSM/ImageServer/WCSServer) | |
| USA | [elevation.nationalmap.gov](https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WCSServer) | Although this is available, it seems super dark |

## F.A.Q

#### 1. My Inner/Outer are showing up warped

This means that your export reset the CRS to the worldwide value.  You should be able to re-export the data using the correct CRS and get a valid file.

#### 2. My Inner/Outer looks choppy

This generally means your export is byte instead of float.  When this happens you most likely clicked the wrong export type.  Remember, this requires a direct export from the WCS layer, not an expand extent.
