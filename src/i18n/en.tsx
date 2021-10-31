import {i18n} from "./index";

const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'aipetto',
    slogan: 'services and information for your pet everywhere anytime',
  },

  homeDownloadApp: {
      howTheAppWorks: 'How does the app work?',
      title: 'aipetto app',
      tagline: 'Simplify the way you',
      description: 'Download our app',
      downloadAppInGooglePlayStoreButton: 'Google PlayStore (Soon)',
      downloadAppInAppleStoreButton: 'Apple Store (Soon)',
      step1: {
          title: 'Create an account',
          heading: 'Create/login to an existing account to get started',
          description: 'An account is created with your email and a desired password',
          img: '/images/app-screenshots/en/en_login.jpg',
      },
      step2: {
          title: 'Pick the service',
          heading: 'Get the places nearby that provide the service',
          description: 'Get special discounts',
          img: '/images/app-screenshots/en/en_pet_services.jpg',
      },
      step3: {
          title: 'More info about the business',
          heading: "Choose a service",
          description: "Very quick and simple",
          img: '/images/app-screenshots/en/en_pet_business_profile.jpg',
      },
      step4: {
          title: 'Pick the time',
          heading: "Get the day and hour that best fit your schedule",
          description: "Usually the services take 30min to 1 hour",
          img: '/images/app-screenshots/en/en_pet_place_availability.jpg',
      },
      step5: {
          title: 'Confirm the reservation',
          heading: "Give the last details about the pet and contact",
          description: "You're one step to reserve",
          img: '/images/app-screenshots/en/en_pet_reservation_form.jpg',
      },
      step6: {
          title: 'Reservation Booked!',
          heading: "The business will confirm it, then just bring or wait for the transport arrive",
          description: "We let you know via push notification and email",
          img: '/images/app-screenshots/en/en_pet_reservation_confirmation.jpg',
      },
      bottomLead: {
          actionText: 'Let us tell you when the app is available',
          description: 'Enjoy special prices and new features for you and your pets',
          downloadAppInGooglePlayStoreButton: 'Google PlayStore',
          downloadAppInAppleStoreButton: 'Apple Store (Soon)',
      },
  },

  privacy: {
    cookiesConsent: 'This site uses cookies in order to bring a better user experience on the website.',
    acceptButton: 'Accept',
    declineButtonText: 'No accept'
  },

  public: {
      homeTitle: 'Do you love pets? Then this your place!',
      homeSubtitle: 'schedule your pet services',
      landingTitle: 'Provide your services',
      landingSubtitle: 'Be part of the platform',
      landingBusinessTitle: 'Our mission is to share information and services in the easiest and direct way for those who love pets',
      landingBusinessSubtitle: 'Be part of this project and provide your products and services',
      menu: {
          business: 'Business',
          petsSurvey: 'Home',
      },
      professionals: "Professionals"
  },

  survey: {
    title: '🐾 Tell us more about you 🐾',
    checkboxTitle: 'What would you like us to provide for you and your pets?',
    nameTitle: 'Your name',
    emailTitle: 'Your email',
    numberOfPets: 'How many pets do you have?',
    checkboxChoices: {
        saveMoneyOnServices: 'Get discounts on pet services',
        reserveServices: 'Reserve online the time and place of the services (vaccine, medical exam, surgeries, grooming)',
        findTheClosestPlaceToGetServices: 'Find vet centers, pet stores, playgrounds nearby',
        findWhereToPlayWithMyPet: 'Find where to take your pet to play',
        knowMoreAboutPets: 'Have your pet medical history in one place wherever you go',
        adoptAPet: 'Have specialized help on how to adopt or donate a pet',
        getMoreMedicalInformation: 'Get more medical information',
        beAbleToChatWithAVeterinarian: 'Chat with your veterinarian in an emergency without extra cost',
        seeWhatPetsMyFriendsHave: 'See what pets my friends have',
        findATrustedPersonToWalkMyPet: 'Find a trusted person to walk your pet',
    },
    checkboxPetProfessionTitle: 'Do you provide any pet service?',
     checkboxPetProfessionChoices: {
      petTaxi: 'Pet Transport',
      petSitter: 'Pet Sitter',
      dogWalker: 'Dog Walker',
      veterinarian: 'Veterinarian',
      surgeon: 'Surgeon',
      groomer: 'Groomer',
      animalBlogger: 'Animal Blogger',
      photographer: 'Pets Photographer',
      petManicures: 'Pet Manicures',
      therapeuticMassagist: 'Therapeutic Massagist'
    },
    whereAreYouLocated: 'Which location do you provide your services?',
    allowNotificationTitle: 'Do you allow us to contact you via email?',
    whereAreYouLocatedPlaceholder: 'Neighborhood, City, State...',
    extraInfo: 'Something you would like to find here and we didn\'t include?',
    surveyCompleteMessage: 'Thank you for completing our survey, have a nice day!',
    surveyCompleteButton: 'Complete'
  },
  businessSurvey: {
    checkboxTitle: 'What services do your business provide?',
    nameTitle: 'Your name',
    emailTitle: 'Your email',
    contactPhone: 'Phone',
    businessNameTitle: 'Your business name',
    numberPlaces: 'How many places do you have?',
    websiteSocialNetwork: 'Website / Social Network',
    checkboxChoices: {
        acupuntura: 'Acupuncture',
        analgesiaTratamentoDolor: 'Treatments for pain',
        analisisDeHeces: 'Stool analysis',
        analisisDeOrina: 'Urine analysis',
        analisisDeSangre: 'Blood test',
        analisisHormonales: 'Hormonal analysis',
        anestesia: 'Anesthesia',
        artroscopia: 'Arthroscopy',
        castracionDeGatos: 'Castration of cats',
        castracionDePerros: 'Castration of dogs',
        castracionQuimicaDelPerro: 'Chemical castration of the dog',
        certificadosVeterinarios: 'Veterinary certificates',
        chequeoMedicoVeterinario: 'Veterinary medical check-up',
        cirurgiaAbdominal: 'Abdominal surgery',
        cirurgiaArticular: 'Joint surgery',
        cirurgiaCardiaca: 'Heart surgery',
        cirurgiaCutaneaYMamaria: 'Skin and breast surgery',
        cirurgiaDeFracturasOseas: 'Bone fracture surgery',
        cirurgiaDeHernias: 'Hernia surgery',
        cirurgiaDeUrgencia: 'Emergency surgery',
        cirurgiaOtorrinolaringologica: 'ENT surgery',
        colonoscopia: 'Colonoscopy',
        corteDeUnas: 'Nail cutting',
        cuidadosIntesivos: 'Intensive care',
        cultivoBacteriano: 'Bacterial culture',
        dermatologia: 'Dermatology',
        desparasitacionDeGatos: 'Deworming of cats',
        desparasitacionDePerros: 'Dog deworming',
        diagnosticoDeGestacion: 'Pregnancy diagnosis',
        ecocardiogramaYElectrocardiograma: 'Echocardiogram and electrocardiogram',
        ecografia: 'Ultrasound',
        electroterapia: 'Electrotherapy',
        endodoncia: 'Endodontics',
        endoscopia: 'Endoscopy',
        entrenamientoDeEstabilidad: 'Stability training',
        estiramientos: 'Stretching',
        eutanasiaYCremacion: 'Euthanasia and cremation',
        examenMedico: 'Medical exam',
        examenNeurologico: 'Neurological examination',
        examenOftalmologico: 'Ophthalmological examination',
        examenReproductivo: 'Reproductive exam',
        extraccionDental: 'Tooth extraction',
        gastroscopia: 'Gastroscopy',
        hospitalizacion: 'Hospitalization',
        identificacionAnimal: 'Animal identification',
        masaje: 'Massage',
        movilizacionDeLasArticulaciones: 'Joint mobilization',
        muestrasDeTejidoYMuestrasCelulares: 'Tissue samples and cell samples',
        odontologia: 'Odontology',
        oncologia: 'Oncology',
        pasaporteComunitarioParaAnimalesDeCompania: 'Community passport for pets',
        pastillasAnticonceptivasParaGatas: 'Contraceptive pills for cats',
        peluqueria: 'Pet Grooming',
        programaDeReduccionDePeso: 'Weight reduction program',
        pruebaDeAlergia: 'Allergy test',
        quimioterapia: 'Chemotherapy',
        radiografia: 'X-ray',
        radiografiaDeContraste: 'Contrast X-ray',
        reconocimientoClinico: 'Clinical recognition',
        rehabilitacion: 'Rehabilitation',
        tienda: 'PetShop',
        tranquilizantes: 'Tranquilizers',
        traumatologia: 'Traumatology',
        urgencias: 'Emergencies',
        vacunacionDeGato: 'Cat vaccination',
        vacunacionDePerro: 'Dog vaccination',
        mais: 'And much more...',
    },
    allowNotificationTitle: 'Do you allow us to send emails with information about aipetto tools?',
  },
  api: {
    menu: 'API',
  },
  reservationSteps: {
    stepAddressToSearch: 'Address',
    pickCategory: 'Which service do your pet need?',
    nextButton: 'Next'
  },
  entities: {
    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'customer_export',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer successfully saved',
        },
        update: {
          success: 'Customer successfully saved',
        },
        destroy: {
          success: 'Customer successfully deleted',
        },
        destroyAll: {
          success: 'Customer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Customer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'businessId': 'Business Id',
          'uniqueCustomIdentifier': 'Unique Customer Identifier(IUC)',
          'userId': 'User ID',
          'source': 'Source',
          'surname': 'Surname',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'whatsApp': 'WhatsApp',
          'smsPhoneNumber': 'SMS Phone Number',
          'phoneNumber': 'Phone Number',
          'address': 'Address',
          'email': 'Email',
          'zipCode': 'ZipCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          'billingAddressStreet': 'Billing Address Street',
          'billingAddressCity': 'Billing Address City',
          'billingAddressState': 'Billing Address State',
          'billingAddressZipCode': 'Billing Address Zip Code',
          'billingAddressCountry': 'Billing Address Country',
          'shippingAddressStreet': 'Shipping Address Street',
          'shippingAddressCity': 'Shipping Address City',
          'shippingAddressState': 'Shipping Address State',
          'shippingAddressZipCode': 'Shipping Address Zip Code',
          'shippingAddressCountry': 'Shipping Address Country',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'prospectStatus': 'Potential Customer Status (Leads)',
          'customerStatus': 'Customer Status',
          'wantToReceiveNotifications': 'Want To Receive Notifications',
          'currency': 'Currency',
          'balanceRange': 'Balance',
          'balance': 'Balance',
          'shippingAddressStreetNumber': 'Shipping Address Street Number',
          'addressStreetNumber': 'Address Street Number',
          'billingAddressStreetNumber': 'Billing Address Street Number',
          'addressStreetComplement': 'Address Street Complement',
          'billingAddressStreetComplement': 'Billing Address Street Complement',
          'shippingAddressStreetComplement': 'Shipping Address Street Complement',
          'customerProfileImage': 'Profile Image',
          'facebook': 'Facebook',
          'linkedin': 'Linkedin',
          'instagram': 'Instagram',
          'website': 'Website',
          'language': 'Language',
          'notes': 'Notes',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'source': {
              'aipetto': 'Aipetto',
              'phone_call': 'By phone',
              'whatsapp': 'Whatsapp',
              'in_person': 'Personally',
              'website': 'Website',
              'recommended_by_friend': 'Recommendation',
              'email': 'Email',
              'facebook': 'Facebook',
              'twitter': 'Twitter',
              'linkedin': 'Linkedin',
              'instagram': 'Instagram',
              'reddit': 'Reddit',
              'youtube': 'Youtube',
              'google': 'Google',
          },
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
          'prospectStatus': {
            'current_prospect': 'Prospect Accepted',
            'lost_prospect': 'Prospect Denied',
            'non_prospect': 'Without contact',
          },
          'customerStatus': {
            'current_customer': 'Current Customer',
            'past_customer': 'Past Customer',
            'non_customer': 'Not a Customer',
          },
        },
        placeholders: {
          'balance': '0',
        },
        hints: {
          'prospectStatus': 'Prospect means it has been associated with a deal. The customer remains a current prospect until the deal is closed or, for some reason, the customer is removed from the associated deal',
          'customerStatus': 'Indicates if a deal has been won. The contact remains a current customer until you manually mark it as a past customer.',
        },
        new: {
          title: 'New Customer',
        },
        view: {
          title: 'View Customer',
        },
        importer: {
          title: 'Import Customers',
          fileName: 'customer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          'photos': 'Photos',
          'businessId': 'BusinessId',
          'acceptPointsToShop': 'AcceptPointsToShop',
          'pointsPriceRange': 'PointsPrice',
          'pointsPrice': 'PointsPrice',
          'currency': 'Currency',
          'language': 'Language',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'products': 'Products',
          'businessEmployee': 'Employee',
          'delivered': 'Delivered',
          'attachments': 'Attachments',
          'businessId': 'BusinessId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    pet: {
        name: 'pet',
        label: 'Pets',
        menu: 'Pets',
        exporterFileName: 'pet_export',
        list: {
          menu: 'Pets',
          title: 'Pets',
        },
        create: {
          success: 'Pet successfully saved',
        },
        update: {
          success: 'Pet successfully saved',
        },
        destroy: {
          success: 'Pet successfully deleted',
        },
        destroyAll: {
          success: 'Pet(s) successfully deleted',
        },
        edit: {
          title: 'Edit Pet',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'nickname': 'Nickname',
          'profileImage': 'Profile Image',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'ageRange': 'Age',
          'age': 'Age',
          'color': 'Color',
          'secondColor': 'Second Color',
          'thirdColor': 'Third Color',
          'sex': 'Sex',
          'breed': 'Breed',
          'secondBreedMixed': 'Second Breed Mixed',
          'type': 'Type',
          'customerId': 'CustomerId',
          'petOwners': 'PetOwners',
          'photos': 'Photos',
          'vaccines': 'Vaccines',
          'maturitySize': 'MaturitySize',
          'furLength': 'FurLength',
          'hasBeenVaccinated': 'Has Been Vaccinated?',
          'hasBeenDewormed': 'Has been Dewormed?',
          'hasBeenSterilizedSpayed': 'Has been Sterilized and Spayed?',
          'health': 'Health',
          'isLost': 'Is Lost',
          'biography': 'Biography',
          'usersAuthorized': 'Users Authorized',
          'businessAuthorized': 'Business Authorized',
          'isLookingForMatch': 'Is Looking for Match?',
          'diseases': 'Diseases',
          'isGuideDog': 'Is GuideDog?',
          'numberOfLikesRange': 'Range of Number Of Likes',
          'numberOfLikes': 'Number of Likes',
          'matches': 'Matches',
          'petFriends': 'Pet Friends',
          'governmentUniqueID': 'Government Unique ID',
          'bloodType': 'Blood Type',
          'hasMicrochip': 'Has Microchip?',
          'weightRange': 'Weight',
          'weight': 'Weight',
          'weightUnit': 'Weight Unit',
          'heightRange': 'Height',
          'height': 'Height',
          'heightUnit': 'Height Unit',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'color': {
            'black': 'Black',
            'white': 'White',
            'brown': 'Brown',
            'gray': 'Gray',
            'chocolate': 'Chocolate',
            'gold': 'Gold',
            'blue': 'Blue',
            'cream': 'Cream',
            'yellow': 'Yellow',
          },
          'secondColor': {
            'black': 'Black',
            'white': 'White',
            'brown': 'Brown',
            'gray': 'Gray',
            'chocolate': 'Chocolate',
            'gold': 'Gold',
            'blue': 'Blue',
            'cream': 'Cream',
            'yellow': 'Yellow',
          },
          'thirdColor': {
            'black': 'Black',
            'white': 'White',
            'brown': 'Brown',
            'gray': 'Gray',
            'chocolate': 'Chocolate',
            'gold': 'Gold',
            'blue': 'Blue',
            'cream': 'Cream',
            'yellow': 'Yellow',
          },
          'sex': {
            'male': 'Male',
            'female': 'Female',
          },
          'maturitySize': {
            'small': 'Small',
            'medium': 'Medium',
            'large': 'Large',
            'extra_large': 'Extra_large',
            'not_specified': 'Not_specified',
          },
          'furLength': {
            'short': 'Short',
            'medium': 'Medium',
            'long': 'Long',
            'not_specified': 'Not_specified',
          },
          'health': {
            'healthy': 'Healthy',
            'minor_injury': 'Minor_injury',
            'serious_injury': 'Serious_injury',
            'not_specified': 'Not_specified',
          },
          'bloodType': {
            'canine_DEA_1_1': 'Canine_DEA_1_1',
            'canine_DEA_1_2': 'Canine_DEA_1_2',
            'canine_DEA_3': 'Canine_DEA_3',
            'canine_DEA_4': 'Canine_DEA_4',
            'canine_DEA_5': 'Canine_DEA_5',
            'canine_DEA_7': 'Canine_DEA_7',
          },
          'weightUnit': {
            'kilograms': 'Kilograms',
            'pounds': 'Pounds',
          },
          'heightUnit': {
            'meters': 'Meters',
            'feet': 'Feet',
          },
        },
        placeholders: {
          'age': 'Age in months',
        },
        hints: {
          'age': 'Age in months',
          'usersAuthorized': 'Users that can access this pet profile',
          'businessAuthorized': 'Business that are authorized to access this pet profile',
          'isLookingForMatch': 'Is your pet looking for a match?',
          'governmentUniqueID': 'Government Pets Unique ID',
        },
        new: {
          title: 'New Pet',
        },
        view: {
          title: 'View Pet',
        },
        importer: {
          title: 'Import Pets',
          fileName: 'pet_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    breed: {
        name: 'breed',
        label: 'Breeds',
        menu: 'Breeds',
        exporterFileName: 'breed_export',
        list: {
          menu: 'Breeds',
          title: 'Breeds',
        },
        create: {
          success: 'Breed successfully saved',
        },
        update: {
          success: 'Breed successfully saved',
        },
        destroy: {
          success: 'Breed successfully deleted',
        },
        destroyAll: {
          success: 'Breed(s) successfully deleted',
        },
        edit: {
          title: 'Edit Breed',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          'type': 'Type',
          'size': 'Size',
          'exercise': 'Exercise',
          'sizeOfHome': 'SizeOfHome',
          'grooming': 'Grooming',
          'coatLength': 'CoatLength',
          'sheds': 'Sheds',
          'lifespan': 'Lifespan',
          'vulnerableNativeBreed': 'VulnerableNativeBreed',
          'townOrCountry': 'TownOrCountry',
          'sizeOfGarden': 'SizeOfGarden',
          'image': 'Image',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'size': {
            'Small': 'Small',
            'Medium': 'Medium',
            'Large': 'Large',
          },
          'exercise': {
            'up_to_30_minutes_per_day': 'Up_to_30_minutes_per_day',
            'up_to_1_hour_per_day': 'Up_to_1_hour_per_day',
            'more_than_2_hours_per_day': 'More_than_2_hours_per_day',
          },
          'sizeOfHome': {
            'flat_apartment': 'Flat_apartment',
            'small_house': 'Small_house',
            'large_house': 'Large_house',
          },
          'grooming': {
            'more_than_once_a_week': 'More_than_once_a_week',
            'every_day': 'Every_day',
            'once_a_week': 'Once_a_week',
          },
          'coatLength': {
            'short': 'Short',
            'medium': 'Medium',
            'long': 'Long',
          },
          'sheds': {
            'yes': 'Yes',
            'no': 'No',
          },
          'lifespan': {
            'under_10_years': 'Under_10_years',
            'over_10_years': 'Over_10_years',
            'over_12_years': 'Over_12_years',
          },
          'vulnerableNativeBreed': {
            'yes': 'Yes',
            'no': 'No',
          },
          'townOrCountry': {
            'country': 'Country',
            'town': 'Town',
            'either': 'Either',
          },
          'sizeOfGarden': {
            'small': 'Small',
            'medium': 'Medium',
            'small_medium': 'Small_medium',
            'large': 'Large',
          },
        },
        placeholders: {

        },
        hints: {
          'grooming': 'How many times you should brush and clean the coat of pet',
        },
        new: {
          title: 'New Breed',
        },
        view: {
          title: 'View Breed',
        },
        importer: {
          title: 'Import Breeds',
          fileName: 'breed_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    petTypes: {
        name: 'petTypes',
        label: 'PetTypes',
        menu: 'PetTypes',
        exporterFileName: 'petTypes_export',
        list: {
          menu: 'PetTypes',
          title: 'PetTypes',
        },
        create: {
          success: 'PetTypes successfully saved',
        },
        update: {
          success: 'PetTypes successfully saved',
        },
        destroy: {
          success: 'PetTypes successfully deleted',
        },
        destroyAll: {
          success: 'PetTypes(s) successfully deleted',
        },
        edit: {
          title: 'Edit PetTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'image': 'Image',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PetTypes',
        },
        view: {
          title: 'View PetTypes',
        },
        importer: {
          title: 'Import PetTypes',
          fileName: 'petTypes_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    business: {
        name: 'business',
        label: 'Business',
        menu: 'Business',
        exporterFileName: 'business_export',
        list: {
          menu: 'Business',
          title: 'Business',
        },
        create: {
          success: 'Business successfully saved',
        },
        update: {
          success: 'Business successfully saved',
        },
        destroy: {
          success: 'Business successfully deleted',
        },
        destroyAll: {
          success: 'Business(s) successfully deleted',
        },
        edit: {
          title: 'Edit Business',
        },
        fields: {
          id: 'Id',
          'businessID': 'Business ID',
          'name': 'Name',
          'services': 'Services',
          'categories': 'Categories',
          'contactName': 'Contact Name',
          'contactPhone': 'Contact Phone',
          'contactWhatsApp': 'Contact WhatsApp',
          'contactEmail': 'Contact Email',
          'addressStreet': 'Address Street',
          'addressStreetNumber': 'Address Street Number',
          'streetComplement': 'Street Complement',
          'addressPostCode': 'Address PostCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          'businessLogo': 'Business Logo',
          'latitude': 'Latitude',
          'longitude': 'Longitude',
          'website': 'Website',
          'facebook': 'Facebook',
          'linkedin': 'Linkedin',
          'notes': 'Notes',
          'language': 'Language',
          'currency': 'Currency',
          'instagram': 'Instagram',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Business',
        },
        view: {
          title: 'View Business',
        },
        importer: {
          title: 'Import Businesses',
          fileName: 'business_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    place: {
        name: 'place',
        label: 'Places',
        menu: 'Places',
        exporterFileName: 'place_export',
        list: {
          menu: 'Places',
          title: 'Places',
        },
        create: {
          success: 'Place successfully saved',
        },
        update: {
          success: 'Place successfully saved',
        },
        destroy: {
          success: 'Place successfully deleted',
        },
        destroyAll: {
          success: 'Place(s) successfully deleted',
        },
        edit: {
          title: 'Edit Place',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'placeType': 'PlaceType',
          'businessId': 'BusinessId',
          'services': 'Services',
          'categories': 'Categories',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'address': 'Address',
          'addressNumber': 'AddressNumber',
          'addressZipCode': 'AddressZipCode',
          'addressCity': 'AddressCity',
          'addressState': 'AddressState',
          'addressCountry': 'AddressCountry',
          'openTime': 'OpenTime',
          'closeTime': 'CloseTime',
          'is24hours': 'Is 24 Hours?',
          'starsRange': 'Quality Ranking Range',
          'stars': 'Quality Ranking',
          'isOpen': 'Is Open?',
          'photoLogo': 'Photo Logo',
          'photoStore': 'Photo Store',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Place',
        },
        view: {
          title: 'View Place',
        },
        importer: {
          title: 'Import Places',
          fileName: 'place_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessServicesTypes: {
        name: 'businessServicesTypes',
        label: 'BusinessServicesTypes',
        menu: 'BusinessServicesTypes',
        exporterFileName: 'businessServicesTypes_export',
        list: {
          menu: 'BusinessServicesTypes',
          title: 'BusinessServicesTypes',
        },
        create: {
          success: 'BusinessServicesTypes successfully saved',
        },
        update: {
          success: 'BusinessServicesTypes successfully saved',
        },
        destroy: {
          success: 'BusinessServicesTypes successfully deleted',
        },
        destroyAll: {
          success: 'BusinessServicesTypes(s) successfully deleted',
        },
        edit: {
          title: 'Edit BusinessServicesTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'language': 'Language',
          'serviceImage': 'ServiceImage',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New BusinessServicesTypes',
        },
        view: {
          title: 'View BusinessServicesTypes',
        },
        importer: {
          title: 'Import BusinessServicesTypes',
          fileName: 'businessServicesTypes_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    serviceReservation: {
        name: 'Reservations',
        label: 'Reservations',
        menu: 'Reservations',
        exporterFileName: 'serviceReservation_export',
        list: {
          menu: 'Reservations',
          title: 'Reservations',
        },
        create: {
          success: 'Reservation successfully saved',
        },
        update: {
          success: 'Reservation successfully saved',
        },
        destroy: {
          success: 'Reservation successfully deleted',
        },
        destroyAll: {
          success: 'Reservation(s) successfully deleted',
        },
        edit: {
          title: 'Edit Reservation',
        },
        fields: {
          id: 'Id',
          'dateRange': 'Date',
          'date': 'Date',
          'businessId': 'Business Id',
          'customerId': 'Customer Id',
          'serviceType': 'Service Type',
          'serviceProviderIDs': 'Service Provider IDs',
          'time': 'Time',
          'needTransportation': 'Need Transportation',
          'place': 'Place',
          'status': 'Status',
          'totalPriceRange': 'Total Price',
          'totalPrice': 'Total Price',
          'totalPriceWithDiscountRange': 'Total Price with Discount',
          'totalPriceWithDiscount': 'Total Price with Discount',
          'discountCode': 'Discount Code',
          'currency': 'Currency',
          'digitalReservationDoc': 'Digital Reservation Doc',
          'totalPriceTransportartionRange': 'Total Price Transportartion',
          'totalPriceTransportartion': 'Total Price Transportartion',
          'ratingFromCustomerRange': 'Rating from Customer',
          'ratingFromCustomer': 'Rating from Customer',
          'country': 'Country',
          'source': 'Reservation Origin',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'time': {
              '06_00AM': '06:00AM',
              '06_30AM': '06:30AM',
              '07_00AM': '07:00AM',
              '07_30AM': '07:30AM',
              '08_00AM': '08:00AM',
              '08_30AM': '08:30AM',
              '09_00AM': '09:00AM',
              '09_30AM': '09:30AM',
              '10_00AM': '10:00AM',
              '10_30AM': '10:30AM',
              '11_00AM': '11:00AM',
              '11_30AM': '11:30AM',
              '12_00AM': '12:00AM',
              '12_30PM': '12:30PM',
              '01_30PM': '01:30PM',
              '02_00PM': '02:00PM',
              '02_30PM': '02:30PM',
              '03_00PM': '03:00PM',
              '03_30PM': '03:30PM',
              '04_00PM': '04:00PM',
              '04_30PM': '04:30PM',
              '05_00PM': '05:00PM',
              '05_30PM': '05:30PM',
              '06_00PM': '06:00PM',
              '06_30PM': '06:30PM',
              '07_00PM': '07:00PM',
              '07_30PM': '07:30PM',
              '08_00PM': '08:00PM',
              '09_30PM': '09:30PM',
              '10_00PM': '10:00PM',
              '10_30PM': '10:30PM',
              '11_00PM': '11:00PM',
              '11_30PM': '11:30PM',
              '00_00AM': '00:00AM',
              '00_30AM': '00:30AM',
              '01_00AM': '01:00AM',
              '01_30AM': '01:30AM',
              '02_00AM': '02:00AM',
              '02_30AM': '02:30AM',
              '03_00AM': '03:00AM',
              '03_30AM': '03:30AM',
              '04_00AM': '04:00AM',
              '04_30AM': '04:30AM',
              '05_00AM': '05:00AM',
              '05_30AM': '05:30AM',
          },
          'status': {
            'user_approval_pending': 'User Approval Pending',
            'business_approval_pending': 'Business Approval Pending',
            'business_approved': 'Business Approved',
            'business_declined': 'Business Declined',
          },
          'source': {
            'aipetto_app': 'Aipetto App',
            'aipetto_web': 'Aipetto Web',
            'manual': 'Manual',
            'external_integration': 'Extenal Integration',
            'facebook_reservation': 'Facebook Reservation',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ServiceReservation',
        },
        view: {
          title: 'View ServiceReservation',
        },
        importer: {
          title: 'Import ServiceReservations',
          fileName: 'serviceReservation_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessPlaceServiceAvailability: {
        name: 'Availability',
        label: 'Availability',
        menu: 'Availability',
        exporterFileName: 'businessPlaceServiceAvailability_export',
        list: {
          menu: 'BusinessPlaceServiceAvailabilities',
          title: 'BusinessPlaceServiceAvailabilities',
        },
        create: {
          success: 'BusinessPlaceServiceAvailability successfully saved',
        },
        update: {
          success: 'BusinessPlaceServiceAvailability successfully saved',
        },
        destroy: {
          success: 'BusinessPlaceServiceAvailability successfully deleted',
        },
        destroyAll: {
          success: 'BusinessPlaceServiceAvailability(s) successfully deleted',
        },
        edit: {
          title: 'Edit BusinessPlaceServiceAvailability',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'businessId': 'Business ID',
          'timeSlot': 'Working Hour',
          'days': 'Days',
          'workOnHolidays': 'Work On Holidays',
          'serviceType': 'Service Type',
          'places': 'Places',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'timeSlot': {
            '06_00AM': '06:00AM',
            '06_30AM': '06:30AM',
            '07_00AM': '07:00AM',
            '07_30AM': '07:30AM',
            '08_00AM': '08:00AM',
            '08_30AM': '08:30AM',
            '09_00AM': '09:00AM',
            '09_30AM': '09:30AM',
            '10_00AM': '10:00AM',
            '10_30AM': '10:30AM',
            '11_00AM': '11:00AM',
            '11_30AM': '11:30AM',
            '12_00AM': '12:00AM',
            '12_30PM': '12:30PM',
            '01_30PM': '01:30PM',
            '02_00PM': '02:00PM',
            '02_30PM': '02:30PM',
            '03_00PM': '03:00PM',
            '03_30PM': '03:30PM',
            '04_00PM': '04:00PM',
            '04_30PM': '04:30PM',
            '05_00PM': '05:00PM',
            '05_30PM': '05:30PM',
            '06_00PM': '06:00PM',
            '06_30PM': '06:30PM',
            '07_00PM': '07:00PM',
            '07_30PM': '07:30PM',
            '08_00PM': '08:00PM',
            '09_30PM': '09:30PM',
            '10_00PM': '10:00PM',
            '10_30PM': '10:30PM',
            '11_00PM': '11:00PM',
            '11_30PM': '11:30PM',
            '00_00AM': '00:00AM',
            '00_30AM': '00:30AM',
            '01_00AM': '01:00AM',
            '01_30AM': '01:30AM',
            '02_00AM': '02:00AM',
            '02_30AM': '02:30AM',
            '03_00AM': '03:00AM',
            '03_30AM': '03:30AM',
            '04_00AM': '04:00AM',
            '04_30AM': '04:30AM',
            '05_00AM': '05:00AM',
            '05_30AM': '05:30AM',
          },
          'days': {
            'sunday': 'Sunday',
            'monday': 'Monday',
            'tuesday': 'Tuesday',
            'wednesday': 'Wednesday',
            'thursday': 'Thursday',
            'friday': 'Friday',
            'saturday': 'Saturday',
          },
        },
        placeholders: {
          'name': 'Agenda Reservation Availability Name',
        },
        hints: {

        },
        new: {
          title: 'New BusinessPlaceServiceAvailability',
        },
        view: {
          title: 'View BusinessPlaceServiceAvailability',
        },
        importer: {
          title: 'Import BusinessPlaceServiceAvailabilities',
          fileName: 'businessPlaceServiceAvailability_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    country: {
        name: 'country',
        label: 'Countries',
        menu: 'Countries',
        exporterFileName: 'country_export',
        list: {
          menu: 'Countries',
          title: 'Countries',
        },
        create: {
          success: 'Country successfully saved',
        },
        update: {
          success: 'Country successfully saved',
        },
        destroy: {
          success: 'Country successfully deleted',
        },
        destroyAll: {
          success: 'Country(s) successfully deleted',
        },
        edit: {
          title: 'Edit Country',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'initials': 'Initials',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Country',
        },
        view: {
          title: 'View Country',
        },
        importer: {
          title: 'Import Countries',
          fileName: 'country_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    city: {
        name: 'city',
        label: 'Cities',
        menu: 'Cities',
        exporterFileName: 'city_export',
        list: {
          menu: 'Cities',
          title: 'Cities',
        },
        create: {
          success: 'City successfully saved',
        },
        update: {
          success: 'City successfully saved',
        },
        destroy: {
          success: 'City successfully deleted',
        },
        destroyAll: {
          success: 'City(s) successfully deleted',
        },
        edit: {
          title: 'Edit City',
        },
        fields: {
          id: 'Id',
          'country': 'Country',
          'name': 'Name',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New City',
        },
        view: {
          title: 'View City',
        },
        importer: {
          title: 'Import Cities',
          fileName: 'city_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    state: {
        name: 'state',
        label: 'States',
        menu: 'States',
        exporterFileName: 'state_export',
        list: {
          menu: 'States',
          title: 'States',
        },
        create: {
          success: 'State successfully saved',
        },
        update: {
          success: 'State successfully saved',
        },
        destroy: {
          success: 'State successfully deleted',
        },
        destroyAll: {
          success: 'State(s) successfully deleted',
        },
        edit: {
          title: 'Edit State',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          'initials': 'Initials',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New State',
        },
        view: {
          title: 'View State',
        },
        importer: {
          title: 'Import States',
          fileName: 'state_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    messages: {
        name: 'messages',
        label: 'Messages',
        menu: 'Messages',
        exporterFileName: 'messages_export',
        list: {
          menu: 'Messages',
          title: 'Messages',
        },
        create: {
          success: 'Messages successfully saved',
        },
        update: {
          success: 'Messages successfully saved',
        },
        destroy: {
          success: 'Messages successfully deleted',
        },
        destroyAll: {
          success: 'Messages(s) successfully deleted',
        },
        edit: {
          title: 'Edit Messages',
        },
        fields: {
          id: 'Id',
          'from': 'From',
          'to': 'To',
          'message': 'Message',
          'businessId': 'BusinessId',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Messages',
        },
        view: {
          title: 'View Messages',
        },
        importer: {
          title: 'Import Messages',
          fileName: 'messages_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    professionalsServiceAvailability: {
        name: 'professionalsServiceAvailability',
        label: 'ProfessionalsServiceAvailabilities',
        menu: 'ProfessionalsServiceAvailabilities',
        exporterFileName: 'professionalsServiceAvailability_export',
        list: {
          menu: 'ProfessionalsServiceAvailabilities',
          title: 'ProfessionalsServiceAvailabilities',
        },
        create: {
          success: 'ProfessionalsServiceAvailability successfully saved',
        },
        update: {
          success: 'ProfessionalsServiceAvailability successfully saved',
        },
        destroy: {
          success: 'ProfessionalsServiceAvailability successfully deleted',
        },
        destroyAll: {
          success: 'ProfessionalsServiceAvailability(s) successfully deleted',
        },
        edit: {
          title: 'Edit ProfessionalsServiceAvailability',
        },
        fields: {
          id: 'Id',
          'userId': 'UserId',
          'businessId': 'BusinessId',
          'serviceType': 'ServiceType',
          'timeSlot': 'TimeSlot',
          'dateAvailabilityStartRange': 'DateAvailabilityStart',
          'dateAvailabilityStart': 'DateAvailabilityStart',
          'dateAvailabilityEndRange': 'DateAvailabilityEnd',
          'dateAvailabilityEnd': 'DateAvailabilityEnd',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'timeSlot': {
            '06_00AM': '06_00AM',
            '06_30AM': '06_30AM',
            '07_00AM': '07_00AM',
            '07_30AM': '07_30AM',
            '08_00AM': '08_00AM',
            '08_30AM': '08_30AM',
            '09_00AM': '09_00AM',
            '09_30AM': '09_30AM',
            '10_00AM': '10_00AM',
            '10_30AM': '10_30AM',
            '11_00AM': '11_00AM',
            '11_30AM': '11_30AM',
            '12_00AM': '12_00AM',
            '12_30PM': '12_30PM',
            '01_30PM': '01_30PM',
            '02_00PM': '02_00PM',
            '02_30PM': '02_30PM',
            '03_00PM': '03_00PM',
            '03_30PM': '03_30PM',
            '04_00PM': '04_00PM',
            '04_30PM': '04_30PM',
            '05_00PM': '05_00PM',
            '05_30PM': '05_30PM',
            '06_00PM': '06_00PM',
            '06_30PM': '06_30PM',
            '07_00PM': '07_00PM',
            '07_30PM': '07_30PM',
            '08_00PM': '08_00PM',
            '09_30PM': '09_30PM',
            '10_00PM': '10_00PM',
            '10_30PM': '10_30PM',
            '11_00PM': '11_00PM',
            '11_30PM': '11_30PM',
            '00_00AM': '00_00AM',
            '00_30AM': '00_30AM',
            '01_00AM': '01_00AM',
            '01_30AM': '01_30AM',
            '02_00AM': '02_00AM',
            '02_30AM': '02_30AM',
            '03_00AM': '03_00AM',
            '03_30AM': '03_30AM',
            '04_00AM': '04_00AM',
            '04_30AM': '04_30AM',
            '05_00': '05_00',
            '05_30AM': '05_30AM',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ProfessionalsServiceAvailability',
        },
        view: {
          title: 'View ProfessionalsServiceAvailability',
        },
        importer: {
          title: 'Import ProfessionalsServiceAvailabilities',
          fileName: 'professionalsServiceAvailability_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    languages: {
        name: 'languages',
        label: 'Languages',
        menu: 'Languages',
        exporterFileName: 'languages_export',
        list: {
          menu: 'Languages',
          title: 'Languages',
        },
        create: {
          success: 'Languages successfully saved',
        },
        update: {
          success: 'Languages successfully saved',
        },
        destroy: {
          success: 'Languages successfully deleted',
        },
        destroyAll: {
          success: 'Languages(s) successfully deleted',
        },
        edit: {
          title: 'Edit Languages',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'active': 'Active',
          'languageCode': 'LanguageCode',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Languages',
        },
        view: {
          title: 'View Languages',
        },
        importer: {
          title: 'Import Languages',
          fileName: 'languages_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    currency: {
        name: 'currency',
        label: 'Currencies',
        menu: 'Currencies',
        exporterFileName: 'currency_export',
        list: {
          menu: 'Currencies',
          title: 'Currencies',
        },
        create: {
          success: 'Currency successfully saved',
        },
        update: {
          success: 'Currency successfully saved',
        },
        destroy: {
          success: 'Currency successfully deleted',
        },
        destroyAll: {
          success: 'Currency(s) successfully deleted',
        },
        edit: {
          title: 'Edit Currency',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'symbol': 'Symbol',
          'active': 'Active',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Currency',
        },
        view: {
          title: 'View Currency',
        },
        importer: {
          title: 'Import Currencies',
          fileName: 'currency_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    discounts: {
        name: 'discounts',
        label: 'Discounts',
        menu: 'Discounts',
        exporterFileName: 'discounts_export',
        list: {
          menu: 'Discounts',
          title: 'Discounts',
        },
        create: {
          success: 'Discounts successfully saved',
        },
        update: {
          success: 'Discounts successfully saved',
        },
        destroy: {
          success: 'Discounts successfully deleted',
        },
        destroyAll: {
          success: 'Discounts(s) successfully deleted',
        },
        edit: {
          title: 'Edit Discounts',
        },
        fields: {
          id: 'Id',
          'businessID': 'BusinessID',
          'codeName': 'CodeName',
          'discountPercentageRange': 'DiscountPercentage',
          'discountPercentage': 'DiscountPercentage',
          'expirationDateRange': 'ExpirationDate',
          'expirationDate': 'ExpirationDate',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Discounts',
        },
        view: {
          title: 'View Discounts',
        },
        importer: {
          title: 'Import Discounts',
          fileName: 'discounts_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    wallet: {
        name: 'wallet',
        label: 'Wallets',
        menu: 'Wallets',
        exporterFileName: 'wallet_export',
        list: {
          menu: 'Wallets',
          title: 'Wallets',
        },
        create: {
          success: 'Wallet successfully saved',
        },
        update: {
          success: 'Wallet successfully saved',
        },
        destroy: {
          success: 'Wallet successfully deleted',
        },
        destroyAll: {
          success: 'Wallet(s) successfully deleted',
        },
        edit: {
          title: 'Edit Wallet',
        },
        fields: {
          id: 'Id',
          'totalCreditsRange': 'TotalCredits',
          'totalCredits': 'TotalCredits',
          'aipettoPointsRange': 'AipettoPoints',
          'aipettoPoints': 'AipettoPoints',
          'user': 'User',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Wallet',
        },
        view: {
          title: 'View Wallet',
        },
        importer: {
          title: 'Import Wallets',
          fileName: 'wallet_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessCategory: {
        name: 'businessCategory',
        label: 'BusinessCategories',
        menu: 'BusinessCategories',
        exporterFileName: 'businessCategory_export',
        list: {
          menu: 'BusinessCategories',
          title: 'BusinessCategories',
        },
        create: {
          success: 'BusinessCategory successfully saved',
        },
        update: {
          success: 'BusinessCategory successfully saved',
        },
        destroy: {
          success: 'BusinessCategory successfully deleted',
        },
        destroyAll: {
          success: 'BusinessCategory(s) successfully deleted',
        },
        edit: {
          title: 'Edit BusinessCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          'categoryImage': 'CategoryImage',
          'pageUrl': 'PageUrl',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New BusinessCategory',
        },
        view: {
          title: 'View BusinessCategory',
        },
        importer: {
          title: 'Import BusinessCategories',
          fileName: 'businessCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    providers: {
        name: 'providers',
        label: 'Providers',
        menu: 'Providers',
        exporterFileName: 'providers_export',
        list: {
          menu: 'Providers',
          title: 'Providers',
        },
        create: {
          success: 'Providers successfully saved',
        },
        update: {
          success: 'Providers successfully saved',
        },
        destroy: {
          success: 'Providers successfully deleted',
        },
        destroyAll: {
          success: 'Providers(s) successfully deleted',
        },
        edit: {
          title: 'Edit Providers',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'businessID': 'Business ID',
          'providerID': 'Provider ID',
          'category': 'Category',
          'serviceTypes': 'Service Types',
          'contactName': 'Contact Name',
          'contactPhone': 'Contact Phone',
          'contactWhatsApp': 'Contact WhatsApp',
          'addressStreet': 'Address Street',
          'addressStreetNumber': 'Street Number',
          'addressPostCode': 'Address PostCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          'email': 'Email',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'basePricePerServiceRange': 'Range Base Price per Service',
          'basePricePerService': 'Base Price per Service',
          'currency': 'Currency',
          'profileImage': 'Profile Image',
          'attachedDoc': 'Attached Docs',
          'language': 'Language',
          'isIndependent': 'Is independent?',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Providers',
        },
        view: {
          title: 'View Providers',
        },
        importer: {
          title: 'Import Providers',
          fileName: 'providers_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    vaccineTypes: {
        name: 'vaccineTypes',
        label: 'VaccineTypes',
        menu: 'VaccineTypes',
        exporterFileName: 'vaccineTypes_export',
        list: {
          menu: 'VaccineTypes',
          title: 'VaccineTypes',
        },
        create: {
          success: 'VaccineTypes successfully saved',
        },
        update: {
          success: 'VaccineTypes successfully saved',
        },
        destroy: {
          success: 'VaccineTypes successfully deleted',
        },
        destroyAll: {
          success: 'VaccineTypes(s) successfully deleted',
        },
        edit: {
          title: 'Edit VaccineTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          'language': 'Language',
          'frequencyShotDosis': 'FrequencyShotDosis',
          'petSpecificType': 'PetSpecificType',
          'vaccineCustomUniqueID': 'VaccineCustomUniqueID',
          'isMandatory': 'IsMandatory',
          'specificBreeds': 'SpecificBreeds',
          'vaccinePetTargetAgeInMonthsRange': 'VaccinePetTargetAgeInMonths',
          'vaccinePetTargetAgeInMonths': 'VaccinePetTargetAgeInMonths',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'language': {
            'en': 'En',
            'es': 'Es',
            'pt': 'Pt',
          },
          'frequencyShotDosis': {
            'one_time': 'One_time',
            'every_month': 'Every_month',
            'every_six_months': 'Every_six_months',
            'every_year': 'Every_year',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New VaccineTypes',
        },
        view: {
          title: 'View VaccineTypes',
        },
        importer: {
          title: 'Import VaccineTypes',
          fileName: 'vaccineTypes_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    petVaccines: {
        name: 'Vaccines',
        label: 'Vaccines',
        menu: 'Vaccines',
        exporterFileName: 'petVaccines_export',
        list: {
          menu: 'Vaccines',
          title: 'Vaccines',
        },
        create: {
          success: 'Vaccines successfully saved',
        },
        update: {
          success: 'Vaccines successfully saved',
        },
        destroy: {
          success: 'Vaccines successfully deleted',
        },
        destroyAll: {
          success: 'Vaccines(s) successfully deleted',
        },
        edit: {
          title: 'Edit Vaccines',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'uniqueVetVaccineCode': 'Unique Vet Vaccine Code',
          'datetimeTakenRange': 'Date and time Taken',
          'datetimeTaken': 'Date and time Taken',
          'veterinarianID': 'Veterinarian ID',
          'placeTaken': 'Place Taken',
          'businessID': 'Business ID',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PetVaccines',
        },
        view: {
          title: 'View PetVaccines',
        },
        importer: {
          title: 'Import PetVaccines',
          fileName: 'petVaccines_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    placeType: {
        name: 'placeType',
        label: 'PlaceTypes',
        menu: 'PlaceTypes',
        exporterFileName: 'placeType_export',
        list: {
          menu: 'PlaceTypes',
          title: 'PlaceTypes',
        },
        create: {
          success: 'PlaceType successfully saved',
        },
        update: {
          success: 'PlaceType successfully saved',
        },
        destroy: {
          success: 'PlaceType successfully deleted',
        },
        destroyAll: {
          success: 'PlaceType(s) successfully deleted',
        },
        edit: {
          title: 'Edit PlaceType',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          'placeTypeImage': 'PlaceTypeImage',
          'isPublicPlace': 'IsPublicPlace',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PlaceType',
        },
        view: {
          title: 'View PlaceType',
        },
        importer: {
          title: 'Import PlaceTypes',
          fileName: 'placeType_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    landingSurvey: {
        name: 'landingSurvey',
        label: 'LandingSurveys',
        menu: 'LandingSurveys',
        exporterFileName: 'landingSurvey_export',
        list: {
          menu: 'LandingSurveys',
          title: 'LandingSurveys',
        },
        create: {
          success: 'LandingSurvey successfully saved',
        },
        update: {
          success: 'LandingSurvey successfully saved',
        },
        destroy: {
          success: 'LandingSurvey successfully deleted',
        },
        destroyAll: {
          success: 'LandingSurvey(s) successfully deleted',
        },
        edit: {
          title: 'Edit LandingSurvey',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'email': 'Email',
          'numberOfPets': 'NumberOfPets',
          'interests': 'Interests',
          'extraInfo': 'ExtraInfo',
          'allowReceiveNotifications': 'AllowReceiveNotifications',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'petProfession': 'PetProfession',
          'address': 'Address',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'interests': {
            '': '',
          },
          'petProfession': {
            '': '',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New LandingSurvey',
        },
        view: {
          title: 'View LandingSurvey',
        },
        importer: {
          title: 'Import LandingSurveys',
          fileName: 'landingSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    newBusinessSurvey: {
        name: 'newBusinessSurvey',
        label: 'NewBusinessSurveys',
        menu: 'NewBusinessSurveys',
        exporterFileName: 'newBusinessSurvey_export',
        list: {
          menu: 'NewBusinessSurveys',
          title: 'NewBusinessSurveys',
        },
        create: {
          success: 'NewBusinessSurvey successfully saved',
        },
        update: {
          success: 'NewBusinessSurvey successfully saved',
        },
        destroy: {
          success: 'NewBusinessSurvey successfully deleted',
        },
        destroyAll: {
          success: 'NewBusinessSurvey(s) successfully deleted',
        },
        edit: {
          title: 'Edit NewBusinessSurvey',
        },
        fields: {
          id: 'Id',
          'nameBusiness': 'NameBusiness',
          'numberOfPlaces': 'NumberOfPlaces',
          'contactName': 'ContactName',
          'contactEmail': 'ContactEmail',
          'contactPhone': 'ContactPhone',
          'cellphoneForSMS': 'CellphoneForSMS',
          'digitalNetworks': 'DigitalNetworks',
          'allowReceiveNotifications': 'AllowReceiveNotifications',
          'services': 'Services',
          'address': 'Address',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'services': {
            '': '',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New NewBusinessSurvey',
        },
        view: {
          title: 'View NewBusinessSurvey',
        },
        importer: {
          title: 'Import NewBusinessSurveys',
          fileName: 'newBusinessSurvey_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    petPhotos: {
        name: 'petPhotos',
        label: 'PetPhotos',
        menu: 'PetPhotos',
        exporterFileName: 'petPhotos_export',
        list: {
          menu: 'PetPhotos',
          title: 'PetPhotos',
        },
        create: {
          success: 'PetPhotos successfully saved',
        },
        update: {
          success: 'PetPhotos successfully saved',
        },
        destroy: {
          success: 'PetPhotos successfully deleted',
        },
        destroyAll: {
          success: 'PetPhotos(s) successfully deleted',
        },
        edit: {
          title: 'Edit PetPhotos',
        },
        fields: {
          id: 'Id',
          'description': 'Description',
          'petId': 'PetId',
          'photo': 'Photo',
          'latitude': 'Latitude',
          'longitude': 'Longitude',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'description': 'What is your pet doing in the photo',
        },
        new: {
          title: 'New PetPhotos',
        },
        view: {
          title: 'View PetPhotos',
        },
        importer: {
          title: 'Import PetPhotos',
          fileName: 'petPhotos_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    petDiseases: {
        name: 'petDiseases',
        label: 'PetDiseases',
        menu: 'PetDiseases',
        exporterFileName: 'petDiseases_export',
        list: {
          menu: 'PetDiseases',
          title: 'PetDiseases',
        },
        create: {
          success: 'PetDiseases successfully saved',
        },
        update: {
          success: 'PetDiseases successfully saved',
        },
        destroy: {
          success: 'PetDiseases successfully deleted',
        },
        destroyAll: {
          success: 'PetDiseases(s) successfully deleted',
        },
        edit: {
          title: 'Edit PetDiseases',
        },
        fields: {
          id: 'Id',
          'diseaseCommonName': 'DiseaseCommonName',
          'diseaseScientificNames': 'DiseaseScientificNames',
          'isHumanContagious': 'IsHumanContagious',
          'isPetContagious': 'IsPetContagious',
          'language': 'Language',
          'specificPetTypes': 'SpecificPetTypes',
          'specificPetBreeds': 'SpecificPetBreeds',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'language': {
            'en': 'En',
            'es': 'Es',
            'pt': 'Pt',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PetDiseases',
        },
        view: {
          title: 'View PetDiseases',
        },
        importer: {
          title: 'Import PetDiseases',
          fileName: 'petDiseases_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessServicesPrices: {
        name: 'Prices',
        label: 'Prices',
        menu: 'Prices',
        exporterFileName: 'business_services_prices_export',
        list: {
          menu: 'Prices',
          title: 'Prices',
        },
        create: {
          success: 'Services Prices successfully saved',
        },
        update: {
          success: 'Services Prices successfully saved',
        },
        destroy: {
          success: 'Services Prices successfully deleted',
        },
        destroyAll: {
          success: 'Services Prices(s) successfully deleted',
        },
        edit: {
          title: 'Edit Services Prices',
        },
        fields: {
          id: 'Id',
          'service': 'Service',
          'businessId': 'Business Id',
          'servicePriceRange': 'Service Price',
          'servicePrice': 'Service Price',
          'currency': 'Currency',
          'isFree': 'Is Free',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New BusinessServicesPrices',
        },
        view: {
          title: 'View BusinessServicesPrices',
        },
        importer: {
          title: 'Import BusinessServicesPrices',
          fileName: 'businessServicesPrices_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    posts: {
        name: 'posts',
        label: 'Posts',
        menu: 'Posts',
        exporterFileName: 'posts_export',
        list: {
          menu: 'Posts',
          title: 'Posts',
        },
        create: {
          success: 'Posts successfully saved',
        },
        update: {
          success: 'Posts successfully saved',
        },
        destroy: {
          success: 'Posts successfully deleted',
        },
        destroyAll: {
          success: 'Posts(s) successfully deleted',
        },
        edit: {
          title: 'Edit Posts',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'description': 'Description',
          'postHeaderImage': 'PostHeaderImage',
          'postDocRelated': 'PostDocRelated',
          'postUrl': 'PostUrl',
          'authors': 'Authors',
          'postCategory': 'PostCategory',
          'comments': 'Comments',
          'source': 'Source',
          'language': 'Language',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Posts',
        },
        view: {
          title: 'View Posts',
        },
        importer: {
          title: 'Import Posts',
          fileName: 'posts_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    postCategories: {
        name: 'postCategories',
        label: 'PostCategories',
        menu: 'PostCategories',
        exporterFileName: 'postCategories_export',
        list: {
          menu: 'PostCategories',
          title: 'PostCategories',
        },
        create: {
          success: 'PostCategories successfully saved',
        },
        update: {
          success: 'PostCategories successfully saved',
        },
        destroy: {
          success: 'PostCategories successfully deleted',
        },
        destroyAll: {
          success: 'PostCategories(s) successfully deleted',
        },
        edit: {
          title: 'Edit PostCategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'categoryUrl': 'CategoryUrl',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PostCategories',
        },
        view: {
          title: 'View PostCategories',
        },
        importer: {
          title: 'Import PostCategories',
          fileName: 'postCategories_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    postComments: {
        name: 'postComments',
        label: 'PostComments',
        menu: 'PostComments',
        exporterFileName: 'postComments_export',
        list: {
          menu: 'PostComments',
          title: 'PostComments',
        },
        create: {
          success: 'PostComments successfully saved',
        },
        update: {
          success: 'PostComments successfully saved',
        },
        destroy: {
          success: 'PostComments successfully deleted',
        },
        destroyAll: {
          success: 'PostComments(s) successfully deleted',
        },
        edit: {
          title: 'Edit PostComments',
        },
        fields: {
          id: 'Id',
          'comment': 'Comment',
          'postId': 'PostId',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PostComments',
        },
        view: {
          title: 'View PostComments',
        },
        importer: {
          title: 'Import PostComments',
          fileName: 'postComments_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    pointsChallenges: {
        name: 'pointsChallenges',
        label: 'PointsChallenges',
        menu: 'PointsChallenges',
        exporterFileName: 'pointsChallenges_export',
        list: {
          menu: 'PointsChallenges',
          title: 'PointsChallenges',
        },
        create: {
          success: 'PointsChallenges successfully saved',
        },
        update: {
          success: 'PointsChallenges successfully saved',
        },
        destroy: {
          success: 'PointsChallenges successfully deleted',
        },
        destroyAll: {
          success: 'PointsChallenges(s) successfully deleted',
        },
        edit: {
          title: 'Edit PointsChallenges',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'pointsRange': 'Points',
          'points': 'Points',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {
          'points': 'How many points this challenge give the user',
        },
        new: {
          title: 'New PointsChallenges',
        },
        view: {
          title: 'View PointsChallenges',
        },
        importer: {
          title: 'Import PointsChallenges',
          fileName: 'pointsChallenges_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    challengesCategories: {
        name: 'challengesCategories',
        label: 'ChallengesCategories',
        menu: 'ChallengesCategories',
        exporterFileName: 'challengesCategories_export',
        list: {
          menu: 'ChallengesCategories',
          title: 'ChallengesCategories',
        },
        create: {
          success: 'ChallengesCategories successfully saved',
        },
        update: {
          success: 'ChallengesCategories successfully saved',
        },
        destroy: {
          success: 'ChallengesCategories successfully deleted',
        },
        destroyAll: {
          success: 'ChallengesCategories(s) successfully deleted',
        },
        edit: {
          title: 'Edit ChallengesCategories',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ChallengesCategories',
        },
        view: {
          title: 'View ChallengesCategories',
        },
        importer: {
          title: 'Import ChallengesCategories',
          fileName: 'challengesCategories_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    productCategory: {
        name: 'productCategory',
        label: 'ProductCategories',
        menu: 'ProductCategories',
        exporterFileName: 'productCategory_export',
        list: {
          menu: 'ProductCategories',
          title: 'ProductCategories',
        },
        create: {
          success: 'ProductCategory successfully saved',
        },
        update: {
          success: 'ProductCategory successfully saved',
        },
        destroy: {
          success: 'ProductCategory successfully deleted',
        },
        destroyAll: {
          success: 'ProductCategory(s) successfully deleted',
        },
        edit: {
          title: 'Edit ProductCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ProductCategory',
        },
        view: {
          title: 'View ProductCategory',
        },
        importer: {
          title: 'Import ProductCategories',
          fileName: 'productCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    deals: {
        name: 'deals',
        label: 'Deals',
        menu: 'Deals',
        exporterFileName: 'deals_export',
        list: {
          menu: 'Deals',
          title: 'Deals',
        },
        create: {
          success: 'Deals successfully saved',
        },
        update: {
          success: 'Deals successfully saved',
        },
        destroy: {
          success: 'Deals successfully deleted',
        },
        destroyAll: {
          success: 'Deals(s) successfully deleted',
        },
        edit: {
          title: 'Edit Deals',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'customer': 'Customer',
          'digitalContracts': 'DigitalContracts',
          'dateStartRange': 'DateStart',
          'dateStart': 'DateStart',
          'dateEndedRange': 'DateEnded',
          'dateEnded': 'DateEnded',
          'salesManagerResponsible': 'SalesManagerResponsible',
          'businessID': 'BusinessID',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'open': 'Open',
            'in_progress': 'In_progress',
            'closed': 'Closed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Deals',
        },
        view: {
          title: 'View Deals',
        },
        importer: {
          title: 'Import Deals',
          fileName: 'deals_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    businessPaymentCycle: {
        name: 'businessPaymentCycle',
        label: 'BusinessPaymentCycles',
        menu: 'Pagamentos',
        exporterFileName: 'businessPaymentCycle_export',
        list: {
          menu: 'BusinessPaymentCycles',
          title: 'BusinessPaymentCycles',
        },
        create: {
          success: 'BusinessPaymentCycle successfully saved',
        },
        update: {
          success: 'BusinessPaymentCycle successfully saved',
        },
        destroy: {
          success: 'BusinessPaymentCycle successfully deleted',
        },
        destroyAll: {
          success: 'BusinessPaymentCycle(s) successfully deleted',
        },
        edit: {
          title: 'Edit BusinessPaymentCycle',
        },
        fields: {
          id: 'Id',
          'businessID': 'BusinessID',
          'cycleStartRange': 'CycleStart',
          'cycleStart': 'CycleStart',
          'cycleEndRange': 'CycleEnd',
          'cycleEnd': 'CycleEnd',
          'statusPayment': 'StatusPayment',
          'totalBusinessServiceReservationPeriodRange': 'TotalBusinessServiceReservationPeriod',
          'totalBusinessServiceReservationPeriod': 'TotalBusinessServiceReservationPeriod',
          'totalCommisionCalculatedRange': 'TotalCommisionCalculated',
          'totalCommisionCalculated': 'TotalCommisionCalculated',
          'commisionRateUsedOnCalculationRange': 'CommisionRateUsedOnCalculation',
          'commisionRateUsedOnCalculation': 'CommisionRateUsedOnCalculation',
          'businessServiceReservationsUsed': 'BusinessServiceReservationsUsed',
          'statusCyclePayment': 'StatusCyclePayment',
          'customerID': 'CustomerID',
          'paymentMethod': 'PaymentMethod',
          'paymentGatewayReferenceCode': 'PaymentGatewayReferenceCode',
          'paymentGatewayType': 'PaymentGatewayType',
          'country': 'Country',
          'currency': 'Currency',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'statusPayment': {
            'requires_payment_method': 'Requires_payment_method',
            'requires_confirmation': 'Requires_confirmation',
            'requires_action': 'Requires_action',
            'processing': 'Processing',
            'requires_capture': 'Requires_capture',
            'canceled': 'Canceled',
            'succeeded': 'Succeeded',
          },
          'statusCyclePayment': {
            'opened': 'Opened',
            'closed': 'Closed',
            'canceled': 'Canceled',
          },
          'paymentMethod': {
            'acss_debit': 'Acss_debit',
            'afterpay_clearpay': 'Afterpay_clearpay',
            'alipay': 'Alipay',
            'au_becs_debit': 'Au_becs_debit',
            'bacs_debit': 'Bacs_debit',
            'bancontact': 'Bancontact',
            'boleto': 'Boleto',
            'card': 'Card',
            'card_present': 'Card_present',
            'eps': 'Eps',
            'fpx': 'Fpx',
            'giropay': 'Giropay',
            'grabpay': 'Grabpay',
            'ideal': 'Ideal',
            'interac_present': 'Interac_present',
            'oxxo': 'Oxxo',
            'p24': 'P24',
            'sepa_debit': 'Sepa_debit',
            'sofort': 'Sofort',
            'wechat_pay': 'Wechat_pay',
          },
          'paymentGatewayType': {
            'mercadopago': 'Mercadopago',
            'stripe': 'Stripe',
            'paypal': 'Paypal',
          },
        },
        placeholders: {

        },
        hints: {
          'statusPayment': 'Payment Status follow Stripe Status API format',
        },
        new: {
          title: 'New BusinessPaymentCycle',
        },
        view: {
          title: 'View BusinessPaymentCycle',
        },
        importer: {
          title: 'Import BusinessPaymentCycles',
          fileName: 'businessPaymentCycle_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    questions: {
        name: 'questions',
        label: 'Questions',
        menu: 'Questions',
        exporterFileName: 'questions_export',
        list: {
          menu: 'Questions',
          title: 'Questions',
        },
        create: {
          success: 'Questions successfully saved',
        },
        update: {
          success: 'Questions successfully saved',
        },
        destroy: {
          success: 'Questions successfully deleted',
        },
        destroyAll: {
          success: 'Questions(s) successfully deleted',
        },
        edit: {
          title: 'Edit Questions',
        },
        fields: {
          id: 'Id',
          'question': 'Question',
          'type': 'Type',
          'userID': 'UserID',
          'isActive': 'IsActive',
          'language': 'Language',
          'country': 'Country',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'dynamic_from_user': 'Dynamic_from_user',
            'static_system_faq': 'Static_system_faq',
            'static_system_pet_info': 'Static_system_pet_info',
            'static_system_pet_health': 'Static_system_pet_health',
            'static_system_pet_grooming': 'Static_system_pet_grooming',
            'static_system_pet_curiosities': 'Static_system_pet_curiosities',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Questions',
        },
        view: {
          title: 'View Questions',
        },
        importer: {
          title: 'Import Questions',
          fileName: 'questions_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    answers: {
        name: 'answers',
        label: 'Answers',
        menu: 'Answers',
        exporterFileName: 'answers_export',
        list: {
          menu: 'Answers',
          title: 'Answers',
        },
        create: {
          success: 'Answers successfully saved',
        },
        update: {
          success: 'Answers successfully saved',
        },
        destroy: {
          success: 'Answers successfully deleted',
        },
        destroyAll: {
          success: 'Answers(s) successfully deleted',
        },
        edit: {
          title: 'Edit Answers',
        },
        fields: {
          id: 'Id',
          'answer': 'Answer',
          'userID': 'UserID',
          'type': 'Type',
          'isActive': 'IsActive',
          'questionID': 'QuestionID',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'dynamic_from_user': 'Dynamic_from_user',
            'static_system_faq': 'Static_system_faq',
            'static_system_pet_info': 'Static_system_pet_info',
            'static_system_pet_health': 'Static_system_pet_health',
            'static_system_pet_grooming': 'Static_system_pet_grooming',
            'static_system_pet_curiosities': 'Static_system_pet_curiosities',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Answers',
        },
        view: {
          title: 'View Answers',
        },
        importer: {
          title: 'Import Answers',
          fileName: 'answers_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    petExamination: {
        name: 'Examinations',
        label: 'Examinations',
        menu: 'Examinations',
        exporterFileName: 'pet_examination_export',
        list: {
          menu: 'Examinations',
          title: 'Examinations',
        },
        create: {
          success: 'Examinations successfully saved',
        },
        update: {
          success: 'Examinations successfully saved',
        },
        destroy: {
          success: 'Examinations successfully deleted',
        },
        destroyAll: {
          success: 'Examination(s) successfully deleted',
        },
        edit: {
          title: 'Edit Examinations',
        },
        fields: {
          id: 'Id',
          'petID': 'Pet ID',
          'examinationInternalCode': 'Examination Internal Code',
          'veterinariesResponsibleDiagnostic': 'Veterinaries Responsible for Diagnostic',
          'businessID': 'Business ID',
          'language': 'Language',
          'providersID': 'Providers ID',
          'statusExamination': 'Status Examination',
          'examinationsFiles': 'Examinations Files',
          'examinationImages': 'Examination Images',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'statusExamination': {
            'open': 'Open',
            'in_progress': 'In_progress',
            'closed': 'Closed',
            'canceled': 'Canceled',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New PetExamination',
        },
        view: {
          title: 'View PetExamination',
        },
        importer: {
          title: 'Import PetExaminations',
          fileName: 'petExamination_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    contacts: {
        name: 'contacts',
        label: 'Contacts',
        menu: 'Contacts',
        exporterFileName: 'contacts_export',
        list: {
          menu: 'Contacts',
          title: 'Contacts',
        },
        create: {
          success: 'Contacts successfully saved',
        },
        update: {
          success: 'Contacts successfully saved',
        },
        destroy: {
          success: 'Contacts successfully deleted',
        },
        destroyAll: {
          success: 'Contacts(s) successfully deleted',
        },
        edit: {
          title: 'Edit Contacts',
        },
        fields: {
          id: 'Id',
          'firstName': 'FirstName',
          'lastName': 'LastName',
          'email': 'Email',
          'cellphone': 'Cellphone',
          'whatsapp': 'Whatsapp',
          'source': 'Source',
          'country': 'Country',
          'city': 'City',
          'addressStreetName': 'AddressStreetName',
          'addressStreetNumber': 'AddressStreetNumber',
          'addressStreetComplement': 'AddressStreetComplement',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'statusContact': 'StatusContact',
          'contactType': 'ContactType',
          'customerID': 'CustomerID',
          'businessID': 'BusinessID',
          'companyName': 'CompanyName',
          'website': 'Website',
          'linkedinProfile': 'LinkedinProfile',
          'instagramProfile': 'InstagramProfile',
          'facebookProfile': 'FacebookProfile',
          'isDeveloper': 'IsDeveloper',
          'isActive': 'IsActive',
          'contactProfilePhoto': 'ContactProfilePhoto',
          'language': 'Language',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'source': {
            'facebook': 'Facebook',
            'twitter': 'Twitter',
            'linkedin': 'Linkedin',
            'phone_call': 'Phone_call',
            'aipetto': 'Aipetto',
            'instagram': 'Instagram',
            'email': 'Email',
            'reddit': 'Reddit',
            'in_person': 'In_person',
            'recommended_by_friend': 'Recommended_by_friend',
            'website': 'Website',
            'youtube': 'Youtube',
            'google': 'Google',
            'whatsapp': 'Whatsapp',
          },
          'contactType': {
            'is_customer_prospect': 'Is_customer_prospect',
            'is_customer': 'Is_customer',
            'is_pet_professional_provider': 'Is_pet_professional_provider',
            'is_pet_owner': 'Is_pet_owner',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Contacts',
        },
        view: {
          title: 'View Contacts',
        },
        importer: {
          title: 'Import Contacts',
          fileName: 'contacts_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    welcomeBack: 'Welcome back',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    informationLoginBeta: '*To use the beta version, pre-register',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    createAnAccount: `Don't have an account? Create one.`,
    social: {
      header: 'or sign in with Social Media',
      signinWithGoogle: 'Sign in with Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

    roles: {
        aipettoAdmin: {
            label: 'aipetto Admin',
            description: 'Acesso a todos os recursos da plataforma',
        },
        aipettoManager: {
            label: 'aipetto Manager',
            description: 'Manage all operational modules',
        },
        aipettoEditor: {
            label: 'aipetto Editor',
            description: 'Have access to comercial and content modules',
        },
        businessAdmin: {
            label: 'Business Owner',
            description: 'Business Owner',
        },
        petshopAdmin: {
            label: 'Admin Petshop',
            description: 'Admin Petshop',
        },
        veterinaryAdmin: {
            label: 'Admin Veterinarian',
            description: 'Admin Veterinarian',
        },
        businessManager: {
            label: 'Business Manager',
            description: 'Manage all operation modules of business',
        },
        businessEmployee: {
            label: 'Employee',
            description: 'Employee',
        },
        petOwner: {
            label: 'Pet Owner',
            description: 'Owner of pets',
        },
        veterinarian: {
            label: 'Veterinarian',
            description: 'Veterinarian',
        },
        transporterAdmin: {
            label: 'Transporter',
            description: 'Transporter',
        },
        transporter: {
            label: 'Transportador - Motorista Taxi Dog',
            description: 'Negócio que trabalha transportando animais de estimação',
        },
    },
  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    premium: {
      label: 'Premium',
      price: '£50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

    aipettoStore: {
        menu: 'aipetto Store',
        title: 'Aipetto Store',
    },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  reservation: {
    new: 'New Reservation'
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      businessPlace1: 'Place 1',
      businessPlace2: 'Place 2',
      businessPlace3: 'Place 3',
      reservations: 'Service Reservations',
      topServices: 'Top Services',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
