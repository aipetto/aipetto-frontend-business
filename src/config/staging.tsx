// Place the URL here with the /api suffix.
// Ex.:`https://domain.com/api`;
const backendUrl = `/api`;

// App Search Enterpirse
const appSearchEndpoint = `https://aipetto-elastic-cluster-optimized.ent.us-west1.gcp.cloud.es.io`;
const appSearchKey = `search-rtc5zspn7h44e342hkhx8u93`;
const appSearchBusinessEngineName = `aipetto-business-places`;

// Google Recaptcha V3
const clientGoogleRecaptchaV3 = '6LeBkMAbAAAAAITziX_o3xDZtAP5_MsQqZbtYnOr';

// Google Maps API and Places API
const credentialsGoogleMapsPlaceAPI = "AIzaSyCG-oM-y0fqNJ3ho5yUBy2eBgCN7UHDoGY";

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `/documentation`;

/**
 * Frontend URL.
 */
const frontendUrl = {
  host: 'domain.com',
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
const stripePublishableKey = 'pk_test_51IEGgMG6omRg8rbChKIMC22bkc5DcAkc83eAvdf88clUos20vNb9p3oXv117Q0lQZX0Oe5gervb0V200Yrs4h8EH00c0rCqrlw';

export default {
  frontendUrl,
  backendUrl,
  appSearchEndpoint,
  appSearchKey,
  appSearchBusinessEngineName,
  clientGoogleRecaptchaV3,
  credentialsGoogleMapsPlaceAPI,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};
