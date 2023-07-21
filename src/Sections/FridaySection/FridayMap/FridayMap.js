import React, { useEffect, useRef } from 'react';
import mapboxgl, { NavigationControl } from 'mapbox-gl';
import AnimatedPopup from 'mapbox-gl-animated-popup';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ3VkYnJhbmRzY2hpc3RhZCIsImEiOiJjbDZjYXkzdmIwcWx2M2JxbHppMjhkZHpqIn0.BUVI0Nirf9dkY6mDJ8hz9w';

function FridayMap(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          description: `<div style="display: flex; 
              flex-direction: column;"> 
            Parking</div>`,
          message: 'Parking',
          iconSize: [40, 40]
        },
        geometry: {
          type: 'Point',
          coordinates: [10.267595605917998, 60.0521772182251]
        }
      },
      {
        type: 'Feature',
        properties: {
          description: `<div style="display: flex; 
              flex-direction: column;"> 
            Norderhov Church</div>`,
          message: 'Party',
          iconSize: [40, 40]
        },
        geometry: {
          type: 'Point',
          coordinates: [10.262543155399497, 60.04826387672031]
        }
      }
    ]
  };
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [10.262543155399497, 60.04826387672031],
      height: '100vh',
      zoom: 13,
      projection: 'globe'
    });
    map.current.on('load', () => {
      for (const marker of geojson.features) {
        // Create a DOM element for each marker.
        const el = document.createElement('div');
        const width = marker.properties.iconSize[0];
        const height = marker.properties.iconSize[1];
        el.className = 'marker';
        if (marker.properties.message === 'Parking') {
          el.style.backgroundImage = `url(https://cdn1.iconfinder.com/data/icons/location-pointer-1/64/Parking_Spot-512.png)`;
        } else {
          el.style.backgroundImage = `url(https://cdn2.iconfinder.com/data/icons/places-4/100/drink_place_marker_location_bar_coctail_party-512.png)`;
        }
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
        // Create a popup, but don't add it to the map yet.
        const popup = new AnimatedPopup({
          closeButton: false,
          closeOnClick: false,
          openingAnimation: {
            duration: 500,
            easing: 'easeOutElastic',
            transform: 'scale'
          },
          closingAnimation: {
            duration: 200,
            easing: 'easeInBack',
            transform: 'scale'
          }
        });

        el.addEventListener('mouseenter', () => {
          // Change the cursor style as a UI indicator.
          map.current.getCanvas().style.cursor = 'pointer';

          // Populate the popup and set its coordinates
          // based on the feature found.
          let last = marker.geometry.coordinates[1] + 0.003;
          popup
            .setLngLat([marker.geometry.coordinates[0], last])
            .setHTML(marker.properties.description)
            .addTo(map.current);
        });
        el.addEventListener('mouseleave', () => {
          map.current.getCanvas().style.cursor = '';
          popup.remove();
        });
        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map.current);
      }
      // new mapboxgl.Marker().setLngLat([10.17511451380952, 60.14944870082693]).addTo(map.current);
      // new mapboxgl.Marker().setLngLat([10.269813453530224, 60.131368954666094]).addTo(map.current);
    });
    // Add markers to the map.

    map.current.addControl(new NavigationControl());
  }, [geojson.features]);

  return (
    <div
      ref={mapContainer}
      style={{
        borderRadius: '10px',
        height: '60vh'
      }}
      className="vessel-map-container"
    />
  );
}

FridayMap.propTypes = {};

FridayMap.defaultProps = {};

export default FridayMap;
