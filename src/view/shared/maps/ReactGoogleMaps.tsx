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

const libraries: Libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh"
}
const center = {
    lat: -34.603722,
    lng: -58.381592
}
const options = {
    disableDefaultUI: true
}

function ReactGoogleMaps(props) {
    const {isLoaded, loadError} = useLoadScript({
       googleMapsApiKey: config.credentialsGoogleMapsPlaceAPI,
       libraries,
       language: getLanguageCode()
    });

    const renderMap = () => {

        return <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
            options={options}
        >{

        }
        </GoogleMap>
    }

    if (loadError) {
        return <div>Map cannot be loaded right now, sorry.</div>
    }

    return isLoaded ? renderMap() : <Spinner/>

}

export default ReactGoogleMaps;