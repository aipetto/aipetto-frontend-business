import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      dashboardAccess: {
        id: 'dashboardAccess',
        allowedRoles: [
            roles.aipettoAdmin,
            roles.businessAdmin,
            roles.aipettoManager,
            roles.aipettoEditor,
            roles.businessManager,
            roles.petshopAdmin,
            roles.businessEmployee,
            roles.veterinaryAdmin,
            roles.veterinarian,
            roles.transporterAdmin,
            roles.transporter
        ],
        allowedPlans: [
            plans.free, plans.premium
        ],
      },

      dashboardGraphRead: {
        id: 'dashboardGraphRead',
        allowedRoles: [
          roles.aipettoAdmin
        ],
        allowedPlans: [
          plans.free, plans.premium
        ],
      },

      fieldIsDisplayedOnlyForAipettoTeam: {
        id: 'fieldIsDisplayedDependOnRole',
        allowedRoles: [
          roles.aipettoAdmin,
          roles.aipettoManager,
          roles.aipettoEditor
        ],
        allowedPlans: [
          plans.free, plans.premium
        ],
      },

      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      aipettoStaffUsersRead: {
        id: 'aipettoStaffUsersRead',
        allowedRoles: [
          roles.aipettoAdmin,
        ],
        allowedPlans: [
          plans.free, plans.premium
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.aipettoAdmin],
         allowedPlans: [
          plans.free,
          plans.premium
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },
      customerImport: {
        id: 'customerImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      customerCreate: {
        id: 'customerCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.customerCustomerProfileImage,
        ],
      },
      customerEdit: {
        id: 'customerEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.customerCustomerProfileImage,
        ],
      },
      customerDestroy: {
        id: 'customerDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.customerCustomerProfileImage,
        ],
      },
      customerRead: {
        id: 'customerRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      customerAutocomplete: {
        id: 'customerAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      productImport: {
        id: 'productImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      productCreate: {
        id: 'productCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.productPhotos,
        ],
      },
      productEdit: {
        id: 'productEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.productPhotos,
        ],
      },
      productDestroy: {
        id: 'productDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.productPhotos,
        ],
      },
      productRead: {
        id: 'productRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      productAutocomplete: {
        id: 'productAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      orderImport: {
        id: 'orderImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      orderCreate: {
        id: 'orderCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.orderAttachments,
        ],
      },
      orderEdit: {
        id: 'orderEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.orderAttachments,
        ],
      },
      orderDestroy: {
        id: 'orderDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.orderAttachments,
        ],
      },
      orderRead: {
        id: 'orderRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      orderAutocomplete: {
        id: 'orderAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      petImport: {
        id: 'petImport',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petProfileImage,
        ],
      },
      petCreate: {
        id: 'petCreate',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petProfileImage,
        ],
      },
      petEdit: {
        id: 'petEdit',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petProfileImage,
        ],
      },
      petDestroy: {
        id: 'petDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petProfileImage,
        ],
      },
      petRead: {
        id: 'petRead',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petProfileImage,
        ],
      },
      petAutocomplete: {
        id: 'petAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },

      breedImport: {
        id: 'breedImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      breedCreate: {
        id: 'breedCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.breedImage,
        ],
      },
      breedEdit: {
        id: 'breedEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.breedImage,
        ],
      },
      breedDestroy: {
        id: 'breedDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.breedImage,
        ],
      },
      breedRead: {
        id: 'breedRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      breedAutocomplete: {
        id: 'breedAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      petTypesImport: {
        id: 'petTypesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petTypesCreate: {
        id: 'petTypesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petTypesImage,
        ],
      },
      petTypesEdit: {
        id: 'petTypesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petTypesImage,
        ],
      },
      petTypesDestroy: {
        id: 'petTypesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petTypesImage,
        ],
      },
      petTypesRead: {
        id: 'petTypesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petTypesAutocomplete: {
        id: 'petTypesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      businessImport: {
        id: 'businessImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessCreate: {
        id: 'businessCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessBusinessLogo,
        ],
      },
      businessEdit: {
        id: 'businessEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessBusinessLogo,
        ],
      },
      businessDestroy: {
        id: 'businessDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessBusinessLogo,
        ],
      },
      businessRead: {
        id: 'businessRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      businessAutocomplete: {
        id: 'businessAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      placeImport: {
        id: 'placeImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      placeCreate: {
        id: 'placeCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placePhotoLogo,
          storage.placePhotoStore,
        ],
      },
      placeEdit: {
        id: 'placeEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placePhotoLogo,
          storage.placePhotoStore,
        ],
      },
      placeDestroy: {
        id: 'placeDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placePhotoLogo,
          storage.placePhotoStore,
        ],
      },
      placeRead: {
        id: 'placeRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placePhotoLogo,
          storage.placePhotoStore,
        ],
      },
      placeAutocomplete: {
        id: 'placeAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      businessServicesTypesImport: {
        id: 'businessServicesTypesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessServicesTypesCreate: {
        id: 'businessServicesTypesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessServicesTypesServiceImage,
        ],
      },
      businessServicesTypesEdit: {
        id: 'businessServicesTypesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessServicesTypesServiceImage,
        ],
      },
      businessServicesTypesDestroy: {
        id: 'businessServicesTypesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessServicesTypesServiceImage,
        ],
      },
      businessServicesTypesRead: {
        id: 'businessServicesTypesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessServicesTypesAutocomplete: {
        id: 'businessServicesTypesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      serviceReservationImport: {
        id: 'serviceReservationImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      serviceReservationCreate: {
        id: 'serviceReservationCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.serviceReservationDigitalReservationDoc,
        ],
      },
      serviceReservationEdit: {
        id: 'serviceReservationEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.serviceReservationDigitalReservationDoc,
        ],
      },
      serviceReservationDestroy: {
        id: 'serviceReservationDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.serviceReservationDigitalReservationDoc,
        ],
      },
      serviceReservationRead: {
        id: 'serviceReservationRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      serviceReservationAutocomplete: {
        id: 'serviceReservationAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      reservationWebAccess: {
        id: 'reservationWebAccess',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      businessPlaceServiceAvailabilityImport: {
        id: 'businessPlaceServiceAvailabilityImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      businessPlaceServiceAvailabilityCreate: {
        id: 'businessPlaceServiceAvailabilityCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPlaceServiceAvailabilityEdit: {
        id: 'businessPlaceServiceAvailabilityEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPlaceServiceAvailabilityDestroy: {
        id: 'businessPlaceServiceAvailabilityDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPlaceServiceAvailabilityRead: {
        id: 'businessPlaceServiceAvailabilityRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      businessPlaceServiceAvailabilityAutocomplete: {
        id: 'businessPlaceServiceAvailabilityAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      countryImport: {
        id: 'countryImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      countryCreate: {
        id: 'countryCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      countryEdit: {
        id: 'countryEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      countryDestroy: {
        id: 'countryDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      countryRead: {
        id: 'countryRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      countryAutocomplete: {
        id: 'countryAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      cityImport: {
        id: 'cityImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      cityCreate: {
        id: 'cityCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      cityEdit: {
        id: 'cityEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      cityDestroy: {
        id: 'cityDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      cityRead: {
        id: 'cityRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      cityAutocomplete: {
        id: 'cityAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      stateImport: {
        id: 'stateImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      stateCreate: {
        id: 'stateCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      stateEdit: {
        id: 'stateEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      stateDestroy: {
        id: 'stateDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      stateRead: {
        id: 'stateRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      stateAutocomplete: {
        id: 'stateAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      messagesImport: {
        id: 'messagesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      messagesCreate: {
        id: 'messagesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      messagesEdit: {
        id: 'messagesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      messagesDestroy: {
        id: 'messagesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      messagesRead: {
        id: 'messagesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      messagesAutocomplete: {
        id: 'messagesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      professionalsServiceAvailabilityImport: {
        id: 'professionalsServiceAvailabilityImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      professionalsServiceAvailabilityCreate: {
        id: 'professionalsServiceAvailabilityCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      professionalsServiceAvailabilityEdit: {
        id: 'professionalsServiceAvailabilityEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      professionalsServiceAvailabilityDestroy: {
        id: 'professionalsServiceAvailabilityDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      professionalsServiceAvailabilityRead: {
        id: 'professionalsServiceAvailabilityRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      professionalsServiceAvailabilityAutocomplete: {
        id: 'professionalsServiceAvailabilityAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      languagesImport: {
        id: 'languagesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      languagesCreate: {
        id: 'languagesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      languagesEdit: {
        id: 'languagesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      languagesDestroy: {
        id: 'languagesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      languagesRead: {
        id: 'languagesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      languagesAutocomplete: {
        id: 'languagesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      currencyImport: {
        id: 'currencyImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      currencyCreate: {
        id: 'currencyCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      currencyEdit: {
        id: 'currencyEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      currencyDestroy: {
        id: 'currencyDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      currencyRead: {
        id: 'currencyRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      currencyAutocomplete: {
        id: 'currencyAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      discountsImport: {
        id: 'discountsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      discountsCreate: {
        id: 'discountsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      discountsEdit: {
        id: 'discountsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      discountsDestroy: {
        id: 'discountsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      discountsRead: {
        id: 'discountsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      discountsAutocomplete: {
        id: 'discountsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      walletImport: {
        id: 'walletImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      walletCreate: {
        id: 'walletCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      walletEdit: {
        id: 'walletEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      walletDestroy: {
        id: 'walletDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      walletRead: {
        id: 'walletRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      walletAutocomplete: {
        id: 'walletAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      businessCategoryImport: {
        id: 'businessCategoryImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessCategoryCreate: {
        id: 'businessCategoryCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessCategoryCategoryImage,
        ],
      },
      businessCategoryEdit: {
        id: 'businessCategoryEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessCategoryCategoryImage,
        ],
      },
      businessCategoryDestroy: {
        id: 'businessCategoryDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.businessCategoryCategoryImage,
        ],
      },
      businessCategoryRead: {
        id: 'businessCategoryRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessCategoryAutocomplete: {
        id: 'businessCategoryAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      providersImport: {
        id: 'providersImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      providersCreate: {
        id: 'providersCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.providersProfileImage,
          storage.providersAttachedDoc,
        ],
      },
      providersEdit: {
        id: 'providersEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.providersProfileImage,
          storage.providersAttachedDoc,
        ],
      },
      providersDestroy: {
        id: 'providersDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.providersProfileImage,
          storage.providersAttachedDoc,
        ],
      },
      providersRead: {
        id: 'providersRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      providersAutocomplete: {
        id: 'providersAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      vaccineTypesImport: {
        id: 'vaccineTypesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      vaccineTypesCreate: {
        id: 'vaccineTypesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      vaccineTypesEdit: {
        id: 'vaccineTypesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      vaccineTypesDestroy: {
        id: 'vaccineTypesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      vaccineTypesRead: {
        id: 'vaccineTypesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      vaccineTypesAutocomplete: {
        id: 'vaccineTypesAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },

      petVaccinesImport: {
        id: 'petVaccinesImport',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },
      petVaccinesCreate: {
        id: 'petVaccinesCreate',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petVaccinesEdit: {
        id: 'petVaccinesEdit',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petVaccinesDestroy: {
        id: 'petVaccinesDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petVaccinesRead: {
        id: 'petVaccinesRead',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },
      petVaccinesAutocomplete: {
        id: 'petVaccinesAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },

      placeTypeImport: {
        id: 'placeTypeImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      placeTypeCreate: {
        id: 'placeTypeCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placeTypePlaceTypeImage,
        ],
      },
      placeTypeEdit: {
        id: 'placeTypeEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placeTypePlaceTypeImage,
        ],
      },
      placeTypeDestroy: {
        id: 'placeTypeDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.placeTypePlaceTypeImage,
        ],
      },
      placeTypeRead: {
        id: 'placeTypeRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      placeTypeAutocomplete: {
        id: 'placeTypeAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      landingSurveyImport: {
        id: 'landingSurveyImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      landingSurveyCreate: {
        id: 'landingSurveyCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      landingSurveyEdit: {
        id: 'landingSurveyEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      landingSurveyDestroy: {
        id: 'landingSurveyDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      landingSurveyRead: {
        id: 'landingSurveyRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      landingSurveyAutocomplete: {
        id: 'landingSurveyAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      newBusinessSurveyImport: {
        id: 'newBusinessSurveyImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      newBusinessSurveyCreate: {
        id: 'newBusinessSurveyCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      newBusinessSurveyEdit: {
        id: 'newBusinessSurveyEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      newBusinessSurveyDestroy: {
        id: 'newBusinessSurveyDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      newBusinessSurveyRead: {
        id: 'newBusinessSurveyRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      newBusinessSurveyAutocomplete: {
        id: 'newBusinessSurveyAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      petPhotosImport: {
        id: 'petPhotosImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petPhotosCreate: {
        id: 'petPhotosCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petPhotosPhoto,
        ],
      },
      petPhotosEdit: {
        id: 'petPhotosEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petPhotosPhoto,
        ],
      },
      petPhotosDestroy: {
        id: 'petPhotosDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petPhotosPhoto,
        ],
      },
      petPhotosRead: {
        id: 'petPhotosRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petPhotosAutocomplete: {
        id: 'petPhotosAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      petDiseasesImport: {
        id: 'petDiseasesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petDiseasesCreate: {
        id: 'petDiseasesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petDiseasesEdit: {
        id: 'petDiseasesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petDiseasesDestroy: {
        id: 'petDiseasesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      petDiseasesRead: {
        id: 'petDiseasesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      petDiseasesAutocomplete: {
        id: 'petDiseasesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      businessServicesPricesImport: {
        id: 'businessServicesPricesImport',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      businessServicesPricesCreate: {
        id: 'businessServicesPricesCreate',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessServicesPricesEdit: {
        id: 'businessServicesPricesEdit',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessServicesPricesDestroy: {
        id: 'businessServicesPricesDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessServicesPricesRead: {
        id: 'businessServicesPricesRead',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },
      businessServicesPricesAutocomplete: {
        id: 'businessServicesPricesAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.businessAdmin, roles.businessManager],
        allowedPlans: [plans.free, plans.premium],
      },

      postsImport: {
        id: 'postsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postsCreate: {
        id: 'postsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.postsPostHeaderImage,
          storage.postsPostDocRelated,
        ],
      },
      postsEdit: {
        id: 'postsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.postsPostHeaderImage,
          storage.postsPostDocRelated,
        ],
      },
      postsDestroy: {
        id: 'postsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.postsPostHeaderImage,
          storage.postsPostDocRelated,
        ],
      },
      postsRead: {
        id: 'postsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postsAutocomplete: {
        id: 'postsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      postCategoriesImport: {
        id: 'postCategoriesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postCategoriesCreate: {
        id: 'postCategoriesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCategoriesEdit: {
        id: 'postCategoriesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCategoriesDestroy: {
        id: 'postCategoriesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCategoriesRead: {
        id: 'postCategoriesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postCategoriesAutocomplete: {
        id: 'postCategoriesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      postCommentsImport: {
        id: 'postCommentsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postCommentsCreate: {
        id: 'postCommentsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCommentsEdit: {
        id: 'postCommentsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCommentsDestroy: {
        id: 'postCommentsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      postCommentsRead: {
        id: 'postCommentsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      postCommentsAutocomplete: {
        id: 'postCommentsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      pointsChallengesImport: {
        id: 'pointsChallengesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      pointsChallengesCreate: {
        id: 'pointsChallengesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      pointsChallengesEdit: {
        id: 'pointsChallengesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      pointsChallengesDestroy: {
        id: 'pointsChallengesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      pointsChallengesRead: {
        id: 'pointsChallengesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      pointsChallengesAutocomplete: {
        id: 'pointsChallengesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      challengesCategoriesImport: {
        id: 'challengesCategoriesImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      challengesCategoriesCreate: {
        id: 'challengesCategoriesCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      challengesCategoriesEdit: {
        id: 'challengesCategoriesEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      challengesCategoriesDestroy: {
        id: 'challengesCategoriesDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      challengesCategoriesRead: {
        id: 'challengesCategoriesRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      challengesCategoriesAutocomplete: {
        id: 'challengesCategoriesAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      productCategoryImport: {
        id: 'productCategoryImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      productCategoryCreate: {
        id: 'productCategoryCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      productCategoryEdit: {
        id: 'productCategoryEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      productCategoryDestroy: {
        id: 'productCategoryDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      productCategoryRead: {
        id: 'productCategoryRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      productCategoryAutocomplete: {
        id: 'productCategoryAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      dealsImport: {
        id: 'dealsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      dealsCreate: {
        id: 'dealsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.dealsDigitalContracts,
        ],
      },
      dealsEdit: {
        id: 'dealsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.dealsDigitalContracts,
        ],
      },
      dealsDestroy: {
        id: 'dealsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.dealsDigitalContracts,
        ],
      },
      dealsRead: {
        id: 'dealsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      dealsAutocomplete: {
        id: 'dealsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      businessPaymentCycleImport: {
        id: 'businessPaymentCycleImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessPaymentCycleCreate: {
        id: 'businessPaymentCycleCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPaymentCycleEdit: {
        id: 'businessPaymentCycleEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPaymentCycleDestroy: {
        id: 'businessPaymentCycleDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      businessPaymentCycleRead: {
        id: 'businessPaymentCycleRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      businessPaymentCycleAutocomplete: {
        id: 'businessPaymentCycleAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      questionsImport: {
        id: 'questionsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      questionsCreate: {
        id: 'questionsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      questionsEdit: {
        id: 'questionsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      questionsDestroy: {
        id: 'questionsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      questionsRead: {
        id: 'questionsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      questionsAutocomplete: {
        id: 'questionsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      answersImport: {
        id: 'answersImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      answersCreate: {
        id: 'answersCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      answersEdit: {
        id: 'answersEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      answersDestroy: {
        id: 'answersDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [

        ],
      },
      answersRead: {
        id: 'answersRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      answersAutocomplete: {
        id: 'answersAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },

      petExaminationImport: {
        id: 'petExaminationImport',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },
      petExaminationCreate: {
        id: 'petExaminationCreate',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petExaminationExaminationsFiles,
          storage.petExaminationExaminationImages,
        ],
      },
      petExaminationEdit: {
        id: 'petExaminationEdit',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petExaminationExaminationsFiles,
          storage.petExaminationExaminationImages,
        ],
      },
      petExaminationDestroy: {
        id: 'petExaminationDestroy',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.petExaminationExaminationsFiles,
          storage.petExaminationExaminationImages,
        ],
      },
      petExaminationRead: {
        id: 'petExaminationRead',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },
      petExaminationAutocomplete: {
        id: 'petExaminationAutocomplete',
        allowedRoles: [roles.aipettoAdmin, roles.aipettoManager, roles.aipettoEditor, roles.businessAdmin, roles.businessManager, roles.veterinaryAdmin, roles.veterinarian],
        allowedPlans: [plans.free, plans.premium],
      },

      contactsImport: {
        id: 'contactsImport',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      contactsCreate: {
        id: 'contactsCreate',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.contactsContactProfilePhoto,
        ],
      },
      contactsEdit: {
        id: 'contactsEdit',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.contactsContactProfilePhoto,
        ],
      },
      contactsDestroy: {
        id: 'contactsDestroy',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
        allowedStorage: [
          storage.contactsContactProfilePhoto,
        ],
      },
      contactsRead: {
        id: 'contactsRead',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
      contactsAutocomplete: {
        id: 'contactsAutocomplete',
        allowedRoles: [roles.aipettoAdmin],
        allowedPlans: [plans.free, plans.premium],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
