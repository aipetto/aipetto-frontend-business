import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import customer from 'src/modules/customer/customerReducers';
import product from 'src/modules/product/productReducers';
import order from 'src/modules/order/orderReducers';
import pet from 'src/modules/pet/petReducers';
import breed from 'src/modules/breed/breedReducers';
import petTypes from 'src/modules/petTypes/petTypesReducers';
import business from 'src/modules/business/businessReducers';
import place from 'src/modules/place/placeReducers';
import businessServicesTypes from 'src/modules/businessServicesTypes/businessServicesTypesReducers';
import serviceReservation from 'src/modules/serviceReservation/serviceReservationReducers';
import businessPlaceServiceAvailability from 'src/modules/businessPlaceServiceAvailability/businessPlaceServiceAvailabilityReducers';
import country from 'src/modules/country/countryReducers';
import city from 'src/modules/city/cityReducers';
import state from 'src/modules/state/stateReducers';
import messages from 'src/modules/messages/messagesReducers';
import professionalsServiceAvailability from 'src/modules/professionalsServiceAvailability/professionalsServiceAvailabilityReducers';
import languages from 'src/modules/languages/languagesReducers';
import currency from 'src/modules/currency/currencyReducers';
import discounts from 'src/modules/discounts/discountsReducers';
import wallet from 'src/modules/wallet/walletReducers';
import businessCategory from 'src/modules/businessCategory/businessCategoryReducers';
import providers from 'src/modules/providers/providersReducers';
import vaccineTypes from 'src/modules/vaccineTypes/vaccineTypesReducers';
import petVaccines from 'src/modules/petVaccines/petVaccinesReducers';
import placeType from 'src/modules/placeType/placeTypeReducers';
import landingSurvey from 'src/modules/landingSurvey/landingSurveyReducers';
import newBusinessSurvey from 'src/modules/newBusinessSurvey/newBusinessSurveyReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    customer,
    product,
    order,
    pet,
    breed,
    petTypes,
    business,
    place,
    businessServicesTypes,
    serviceReservation,
    businessPlaceServiceAvailability,
    country,
    city,
    state,
    messages,
    professionalsServiceAvailability,
    languages,
    currency,
    discounts,
    wallet,
    businessCategory,
    providers,
    vaccineTypes,
    petVaccines,
    placeType,
    landingSurvey,
    newBusinessSurvey,
  });
