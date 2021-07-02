import React from "react";
import Spinner from 'src/view/shared/Spinner';
import { getLanguageCode } from 'src/i18n';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from "@react-google-maps/api";
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import { formatRelative } from "date-fns";

import {Libraries} from "@react-google-maps/api/dist/utils/make-load-script-url";
import "@reach/combobox/styles.css";
import mapStyles from "./mapStyles";

/*import SearchGooglePlaces from "../../search/SearchGooglePlaces";*/
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import config from "../../../config";
import {IMapOptions} from "./IMapOptions";
import {IGoogleMapsMarker} from "./IGoogleMapsMarker";
import greenMapStyles from "./greenMapStyles";

const libraries: Libraries = ["places"];

const mapContainerStyle = {
    styles: mapStyles,
    width: "50vw",
    height: "100vh",
}
const center = {
    lat: -34.603722,
    lng: -58.381592
}
const options: IMapOptions = {
    disableDefaultUI: true,
    styles: mapStyles
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

    const panTo = React.useCallback(({ lat, lng }) => {
        // @ts-ignore
        mapRef.current.panTo({lat, lng});

        // @ts-ignore
        mapRef.current.setZoom(18);
    }, []);

    const renderMap = () => {
        return (
            <div>
                {/*<h1 className="element-in-front-map">
                    Reserve your service
                </h1>*/}
                {/*<SearchGooglePlaces panTo={panTo}/>*/}
                {/*<Locate panTo={panTo} />*/}
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={16}
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
                                  url: '/icons/pet-shop-store-icon.svg',
                                  scaledSize: new window.google.maps.Size(50,50),
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

function Locate({panTo}){
    return (
        <button className="google-maps-locate-btn" onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            }, () => null);
        }}>
            <FontAwesomeIcon
                className="mr-10 fa-3x no-underline"
                icon={faCompass}
            />
        </button>
    )
}

function SearchGooglePlaces({panTo}){
    const { ready,
        value,
        suggestions: { status, data},
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const result = await getGeocode({address});
            const { lat, lng} = await getLatLng(result[0]);
            panTo({lat, lng});
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
            <Combobox onSelect={handleSelect}
            >
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    className="bg-white outline-none w-full shadow-md rounded px-8 pt-6 pb-8 object-center md:object-top"
                    disabled={!ready}
                    placeholder="Where do you need a pet service?"
                />
                <ComboboxPopover>
                  <ComboboxList>
                    {status === "OK" && data.map(({place_id, description}) => (
                        <ComboboxOption key={place_id} value={description} />
                    ))}
                  </ComboboxList>
                </ComboboxPopover>
            </Combobox>
    )
}

export default ReactGoogleMaps;