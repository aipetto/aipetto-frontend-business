import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover} from "@reach/combobox";
import React from "react";

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

export default SearchGooglePlaces;