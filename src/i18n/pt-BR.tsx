const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },
  public: {
    homeTitle: 'Você ama os animais de estimação? Então esse é seu lugar!',
    homeSubtitle: 'Onde quer que seja, você encontrará veterinários para ajudar, melhores preços em comida e acessórios, encontrar lugares onde seu pet pode jogar e ter um corte bem legal, isso e muito mais...',
    landingTitle: 'Logo logo um lugar na internet para você e seus pets!',
    landingSubtitle: 'Por favor colabore com seus comentários abaixo, não esqueceremos de vocês.',
  },

    survey: {
        checkboxTitle: 'O que você gostaria de encontrar na nossa plataforma?',
        nameTitle: 'Seu nome',
        emailTitle: 'Seu email',
        numberOfPets: 'Quantos pets você têm?',
        checkboxChoices: {
            saveMoneyOnServices: 'Conseguir descontos especiais em serviços para pet',
            reserveServices: 'Agendar online a hora e lugar dos serviços (vacinação, exame médico, cirurgias, banho e tosa)',
            findTheClosestPlaceToGetServices: 'Ajudar a encontrar veterinárias, petshops mais próximas com disponibilidade de atendimento',
            findWhereToPlayWithMyPet: 'Encontrar lugares para brincar de maneira segura',
            knowMoreAboutPets: 'Ter mais informação sobre o meu pet e como cuidar dele melhor',
            adoptAPet: 'Ter ajuda especializada ao adotar ou doar um pet',
            getMoreMedicalInformation: 'Ter a ficha médica em um só lugar',
            beAbleToChatWithAVeterinarian: 'Poder mandar mensagens ao meu veterinário a qualquer hora sem custo adicional',
            seeWhatPetsMyFriendsHave: 'Saber quais pets têm meus amigos',
            findATrustedPersonToWalkMyPet: 'Encontrar uma pessoa confiável para passear meu pet',
        },
        extraInfo: 'O que mais você gostaria de encontrar e não incluímos na lista?',
        surveyCompleteMessage: 'Obrigado por completar nosso formulário, tenha um ótimo dia!',
        surveyCompleteButton: 'Completar'
    },

  app: {
    title: 'AIPETTO',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'Customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'Customer_exportados',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer salvo com sucesso',
        },
        update: {
          success: 'Customer salvo com sucesso',
        },
        destroy: {
          success: 'Customer deletado com sucesso',
        },
        destroyAll: {
          success: 'Customer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Customer',
        },
        fields: {
          id: 'Id',
          'businessId': 'BusinessId',
          'source': 'Source',
          'userId': 'UserId',
          'name': 'Name',
          'surname': 'Surname',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'whatsApp': 'WhatsApp',
          'phoneNumber': 'PhoneNumber',
          'address': 'Address',
          'zipCode': 'ZipCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          'billingAddressStreet': 'BillingAddressStreet',
          'billingAddressCity': 'BillingAddressCity',
          'billingAddressState': 'BillingAddressState',
          'billingAddressZipCode': 'BillingAddressZipCode',
          'billingAddressCountry': 'BillingAddressCountry',
          'shippingAddressStreet': 'ShippingAddressStreet',
          'shippingAddressCity': 'ShippingAddressCity',
          'shippingAddressState': 'ShippingAddressState',
          'shippingAddressZipCode': 'ShippingAddressZipCode',
          'shippingAddressCountry': 'ShippingAddressCountry',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'source': {
            'aipetto': 'Aipetto',
            'facebook': 'Facebook',
            'twitter': 'Twitter',
            'instagram': 'Instagram',
            'youtube': 'Youtube',
            'telegram': 'Telegram',
            'whatsapp': 'Whatsapp',
            'email': 'Email',
            'phone': 'Phone',
            'direct': 'Direct',
            'friend_recomendation': 'Friend_recomendation',
          },
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
          title: 'Novo Customer',
        },
        view: {
          title: 'Visualizar Customer',
        },
        importer: {
          title: 'Importar Customers',
          fileName: 'customer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    product: {
        name: 'Product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'Product_exportados',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product salvo com sucesso',
        },
        update: {
          success: 'Product salvo com sucesso',
        },
        destroy: {
          success: 'Product deletado com sucesso',
        },
        destroyAll: {
          success: 'Product(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Product',
        },
        view: {
          title: 'Visualizar Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    order: {
        name: 'Order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'Order_exportados',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order salvo com sucesso',
        },
        update: {
          success: 'Order salvo com sucesso',
        },
        destroy: {
          success: 'Order deletado com sucesso',
        },
        destroyAll: {
          success: 'Order(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Order',
        },
        view: {
          title: 'Visualizar Order',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'order_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    pet: {
        name: 'Pet',
        label: 'Pets',
        menu: 'Pets',
        exporterFileName: 'Pet_exportados',
        list: {
          menu: 'Pets',
          title: 'Pets',
        },
        create: {
          success: 'Pet salvo com sucesso',
        },
        update: {
          success: 'Pet salvo com sucesso',
        },
        destroy: {
          success: 'Pet deletado com sucesso',
        },
        destroyAll: {
          success: 'Pet(s) deletado com sucesso',
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
          'customerId': 'CustomerId',
          'petOwners': 'PetOwners',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Pet',
        },
        view: {
          title: 'Visualizar Pet',
        },
        importer: {
          title: 'Importar Pets',
          fileName: 'pet_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    breed: {
        name: 'Breed',
        label: 'Breeds',
        menu: 'Breeds',
        exporterFileName: 'Breed_exportados',
        list: {
          menu: 'Breeds',
          title: 'Breeds',
        },
        create: {
          success: 'Breed salvo com sucesso',
        },
        update: {
          success: 'Breed salvo com sucesso',
        },
        destroy: {
          success: 'Breed deletado com sucesso',
        },
        destroyAll: {
          success: 'Breed(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Breed',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Breed',
        },
        view: {
          title: 'Visualizar Breed',
        },
        importer: {
          title: 'Importar Breeds',
          fileName: 'breed_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    petTypes: {
        name: 'PetTypes',
        label: 'PetTypes',
        menu: 'PetTypes',
        exporterFileName: 'PetTypes_exportados',
        list: {
          menu: 'PetTypes',
          title: 'PetTypes',
        },
        create: {
          success: 'PetTypes salvo com sucesso',
        },
        update: {
          success: 'PetTypes salvo com sucesso',
        },
        destroy: {
          success: 'PetTypes deletado com sucesso',
        },
        destroyAll: {
          success: 'PetTypes(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PetTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'image': 'Image',
          'language': 'Language',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo PetTypes',
        },
        view: {
          title: 'Visualizar PetTypes',
        },
        importer: {
          title: 'Importar PetTypes',
          fileName: 'petTypes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    business: {
        name: 'Business',
        label: 'Businesses',
        menu: 'Businesses',
        exporterFileName: 'Business_exportados',
        list: {
          menu: 'Businesses',
          title: 'Businesses',
        },
        create: {
          success: 'Business salvo com sucesso',
        },
        update: {
          success: 'Business salvo com sucesso',
        },
        destroy: {
          success: 'Business deletado com sucesso',
        },
        destroyAll: {
          success: 'Business(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Business',
        },
        fields: {
          id: 'Id',
          'businessID': 'BusinessID',
          'name': 'Name',
          'services': 'Services',
          'categories': 'Categories',
          'contactName': 'ContactName',
          'contactPhone': 'ContactPhone',
          'contactWhatsApp': 'ContactWhatsApp',
          'contactEmail': 'ContactEmail',
          'addressStreet': 'AddressStreet',
          'addressStreetNumber': 'AddressStreetNumber',
          'addressPostCode': 'AddressPostCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Business',
        },
        view: {
          title: 'Visualizar Business',
        },
        importer: {
          title: 'Importar Businesses',
          fileName: 'business_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    place: {
        name: 'Place',
        label: 'Places',
        menu: 'Places',
        exporterFileName: 'Place_exportados',
        list: {
          menu: 'Places',
          title: 'Places',
        },
        create: {
          success: 'Place salvo com sucesso',
        },
        update: {
          success: 'Place salvo com sucesso',
        },
        destroy: {
          success: 'Place deletado com sucesso',
        },
        destroyAll: {
          success: 'Place(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Place',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'placeType': 'PlaceType',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Place',
        },
        view: {
          title: 'Visualizar Place',
        },
        importer: {
          title: 'Importar Places',
          fileName: 'place_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessServicesTypes: {
        name: 'BusinessServicesTypes',
        label: 'BusinessServicesTypes',
        menu: 'BusinessServicesTypes',
        exporterFileName: 'BusinessServicesTypes_exportados',
        list: {
          menu: 'BusinessServicesTypes',
          title: 'BusinessServicesTypes',
        },
        create: {
          success: 'BusinessServicesTypes salvo com sucesso',
        },
        update: {
          success: 'BusinessServicesTypes salvo com sucesso',
        },
        destroy: {
          success: 'BusinessServicesTypes deletado com sucesso',
        },
        destroyAll: {
          success: 'BusinessServicesTypes(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar BusinessServicesTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'category': 'Category',
          'language': 'Language',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo BusinessServicesTypes',
        },
        view: {
          title: 'Visualizar BusinessServicesTypes',
        },
        importer: {
          title: 'Importar BusinessServicesTypes',
          fileName: 'businessServicesTypes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    serviceReservation: {
        name: 'ServiceReservation',
        label: 'ServiceReservations',
        menu: 'ServiceReservations',
        exporterFileName: 'ServiceReservation_exportados',
        list: {
          menu: 'ServiceReservations',
          title: 'ServiceReservations',
        },
        create: {
          success: 'ServiceReservation salvo com sucesso',
        },
        update: {
          success: 'ServiceReservation salvo com sucesso',
        },
        destroy: {
          success: 'ServiceReservation deletado com sucesso',
        },
        destroyAll: {
          success: 'ServiceReservation(s) deletado com sucesso',
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
          'serviceProviderIDs': 'ServiceProviderIDs',
          'time': 'Time',
          'needTransportation': 'NeedTransportation',
          'place': 'Place',
          'status': 'Status',
          'totalPriceRange': 'TotalPrice',
          'totalPrice': 'TotalPrice',
          'totalPriceWithDiscountRange': 'TotalPriceWithDiscount',
          'totalPriceWithDiscount': 'TotalPriceWithDiscount',
          'discountCode': 'DiscountCode',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'time': {
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
          title: 'Novo ServiceReservation',
        },
        view: {
          title: 'Visualizar ServiceReservation',
        },
        importer: {
          title: 'Importar ServiceReservations',
          fileName: 'serviceReservation_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessPlaceServiceAvailability: {
        name: 'BusinessPlaceServiceAvailability',
        label: 'BusinessPlaceServiceAvailabilities',
        menu: 'BusinessPlaceServiceAvailabilities',
        exporterFileName: 'BusinessPlaceServiceAvailability_exportados',
        list: {
          menu: 'BusinessPlaceServiceAvailabilities',
          title: 'BusinessPlaceServiceAvailabilities',
        },
        create: {
          success: 'BusinessPlaceServiceAvailability salvo com sucesso',
        },
        update: {
          success: 'BusinessPlaceServiceAvailability salvo com sucesso',
        },
        destroy: {
          success: 'BusinessPlaceServiceAvailability deletado com sucesso',
        },
        destroyAll: {
          success: 'BusinessPlaceServiceAvailability(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar BusinessPlaceServiceAvailability',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'businessId': 'BusinessId',
          'timeSlot': 'TimeSlot',
          'days': 'Days',
          'workOnHolidays': 'WorkOnHolidays',
          'serviceType': 'ServiceType',
          'places': 'Places',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo BusinessPlaceServiceAvailability',
        },
        view: {
          title: 'Visualizar BusinessPlaceServiceAvailability',
        },
        importer: {
          title: 'Importar BusinessPlaceServiceAvailabilities',
          fileName: 'businessPlaceServiceAvailability_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    country: {
        name: 'Country',
        label: 'Countries',
        menu: 'Countries',
        exporterFileName: 'Country_exportados',
        list: {
          menu: 'Countries',
          title: 'Countries',
        },
        create: {
          success: 'Country salvo com sucesso',
        },
        update: {
          success: 'Country salvo com sucesso',
        },
        destroy: {
          success: 'Country deletado com sucesso',
        },
        destroyAll: {
          success: 'Country(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Country',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'initials': 'Initials',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Country',
        },
        view: {
          title: 'Visualizar Country',
        },
        importer: {
          title: 'Importar Countries',
          fileName: 'country_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    city: {
        name: 'City',
        label: 'Cities',
        menu: 'Cities',
        exporterFileName: 'City_exportados',
        list: {
          menu: 'Cities',
          title: 'Cities',
        },
        create: {
          success: 'City salvo com sucesso',
        },
        update: {
          success: 'City salvo com sucesso',
        },
        destroy: {
          success: 'City deletado com sucesso',
        },
        destroyAll: {
          success: 'City(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar City',
        },
        fields: {
          id: 'Id',
          'country': 'Country',
          'name': 'Name',
          'latitudeRange': 'Latitude',
          'latitude': 'Latitude',
          'longitudeRange': 'Longitude',
          'longitude': 'Longitude',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo City',
        },
        view: {
          title: 'Visualizar City',
        },
        importer: {
          title: 'Importar Cities',
          fileName: 'city_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    state: {
        name: 'State',
        label: 'States',
        menu: 'States',
        exporterFileName: 'State_exportados',
        list: {
          menu: 'States',
          title: 'States',
        },
        create: {
          success: 'State salvo com sucesso',
        },
        update: {
          success: 'State salvo com sucesso',
        },
        destroy: {
          success: 'State deletado com sucesso',
        },
        destroyAll: {
          success: 'State(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar State',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          'initials': 'Initials',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo State',
        },
        view: {
          title: 'Visualizar State',
        },
        importer: {
          title: 'Importar States',
          fileName: 'state_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    messages: {
        name: 'Messages',
        label: 'Messages',
        menu: 'Messages',
        exporterFileName: 'Messages_exportados',
        list: {
          menu: 'Messages',
          title: 'Messages',
        },
        create: {
          success: 'Messages salvo com sucesso',
        },
        update: {
          success: 'Messages salvo com sucesso',
        },
        destroy: {
          success: 'Messages deletado com sucesso',
        },
        destroyAll: {
          success: 'Messages(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Messages',
        },
        fields: {
          id: 'Id',
          'from': 'From',
          'to': 'To',
          'message': 'Message',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Messages',
        },
        view: {
          title: 'Visualizar Messages',
        },
        importer: {
          title: 'Importar Messages',
          fileName: 'messages_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    professionalsServiceAvailability: {
        name: 'ProfessionalsServiceAvailability',
        label: 'ProfessionalsServiceAvailabilities',
        menu: 'ProfessionalsServiceAvailabilities',
        exporterFileName: 'ProfessionalsServiceAvailability_exportados',
        list: {
          menu: 'ProfessionalsServiceAvailabilities',
          title: 'ProfessionalsServiceAvailabilities',
        },
        create: {
          success: 'ProfessionalsServiceAvailability salvo com sucesso',
        },
        update: {
          success: 'ProfessionalsServiceAvailability salvo com sucesso',
        },
        destroy: {
          success: 'ProfessionalsServiceAvailability deletado com sucesso',
        },
        destroyAll: {
          success: 'ProfessionalsServiceAvailability(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ProfessionalsServiceAvailability',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo ProfessionalsServiceAvailability',
        },
        view: {
          title: 'Visualizar ProfessionalsServiceAvailability',
        },
        importer: {
          title: 'Importar ProfessionalsServiceAvailabilities',
          fileName: 'professionalsServiceAvailability_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    languages: {
        name: 'Languages',
        label: 'Languages',
        menu: 'Languages',
        exporterFileName: 'Languages_exportados',
        list: {
          menu: 'Languages',
          title: 'Languages',
        },
        create: {
          success: 'Languages salvo com sucesso',
        },
        update: {
          success: 'Languages salvo com sucesso',
        },
        destroy: {
          success: 'Languages deletado com sucesso',
        },
        destroyAll: {
          success: 'Languages(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Languages',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'active': 'Active',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Languages',
        },
        view: {
          title: 'Visualizar Languages',
        },
        importer: {
          title: 'Importar Languages',
          fileName: 'languages_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    currency: {
        name: 'Currency',
        label: 'Currencies',
        menu: 'Currencies',
        exporterFileName: 'Currency_exportados',
        list: {
          menu: 'Currencies',
          title: 'Currencies',
        },
        create: {
          success: 'Currency salvo com sucesso',
        },
        update: {
          success: 'Currency salvo com sucesso',
        },
        destroy: {
          success: 'Currency deletado com sucesso',
        },
        destroyAll: {
          success: 'Currency(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Currency',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'symbol': 'Symbol',
          'active': 'Active',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Currency',
        },
        view: {
          title: 'Visualizar Currency',
        },
        importer: {
          title: 'Importar Currencies',
          fileName: 'currency_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    discounts: {
        name: 'Discounts',
        label: 'Discounts',
        menu: 'Discounts',
        exporterFileName: 'Discounts_exportados',
        list: {
          menu: 'Discounts',
          title: 'Discounts',
        },
        create: {
          success: 'Discounts salvo com sucesso',
        },
        update: {
          success: 'Discounts salvo com sucesso',
        },
        destroy: {
          success: 'Discounts deletado com sucesso',
        },
        destroyAll: {
          success: 'Discounts(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Discounts',
        },
        fields: {
          id: 'Id',
          'codeName': 'CodeName',
          'discountPercentageRange': 'DiscountPercentage',
          'discountPercentage': 'DiscountPercentage',
          'expirationDateRange': 'ExpirationDate',
          'expirationDate': 'ExpirationDate',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Discounts',
        },
        view: {
          title: 'Visualizar Discounts',
        },
        importer: {
          title: 'Importar Discounts',
          fileName: 'discounts_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    wallet: {
        name: 'Wallet',
        label: 'Wallets',
        menu: 'Wallets',
        exporterFileName: 'Wallet_exportados',
        list: {
          menu: 'Wallets',
          title: 'Wallets',
        },
        create: {
          success: 'Wallet salvo com sucesso',
        },
        update: {
          success: 'Wallet salvo com sucesso',
        },
        destroy: {
          success: 'Wallet deletado com sucesso',
        },
        destroyAll: {
          success: 'Wallet(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Wallet',
        },
        fields: {
          id: 'Id',
          'totalCreditsRange': 'TotalCredits',
          'totalCredits': 'TotalCredits',
          'aipettoPointsRange': 'AipettoPoints',
          'aipettoPoints': 'AipettoPoints',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Wallet',
        },
        view: {
          title: 'Visualizar Wallet',
        },
        importer: {
          title: 'Importar Wallets',
          fileName: 'wallet_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    businessCategory: {
        name: 'BusinessCategory',
        label: 'BusinessCategories',
        menu: 'BusinessCategories',
        exporterFileName: 'BusinessCategory_exportados',
        list: {
          menu: 'BusinessCategories',
          title: 'BusinessCategories',
        },
        create: {
          success: 'BusinessCategory salvo com sucesso',
        },
        update: {
          success: 'BusinessCategory salvo com sucesso',
        },
        destroy: {
          success: 'BusinessCategory deletado com sucesso',
        },
        destroyAll: {
          success: 'BusinessCategory(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar BusinessCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo BusinessCategory',
        },
        view: {
          title: 'Visualizar BusinessCategory',
        },
        importer: {
          title: 'Importar BusinessCategories',
          fileName: 'businessCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    providers: {
        name: 'Providers',
        label: 'Providers',
        menu: 'Providers',
        exporterFileName: 'Providers_exportados',
        list: {
          menu: 'Providers',
          title: 'Providers',
        },
        create: {
          success: 'Providers salvo com sucesso',
        },
        update: {
          success: 'Providers salvo com sucesso',
        },
        destroy: {
          success: 'Providers deletado com sucesso',
        },
        destroyAll: {
          success: 'Providers(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Providers',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'businessID': 'BusinessID',
          'providerID': 'ProviderID',
          'category': 'Category',
          'serviceTypes': 'ServiceTypes',
          'contactName': 'ContactName',
          'contactPhone': 'ContactPhone',
          'contactWhatsApp': 'ContactWhatsApp',
          'addressStreet': 'AddressStreet',
          'addressStreetNumber': 'AddressStreetNumber',
          'addressPostCode': 'AddressPostCode',
          'city': 'City',
          'state': 'State',
          'country': 'Country',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Providers',
        },
        view: {
          title: 'Visualizar Providers',
        },
        importer: {
          title: 'Importar Providers',
          fileName: 'providers_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    vaccineTypes: {
        name: 'VaccineTypes',
        label: 'VaccineTypes',
        menu: 'VaccineTypes',
        exporterFileName: 'VaccineTypes_exportados',
        list: {
          menu: 'VaccineTypes',
          title: 'VaccineTypes',
        },
        create: {
          success: 'VaccineTypes salvo com sucesso',
        },
        update: {
          success: 'VaccineTypes salvo com sucesso',
        },
        destroy: {
          success: 'VaccineTypes deletado com sucesso',
        },
        destroyAll: {
          success: 'VaccineTypes(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar VaccineTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'country': 'Country',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo VaccineTypes',
        },
        view: {
          title: 'Visualizar VaccineTypes',
        },
        importer: {
          title: 'Importar VaccineTypes',
          fileName: 'vaccineTypes_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    petVaccines: {
        name: 'PetVaccines',
        label: 'PetVaccines',
        menu: 'PetVaccines',
        exporterFileName: 'PetVaccines_exportados',
        list: {
          menu: 'PetVaccines',
          title: 'PetVaccines',
        },
        create: {
          success: 'PetVaccines salvo com sucesso',
        },
        update: {
          success: 'PetVaccines salvo com sucesso',
        },
        destroy: {
          success: 'PetVaccines deletado com sucesso',
        },
        destroyAll: {
          success: 'PetVaccines(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PetVaccines',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'uniqueVetVaccineCode': 'UniqueVetVaccineCode',
          'datetimeTakenRange': 'DatetimeTaken',
          'datetimeTaken': 'DatetimeTaken',
          'veterinarianID': 'VeterinarianID',
          'placeTaken': 'PlaceTaken',
          'businessID': 'BusinessID',
          'country': 'Country',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo PetVaccines',
        },
        view: {
          title: 'Visualizar PetVaccines',
        },
        importer: {
          title: 'Importar PetVaccines',
          fileName: 'petVaccines_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    placeType: {
        name: 'PlaceType',
        label: 'PlaceTypes',
        menu: 'PlaceTypes',
        exporterFileName: 'PlaceType_exportados',
        list: {
          menu: 'PlaceTypes',
          title: 'PlaceTypes',
        },
        create: {
          success: 'PlaceType salvo com sucesso',
        },
        update: {
          success: 'PlaceType salvo com sucesso',
        },
        destroy: {
          success: 'PlaceType deletado com sucesso',
        },
        destroyAll: {
          success: 'PlaceType(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar PlaceType',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'language': 'Language',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo PlaceType',
        },
        view: {
          title: 'Visualizar PlaceType',
        },
        importer: {
          title: 'Importar PlaceTypes',
          fileName: 'placeType_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },

  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    createAnAccount: 'Não possui conta? Criar uma.',
    social: {
      header: 'ou entrar com uma rede social',
      signinWithGoogle: 'Entrar com Google',
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },
    roles: {
        aipettoAdmin: {
            label: 'AIPETTO Admin',
            description: 'Acesso a todos os recursos da plataforma',
        },
        businessOwner: {
            label: 'Dono dos negócios',
            description: 'Donos de negócios',
        },
        adminPetshop: {
            label: 'Admin Petshop',
            description: 'Admin para operações com petshop',
        },
        adminVeterinary: {
            label: 'Admin Veterinária',
            description: 'Admin para operações com veterinária',
        },
        employee: {
            label: 'Funcionário da Veterinária e Petshop',
            description: 'Funcionário do veterinário e petshop',
        },
        petOwner: {
            label: 'Dono do pet',
            description: 'Dono de animais de estimação',
        },
        veterinarian: {
            label: 'Veterinário',
            description: 'Veterinário',
        },
        transporter: {
            label: 'Transportador',
            description: 'Negócio que trabalha transportando animais de estimação',
        },
    },
  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists:
        'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '£',
    },
    premium: {
      label: 'Premium',
      price: '£50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      theme: 'Tema',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },

  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
