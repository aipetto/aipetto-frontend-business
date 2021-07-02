import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';
import {
  faBone,
  faBook,
  faBriefcase, faCalendarAlt,
  faCalendarCheck,
  faChevronRight, faClipboardList, faCog, faColumns,
  faComments, faCube, faDog,
  faLanguage,
  faMapMarkedAlt, faMapMarkerAlt,
  faMoneyBillWave, faPaw,
  faPeopleArrows,
  faPercent,
  faPoll, faShoppingBasket, faStore,
  faSyringe, faTags, faUser, faUsers,
  faWallet,
} from '@fortawesome/free-solid-svg-icons';

const permissions = Permissions.values;

export default [
  {
    path: '/dashboard',
    exact: true,
    icon: faColumns,
    label: i18n('dashboard.menu'),
    permissionRequired: permissions.dashboardAccess,
  },
  {
    path: '/reservation',
    exact: true,
    icon: faCalendarAlt,
    label: i18n('services.reservation'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCube,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUsers,
  },

  {
    path: '/audit-logs',
    icon: faClipboardList,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: faCog,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    permissionRequired: permissions.customerRead,
    icon: faUser,
    label: i18n('entities.customer.menu'),
  },

  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: faBone,
    label: i18n('entities.product.menu'),
  },

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: faShoppingBasket,
    label: i18n('entities.order.menu'),
  },

  {
    path: '/pet',
    permissionRequired: permissions.petRead,
    icon: faDog,
    label: i18n('entities.pet.menu'),
  },

  {
    path: '/breed',
    permissionRequired: permissions.breedRead,
    icon: faPaw,
    label: i18n('entities.breed.menu'),
  },

  {
    path: '/pet-types',
    permissionRequired: permissions.petTypesRead,
    icon: faPaw,
    label: i18n('entities.petTypes.menu'),
  },

  {
    path: '/business-list',
    permissionRequired: permissions.businessRead,
    icon: faStore,
    label: i18n('entities.business.menu'),
  },

  {
    path: '/place',
    permissionRequired: permissions.placeRead,
    icon: faMapMarkedAlt,
    label: i18n('entities.place.menu'),
  },

  {
    path: '/business-services-types',
    permissionRequired: permissions.businessServicesTypesRead,
    icon: faTags,
    label: i18n('entities.businessServicesTypes.menu'),
  },

  {
    path: '/service-reservation',
    permissionRequired: permissions.serviceReservationRead,
    icon: faBook,
    label: i18n('entities.serviceReservation.menu'),
  },

  {
    path: '/business-place-service-availability',
    permissionRequired: permissions.businessPlaceServiceAvailabilityRead,
    icon: faCalendarCheck,
    label: i18n('entities.businessPlaceServiceAvailability.menu'),
  },

  {
    path: '/country',
    permissionRequired: permissions.countryRead,
    icon: faMapMarkerAlt,
    label: i18n('entities.country.menu'),
  },

  {
    path: '/city',
    permissionRequired: permissions.cityRead,
    icon: faMapMarkerAlt,
    label: i18n('entities.city.menu'),
  },

  {
    path: '/state',
    permissionRequired: permissions.stateRead,
    icon: faMapMarkerAlt,
    label: i18n('entities.state.menu'),
  },

  {
    path: '/messages',
    permissionRequired: permissions.messagesRead,
    icon: faComments,
    label: i18n('entities.messages.menu'),
  },

  {
    path: '/professionals-service-availability',
    permissionRequired: permissions.professionalsServiceAvailabilityRead,
    icon: faCalendarCheck,
    label: i18n('entities.professionalsServiceAvailability.menu'),
  },

  {
    path: '/languages',
    permissionRequired: permissions.languagesRead,
    icon: faLanguage,
    label: i18n('entities.languages.menu'),
  },

  {
    path: '/currency',
    permissionRequired: permissions.currencyRead,
    icon: faMoneyBillWave,
    label: i18n('entities.currency.menu'),
  },

  {
    path: '/discounts',
    permissionRequired: permissions.discountsRead,
    icon: faPercent,
    label: i18n('entities.discounts.menu'),
  },

  {
    path: '/wallet',
    permissionRequired: permissions.walletRead,
    icon: faWallet,
    label: i18n('entities.wallet.menu'),
  },

  {
    path: '/business-category',
    permissionRequired: permissions.businessCategoryRead,
    icon: faBriefcase,
    label: i18n('entities.businessCategory.menu'),
  },

  {
    path: '/providers',
    permissionRequired: permissions.providersRead,
    icon: faPeopleArrows,
    label: i18n('entities.providers.menu'),
  },

  {
    path: '/vaccine-types',
    permissionRequired: permissions.vaccineTypesRead,
    icon: faSyringe,
    label: i18n('entities.vaccineTypes.menu'),
  },

  {
    path: '/pet-vaccines',
    permissionRequired: permissions.petVaccinesRead,
    icon: faSyringe,
    label: i18n('entities.petVaccines.menu'),
  },

  {
    path: '/place-type',
    permissionRequired: permissions.placeTypeRead,
    icon: faMapMarkedAlt,
    label: i18n('entities.placeType.menu'),
  },

  {
    path: '/landing-survey',
    permissionRequired: permissions.landingSurveyRead,
    icon: faPoll,
    label: i18n('entities.landingSurvey.menu'),
  },

  {
    path: '/new-business-survey',
    permissionRequired: permissions.newBusinessSurveyRead,
    icon: faPoll,
    label: i18n('entities.newBusinessSurvey.menu'),
  },
].filter(Boolean);
