import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Switch } from '@headlessui/react';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hoaXJpbmc5MCIsImEiOiJjbDBrY2tvM2UwMHlnM2NxZHAzcnJydnljIn0.gXBpq-9quoT_gL1Aq6wKNw';

export default function Map() {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(11);
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    navigator.geolocation.watchPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  })

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      dragPan: true
    });
  });

  const enableHandler = () => {

  }

  return (
    <>
      <div className='px-2 py-4'>
        <h4 className='display bold text-2xl mb-4'>
          Find the nearest hub
        </h4>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-teal-500' : 'bg-gray-200'}
          relative inline-flex h-[33px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[30px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
      <div className='relative'>
        <div ref={mapContainer} className="map-container h-96" />
      </div>
    </>
  );
}
