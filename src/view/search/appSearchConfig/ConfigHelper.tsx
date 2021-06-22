import config from "./engine";

/**
 * This file abstract most logic around the configuration of the Reference UI
 **/
export function getConfig(){
    return config;
}

function toLowerCase(string) {
    if (string) return string.toLowerCase();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getTitleField() {
    return "name";
}

export function getUrlField() {
    return `/reservation-appointment?${getConfig().resultFields["business_id"]}`;
}

export function getFacetFields() {
    return getConfig().facets || [];
}

export function getSortFields() {
    return getConfig().sortFields || [];
}

export function getResultTitle(result) {
    const titleField = getTitleField();

    return result.getSnippet(titleField);
}

// Because if a field is configured to display as a "title", we don't want
// to display it again in the fields list
export function stripUnnecessaryResultsFields(resultFields) {
    return Object.keys(resultFields).reduce((acc, n) => {
        if(
            [
                "_meta",
                "id",
                toLowerCase(getTitleField()),
                toLowerCase(getUrlField())
            ].includes(toLowerCase(n))
        ){
            return acc;
        }
        acc[n] = resultFields[n];
        return acc;
    }, {});
}


export function buildSearchOptionsFromConfig() {
    const config = getConfig();
    const searchFields = (config.searchFields || []).reduce(
        (acc, n) => {
            // @ts-ignore
            acc = acc || {};
            // @ts-ignore
            acc[n] = {};
            return acc;
        },
        undefined
    );

    const resultFields = (config.resultFields || []).reduce(
        (acc, n) => {
            // @ts-ignore
            acc = acc || {};
            // @ts-ignore
            acc[n] = {
                raw: {},
                snippet: {
                    size: 100,
                    fallback: true
                }
            };
            return acc;
        },
        undefined
    );

    // We can't use url or title fields unless they're actually
    // in the reuslts.
    if (config.urlField) {
        // @ts-ignore
        resultFields[config.urlField] = {
            raw: {},
            snippet: {
                size: 100,
                fallback: true
            }
        };
    }

    if (config.titleField) {
        // @ts-ignore
        resultFields[config.titleField] = {
            raw: {},
            snippet: {
                size: 100,
                fallback: true
            }
        };
    }

    const searchOptions = {};
    // @ts-ignore
    searchOptions.result_fields = resultFields;
    // @ts-ignore
    searchOptions.search_fields = searchFields;
    return searchOptions;
}

export function buildFacetConfigFromConfig() {
    const config = getConfig();

    const facets = (config.facets || []).reduce((acc, n) => {
        // @ts-ignore
        acc = acc || {};
        // @ts-ignore
        acc[n] = {
            type: "value",
            size: 100
        };
        return acc;
    }, undefined);

    return facets;
}

export function buildSortOptionsFromConfig() {
    const config = getConfig();
    return [
        {
            name: "Relevance",
            value: "",
            direction: ""
        },
        ...(config.sortFields || []).reduce((acc, sortField) => {
            acc.push({
                // @ts-ignore
                name: `${capitalizeFirstLetter(sortField)} ASC`,
                // @ts-ignore
                value: sortField,
                // @ts-ignore
                direction: "asc"
            });
            acc.push({
                // @ts-ignore
                name: `${capitalizeFirstLetter(sortField)} DESC`,
                // @ts-ignore
                value: sortField,
                // @ts-ignore
                direction: "desc"
            });
            return acc;
        }, [])
    ];
}

export function buildAutocompleteQueryConfig() {
    const querySuggestFields = getConfig().querySuggestFields;
    if (
        !querySuggestFields ||
        !Array.isArray(querySuggestFields) ||
        querySuggestFields.length === 0
    ) {
        return {};
    }

    return {
        suggestions: {
            types: {
                documents: {
                    fields: getConfig().querySuggestFields
                }
            }
        }
    };
}

