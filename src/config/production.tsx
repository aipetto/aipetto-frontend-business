// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `https://aipetto-312421-sjvjr4rqhq-rj.a.run.app/api`;

// App Search Enterpirse
const appSearchEndpoint = `https://aipetto-enterprise-search-deployment.ent.southamerica-east1.gcp.elastic-cloud.com`;
const appSearchKey = `search-dy647kf8nw1b8jsy6sr194d1`;
const appSearchBusinessEngineName = `business`;

// Google Maps API and Places API
const credentialsGoogleMapsPlaceAPI = "AIzaSyCG-oM-y0fqNJ3ho5yUBy2eBgCN7UHDoGY";

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = ``;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'https://aipetto-frontend-business.vercel.app',
  protocol: 'https',
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
/** TODO change this to real PRODUCTION Stripe Publish Key**/
const stripePublishableKey = 'pk_test_51IEGgMG6omRg8rbChKIMC22bkc5DcAkc83eAvdf88clUos20vNb9p3oXv117Q0lQZX0Oe5gervb0V200Yrs4h8EH00c0rCqrlw';

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
