import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/customer',
    loader: () =>
      import('src/view/customer/list/CustomerListPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },
  {
    path: '/customer/new',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerCreate,
    exact: true,
  },
  {
    path: '/customer/importer',
    loader: () =>
      import(
        'src/view/customer/importer/CustomerImporterPage'
      ),
    permissionRequired: permissions.customerImport,
    exact: true,
  },
  {
    path: '/customer/:id/edit',
    loader: () =>
      import('src/view/customer/form/CustomerFormPage'),
    permissionRequired: permissions.customerEdit,
    exact: true,
  },
  {
    path: '/customer/:id',
    loader: () =>
      import('src/view/customer/view/CustomerViewPage'),
    permissionRequired: permissions.customerRead,
    exact: true,
  },

  {
    path: '/product',
    loader: () =>
      import('src/view/product/list/ProductListPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },
  {
    path: '/product/new',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productCreate,
    exact: true,
  },
  {
    path: '/product/importer',
    loader: () =>
      import(
        'src/view/product/importer/ProductImporterPage'
      ),
    permissionRequired: permissions.productImport,
    exact: true,
  },
  {
    path: '/product/:id/edit',
    loader: () =>
      import('src/view/product/form/ProductFormPage'),
    permissionRequired: permissions.productEdit,
    exact: true,
  },
  {
    path: '/product/:id',
    loader: () =>
      import('src/view/product/view/ProductViewPage'),
    permissionRequired: permissions.productRead,
    exact: true,
  },

  {
    path: '/order',
    loader: () =>
      import('src/view/order/list/OrderListPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },
  {
    path: '/order/new',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderCreate,
    exact: true,
  },
  {
    path: '/order/importer',
    loader: () =>
      import(
        'src/view/order/importer/OrderImporterPage'
      ),
    permissionRequired: permissions.orderImport,
    exact: true,
  },
  {
    path: '/order/:id/edit',
    loader: () =>
      import('src/view/order/form/OrderFormPage'),
    permissionRequired: permissions.orderEdit,
    exact: true,
  },
  {
    path: '/order/:id',
    loader: () =>
      import('src/view/order/view/OrderViewPage'),
    permissionRequired: permissions.orderRead,
    exact: true,
  },

  {
    path: '/pet',
    loader: () =>
      import('src/view/pet/list/PetListPage'),
    permissionRequired: permissions.petRead,
    exact: true,
  },
  {
    path: '/pet/new',
    loader: () =>
      import('src/view/pet/form/PetFormPage'),
    permissionRequired: permissions.petCreate,
    exact: true,
  },
  {
    path: '/pet/importer',
    loader: () =>
      import(
        'src/view/pet/importer/PetImporterPage'
      ),
    permissionRequired: permissions.petImport,
    exact: true,
  },
  {
    path: '/pet/:id/edit',
    loader: () =>
      import('src/view/pet/form/PetFormPage'),
    permissionRequired: permissions.petEdit,
    exact: true,
  },
  {
    path: '/pet/:id',
    loader: () =>
      import('src/view/pet/view/PetViewPage'),
    permissionRequired: permissions.petRead,
    exact: true,
  },

  {
    path: '/breed',
    loader: () =>
      import('src/view/breed/list/BreedListPage'),
    permissionRequired: permissions.breedRead,
    exact: true,
  },
  {
    path: '/breed/new',
    loader: () =>
      import('src/view/breed/form/BreedFormPage'),
    permissionRequired: permissions.breedCreate,
    exact: true,
  },
  {
    path: '/breed/importer',
    loader: () =>
      import(
        'src/view/breed/importer/BreedImporterPage'
      ),
    permissionRequired: permissions.breedImport,
    exact: true,
  },
  {
    path: '/breed/:id/edit',
    loader: () =>
      import('src/view/breed/form/BreedFormPage'),
    permissionRequired: permissions.breedEdit,
    exact: true,
  },
  {
    path: '/breed/:id',
    loader: () =>
      import('src/view/breed/view/BreedViewPage'),
    permissionRequired: permissions.breedRead,
    exact: true,
  },

  {
    path: '/pet-types',
    loader: () =>
      import('src/view/petTypes/list/PetTypesListPage'),
    permissionRequired: permissions.petTypesRead,
    exact: true,
  },
  {
    path: '/pet-types/new',
    loader: () =>
      import('src/view/petTypes/form/PetTypesFormPage'),
    permissionRequired: permissions.petTypesCreate,
    exact: true,
  },
  {
    path: '/pet-types/importer',
    loader: () =>
      import(
        'src/view/petTypes/importer/PetTypesImporterPage'
      ),
    permissionRequired: permissions.petTypesImport,
    exact: true,
  },
  {
    path: '/pet-types/:id/edit',
    loader: () =>
      import('src/view/petTypes/form/PetTypesFormPage'),
    permissionRequired: permissions.petTypesEdit,
    exact: true,
  },
  {
    path: '/pet-types/:id',
    loader: () =>
      import('src/view/petTypes/view/PetTypesViewPage'),
    permissionRequired: permissions.petTypesRead,
    exact: true,
  },

  {
    path: '/business',
    loader: () =>
      import('src/view/business/list/BusinessListPage'),
    permissionRequired: permissions.businessRead,
    exact: true,
  },
  {
    path: '/business/new',
    loader: () =>
      import('src/view/business/form/BusinessFormPage'),
    permissionRequired: permissions.businessCreate,
    exact: true,
  },
  {
    path: '/business/importer',
    loader: () =>
      import(
        'src/view/business/importer/BusinessImporterPage'
      ),
    permissionRequired: permissions.businessImport,
    exact: true,
  },
  {
    path: '/business/:id/edit',
    loader: () =>
      import('src/view/business/form/BusinessFormPage'),
    permissionRequired: permissions.businessEdit,
    exact: true,
  },
  {
    path: '/business/:id',
    loader: () =>
      import('src/view/business/view/BusinessViewPage'),
    permissionRequired: permissions.businessRead,
    exact: true,
  },

  {
    path: '/place',
    loader: () =>
      import('src/view/place/list/PlaceListPage'),
    permissionRequired: permissions.placeRead,
    exact: true,
  },
  {
    path: '/place/new',
    loader: () =>
      import('src/view/place/form/PlaceFormPage'),
    permissionRequired: permissions.placeCreate,
    exact: true,
  },
  {
    path: '/place/importer',
    loader: () =>
      import(
        'src/view/place/importer/PlaceImporterPage'
      ),
    permissionRequired: permissions.placeImport,
    exact: true,
  },
  {
    path: '/place/:id/edit',
    loader: () =>
      import('src/view/place/form/PlaceFormPage'),
    permissionRequired: permissions.placeEdit,
    exact: true,
  },
  {
    path: '/place/:id',
    loader: () =>
      import('src/view/place/view/PlaceViewPage'),
    permissionRequired: permissions.placeRead,
    exact: true,
  },

  {
    path: '/business-services-types',
    loader: () =>
      import('src/view/businessServicesTypes/list/BusinessServicesTypesListPage'),
    permissionRequired: permissions.businessServicesTypesRead,
    exact: true,
  },
  {
    path: '/business-services-types/new',
    loader: () =>
      import('src/view/businessServicesTypes/form/BusinessServicesTypesFormPage'),
    permissionRequired: permissions.businessServicesTypesCreate,
    exact: true,
  },
  {
    path: '/business-services-types/importer',
    loader: () =>
      import(
        'src/view/businessServicesTypes/importer/BusinessServicesTypesImporterPage'
      ),
    permissionRequired: permissions.businessServicesTypesImport,
    exact: true,
  },
  {
    path: '/business-services-types/:id/edit',
    loader: () =>
      import('src/view/businessServicesTypes/form/BusinessServicesTypesFormPage'),
    permissionRequired: permissions.businessServicesTypesEdit,
    exact: true,
  },
  {
    path: '/business-services-types/:id',
    loader: () =>
      import('src/view/businessServicesTypes/view/BusinessServicesTypesViewPage'),
    permissionRequired: permissions.businessServicesTypesRead,
    exact: true,
  },

  {
    path: '/service-reservation',
    loader: () =>
      import('src/view/serviceReservation/list/ServiceReservationListPage'),
    permissionRequired: permissions.serviceReservationRead,
    exact: true,
  },
  {
    path: '/service-reservation/new',
    loader: () =>
      import('src/view/serviceReservation/form/ServiceReservationFormPage'),
    permissionRequired: permissions.serviceReservationCreate,
    exact: true,
  },
  {
    path: '/service-reservation/importer',
    loader: () =>
      import(
        'src/view/serviceReservation/importer/ServiceReservationImporterPage'
      ),
    permissionRequired: permissions.serviceReservationImport,
    exact: true,
  },
  {
    path: '/service-reservation/:id/edit',
    loader: () =>
      import('src/view/serviceReservation/form/ServiceReservationFormPage'),
    permissionRequired: permissions.serviceReservationEdit,
    exact: true,
  },
  {
    path: '/service-reservation/:id',
    loader: () =>
      import('src/view/serviceReservation/view/ServiceReservationViewPage'),
    permissionRequired: permissions.serviceReservationRead,
    exact: true,
  },

  {
    path: '/reservation-agenda',
    loader: () =>
      import('src/view/reservationAgenda/list/ReservationAgendaListPage'),
    permissionRequired: permissions.reservationAgendaRead,
    exact: true,
  },
  {
    path: '/reservation-agenda/new',
    loader: () =>
      import('src/view/reservationAgenda/form/ReservationAgendaFormPage'),
    permissionRequired: permissions.reservationAgendaCreate,
    exact: true,
  },
  {
    path: '/reservation-agenda/importer',
    loader: () =>
      import(
        'src/view/reservationAgenda/importer/ReservationAgendaImporterPage'
      ),
    permissionRequired: permissions.reservationAgendaImport,
    exact: true,
  },
  {
    path: '/reservation-agenda/:id/edit',
    loader: () =>
      import('src/view/reservationAgenda/form/ReservationAgendaFormPage'),
    permissionRequired: permissions.reservationAgendaEdit,
    exact: true,
  },
  {
    path: '/reservation-agenda/:id',
    loader: () =>
      import('src/view/reservationAgenda/view/ReservationAgendaViewPage'),
    permissionRequired: permissions.reservationAgendaRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/signup',
    loader: () => import('src/view/auth/SignupPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  simpleRoutes,
};
