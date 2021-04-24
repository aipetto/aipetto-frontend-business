import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import config from 'src/config';
import {
  faChevronRight,
  faCog,
  faCreditCard,
  faHistory,
  faThLarge,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: faThLarge,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: faCreditCard,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: faUserPlus,
  },

  {
    path: '/audit-logs',
    icon: faHistory,
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
    icon: faChevronRight,
    label: i18n('entities.customer.menu'),
  },

  {
    path: '/product',
    permissionRequired: permissions.productRead,
    icon: faChevronRight,
    label: i18n('entities.product.menu'),
  },

  {
    path: '/order',
    permissionRequired: permissions.orderRead,
    icon: faChevronRight,
    label: i18n('entities.order.menu'),
  },

  {
    path: '/pet',
    permissionRequired: permissions.petRead,
    icon: faChevronRight,
    label: i18n('entities.pet.menu'),
  },

  {
    path: '/breed',
    permissionRequired: permissions.breedRead,
    icon: faChevronRight,
    label: i18n('entities.breed.menu'),
  },

  {
    path: '/pet-types',
    permissionRequired: permissions.petTypesRead,
    icon: faChevronRight,
    label: i18n('entities.petTypes.menu'),
  },

  {
    path: '/business',
    permissionRequired: permissions.businessRead,
    icon: faChevronRight,
    label: i18n('entities.business.menu'),
  },

  {
    path: '/place',
    permissionRequired: permissions.placeRead,
    icon: faChevronRight,
    label: i18n('entities.place.menu'),
  },

  {
    path: '/business-services-types',
    permissionRequired: permissions.businessServicesTypesRead,
    icon: faChevronRight,
    label: i18n('entities.businessServicesTypes.menu'),
  },

  {
    path: '/service-reservation',
    permissionRequired: permissions.serviceReservationRead,
    icon: faChevronRight,
    label: i18n('entities.serviceReservation.menu'),
  },

  {
    path: '/business-place-service-availability',
    permissionRequired: permissions.businessPlaceServiceAvailabilityRead,
    icon: faChevronRight,
    label: i18n('entities.businessPlaceServiceAvailability.menu'),
  },

  {
    path: '/country',
    permissionRequired: permissions.countryRead,
    icon: faChevronRight,
    label: i18n('entities.country.menu'),
  },

  {
    path: '/city',
    permissionRequired: permissions.cityRead,
    icon: faChevronRight,
    label: i18n('entities.city.menu'),
  },

  {
    path: '/state',
    permissionRequired: permissions.stateRead,
    icon: faChevronRight,
    label: i18n('entities.state.menu'),
  },

  {
    path: '/messages',
    permissionRequired: permissions.messagesRead,
    icon: faChevronRight,
    label: i18n('entities.messages.menu'),
  },

  {
    path: '/professionals-service-availability',
    permissionRequired: permissions.professionalsServiceAvailabilityRead,
    icon: faChevronRight,
    label: i18n('entities.professionalsServiceAvailability.menu'),
  },
].filter(Boolean);
