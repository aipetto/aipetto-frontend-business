import Permissions from 'src/security/permissions';
import config from 'src/config';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/dashboard',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: permissions.dashboardAccess,
    exact: true,
  },
  {
    path: '/home',
    loader: () =>
        import('src/view/home/HomePageNew'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/reservation',
    loader: () =>
        import('src/view/serviceReservation/public/ReservationInitialPage'),
    permissionRequired: permissions.reservationWebAccess,
    exact: true,
  },
  {
    path: '/reservation-business',
    loader: () =>
        import('src/view/serviceReservation/public/ReservationSecondPageBusinessSearch'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/reservation-appointment',
    loader: () =>
        import('src/view/serviceReservation/public/ReservationThirdPageDateTimeAppointment'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/reservation-confirmation',
    loader: () =>
        import('src/view/serviceReservation/public/ReservationFourthPageConfirmation'),
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
    path: '/business-list',
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
    path: '/business-place-service-availability',
    loader: () =>
      import('src/view/businessPlaceServiceAvailability/list/BusinessPlaceServiceAvailabilityListPage'),
    permissionRequired: permissions.businessPlaceServiceAvailabilityRead,
    exact: true,
  },
  {
    path: '/business-place-service-availability/new',
    loader: () =>
      import('src/view/businessPlaceServiceAvailability/form/BusinessPlaceServiceAvailabilityFormPage'),
    permissionRequired: permissions.businessPlaceServiceAvailabilityCreate,
    exact: true,
  },
  {
    path: '/business-place-service-availability/importer',
    loader: () =>
      import(
        'src/view/businessPlaceServiceAvailability/importer/BusinessPlaceServiceAvailabilityImporterPage'
      ),
    permissionRequired: permissions.businessPlaceServiceAvailabilityImport,
    exact: true,
  },
  {
    path: '/business-place-service-availability/:id/edit',
    loader: () =>
      import('src/view/businessPlaceServiceAvailability/form/BusinessPlaceServiceAvailabilityFormPage'),
    permissionRequired: permissions.businessPlaceServiceAvailabilityEdit,
    exact: true,
  },
  {
    path: '/business-place-service-availability/:id',
    loader: () =>
      import('src/view/businessPlaceServiceAvailability/view/BusinessPlaceServiceAvailabilityViewPage'),
    permissionRequired: permissions.businessPlaceServiceAvailabilityRead,
    exact: true,
  },

  {
    path: '/country',
    loader: () =>
      import('src/view/country/list/CountryListPage'),
    permissionRequired: permissions.countryRead,
    exact: true,
  },
  {
    path: '/country/new',
    loader: () =>
      import('src/view/country/form/CountryFormPage'),
    permissionRequired: permissions.countryCreate,
    exact: true,
  },
  {
    path: '/country/importer',
    loader: () =>
      import(
        'src/view/country/importer/CountryImporterPage'
      ),
    permissionRequired: permissions.countryImport,
    exact: true,
  },
  {
    path: '/country/:id/edit',
    loader: () =>
      import('src/view/country/form/CountryFormPage'),
    permissionRequired: permissions.countryEdit,
    exact: true,
  },
  {
    path: '/country/:id',
    loader: () =>
      import('src/view/country/view/CountryViewPage'),
    permissionRequired: permissions.countryRead,
    exact: true,
  },

  {
    path: '/city',
    loader: () =>
      import('src/view/city/list/CityListPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },
  {
    path: '/city/new',
    loader: () =>
      import('src/view/city/form/CityFormPage'),
    permissionRequired: permissions.cityCreate,
    exact: true,
  },
  {
    path: '/city/importer',
    loader: () =>
      import(
        'src/view/city/importer/CityImporterPage'
      ),
    permissionRequired: permissions.cityImport,
    exact: true,
  },
  {
    path: '/city/:id/edit',
    loader: () =>
      import('src/view/city/form/CityFormPage'),
    permissionRequired: permissions.cityEdit,
    exact: true,
  },
  {
    path: '/city/:id',
    loader: () =>
      import('src/view/city/view/CityViewPage'),
    permissionRequired: permissions.cityRead,
    exact: true,
  },

  {
    path: '/state',
    loader: () =>
      import('src/view/state/list/StateListPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },
  {
    path: '/state/new',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateCreate,
    exact: true,
  },
  {
    path: '/state/importer',
    loader: () =>
      import(
        'src/view/state/importer/StateImporterPage'
      ),
    permissionRequired: permissions.stateImport,
    exact: true,
  },
  {
    path: '/state/:id/edit',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateEdit,
    exact: true,
  },
  {
    path: '/state/:id',
    loader: () =>
      import('src/view/state/view/StateViewPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },

  {
    path: '/messages',
    loader: () =>
      import('src/view/messages/list/MessagesListPage'),
    permissionRequired: permissions.messagesRead,
    exact: true,
  },
  {
    path: '/messages/new',
    loader: () =>
      import('src/view/messages/form/MessagesFormPage'),
    permissionRequired: permissions.messagesCreate,
    exact: true,
  },
  {
    path: '/messages/importer',
    loader: () =>
      import(
        'src/view/messages/importer/MessagesImporterPage'
      ),
    permissionRequired: permissions.messagesImport,
    exact: true,
  },
  {
    path: '/messages/:id/edit',
    loader: () =>
      import('src/view/messages/form/MessagesFormPage'),
    permissionRequired: permissions.messagesEdit,
    exact: true,
  },
  {
    path: '/messages/:id',
    loader: () =>
      import('src/view/messages/view/MessagesViewPage'),
    permissionRequired: permissions.messagesRead,
    exact: true,
  },

  {
    path: '/professionals-service-availability',
    loader: () =>
      import('src/view/professionalsServiceAvailability/list/ProfessionalsServiceAvailabilityListPage'),
    permissionRequired: permissions.professionalsServiceAvailabilityRead,
    exact: true,
  },
  {
    path: '/professionals-service-availability/new',
    loader: () =>
      import('src/view/professionalsServiceAvailability/form/ProfessionalsServiceAvailabilityFormPage'),
    permissionRequired: permissions.professionalsServiceAvailabilityCreate,
    exact: true,
  },
  {
    path: '/professionals-service-availability/importer',
    loader: () =>
      import(
        'src/view/professionalsServiceAvailability/importer/ProfessionalsServiceAvailabilityImporterPage'
      ),
    permissionRequired: permissions.professionalsServiceAvailabilityImport,
    exact: true,
  },
  {
    path: '/professionals-service-availability/:id/edit',
    loader: () =>
      import('src/view/professionalsServiceAvailability/form/ProfessionalsServiceAvailabilityFormPage'),
    permissionRequired: permissions.professionalsServiceAvailabilityEdit,
    exact: true,
  },
  {
    path: '/professionals-service-availability/:id',
    loader: () =>
      import('src/view/professionalsServiceAvailability/view/ProfessionalsServiceAvailabilityViewPage'),
    permissionRequired: permissions.professionalsServiceAvailabilityRead,
    exact: true,
  },

  {
    path: '/languages',
    loader: () =>
      import('src/view/languages/list/LanguagesListPage'),
    permissionRequired: permissions.languagesRead,
    exact: true,
  },
  {
    path: '/languages/new',
    loader: () =>
      import('src/view/languages/form/LanguagesFormPage'),
    permissionRequired: permissions.languagesCreate,
    exact: true,
  },
  {
    path: '/languages/importer',
    loader: () =>
      import(
        'src/view/languages/importer/LanguagesImporterPage'
      ),
    permissionRequired: permissions.languagesImport,
    exact: true,
  },
  {
    path: '/languages/:id/edit',
    loader: () =>
      import('src/view/languages/form/LanguagesFormPage'),
    permissionRequired: permissions.languagesEdit,
    exact: true,
  },
  {
    path: '/languages/:id',
    loader: () =>
      import('src/view/languages/view/LanguagesViewPage'),
    permissionRequired: permissions.languagesRead,
    exact: true,
  },

  {
    path: '/currency',
    loader: () =>
      import('src/view/currency/list/CurrencyListPage'),
    permissionRequired: permissions.currencyRead,
    exact: true,
  },
  {
    path: '/currency/new',
    loader: () =>
      import('src/view/currency/form/CurrencyFormPage'),
    permissionRequired: permissions.currencyCreate,
    exact: true,
  },
  {
    path: '/currency/importer',
    loader: () =>
      import(
        'src/view/currency/importer/CurrencyImporterPage'
      ),
    permissionRequired: permissions.currencyImport,
    exact: true,
  },
  {
    path: '/currency/:id/edit',
    loader: () =>
      import('src/view/currency/form/CurrencyFormPage'),
    permissionRequired: permissions.currencyEdit,
    exact: true,
  },
  {
    path: '/currency/:id',
    loader: () =>
      import('src/view/currency/view/CurrencyViewPage'),
    permissionRequired: permissions.currencyRead,
    exact: true,
  },

  {
    path: '/discounts',
    loader: () =>
      import('src/view/discounts/list/DiscountsListPage'),
    permissionRequired: permissions.discountsRead,
    exact: true,
  },
  {
    path: '/discounts/new',
    loader: () =>
      import('src/view/discounts/form/DiscountsFormPage'),
    permissionRequired: permissions.discountsCreate,
    exact: true,
  },
  {
    path: '/discounts/importer',
    loader: () =>
      import(
        'src/view/discounts/importer/DiscountsImporterPage'
      ),
    permissionRequired: permissions.discountsImport,
    exact: true,
  },
  {
    path: '/discounts/:id/edit',
    loader: () =>
      import('src/view/discounts/form/DiscountsFormPage'),
    permissionRequired: permissions.discountsEdit,
    exact: true,
  },
  {
    path: '/discounts/:id',
    loader: () =>
      import('src/view/discounts/view/DiscountsViewPage'),
    permissionRequired: permissions.discountsRead,
    exact: true,
  },

  {
    path: '/wallet',
    loader: () =>
      import('src/view/wallet/list/WalletListPage'),
    permissionRequired: permissions.walletRead,
    exact: true,
  },
  {
    path: '/wallet/new',
    loader: () =>
      import('src/view/wallet/form/WalletFormPage'),
    permissionRequired: permissions.walletCreate,
    exact: true,
  },
  {
    path: '/wallet/importer',
    loader: () =>
      import(
        'src/view/wallet/importer/WalletImporterPage'
      ),
    permissionRequired: permissions.walletImport,
    exact: true,
  },
  {
    path: '/wallet/:id/edit',
    loader: () =>
      import('src/view/wallet/form/WalletFormPage'),
    permissionRequired: permissions.walletEdit,
    exact: true,
  },
  {
    path: '/wallet/:id',
    loader: () =>
      import('src/view/wallet/view/WalletViewPage'),
    permissionRequired: permissions.walletRead,
    exact: true,
  },

  {
    path: '/business-category',
    loader: () =>
      import('src/view/businessCategory/list/BusinessCategoryListPage'),
    permissionRequired: permissions.businessCategoryRead,
    exact: true,
  },
  {
    path: '/business-category/new',
    loader: () =>
      import('src/view/businessCategory/form/BusinessCategoryFormPage'),
    permissionRequired: permissions.businessCategoryCreate,
    exact: true,
  },
  {
    path: '/business-category/importer',
    loader: () =>
      import(
        'src/view/businessCategory/importer/BusinessCategoryImporterPage'
      ),
    permissionRequired: permissions.businessCategoryImport,
    exact: true,
  },
  {
    path: '/business-category/:id/edit',
    loader: () =>
      import('src/view/businessCategory/form/BusinessCategoryFormPage'),
    permissionRequired: permissions.businessCategoryEdit,
    exact: true,
  },
  {
    path: '/business-category/:id',
    loader: () =>
      import('src/view/businessCategory/view/BusinessCategoryViewPage'),
    permissionRequired: permissions.businessCategoryRead,
    exact: true,
  },

  {
    path: '/providers',
    loader: () =>
      import('src/view/providers/list/ProvidersListPage'),
    permissionRequired: permissions.providersRead,
    exact: true,
  },
  {
    path: '/providers/new',
    loader: () =>
      import('src/view/providers/form/ProvidersFormPage'),
    permissionRequired: permissions.providersCreate,
    exact: true,
  },
  {
    path: '/providers/importer',
    loader: () =>
      import(
        'src/view/providers/importer/ProvidersImporterPage'
      ),
    permissionRequired: permissions.providersImport,
    exact: true,
  },
  {
    path: '/providers/:id/edit',
    loader: () =>
      import('src/view/providers/form/ProvidersFormPage'),
    permissionRequired: permissions.providersEdit,
    exact: true,
  },
  {
    path: '/providers/:id',
    loader: () =>
      import('src/view/providers/view/ProvidersViewPage'),
    permissionRequired: permissions.providersRead,
    exact: true,
  },

  {
    path: '/vaccine-types',
    loader: () =>
      import('src/view/vaccineTypes/list/VaccineTypesListPage'),
    permissionRequired: permissions.vaccineTypesRead,
    exact: true,
  },
  {
    path: '/vaccine-types/new',
    loader: () =>
      import('src/view/vaccineTypes/form/VaccineTypesFormPage'),
    permissionRequired: permissions.vaccineTypesCreate,
    exact: true,
  },
  {
    path: '/vaccine-types/importer',
    loader: () =>
      import(
        'src/view/vaccineTypes/importer/VaccineTypesImporterPage'
      ),
    permissionRequired: permissions.vaccineTypesImport,
    exact: true,
  },
  {
    path: '/vaccine-types/:id/edit',
    loader: () =>
      import('src/view/vaccineTypes/form/VaccineTypesFormPage'),
    permissionRequired: permissions.vaccineTypesEdit,
    exact: true,
  },
  {
    path: '/vaccine-types/:id',
    loader: () =>
      import('src/view/vaccineTypes/view/VaccineTypesViewPage'),
    permissionRequired: permissions.vaccineTypesRead,
    exact: true,
  },

  {
    path: '/pet-vaccines',
    loader: () =>
      import('src/view/petVaccines/list/PetVaccinesListPage'),
    permissionRequired: permissions.petVaccinesRead,
    exact: true,
  },
  {
    path: '/pet-vaccines/new',
    loader: () =>
      import('src/view/petVaccines/form/PetVaccinesFormPage'),
    permissionRequired: permissions.petVaccinesCreate,
    exact: true,
  },
  {
    path: '/pet-vaccines/importer',
    loader: () =>
      import(
        'src/view/petVaccines/importer/PetVaccinesImporterPage'
      ),
    permissionRequired: permissions.petVaccinesImport,
    exact: true,
  },
  {
    path: '/pet-vaccines/:id/edit',
    loader: () =>
      import('src/view/petVaccines/form/PetVaccinesFormPage'),
    permissionRequired: permissions.petVaccinesEdit,
    exact: true,
  },
  {
    path: '/pet-vaccines/:id',
    loader: () =>
      import('src/view/petVaccines/view/PetVaccinesViewPage'),
    permissionRequired: permissions.petVaccinesRead,
    exact: true,
  },

  {
    path: '/place-type',
    loader: () =>
      import('src/view/placeType/list/PlaceTypeListPage'),
    permissionRequired: permissions.placeTypeRead,
    exact: true,
  },
  {
    path: '/place-type/new',
    loader: () =>
      import('src/view/placeType/form/PlaceTypeFormPage'),
    permissionRequired: permissions.placeTypeCreate,
    exact: true,
  },
  {
    path: '/place-type/importer',
    loader: () =>
      import(
        'src/view/placeType/importer/PlaceTypeImporterPage'
      ),
    permissionRequired: permissions.placeTypeImport,
    exact: true,
  },
  {
    path: '/place-type/:id/edit',
    loader: () =>
      import('src/view/placeType/form/PlaceTypeFormPage'),
    permissionRequired: permissions.placeTypeEdit,
    exact: true,
  },
  {
    path: '/place-type/:id',
    loader: () =>
      import('src/view/placeType/view/PlaceTypeViewPage'),
    permissionRequired: permissions.placeTypeRead,
    exact: true,
  },
  {
    path: '/landing-survey',
    loader: () =>
        import('src/view/landingSurvey/list/LandingSurveyListPage'),
    permissionRequired: permissions.landingSurveyRead,
    exact: true,
  },
  {
    path: '/landing-survey/new',
    loader: () =>
        import('src/view/landingSurvey/form/LandingSurveyFormPage'),
    permissionRequired: permissions.landingSurveyCreate,
    exact: true,
  },
  {
    path: '/landing-survey/importer',
    loader: () =>
        import(
            'src/view/landingSurvey/importer/LandingSurveyImporterPage'
            ),
    permissionRequired: permissions.landingSurveyImport,
    exact: true,
  },
  {
    path: '/landing-survey/:id/edit',
    loader: () =>
        import('src/view/landingSurvey/form/LandingSurveyFormPage'),
    permissionRequired: permissions.landingSurveyEdit,
    exact: true,
  },
  {
    path: '/landing-survey/:id',
    loader: () =>
        import('src/view/landingSurvey/view/LandingSurveyViewPage'),
    permissionRequired: permissions.landingSurveyRead,
    exact: true,
  },

  {
    path: '/new-business-survey',
    loader: () =>
      import('src/view/newBusinessSurvey/list/NewBusinessSurveyListPage'),
    permissionRequired: permissions.newBusinessSurveyRead,
    exact: true,
  },
  {
    path: '/new-business-survey/new',
    loader: () =>
      import('src/view/newBusinessSurvey/form/NewBusinessSurveyFormPage'),
    permissionRequired: permissions.newBusinessSurveyCreate,
    exact: true,
  },
  {
    path: '/new-business-survey/importer',
    loader: () =>
      import(
        'src/view/newBusinessSurvey/importer/NewBusinessSurveyImporterPage'
      ),
    permissionRequired: permissions.newBusinessSurveyImport,
    exact: true,
  },
  {
    path: '/new-business-survey/:id/edit',
    loader: () =>
      import('src/view/newBusinessSurvey/form/NewBusinessSurveyFormPage'),
    permissionRequired: permissions.newBusinessSurveyEdit,
    exact: true,
  },
  {
    path: '/new-business-survey/:id',
    loader: () =>
      import('src/view/newBusinessSurvey/view/NewBusinessSurveyViewPage'),
    permissionRequired: permissions.newBusinessSurveyRead,
    exact: true,
  },

  {
    path: '/pet-photos',
    loader: () =>
      import('src/view/petPhotos/list/PetPhotosListPage'),
    permissionRequired: permissions.petPhotosRead,
    exact: true,
  },
  {
    path: '/pet-photos/new',
    loader: () =>
      import('src/view/petPhotos/form/PetPhotosFormPage'),
    permissionRequired: permissions.petPhotosCreate,
    exact: true,
  },
  {
    path: '/pet-photos/importer',
    loader: () =>
      import(
        'src/view/petPhotos/importer/PetPhotosImporterPage'
      ),
    permissionRequired: permissions.petPhotosImport,
    exact: true,
  },
  {
    path: '/pet-photos/:id/edit',
    loader: () =>
      import('src/view/petPhotos/form/PetPhotosFormPage'),
    permissionRequired: permissions.petPhotosEdit,
    exact: true,
  },
  {
    path: '/pet-photos/:id',
    loader: () =>
      import('src/view/petPhotos/view/PetPhotosViewPage'),
    permissionRequired: permissions.petPhotosRead,
    exact: true,
  },

  {
    path: '/pet-diseases',
    loader: () =>
      import('src/view/petDiseases/list/PetDiseasesListPage'),
    permissionRequired: permissions.petDiseasesRead,
    exact: true,
  },
  {
    path: '/pet-diseases/new',
    loader: () =>
      import('src/view/petDiseases/form/PetDiseasesFormPage'),
    permissionRequired: permissions.petDiseasesCreate,
    exact: true,
  },
  {
    path: '/pet-diseases/importer',
    loader: () =>
      import(
        'src/view/petDiseases/importer/PetDiseasesImporterPage'
      ),
    permissionRequired: permissions.petDiseasesImport,
    exact: true,
  },
  {
    path: '/pet-diseases/:id/edit',
    loader: () =>
      import('src/view/petDiseases/form/PetDiseasesFormPage'),
    permissionRequired: permissions.petDiseasesEdit,
    exact: true,
  },
  {
    path: '/pet-diseases/:id',
    loader: () =>
      import('src/view/petDiseases/view/PetDiseasesViewPage'),
    permissionRequired: permissions.petDiseasesRead,
    exact: true,
  },

  {
    path: '/business-services-prices',
    loader: () =>
      import('src/view/businessServicesPrices/list/BusinessServicesPricesListPage'),
    permissionRequired: permissions.businessServicesPricesRead,
    exact: true,
  },
  {
    path: '/business-services-prices/new',
    loader: () =>
      import('src/view/businessServicesPrices/form/BusinessServicesPricesFormPage'),
    permissionRequired: permissions.businessServicesPricesCreate,
    exact: true,
  },
  {
    path: '/business-services-prices/importer',
    loader: () =>
      import(
        'src/view/businessServicesPrices/importer/BusinessServicesPricesImporterPage'
      ),
    permissionRequired: permissions.businessServicesPricesImport,
    exact: true,
  },
  {
    path: '/business-services-prices/:id/edit',
    loader: () =>
      import('src/view/businessServicesPrices/form/BusinessServicesPricesFormPage'),
    permissionRequired: permissions.businessServicesPricesEdit,
    exact: true,
  },
  {
    path: '/business-services-prices/:id',
    loader: () =>
      import('src/view/businessServicesPrices/view/BusinessServicesPricesViewPage'),
    permissionRequired: permissions.businessServicesPricesRead,
    exact: true,
  },

  {
    path: '/posts',
    loader: () =>
      import('src/view/posts/list/PostsListPage'),
    permissionRequired: permissions.postsRead,
    exact: true,
  },
  {
    path: '/posts/new',
    loader: () =>
      import('src/view/posts/form/PostsFormPage'),
    permissionRequired: permissions.postsCreate,
    exact: true,
  },
  {
    path: '/posts/importer',
    loader: () =>
      import(
        'src/view/posts/importer/PostsImporterPage'
      ),
    permissionRequired: permissions.postsImport,
    exact: true,
  },
  {
    path: '/posts/:id/edit',
    loader: () =>
      import('src/view/posts/form/PostsFormPage'),
    permissionRequired: permissions.postsEdit,
    exact: true,
  },
  {
    path: '/posts/:id',
    loader: () =>
      import('src/view/posts/view/PostsViewPage'),
    permissionRequired: permissions.postsRead,
    exact: true,
  },

  {
    path: '/post-categories',
    loader: () =>
      import('src/view/postCategories/list/PostCategoriesListPage'),
    permissionRequired: permissions.postCategoriesRead,
    exact: true,
  },
  {
    path: '/post-categories/new',
    loader: () =>
      import('src/view/postCategories/form/PostCategoriesFormPage'),
    permissionRequired: permissions.postCategoriesCreate,
    exact: true,
  },
  {
    path: '/post-categories/importer',
    loader: () =>
      import(
        'src/view/postCategories/importer/PostCategoriesImporterPage'
      ),
    permissionRequired: permissions.postCategoriesImport,
    exact: true,
  },
  {
    path: '/post-categories/:id/edit',
    loader: () =>
      import('src/view/postCategories/form/PostCategoriesFormPage'),
    permissionRequired: permissions.postCategoriesEdit,
    exact: true,
  },
  {
    path: '/post-categories/:id',
    loader: () =>
      import('src/view/postCategories/view/PostCategoriesViewPage'),
    permissionRequired: permissions.postCategoriesRead,
    exact: true,
  },

  {
    path: '/post-comments',
    loader: () =>
      import('src/view/postComments/list/PostCommentsListPage'),
    permissionRequired: permissions.postCommentsRead,
    exact: true,
  },
  {
    path: '/post-comments/new',
    loader: () =>
      import('src/view/postComments/form/PostCommentsFormPage'),
    permissionRequired: permissions.postCommentsCreate,
    exact: true,
  },
  {
    path: '/post-comments/importer',
    loader: () =>
      import(
        'src/view/postComments/importer/PostCommentsImporterPage'
      ),
    permissionRequired: permissions.postCommentsImport,
    exact: true,
  },
  {
    path: '/post-comments/:id/edit',
    loader: () =>
      import('src/view/postComments/form/PostCommentsFormPage'),
    permissionRequired: permissions.postCommentsEdit,
    exact: true,
  },
  {
    path: '/post-comments/:id',
    loader: () =>
      import('src/view/postComments/view/PostCommentsViewPage'),
    permissionRequired: permissions.postCommentsRead,
    exact: true,
  },

  {
    path: '/points-challenges',
    loader: () =>
      import('src/view/pointsChallenges/list/PointsChallengesListPage'),
    permissionRequired: permissions.pointsChallengesRead,
    exact: true,
  },
  {
    path: '/points-challenges/new',
    loader: () =>
      import('src/view/pointsChallenges/form/PointsChallengesFormPage'),
    permissionRequired: permissions.pointsChallengesCreate,
    exact: true,
  },
  {
    path: '/points-challenges/importer',
    loader: () =>
      import(
        'src/view/pointsChallenges/importer/PointsChallengesImporterPage'
      ),
    permissionRequired: permissions.pointsChallengesImport,
    exact: true,
  },
  {
    path: '/points-challenges/:id/edit',
    loader: () =>
      import('src/view/pointsChallenges/form/PointsChallengesFormPage'),
    permissionRequired: permissions.pointsChallengesEdit,
    exact: true,
  },
  {
    path: '/points-challenges/:id',
    loader: () =>
      import('src/view/pointsChallenges/view/PointsChallengesViewPage'),
    permissionRequired: permissions.pointsChallengesRead,
    exact: true,
  },

  {
    path: '/challenges-categories',
    loader: () =>
      import('src/view/challengesCategories/list/ChallengesCategoriesListPage'),
    permissionRequired: permissions.challengesCategoriesRead,
    exact: true,
  },
  {
    path: '/challenges-categories/new',
    loader: () =>
      import('src/view/challengesCategories/form/ChallengesCategoriesFormPage'),
    permissionRequired: permissions.challengesCategoriesCreate,
    exact: true,
  },
  {
    path: '/challenges-categories/importer',
    loader: () =>
      import(
        'src/view/challengesCategories/importer/ChallengesCategoriesImporterPage'
      ),
    permissionRequired: permissions.challengesCategoriesImport,
    exact: true,
  },
  {
    path: '/challenges-categories/:id/edit',
    loader: () =>
      import('src/view/challengesCategories/form/ChallengesCategoriesFormPage'),
    permissionRequired: permissions.challengesCategoriesEdit,
    exact: true,
  },
  {
    path: '/challenges-categories/:id',
    loader: () =>
      import('src/view/challengesCategories/view/ChallengesCategoriesViewPage'),
    permissionRequired: permissions.challengesCategoriesRead,
    exact: true,
  },

  {
    path: '/product-category',
    loader: () =>
      import('src/view/productCategory/list/ProductCategoryListPage'),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },
  {
    path: '/product-category/new',
    loader: () =>
      import('src/view/productCategory/form/ProductCategoryFormPage'),
    permissionRequired: permissions.productCategoryCreate,
    exact: true,
  },
  {
    path: '/aipetto-store',
    loader: () =>
        import('src/view/aipettoStore/initialPageAipettoStore'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/product-category/importer',
    loader: () =>
        import(
            'src/view/productCategory/importer/ProductCategoryImporterPage'
            ),
    permissionRequired: permissions.productCategoryImport,
    exact: true,
  },
  {
    path: '/product-category/:id/edit',
    loader: () =>
        import('src/view/productCategory/form/ProductCategoryFormPage'),
    permissionRequired: permissions.productCategoryEdit,
    exact: true,
  },
  {
    path: '/product-category/:id',
    loader: () =>
        import('src/view/productCategory/view/ProductCategoryViewPage'),
    permissionRequired: permissions.productCategoryRead,
    exact: true,
  },

  {
    path: '/deals',
    loader: () =>
        import('src/view/deals/list/DealsListPage'),
    permissionRequired: permissions.dealsRead,
    exact: true,
  },
  {
    path: '/deals/new',
    loader: () =>
        import('src/view/deals/form/DealsFormPage'),
    permissionRequired: permissions.dealsCreate,
    exact: true,
  },
  {
    path: '/deals/importer',
    loader: () =>
        import(
            'src/view/deals/importer/DealsImporterPage'
            ),
    permissionRequired: permissions.dealsImport,
    exact: true,
  },
  {
    path: '/deals/:id/edit',
    loader: () =>
        import('src/view/deals/form/DealsFormPage'),
    permissionRequired: permissions.dealsEdit,
    exact: true,
  },
  {
    path: '/deals/:id',
    loader: () =>
        import('src/view/deals/view/DealsViewPage'),
    permissionRequired: permissions.dealsRead,
    exact: true,
  },

  {
    path: '/business-payment-cycle',
    loader: () =>
        import('src/view/businessPaymentCycle/list/BusinessPaymentCycleListPage'),
    permissionRequired: permissions.businessPaymentCycleRead,
    exact: true,
  },
  {
    path: '/business-payment-cycle/new',
    loader: () =>
        import('src/view/businessPaymentCycle/form/BusinessPaymentCycleFormPage'),
    permissionRequired: permissions.businessPaymentCycleCreate,
    exact: true,
  },
  {
    path: '/business-payment-cycle/importer',
    loader: () =>
        import(
            'src/view/businessPaymentCycle/importer/BusinessPaymentCycleImporterPage'
            ),
    permissionRequired: permissions.businessPaymentCycleImport,
    exact: true,
  },
  {
    path: '/business-payment-cycle/:id/edit',
    loader: () =>
        import('src/view/businessPaymentCycle/form/BusinessPaymentCycleFormPage'),
    permissionRequired: permissions.businessPaymentCycleEdit,
    exact: true,
  },
  {
    path: '/business-payment-cycle/:id',
    loader: () =>
        import('src/view/businessPaymentCycle/view/BusinessPaymentCycleViewPage'),
    permissionRequired: permissions.businessPaymentCycleRead,
    exact: true,
  },

  {
    path: '/questions',
    loader: () =>
        import('src/view/questions/list/QuestionsListPage'),
    permissionRequired: permissions.questionsRead,
    exact: true,
  },
  {
    path: '/questions/new',
    loader: () =>
        import('src/view/questions/form/QuestionsFormPage'),
    permissionRequired: permissions.questionsCreate,
    exact: true,
  },
  {
    path: '/questions/importer',
    loader: () =>
        import(
            'src/view/questions/importer/QuestionsImporterPage'
            ),
    permissionRequired: permissions.questionsImport,
    exact: true,
  },
  {
    path: '/questions/:id/edit',
    loader: () =>
        import('src/view/questions/form/QuestionsFormPage'),
    permissionRequired: permissions.questionsEdit,
    exact: true,
  },
  {
    path: '/questions/:id',
    loader: () =>
        import('src/view/questions/view/QuestionsViewPage'),
    permissionRequired: permissions.questionsRead,
    exact: true,
  },

  {
    path: '/answers',
    loader: () =>
        import('src/view/answers/list/AnswersListPage'),
    permissionRequired: permissions.answersRead,
    exact: true,
  },
  {
    path: '/answers/new',
    loader: () =>
        import('src/view/answers/form/AnswersFormPage'),
    permissionRequired: permissions.answersCreate,
    exact: true,
  },
  {
    path: '/answers/importer',
    loader: () =>
        import(
            'src/view/answers/importer/AnswersImporterPage'
            ),
    permissionRequired: permissions.answersImport,
    exact: true,
  },
  {
    path: '/answers/:id/edit',
    loader: () =>
        import('src/view/answers/form/AnswersFormPage'),
    permissionRequired: permissions.answersEdit,
    exact: true,
  },
  {
    path: '/answers/:id',
    loader: () =>
        import('src/view/answers/view/AnswersViewPage'),
    permissionRequired: permissions.answersRead,
    exact: true,
  },

  {
    path: '/pet-examination',
    loader: () =>
        import('src/view/petExamination/list/PetExaminationListPage'),
    permissionRequired: permissions.petExaminationRead,
    exact: true,
  },
  {
    path: '/pet-examination/new',
    loader: () =>
        import('src/view/petExamination/form/PetExaminationFormPage'),
    permissionRequired: permissions.petExaminationCreate,
    exact: true,
  },
  {
    path: '/pet-examination/importer',
    loader: () =>
        import(
            'src/view/petExamination/importer/PetExaminationImporterPage'
            ),
    permissionRequired: permissions.petExaminationImport,
    exact: true,
  },
  {
    path: '/pet-examination/:id/edit',
    loader: () =>
        import('src/view/petExamination/form/PetExaminationFormPage'),
    permissionRequired: permissions.petExaminationEdit,
    exact: true,
  },
  {
    path: '/pet-examination/:id',
    loader: () =>
        import('src/view/petExamination/view/PetExaminationViewPage'),
    permissionRequired: permissions.petExaminationRead,
    exact: true,
  },

  {
    path: '/contacts',
    loader: () =>
        import('src/view/contacts/list/ContactsListPage'),
    permissionRequired: permissions.contactsRead,
    exact: true,
  },
  {
    path: '/contacts/new',
    loader: () =>
        import('src/view/contacts/form/ContactsFormPage'),
    permissionRequired: permissions.contactsCreate,
    exact: true,
  },
  {
    path: '/contacts/importer',
    loader: () =>
        import(
            'src/view/contacts/importer/ContactsImporterPage'
            ),
    permissionRequired: permissions.contactsImport,
    exact: true,
  },
  {
    path: '/contacts/:id/edit',
    loader: () =>
        import('src/view/contacts/form/ContactsFormPage'),
    permissionRequired: permissions.contactsEdit,
    exact: true,
  },
  {
    path: '/contacts/:id',
    loader: () =>
        import('src/view/contacts/view/ContactsViewPage'),
    permissionRequired: permissions.contactsRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/',
    loader: () =>
        import('src/view/home/HomePageNew'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/privacy-policy',
    loader: () =>
        import('src/view/gdpr/PrivacyPolicyPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/blank-page',
    loader: () =>
        import('src/view/blank/BlankPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/professionals',
    loader: () => import('src/view/home/LandingPage'),
  },
  {
    path: '/beta',
    loader: () =>
        import('src/view/auth/SigninPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/business',
    loader: () =>
        import('src/view/home/BusinessLandingPage'),
    permissionRequired: null,
    exact: true,
  },
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
