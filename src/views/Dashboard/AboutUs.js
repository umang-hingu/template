import React from "react";

// Chakra imports
import { Flex, Text, Input } from "@chakra-ui/react";

// Custom components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// Icons

import { useState, useRef } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  MarkerF,
  Autocomplete,
} from "@react-google-maps/api";

const center = { lat: 21.215284608632743, lng: 72.85702453927374 };
const libraries = ["places"];

function AboutUs() {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(center);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    libraries,
  });

  const locationInputRef = useRef();

  const addMarker = async () => {
    console.log(locationInputRef.current.value);

    const geocoder = new google.maps.Geocoder();
    const result = await geocoder.geocode({
      address: locationInputRef.current.value,
    });
    console.log(
      result.results[0].geometry.location.lat(),
      result.results[0].geometry.location.lng()
    );
    setPosition({
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    });
    map.panTo({
      lat: result.results[0].geometry.location.lat(),
      lng: result.results[0].geometry.location.lng(),
    });
  };

  if (!isLoaded) {
    return (
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text>Loading......</Text>
        </CardHeader>
      </Card>
    );
  }

  const locationHandler = (e) => {
    console.log("Lat:", e.latLng.lat(), "Lng:", e.latLng.lng());
    setPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
  };
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Autocomplete onPlaceChanged={addMarker}>
            <Input color="white" ref={locationInputRef}></Input>
          </Autocomplete>
        </CardHeader>
        <CardBody>
          <GoogleMap
            onClick={locationHandler}
            center={center}
            zoom={15}
            mapContainerStyle={{
              width: "1000px",
              height: "600px",
              margin: "2%",
            }}
            onLoad={(map) => setMap(map)}
          >
            <MarkerF position={position} />
          </GoogleMap>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default AboutUs;
