import React from "react";
import Spinner from 'src/view/shared/Spinner';
import { getLanguageCode } from 'src/i18n';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
/**
 * import usePlacesAutocomplete, {
 *     getGeocode,
 *     getLatLng,
 * } from "use-places-autocomplete";
 import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
 **/
 import "@reach/combobox/styles.css";
import config from "../../../config";
import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import mapStyles from "./mapStyles";

interface IGoogleMapsMarker {
    lat: number,
    lng: number,
    time: Date,
}

const libraries: Libraries = ["places"];
const mapContainerStyle = {
    styles: mapStyles,
    width: "100vw",
    height: "100vh",
}
const center = {
    lat: -34.603722,
    lng: -58.381592
}
const options = {
    disableDefaultUI: true,
}

function ReactGoogleMaps(props) {
    const {isLoaded, loadError} = useLoadScript({
       googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
       libraries,
       language: getLanguageCode()
    });

    const [markers, setMarkers] = React.useState<IGoogleMapsMarker[]>([]);
    const [selected, setSelected] = React.useState<IGoogleMapsMarker>();

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date()
            },
        ])
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const renderMap = () => {

        return (
            <div>
                {/*<h1 className="element-in-front">
                    Something
                </h1>*/}
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onClick={onMapClick}
                    onLoad={onMapLoad}
                >
                  {markers.map( (marker) => (
                      <Marker key={marker.time.toISOString()}
                              position={{
                                  lat: marker.lat,
                                  lng: marker.lng,
                              }}
                              icon={{
                                  url: '/images/github.svg',
                                  scaledSize: new window.google.maps.Size(30,30),
                                  origin: new window.google.maps.Point(0,0),
                                  anchor: new window.google.maps.Point(15, 15)
                              }}
                              onClick={() => {
                                  setSelected(marker);
                              }}
                      />
                  ))}

                  {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick={() => setSelected(undefined)}>
                    <div>
                       <h2>Something Detail here</h2>
                       <p>Spotted { formatRelative(selected.time, new Date())} </p>
                    </div>
                  </InfoWindow>) : null}

                </GoogleMap>
            </div>
       );
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() : <Spinner/>

}

export default ReactGoogleMaps;