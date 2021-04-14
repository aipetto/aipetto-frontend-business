const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'AIPETTO',
  },
  public: {
    homeTitle: '¿Amas a las mascotas?¡Entonces este es tu lugar!',
    homeSubtitle: 'Donde quiera que estes, encuentre veterinários para ayudarte, obtener descuentos especiales en comida y accesorios, encuentre lugares donde tu mascota puede jugar y tener un lindo peinado, eso y mucho más...'
  },
  api: {
    menu: 'API',
  },
  entities: {
    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'exportacion_customer',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer guardado con éxito',
        },
        update: {
          success: 'Customer guardado con éxito',
        },
        destroy: {
          success: 'Customer eliminado con éxito',
        },
        destroyAll: {
          success: 'Customer(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Customer',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'userId': 'UserId',
          'businessId': 'BusinessId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'gender': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Customer',
        },
        view: {
          title: 'Ver Customer',
        },
        importer: {
          title: 'Importar Customers',
          fileName: 'customer_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'exportacion_product',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product guardado con éxito',
        },
        update: {
          success: 'Product guardado con éxito',
        },
        destroy: {
          success: 'Product eliminado con éxito',
        },
        destroyAll: {
          success: 'Product(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'unitPriceRange': 'Unit Price',
          'unitPrice': 'Unit Price',
          'photos': 'Photos',
          'businessId': 'BusinessId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Product',
        },
        view: {
          title: 'Ver Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'exportacion_order',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order guardado con éxito',
        },
        update: {
          success: 'Order guardado con éxito',
        },
        destroy: {
          success: 'Order eliminado con éxito',
        },
        destroyAll: {
          success: 'Order(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Order',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'products': 'Products',
          'employee': 'Employee',
          'delivered': 'Delivered',
          'attachments': 'Attachments',
          'businessId': 'BusinessId',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Order',
        },
        view: {
          title: 'Ver Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    pet: {
        name: 'pet',
        label: 'Pets',
        menu: 'Pets',
        exporterFileName: 'exportacion_pet',
        list: {
          menu: 'Pets',
          title: 'Pets',
        },
        create: {
          success: 'Pet guardado con éxito',
        },
        update: {
          success: 'Pet guardado con éxito',
        },
        destroy: {
          success: 'Pet eliminado con éxito',
        },
        destroyAll: {
          success: 'Pet(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Pet',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'nickname': 'Nickname',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'ageRange': 'Age',
          'age': 'Age',
          'color': 'Color',
          'profileImage': 'ProfileImage',
          'sex': 'Sex',
          'breed': 'Breed',
          'type': 'Type',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'color': {
            'black': 'Black',
            'white': 'White',
            'brown': 'Brown',
            'black_white': 'Black_white',
            'brown_white': 'Brown_white',
            'gray': 'Gray',
          },
          'sex': {
            'male': 'Male',
            'female': 'Female',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Pet',
        },
        view: {
          title: 'Ver Pet',
        },
        importer: {
          title: 'Importar Pets',
          fileName: 'pet_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    breed: {
        name: 'breed',
        label: 'Breeds',
        menu: 'Breeds',
        exporterFileName: 'exportacion_breed',
        list: {
          menu: 'Breeds',
          title: 'Breeds',
        },
        create: {
          success: 'Breed guardado con éxito',
        },
        update: {
          success: 'Breed guardado con éxito',
        },
        destroy: {
          success: 'Breed eliminado con éxito',
        },
        destroyAll: {
          success: 'Breed(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Breed',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Breed',
        },
        view: {
          title: 'Ver Breed',
        },
        importer: {
          title: 'Importar Breeds',
          fileName: 'breed_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    petTypes: {
        name: 'petTypes',
        label: 'PetTypes',
        menu: 'PetTypes',
        exporterFileName: 'exportacion_petTypes',
        list: {
          menu: 'PetTypes',
          title: 'PetTypes',
        },
        create: {
          success: 'PetTypes guardado con éxito',
        },
        update: {
          success: 'PetTypes guardado con éxito',
        },
        destroy: {
          success: 'PetTypes eliminado con éxito',
        },
        destroyAll: {
          success: 'PetTypes(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar PetTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'image': 'Image',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo PetTypes',
        },
        view: {
          title: 'Ver PetTypes',
        },
        importer: {
          title: 'Importar PetTypes',
          fileName: 'petTypes_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    business: {
        name: 'business',
        label: 'Businesses',
        menu: 'Businesses',
        exporterFileName: 'exportacion_business',
        list: {
          menu: 'Businesses',
          title: 'Businesses',
        },
        create: {
          success: 'Business guardado con éxito',
        },
        update: {
          success: 'Business guardado con éxito',
        },
        destroy: {
          success: 'Business eliminado con éxito',
        },
        destroyAll: {
          success: 'Business(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Business',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Business',
        },
        view: {
          title: 'Ver Business',
        },
        importer: {
          title: 'Importar Businesses',
          fileName: 'business_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    place: {
        name: 'place',
        label: 'Places',
        menu: 'Places',
        exporterFileName: 'exportacion_place',
        list: {
          menu: 'Places',
          title: 'Places',
        },
        create: {
          success: 'Place guardado con éxito',
        },
        update: {
          success: 'Place guardado con éxito',
        },
        destroy: {
          success: 'Place eliminado con éxito',
        },
        destroyAll: {
          success: 'Place(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Place',
        },
        fields: {
          id: 'Id',
          'businessId': 'BusinessId',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          'address': 'Address',
          'addressNumber': 'AddressNumber',
          'addressZipCode': 'AddressZipCode',
          'openTime': 'OpenTime',
          'closeTime': 'CloseTime',
          'is24hours': 'Is24hours',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo Place',
        },
        view: {
          title: 'Ver Place',
        },
        importer: {
          title: 'Importar Places',
          fileName: 'place_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    businessServicesTypes: {
        name: 'businessServicesTypes',
        label: 'BusinessServicesTypes',
        menu: 'BusinessServicesTypes',
        exporterFileName: 'exportacion_businessServicesTypes',
        list: {
          menu: 'BusinessServicesTypes',
          title: 'BusinessServicesTypes',
        },
        create: {
          success: 'BusinessServicesTypes guardado con éxito',
        },
        update: {
          success: 'BusinessServicesTypes guardado con éxito',
        },
        destroy: {
          success: 'BusinessServicesTypes eliminado con éxito',
        },
        destroyAll: {
          success: 'BusinessServicesTypes(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar BusinessServicesTypes',
        },
        fields: {
          id: 'Id',
          'nome': 'Nome',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo BusinessServicesTypes',
        },
        view: {
          title: 'Ver BusinessServicesTypes',
        },
        importer: {
          title: 'Importar BusinessServicesTypes',
          fileName: 'businessServicesTypes_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    serviceReservation: {
        name: 'serviceReservation',
        label: 'ServiceReservations',
        menu: 'ServiceReservations',
        exporterFileName: 'exportacion_serviceReservation',
        list: {
          menu: 'ServiceReservations',
          title: 'ServiceReservations',
        },
        create: {
          success: 'ServiceReservation guardado con éxito',
        },
        update: {
          success: 'ServiceReservation guardado con éxito',
        },
        destroy: {
          success: 'ServiceReservation eliminado con éxito',
        },
        destroyAll: {
          success: 'ServiceReservation(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar ServiceReservation',
        },
        fields: {
          id: 'Id',
          'dateRange': 'Date',
          'date': 'Date',
          'businessId': 'BusinessId',
          'customerId': 'CustomerId',
          'serviceType': 'ServiceType',
          'time': 'Time',
          'needTransportation': 'NeedTransportation',
          'place': 'Place',
          'status': 'Status',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'status': {
            'user_approval_pending': 'User_approval_pending',
            'business_approval_pending': 'Business_approval_pending',
            'business_approved': 'Business_approved',
            'business_declined': 'Business_declined',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Nuevo ServiceReservation',
        },
        view: {
          title: 'Ver ServiceReservation',
        },
        importer: {
          title: 'Importar ServiceReservations',
          fileName: 'serviceReservation_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    reservationAgenda: {
        name: 'reservationAgenda',
        label: 'ReservationAgenda',
        menu: 'ReservationAgenda',
        exporterFileName: 'exportacion_reservationAgenda',
        list: {
          menu: 'ReservationAgenda',
          title: 'ReservationAgenda',
        },
        create: {
          success: 'ReservationAgenda guardado con éxito',
        },
        update: {
          success: 'ReservationAgenda guardado con éxito',
        },
        destroy: {
          success: 'ReservationAgenda eliminado con éxito',
        },
        destroyAll: {
          success: 'ReservationAgenda(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar ReservationAgenda',
        },
        fields: {
          id: 'Id',
          'businessId': 'BusinessId',
          'timeSlot': 'TimeSlot',
          'serviceType': 'ServiceType',
          'name': 'Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'timeSlot': {
            '06_00': '06_00',
            '06_30': '06_30',
            '07_00': '07_00',
            '07_30': '07_30',
            '08_00': '08_00',
            '08_30': '08_30',
            '09_00': '09_00',
            '09_30': '09_30',
            '10_00': '10_00',
            '10_30': '10_30',
            '11_00': '11_00',
            '11_30': '11_30',
            '12_00': '12_00',
            '12_30': '12_30',
            '13_00': '13_00',
            '13_30': '13_30',
            '14_00': '14_00',
            '14_30': '14_30',
            '15_00': '15_00',
            '15_30': '15_30',
            '16_00': '16_00',
            '16_30': '16_30',
            '17': '17',
            '17_30': '17_30',
            '18_00': '18_00',
            '18_30': '18_30',
            '19_00': '19_00',
            '19_30': '19_30',
            '20_00': '20_00',
            '20_30': '20_30',
            '21_00': '21_00',
          },
        },
        placeholders: {
          'name': 'Agenda Reservation Availability Name',
        },
        hints: {

        },
        new: {
          title: 'Nuevo ReservationAgenda',
        },
        view: {
          title: 'Ver ReservationAgenda',
        },
        importer: {
          title: 'Importar ReservationAgenda',
          fileName: 'reservationAgenda_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    createAnAccount: '¿No tienes una cuenta? Crea uno.',
    social: {
      header: 'o inicia sesión con las redes sociales',
      signinWithGoogle: 'Inicia sesión con Google',
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
    roles: {
        aipettoAdmin: {
            label: 'AIPETTO Admin',
            description: 'Acceso a todos los recursos de la plataforma',
        },
        businessOwner: {
            label: 'Dueño del negócio',
            description: 'Dueños de negócios',
        },
        adminPetshop: {
            label: 'Admin Petshop',
            description: 'Admin para operaciones relacionadas a Petshop',
        },
        adminVeterinary: {
            label: 'Admin Veterinária',
            description: 'Admin para operaciones relacionadas a veterinárias',
        },
        employee: {
            label: 'Empleado de la veterinária o petshop',
            description: 'Empleado de la veterinária e petshop',
        },
        petOwner: {
            label: 'Dueño del pet',
            description: 'Dueño de mascotas',
        },
        veterinarian: {
            label: 'Veterinario',
            description: 'Veterinário',
        },
        transporter: {
            label: 'Transportador',
            description: 'Negocio que ofrece servicios de transporte de mascotas',
        },
    },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratuito',
      price: '£0',
    },
    premium: {
      label: 'Premium',
      price: '£50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Imagen de fondo',
    },
    colors: {
      default: 'Oscuro',
      light: 'Claro',
      cyan: 'Cian',
      'geek-blue': 'Geek Blue',
      gold: 'Oro',
      lime: 'Lima',
      magenta: 'Magenta',
      orange: 'Naranja',
      'polar-green': 'Verde polar',
      purple: 'Púrpura',
      red: 'Rojo',
      volcano: 'Volcán',
      yellow: 'Amarillo',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solamente con fines de demostración.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },

  preview: {
    error:
      'Lo sentimos, esta operación no está permitida en el modo de vista previa.',
  },

  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} es obligatorio`
          : `'El campo ${path} debe tener al menos ${min} elementos`,
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    items_per_page: '/ página',
    jump_to: 'Ir',
    jump_to_confirm: 'confirmar',
    page: '',

    prev_page: 'Pagina anterior',
    next_page: 'Siguiente página',
    prev_5: '5 páginas anteriores',
    next_5: '5 páginas siguientes',
    prev_3: '3 páginas anteriores',
    next_3: 'Siguientes 3 páginas',
  },
};

export default es;
