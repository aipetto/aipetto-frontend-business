import React from 'react';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import {
    ErrorBoundary,
    Facet,
    SearchProvider,
    SearchBox,
    Results,
    PagingInfo,
    ResultsPerPage,
    Paging,
    Sorting,
    WithSearch
} from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";

import {
    buildAutocompleteQueryConfig,
    buildFacetConfigFromConfig,
    buildSearchOptionsFromConfig,
    buildSortOptionsFromConfig,
    getConfig,
    getFacetFields, getTitleField, getUrlField
} from "./appSearchConfig/ConfigHelper";
import ReactGoogleMaps from "../shared/maps/ReactGoogleMaps";

const SearchBusinessServicePage = (props) => {

    const { searchKey, endpointBase, engineName } = getConfig();
    const connector = new AppSearchAPIConnector({
        searchKey,
        engineName,
        endpointBase,
        cacheResponse: false
    });
    const config = {
        searchQuery: {
            facets: buildFacetConfigFromConfig(),
            ...buildSearchOptionsFromConfig()
        },
        autocompleteQuery: buildAutocompleteQueryConfig(),
        apiConnector: connector,
        alwaysSearchOnInitialLoad: true
    };

    return (
        <SearchProvider config={config}>
            <WithSearch mapContextToProps={({ wasSearched }) => ({ wasSearched })}>
                {({ wasSearched }) => {
                    return (
                        <div className="App">
                            <ErrorBoundary>
                                <Layout
                                    header={<SearchBox autocompleteSuggestions={true} />}
                                    sideContent={
                                        <div>
                                            {wasSearched && (
                                                <Sorting
                                                    label={"Sort by"}
                                                    sortOptions={buildSortOptionsFromConfig()}
                                                />
                                            )}
                                            {getFacetFields().map(field => (
                                                <Facet key={field} field={field} label={field} />
                                            ))}
                                        </div>
                                    }
                                    bodyContent={
                                        <>
                                            <div className="flex">
                                                <div className="flex-1">
                                                    <Results
                                                        titleField={getConfig().titleField}
                                                        urlField={getConfig().urlField}
                                                        shouldTrackClickThrough={true}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <ReactGoogleMaps />
                                                </div>
                                            </div>
                                        </>
                                    }
                                    bodyHeader={
                                        <React.Fragment>
                                            {wasSearched && <PagingInfo />}
                                            {wasSearched && <ResultsPerPage />}
                                        </React.Fragment>
                                    }
                                    bodyFooter={<Paging />}
                                />
                            </ErrorBoundary>
                        </div>
                    );
                }}
            </WithSearch>
        </SearchProvider>
    )
}

export default SearchBusinessServicePage;