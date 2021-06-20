import config from 'src/config';

export default {
  "engineName": config.appSearchBusinessEngineName,
  "endpointBase": config.appSearchEndpoint,
  "searchKey": config.appSearchKey,
  "resultFields": [
    "hours",
    "address",
    "city",
    "is_open",
    "latitude",
    "review_count",
    "stars",
    "name",
    "attributes",
    "state",
    "categories",
    "postal_code",
    "business_id",
    "longitude",
    "id"
  ],
  "searchFields": [
    "address",
    "city",
    "is_open",
    "latitude",
    "review_count",
    "stars",
    "name",
    "attributes",
    "state",
    "categories",
    "postal_code",
    "business_id",
    "longitude",
  ],
  "sortFields": [
    "name"
  ],
  "facets": [

  ],
  "querySuggestFields": [
    "name"
  ],
  "titleField": "name",
  "urlField": "",
}
