const backendUrl = `http://localhost:8080/api`;

// App Search Enterpirse
const appSearchEndpoint = `https://aipetto-enterprise-search-deployment.ent.southamerica-east1.gcp.elastic-cloud.com`;
const appSearchKey = `search-dy647kf8nw1b8jsy6sr194d1`;
const appSearchBusinessEngineName = `business`;

// Google Maps API and Places API
const credentialsGoogleMapsPlaceAPI = "AIzaSyCG-oM-y0fqNJ3ho5yUBy2eBgCN7UHDoGY";

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `http://localhost:8080/documentation`;

/**
 * Frontend Url.
 */
const frontendUrl = {
  host: 'localhost:3000',
  protocol: 'http',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = true;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  appSearchEndpoint,
  appSearchKey,
  appSearchBusinessEngineName,
  credentialsGoogleMapsPlaceAPI,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};
