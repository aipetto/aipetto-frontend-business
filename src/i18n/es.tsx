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
        mustSelectARow: 'Élegír una opción',
        start: 'Comienzo',
        end: 'Final',
        select: 'Seleccioná',
        continue: 'Continuá',
        filters: 'Filtros',
    },
    app: {
        title: 'aipetto',
        slogan: 'información y servicios para tu mascota donde quiera que vayas y a cualquier hora'
    },
    public: {
        homeTitle: '¿Amás a las mascotas?¡Entonces este es tu lugar!',
        homeSubtitle: 'Donde quiera que estes, encontrá veterinários para ayudarte, obtené descuentos especiales en comida y accesorios, encontrá lugares donde tu mascota pueda jugar y tener un lindo peinado, eso y mucho más...',
        landingTitle: '¡Un lugar en la web para vos y tus mascotas!',
        landingSubtitle: 'Haz parte de este proyecto con tus sugerencias',
        landingBusinessTitle: 'Nuestra misión es disponibilizar informaciones y servicios de forma simples y directa para quien ama a las mascotas',
        landingBusinessSubtitle: 'Haz parte de este proyecto y vende tus productos y servicios',
        menu: {
            business: 'Empresas',
            petsSurvey: 'Inicio',
        }
    },

    survey: {
        checkboxTitle: '¿Qué te gustaría que nuestra plataforma hiciera por vos y tus mascotas?',
        nameTitle: 'Tu nombre',
        emailTitle: 'Tu correo',
        numberOfPets: '¿Cuántas mascotas tenés?',
        checkboxChoices: {
            saveMoneyOnServices: 'Obtener descuentos en servicios',
            reserveServices: 'Reservar en línea turnos para vacunación, exámen médico, cirugías, cuidados estéticos, tratamientos...)',
            findTheClosestPlaceToGetServices: 'Encontrar veterinarias, petshops y hospitales más cercanos con disponibilidad de reserva',
            findWhereToPlayWithMyPet: 'Encontrar lugares para jugar con mi mascota de manera segura',
            knowMoreAboutPets: 'Obtener más información sobre mascotas',
            adoptAPet: 'Obtener ayuda especializada al donar o adoptar una mascota',
            getMoreMedicalInformation: 'Tener el historial médico siempre y en uno sólo lugar válido en diferentes países',
            beAbleToChatWithAVeterinarian: 'Poder chatear a tu veterinario en una emergencia sin costo extra',
            seeWhatPetsMyFriendsHave: 'Conocer acerca de las mascotas de mis amigos',
            findATrustedPersonToWalkMyPet: 'Encontrar una persona confiable para pasear mi mascota',
        },
        checkboxPetProfessionTitle: '¿Ejercés alguna profesión para pets?',
        checkboxPetProfessionChoices: {
            petTaxi: 'Pet Taxi',
            petSitter: 'Pet Sitter',
            dogWalker: 'Paseador',
            veterinarian: 'Veterinario',
            surgeon: 'Cirujano',
            groomer: 'Groomer / Peluquero / Bañador',
            animalBlogger: 'Blogger de mascotas',
            photographer: 'Fotógrafo de mascotas',
            petManicures: 'Manicura',
            therapeuticMassagist: 'Terapeuta y Masagista'
        },
        whereAreYouLocated: '¿Cuál es tu dirección? Nosotros ofreceremos los mejores servicios más cercanos a vos y tu mascota.',
        allowNotificationTitle: '¿Aceptás que te enviemos correos con precios promocionales e información para el mejor cuidado de tu pet?',
        extraInfo: '¿Algo que te gustaría encontrar en una plataforma de mascotas y no hemos incluido?',
        surveyCompleteMessage: '¡Muchas gracias por completar nuestro formulario, que tengas un excelente día!',
        surveyCompleteButton: 'Completar'
    },

    api: {
        menu: 'API',
    },

    reservationSteps:{
        stepAddressToSearch: 'Direción',
        pickCategory: '¿Qué servicio necesita tu mascota?',
        nextButton: 'Próximo',
    },
    businessSurvey: {
        checkboxTitle: 'Qué servicios ofrece tu negocio?',
        nameTitle: 'Tu nombre',
        emailTitle: 'Tu correo',
        contactPhone: 'Teléfono',
        businessNameTitle: 'Nombre de tu negocio',
        numberPlaces: '¿Cuántas sucursales tienes?',
        websiteSocialNetwork: 'Sitio web / Red social',
        checkboxChoices: {
            acupuntura: 'Acupuntura',
            analgesiaTratamentoDolor: 'Tratamientos para los dolores',
            analisisDeHeces: 'Análisis de heces',
            analisisDeOrina: 'Análisis de orina',
            analisisDeSangre: 'Análisis de sangre',
            analisisHormonales: 'Análisis hormonales',
            anestesia: 'Anestesia',
            artroscopia: 'Artroscopia',
            castracionDeGatos: 'Castración de gatos',
            castracionDePerros: 'Castración de perros',
            castracionQuimicaDelPerro: 'Castración química del perro',
            certificadosVeterinarios: 'Certificados veterinarios',
            chequeoMedicoVeterinario: 'Chequeo médico veterinario',
            cirurgiaAbdominal: 'Cirugía abdominal',
            cirurgiaArticular: 'Cirugía articular',
            cirurgiaCardiaca: 'Cirugía cardíaca',
            cirurgiaCutaneaYMamaria: 'Cirugía cutánea y mamaria',
            cirurgiaDeFracturasOseas: 'Cirugía de fracturas óseas',
            cirurgiaDeHernias: 'Cirugía de hernias',
            cirurgiaDeUrgencia: 'Cirugía de urgencia',
            cirurgiaOtorrinolaringologica: 'Cirurgia otorrinolaringológica',
            colonoscopia: 'Colonoscopia',
            corteDeUnas: 'Corte de uñas',
            cuidadosIntesivos: 'Cuidados intensivos',
            cultivoBacteriano: 'Cultivo bacteriano',
            dermatologia: 'Dermatología',
            desparasitacionDeGatos: 'Desparasitación de gatos',
            desparasitacionDePerros: 'Desparasitación de perros',
            diagnosticoDeGestacion: 'Diagnóstico de gestación',
            ecocardiogramaYElectrocardiograma: 'Ecocardiograma y electrocardiograma',
            ecografia: 'Ecografía',
            electroterapia: 'Electroterapia',
            endodoncia: 'Endodoncia',
            endoscoíia: 'Endoscopía',
            entrenamientoDeEstabilidad: 'Entrenamiento de estabilidad',
            estiramientos: 'Estiramientos',
            eutanasiaYcremación: 'Eutanasia y cremación',
            examenMedico: 'Examen médico',
            examenNeurologico: 'Examen neurológico',
            examenOftalmologico: 'Examen oftalmológico',
            examenReproductivo: 'Examen reproductivo',
            extraccionDental: 'Extracción dental',
            gastroscopia: 'Gastroscopia',
            hospitalizacion: 'Hospitalización',
            identificacionAnimal: 'Identificación animal',
            masaje: 'Masaje',
            movilizacionDeLasArticulaciones: 'Movilización de las articulaciones',
            muestrasDeTejidoYMuestrasCelulares: 'Muestras de tejido y muestras celulares',
            odontologia: 'Odontología',
            oncologia: 'Oncología',
            pasaporteComunitarioParaAnimalesDeCompania: 'Pasaporte comunitario para animales de compañía',
            pastillasAnticonceptivasParaGatas: 'Pastillas anticonceptivas para gatas',
            peluqueria: 'Peluquería',
            programaDeReduccionDePeso: 'Programa de reducción de peso',
            pruebaDeAlergia: 'Prueba de alergia',
            quimioterapia: 'Quimioterapia',
            radiografia: 'Radiografía',
            radiografiaDeContraste: 'Radiografía de contraste',
            reconocimientoClinico: 'Reconocimiento clínico',
            rehabilitacion: 'Rehabilitación',
            tienda: 'Tienda',
            tranquilizantes: 'Tranquilizantes',
            traumatologia: 'Traumatología',
            urgencias: 'Urgencias',
            vacunacionDeGato: 'Vacunación de gato',
            vacunacionDePerro: 'Vacunación de perro',
        },
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
                success: 'Cliente guardado con éxito',
            },
            update: {
                success: 'Cliente guardado con éxito',
            },
            destroy: {
                success: 'Cliente eliminado con éxito',
            },
            destroyAll: {
                success: 'Cliente(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar Cliente',
            },
            fields: {
                id: 'Id',
                'businessId': 'Identificador del negocio',
                'source': 'fuente',
                'userId': 'Usuario',
                'name': 'Nombre',
                'surname': 'Apellido',
                'birthdateRange': 'Fecha de nacimiento',
                'birthdate': 'Cumpleaños',
                'gender': 'Género',
                'whatsApp': 'WhatsApp',
                'phoneNumber': 'Número telefónico',
                'address': 'Dirección',
                'zipCode': 'Código postal',
                'city': 'Ciudad',
                'state': 'Provincia',
                'country': 'País',
                'billingAddressStreet': 'Dirección de facturación',
                'billingAddressCity': 'Ciudad',
                'billingAddressState': 'Privincia',
                'billingAddressZipCode': 'Código postal',
                'billingAddressCountry': 'País',
                'shippingAddressStreet': 'Dirección de envío',
                'shippingAddressCity': 'Ciudad',
                'shippingAddressState': 'Provincia',
                'shippingAddressZipCode': 'Código postal',
                'shippingAddressCountry': 'País',
                createdAt: 'Creado el',
                updatedAt: 'Actualizado el',
                createdAtRange: 'Creado el',
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
                    'email': 'Correo electrónico',
                    'phone': 'Teléfono',
    'direct': 'direct',
        'friend_recomendation': 'Recommendation personal',
    },
    'gender': {
        'male': 'Másculino',
            'female': 'Femenino',
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
        name: 'Nombre',
            label: 'Tipo',
            menu: 'Menú',
            exporterFileName: 'exportacion_product',
            list: {
            menu: 'Products',
                title: 'Products',
        },
        create: {
            success: 'Producto guardado con éxito',
        },
        update: {
            success: 'Producto guardado con éxito',
        },
        destroy: {
            success: 'Producto eliminado con éxito',
        },
        destroyAll: {
            success: 'Producto(s) eliminado con éxito',
        },
        edit: {
            title: 'Editar Producto',
        },
        fields: {
            id: 'Id',
                'name': 'Nombre',
                'description': 'Descripción',
                'unitPriceRange': 'Precio unitario',
                'unitPrice': 'Precio unitario',
                'photos': 'Fotos',
                'businessId': '',
                'acceptPointsToShop': 'Aceptar puntos para comprar',
                'pointsPriceRange': 'Precio con puntos',
                'pointsPrice': 'Precio de los puntos',
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
        name: 'Orden',
            label: 'Tipo',
            menu: 'Menú',
            exporterFileName: 'Exportar order',
            list: {
            menu: 'Orders',
                title: 'Orders',
        },
        create: {
            success: 'Orden guardada con éxito',
        },
        update: {
            success: 'Orden guardada con éxito',
        },
        destroy: {
            success: 'Orden eliminada con éxito',
        },
        destroyAll: {
            success: 'Order(s) Eliminado con éxito',
        },
        edit: {
            title: 'Editar Orden',
        },
        fields: {
            id: 'Id',
                'customer': 'Usuario',
                'products': 'Productos',
                'employee': 'Empleo',
                'delivered': 'Entregado',
                'attachments': 'Adjunto',
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
            title: 'Nueva Orden',
        },
        view: {
            title: 'Ver Orden',
        },
        importer: {
            title: 'Importar Ordenes',
                fileName: 'Importar planilla de órdenes',
                hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
    },

    pet: {
        name: 'Mascota',
            label: 'Mascota',
            menu: 'Mascota',
            exporterFileName: 'Exportar nombre',
            list: {
            menu: 'Mascotas',
                title: 'Mascotas',
        },
        create: {
            success: 'Mascota guardada con éxito',
        },
        update: {
            success: 'Mascota guardada con éxito',
        },
        destroy: {
            success: 'Eliminada con éxito',
        },
        destroyAll: {
            success: 'Mascotas eliminadas con éxito',
        },
        edit: {
            title: 'Editar mascota',
        },
        fields: {
            id: 'Id',
                'name': 'Nombre',
                'nickname': 'Apodo',
            'profileImage': 'Imagen de perfil',
                'birthdateRange': 'Fecha de nacimiento',
                'birthdate': 'Cumpleaños',
                'ageRange': 'Edad',
                'age': 'Edad',
                'color': 'Color',
                'secondColor': 'Segundo color',
                'thirdColor': 'Tercer color',
                'sex': 'Sexo',
                'breed': 'Raza',
                'secondBreedMixed': 'Mestizo',
                'type': 'Tipo',
                'customerId': 'Número de cliente',
                'petOwners': 'Amo de mascota',
                'photos': 'Fotos',
                'vaccines': 'Vacunas',
                'maturitySize': 'MaturitySize',
                'furLength': 'FurLength',
                'hasBeenVaccinated': '¿Está vacunada/o',
                'hasBeenDewormed': '¿Fue desparasitada/do?',
                'hasBeenSterilizedSpayed': 'Está castrada/do',
                'health': 'Salud',
                'isLost': 'Está desaparecido',
                'biography': 'Biografía',
                'usersAuthorized': 'Usuarios autorizados',
                'businessAuthorized': 'Negocio autorizado',
                'isLookingForMatch': 'Buscando pareja',
                'diseases': 'Enfermedades ',
                'isGuideDog': 'Es perro guía',
                'numberOfLikesRange': 'Me Gusta',
                'numberOfLikes': 'Me gusta',
                'matches': 'Coincidencias',
                'petFriends': 'Pet Friends',
                createdAt: 'Creado el',
                updatedAt: 'Actualizado el',
                createdAtRange: 'Creado el',
        },
        enumerators: {
            'color': {
                'black': 'Negro',
                    'white': 'Blanco',
                    'brown': 'Marrón',
                    'gray': 'Gris',
                    'chocolate': 'Chocolate',
                    'gold': 'Dorado',
                    'blue': 'Azúl',
                    'cream': 'Crema',
                    'yellow': 'amarillo',
            },
            'secondColor': {
                'black': 'Negro',
                    'white': 'Blanco',
                    'brown': 'Marrón',
                    'gray': 'Gris',
                    'chocolate': 'Chocolate',
                    'gold': 'Dorado',
                    'blue': 'Azúl',
                    'cream': 'Cremam',
                    'yellow': 'Amarillo',
            },
            'thirdColor': {
                'black': 'Negro',
                    'white': 'Blanco',
                    'brown': 'Marrón',
                    'gray': 'Gris',
                    'chocolate': 'Chocolate',
                    'gold': 'Dorado',
                    'blue': 'Azul',
                    'cream': 'Crema',
                    'yellow': 'Amarillo',
            },
            'sex': {
                'male': 'Masculino',
                    'female': 'Femenino',
            },
            'maturitySize': {
                'small': 'Pequeño',
                    'medium': 'Mediano',
                    'large': 'Alto',
                    'extra_large': 'Extra grande',
                    'not_specified': 'No especificado',
            },
            'furLength': {
                'short': 'Pequeño',
                    'medium': 'Mediano',
                    'long': 'Grance',
                    'not_specified': 'Noespecificado',
            },
            'health': {
                'healthy': 'Saludable',
                    'minor_injury': 'Herida menor',
                    'serious_injury': 'Herida seria',
                    'not_specified': 'No especificado',
            },
        },
        placeholders: {
            'age': 'Edad',
        },
        hints: {
            'age': 'Edad',
                'usersAuthorized': 'User con acceso al perfil de la mascota',
                'businessAuthorized': 'Negocio con acceso al perfil de la mascota',
                'isLookingForMatch': '¿Está buscando pareja tu mascota?',
        },
        new: {
            title: 'Nueva Mascota',
        },
        view: {
            title: 'Ver Mascota',
        },
        importer: {
            title: 'Importar mascotas',
                fileName: 'Importar plantilla de mascota',
                hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
    },

    breed: {
        name: 'Raza',
            label: 'Razas',
            menu: 'Razas',
            exporterFileName: 'Exportar Razas',
            list: {
            menu: 'Razas',
                title: 'Razas',
        },
        create: {
            success: 'Raza guardada con éxito',
        },
        update: {
            success: 'Raza guardada con éxito',
        },
        destroy: {
            success: 'Raza eliminada con éxito',
        },
        destroyAll: {
            success: 'Razas borradas con éxito',
        },
        edit: {
            title: 'Editar Raza',
        },
        fields: {
            id: 'Id',
                'name': 'Nombre',
                'language': 'Idioma',
                'type': 'Tipo',
                'size': 'Talla',
                'exercise': 'Ejercicio',
                'sizeOfHome': 'Tamaño de la casa',
                'grooming': 'Aseo',
                'coatLength': 'Longitud de la carpa',
                'sheds': 'Cobertizos',
                'lifespan': 'Esperanza de vida',
                'vulnerableNativeBreed': 'Raza nativa bulnerable',
                'townOrCountry': 'Ciudad o País',
                'sizeOfGarden': 'Tamaño del jardín',
                'image': 'Imagen',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {
                'size': {
                    'Small': 'Pequeño',
                        'Medium': 'Mediana',
                        'Large': 'Grande',
                },
                'exercise': {
                    'up_to_30_minutes_per_day': 'Treinta o más minutos por día',
                        'up_to_1_hour_per_day': 'Más de una hora por día',
                        'more_than_2_hours_per_day': 'Más de dos horas por día',
                },
                'sizeOfHome': {
                    'flat_apartment': 'Departamento',
                        'small_house': 'Pequeño',
                        'large_house': 'Mediano',
                },
                'grooming': {
                    'more_than_once_a_week': 'Más de una vez por semana',
                        'every_day': 'Todos los días',
                        'once_a_week': 'Una vez por semana',
                },
                'coatLength': {
                    'short': 'Pequeño',
                        'medium': 'Mediano',
                        'long': 'Grande',
                },
                'sheds': {
                    'yes': 'Si',
                        'no': 'No',
                },
                'lifespan': {
                    'under_10_years': 'Menos de 10 años',
                        'over_10_years': ';Más de 10 años',
                        'over_12_years': 'Más de 12 años',
                },
                'vulnerableNativeBreed': {
                    'yes': 'Si',
                        'no': 'No',
                },
                'townOrCountry': {
                    'country': 'País',
                        'town': 'Ciudad',
                        'either': 'Cualquiera' ,
                },
                'sizeOfGarden': {
                    'small': 'Pequeño',
                        'medium': 'Mediano',
                        'small_medium': 'Small_medium',
                        'large': 'Grande',
                },
            },
            placeholders: {

            },
            hints: {
                'grooming': '¿Cuántas veces limpias y peinas el pelaje de tu mascota?',
            },
            new: {
                title: 'Nueva Raza',
            },
            view: {
                title: 'Ver Raza',
            },
            importer: {
                title: 'Importar Razas',
                fileName: 'importar informe de mascota',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        petTypes: {
            name: 'Tipos de mascotas',
                label: 'Tipos de mascotas',
                menu: 'Tipos de mascotas',
                exporterFileName: 'Exportar tipos de mascotas',
                list: {
                menu: 'Tipos de mascotas',
                    title: 'Tipos de mascotas',
            },
            create: {
                success: 'Tipos de mascotas guardado con éxito',
            },
            update: {
                success: 'Tipos de mascotas guardado con éxito',
            },
            destroy: {
                success: 'Tipos de mascotas eliminado con éxito',
            },
            destroyAll: {
                success: 'Tipos de mascotas eliminado con éxito',
            },
            edit: {
                title: 'Editar tipos de mascotas',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'image': 'Foto',
                    'language': 'Idioma',
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
                title: 'Nuevo tipo de mascota',
            },
            view: {
                title: 'Ver tipos de mascotas',
            },
            importer: {
                title: 'Importar tipos de mascotas',
                    fileName: 'Importar plantilla de tipo de mascota',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        business: {
            name: 'Negocios',
                label: 'Negocios',
                menu: 'Negocios',
                exporterFileName: 'Exportar lista de negocios',
                list: {
                menu: 'Negocios',
                    title: 'Negocios',
            },
            create: {
                success: 'Negocio guardado con éxito',
            },
            update: {
                success: 'Negocio guardado con éxito',
            },
            destroy: {
                success: 'Negocio eliminado con éxito',
            },
            destroyAll: {
                success: 'Negocios eliminado con éxito',
            },
            edit: {
                title: 'Editar Negocio',
            },
            fields: {
                id: 'Id',
                    'businessID': 'ID de Negocio',
                    'name': 'Nombre',
                    'services': 'Servicios',
                    'categories': 'Categorias',
                    'contactName': 'Nombre de contacto',
                    'contactPhone': 'Teléfono de contacto',
                    'contactWhatsApp': 'Contacto WhatsApp',
                    'contactEmail': 'Correo de contacto',
                    'addressStreet': 'Calle',
                    'addressStreetNumber': 'Número',
                    'addressPostCode': 'Código postal',
                    'city': 'Ciudad',
                    'state': 'Provincia',
                    'country': 'País',
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
                title: 'Nuevo Negocio',
            },
            view: {
                title: 'Ver Negocio',
            },
            importer: {
                title: 'Importar Negocio',
                    fileName: 'Importar plantilla de negocio',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        place: {
            name: 'Lugar',
                label: 'Lugares',
                menu: 'Places',
                exporterFileName: 'Exportar lugares',
                list: {
                menu: 'Lugares',
                    title: 'Lugares',
            },
            create: {
                success: 'Lugar guardado con éxito',
            },
            update: {
                success: 'Lugar guardado con éxito',
            },
            destroy: {
                success: 'Lugar eliminado con éxito',
            },
            destroyAll: {
                success: 'Lugares eliminado con éxito',
            },
            edit: {
                title: 'Editar Lugar',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'placeType': 'Tipo de lugar',
                    'businessId': 'ID de Negocio',
                    'services': 'Servicios',
                    'categories': 'Categorias',
                    'latitudeRange': ' 	',
                    'latitude': 'Latitud',
                    'longitudeRange': 'Longitud',
                    'longitude': 'Longitud',
                    'address': 'Calle',
                'addressNumber': 'Número',
                    'addressZipCode': 'Código postal',
                    'addressCity': 'Ciudad',
                    'addressState': 'Provincia',
                    'addressCountry': 'País',
                    'openTime': 'Horario de apertura',
                    'closeTime': 'Horario de cierre',
                    'is24hours': '24 horas',
                    'starsRange': 'Inicio',
                'stars': 'Inicio',
                    'isOpen': 'Abierto',
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
                title: 'Nuevo lugar',
            },
            view: {
                title: 'Ver lugar',
            },
            importer: {
                title: 'Importar Lugares',
                    fileName: 'Importar plantilla de lugares',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        businessServicesTypes: {
            name: 'Tipos de Servicios Empresariales',
                label: 'Tipos de Servicios Empresariales',
                menu: 'Tipos de Servicios Empresariales',
                exporterFileName: 'Exportar plantilla de Servicios Empresariales',
                list: {
                menu: 'Tipos de Servicios empresariales',
                title: 'Tipos de Servicios Empresariales ',
            },
            create: {
                success: 'Tipos de servicios empresariales guardado con éxito',
            },
            update: {
                success: 'Tipos de servicios empresariales guardado con éxito',
            },
            destroy: {
                success: 'Tipos de Servicios Empresariales eliminado con éxito',
            },
            destroyAll: {
                success: 'Tipos de servicios empresariales eliminado con éxito',
            },
            edit: {
                title: 'Editar Tipos de Servicios Empresariales',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'category': 'Categoria',
                    'language': 'Idioma',
                'serviceImage': 'Imagen',
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
                title: 'Nuevo tipo de servicio de Negocio ',
            },
            view: {
                title: 'Ver Tipos de Servicio de Negocio',
            },
            importer: {
                title: 'Importar tipos de Servicio de Negocio',
                    fileName: 'Importar plantilla de Servicio de Negocios',
                hint:
                    'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        serviceReservation: {
            name: 'Servicio de Reservas',
                label: 'Servicio de Reservas',
                menu: 'Servicio de Reservas',
                exporterFileName: 'Exportar Servicio de Reservas',
                list: {
                menu: 'Servicio de Reservas',
                    title: 'Servicio de Reservas',
            },
            create: {
                success: 'Servicio de Reservas guardado con éxito',
            },
            update: {
                success: 'Servicio de Reservas guardado con éxito',
            },
            destroy: {
                success: 'Servicio de Reservas eliminado con éxito',
            },
            destroyAll: {
                success: 'Servicios de Reservas eliminado con éxito',
            },
            edit: {
                title: 'Editar Servicio de Reservas',
            },
            fields: {
                id: 'Id',
                    'dateRange': 'Rango de Fechas',
                    'date': 'Fecha',
                    'businessId': 'ID de Negocio',
                    'customerId': 'ID de cliente',
                    'serviceType': 'Tipo de Servicio',
                    'serviceProviderIDs': 'ID de Proveedor',
                    'time': 'Hora',
                    'needTransportation': 'Necesito transporte',
                    'place': 'Lugar',
                    'status': 'Estado',
                    'totalPriceRange': 'Total',
                    'totalPrice': 'Total',
                    'totalPriceWithDiscountRange': 'Total con descuento',
                    'totalPriceWithDiscount': 'Total con descuento',
                    'discountCode': 'Código de descuento',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {
                'time': {
                    '06_00AM': '06:00hs',
                        '06_30AM': '06:30hs',
                        '07_00AM': '07:00hs',
                        '07_30AM': '07:30hs',
                        '08_00AM': '08:00hs',
                        '08_30AM': '08:30hs',
                        '09_00AM': '09:00hs',
                        '09_30AM': '09:30hs',
                        '10_00AM': '10:00hs',
                        '10_30AM': '10:30hs',
                        '11_00AM': '11:00hs',
                        '11_30AM': '11:30hs',
                        '12_00AM': '12:00hs',
                        '12_30PM': '12:30hs',
                        '01_30PM': '13:300hs',
                    '02_00PM': '14:00hs',
                        '02_30PM': '14:30hs',
                        '03_00PM': '15:00hs',
                        '03_30PM': '15:30hs',
                        '04_00PM': '16:00hs',
                        '04_30PM': '16:30hs',
                        '05_00PM': '17:00hs',
                        '05_30PM': '17:30hs',
                        '06_00PM': '18:00hs',
                        '06_30PM': '18:30hs',
                        '07_00PM': '19:00hs',
                        '07_30PM': '19:30hs',
                        '08_00PM': '20:00hs',
                        '09_30PM': '21:30hs',
                        '10_00PM': '22:00hs:',
                        '10_30PM': '22:30hs',
                        '11_00PM': '23:00hs',
                        '11_30PM': '23:30hs',
                        '00_00AM': '00:00hs',
                        '00_30AM': '00:30hs',
                        '01_00AM': '01:00hs',
                        '01_30AM': '01:30hs',
                        '02_00AM': '02:00hs',
                        '02_30AM': '02:30hs',
                        '03_00AM': '03:00hs',
                        '03_30AM': '03:30hs',
                        '04_00AM': '04:00hs',
                        '04_30AM': '04:30hs',
                        '05_00': '05:00hs',
                        '05_30AM': '05:30hs',
                },
                'status': {
                    'user_approval_pending': 'Aprobación del usuario pendiente',
                        'business_approval_pending': 'Aprobación de negocio pendiente',
                        'business_approved': 'Negocio aprovado',
                    'business_declined': 'Negocio Rechazado',
                },
            },
            placeholders: {

            },
            hints: {

            },
            new: {
                title: 'Nueva Reserva',
            },
            view: {
                title: 'Ver Reservas',
            },
            importer: {
                title: 'Importar Reservas',
                    fileName: 'Importar plantilla de reservas',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        businessPlaceServiceAvailability: {
            name: 'Disponibilidad de Servicios Comerciales',
                label: 'Disponibilidad de Servicios Comerciales',
                menu: 'Disponibilidad de Servicios Comerciales',
                exporterFileName: 'Exportar Disponibilidad de Servicios Comerciales',
                list: {
                menu: 'Lugar de Reserva',
                    title: 'BusinessPlaceServiceAvailabilities',
            },
            create: {
                success: 'BusinessPlaceServiceAvailability guardado con éxito',
            },
            update: {
                success: 'BusinessPlaceServiceAvailability guardado con éxito',
            },
            destroy: {
                success: 'BusinessPlaceServiceAvailability eliminado con éxito',
            },
            destroyAll: {
                success: 'BusinessPlaceServiceAvailability(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar BusinessPlaceServiceAvailability',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'businessId': 'ID de Negocio',
                    'timeSlot': 'Franja horaria',
                    'days': 'Dias',
                    'workOnHolidays': 'Trabajo en Vacaciones',
                    'serviceType': 'Tipo de servicio',
                    'places': 'Lugares',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {
                'timeSlot': {
                    '06_00AM': '06:00hs',
                        '06_30AM': '06:30hs',
                        '07_00AM': '07:00hs',
                        '07_30AM': '07:30hs',
                        '08_00AM': '08:00hs',
                        '08_30AM': '08:30hs',
                        '09_00AM': '09:00hs',
                        '09_30AM': '09:30hs',
                        '10_00AM': '10:00hs',
                        '10_30AM': '10:30hs',
                        '11_00AM': '11:00hs',
                        '11_30AM': '11:30hs',
                        '12_00AM': '12:00hs',
                        '12_30PM': '12:30hs',
                        '01_30PM': '01:30hs',
                        '02_00PM': '02:00hs',
                        '02_30PM': '02:30hs',
                        '03_00PM': '03:00hs',
                        '03_30PM': '03:30hs',
                        '04_00PM': '04:00hs',
                        '04_30PM': '04:30hs',
                        '05_00PM': '05:00hs',
                        '05_30PM': '05:30hs',
                        '06_00PM': '06:00hs',
                        '06_30PM': '06:30hs',
                        '07_00PM': '07:00hs',
                        '07_30PM': '07:30hs',
                        '08_00PM': '08:00hs',
                        '09_30PM': '09:30hs',
                        '10_00PM': '10:00hs',
                        '10_30PM': '10:30hs',
                        '11_00PM': '11:00hs',
                        '11_30PM': '11:30hs',
                        '00_00AM': '00:00hs',
                        '00_30AM': '00:30hs',
                        '01_00AM': '01:00hs',
                        '01_30AM': '01:30hs',
                        '02_00AM': '02:00hs',
                        '02_30AM': '02:30hs',
                        '03_00AM': '03:00hs',
                        '03_30AM': '03:30hs',
                        '04_00AM': '04:00hs',
                        '04_30AM': '04:30hs',
                        '05_00': '05:00hs',
                        '05_30AM': '05:30hs',
                },
                'days': {
                    'sunday': 'Domingo',
                        'monday': 'Lunes',
                        'tuesday': 'Martes',
                        'wednesday': 'Miércoles',
                        'thursday': 'Jueves',
                        'friday': 'Viernes',
                        'saturday': 'Sábado',
                },
            },
            placeholders: {
                'name': 'Nombre de Reserva Disponible',
            },
            hints: {

            },
            new: {
                title: 'Nuevo Negocio Disponible',
            },
            view: {
                title: 'Ver Negocio Disponible',
            },
            importer: {
                title: 'Importar lista de negocios disponibles',
                    fileName: 'Importar lista de negocios disponibles',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        country: {
            name: 'País',
                label: 'País',
                menu: 'País',
                exporterFileName: 'Esportar País',
                list: {
                menu: 'País',
                    title: 'País',
            },
            create: {
                success: 'País guardado con éxito',
            },
            update: {
                success: 'País guardado con éxito',
            },
            destroy: {
                success: 'País eliminado con éxito',
            },
            destroyAll: {
                success: 'País eliminado con éxito',
            },
            edit: {
                title: 'Editar País',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'initials': 'Iniciales',
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
                title: 'Nuevo País',
            },
            view: {
                title: 'Ver País',
            },
            importer: {
                title: 'Importar País',
                    fileName: 'Importar País',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        city: {
            name: 'Ciudad',
                label: 'Ciudad',
                menu: 'Ciudad',
                exporterFileName: 'Exportar Ciudad',
                list: {
                menu: 'Ciudades',
                    title: 'Ciudades',
            },
            create: {
                success: 'Ciudad guardada con éxito',
            },
            update: {
                success: 'Ciudad guardada con éxito',
            },
            destroy: {
                success: 'Ciudad eliminada con éxito',
            },
            destroyAll: {
                success: 'Ciudades eliminadas con éxito',
            },
            edit: {
                title: 'Editar Ciudad',
            },
            fields: {
                id: 'Id',
                    'country': 'País',
                    'name': 'Nombre',
                    'latitudeRange': 'Latitud',
                    'latitude': 'Latitud',
                    'longitudeRange': 'Longitud',
                    'longitude': 'Longitud',
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
                title: 'Nueva Ciudad',
            },
            view: {
                title: 'Ver Ciudad',
            },
            importer: {
                title: 'Importar Ciudades',
                    fileName: 'Importar plantilla de Ciudades',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        state: {
            name: 'Provincia',
                label: 'Provincia',
                menu: 'Provincia',
                exporterFileName: 'Exportar Provincia',
                list: {
                menu: 'Provincia',
                    title: 'Provincia',
            },
            create: {
                success: 'Provincia guardada con éxito',
            },
            update: {
                success: 'Provincia guardada con éxito',
            },
            destroy: {
                success: 'Provincia eliminada con éxito',
            },
            destroyAll: {
                success: 'Provincias eliminadas con éxito',
            },
            edit: {
                title: 'Editar Provincia',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'country': 'País',
                    'initials': 'Iniciales',
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
                title: 'Nueva Provincia',
            },
            view: {
                title: 'Ver Provincia',
            },
            importer: {
                title: 'Importar Provincia',
                    fileName: 'Importar plantilla de provincia',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        messages: {
            name: 'Mensaje',
                label: 'Mensaje',
                menu: 'Mensaje',
                exporterFileName: 'Exportar mensajes',
                list: {
                menu: 'Mensaje',
                    title: 'Mensaje',
            },
            create: {
                success: 'Mensaje guardado con éxito',
            },
            update: {
                success: 'Mensaje guardado con éxito',
            },
            destroy: {
                success: 'Mensaje eliminado con éxito',
            },
            destroyAll: {
                success: 'Mensajes eliminados con éxito',
            },
            edit: {
                title: 'Editar Mensajes',
            },
            fields: {
                id: 'Id',
                    'from': 'De',
                    'to': 'Para',
                    'message': 'Mensaje',
                    'businessId': 'ID de Negocio',
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
                title: 'Nuevo Mensaje',
            },
            view: {
                title: 'Ver Mensaje',
            },
            importer: {
                title: 'Importar Mensaje',
                    fileName: 'Importar lista de mensajes',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        professionalsServiceAvailability: {
            name: 'Profesionales disponibles',
                label: 'Profesionales disponibles',
                menu: 'Profesionales disponibles',
                exporterFileName: 'Exportar Profesionales disponibles',
                list: {
                menu: 'Profesionales disponibles',
                    title: 'Profesionales disponibles',
            },
            create: {
                success: 'Profesionales disponibles guardado con éxito',
            },
            update: {
                success: 'Profesionales disponibles guardado con éxito',
            },
            destroy: {
                success: 'Profesionales disponibles eliminado con éxito',
            },
            destroyAll: {
                success: 'Profesionales disponibles eliminado con éxito',
            },
            edit: {
                title: 'Editar Profesionales disponibles',
            },
            fields: {
                id: 'Id',
                    'userId': 'Usuario',
                    'businessId': 'ID de negocio',
                    'serviceType': 'Tipo de servicio',
                    'timeSlot': 'Franja horaria',
                    'dateAvailabilityStartRange': 'Disponible desde',
                    'dateAvailabilityStart': 'Disponible desde',
                    'dateAvailabilityEndRange': 'Disponible hasta',
                    'dateAvailabilityEnd': 'Disponible hasta',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {
                'timeSlot': {
                    '06_00AM': '06:00hs',
                        '06_30AM': '06:30hs',
                        '07_00AM': '07:00hs',
                        '07_30AM': '07:30hs',
                        '08_00AM': '08:00hs',
                        '08_30AM': '08:30hs',
                        '09_00AM': '09:00hs',
                        '09_30AM': '09:30hs',
                        '10_00AM': '10:00hs',
                        '10_30AM': '10:30hs',
                        '11_00AM': '11:00hs',
                        '11_30AM': '11:30hs',
                        '12_00AM': '12:00hs',
                        '12_30PM': '12:30hs',
                        '01_30PM': '13:300hs',
                        '02_00PM': '14:00hs',
                        '02_30PM': '14:30hs',
                        '03_00PM': '15:00hs',
                        '03_30PM': '15:30hs',
                        '04_00PM': '16:00hs',
                        '04_30PM': '16:30hs',
                        '05_00PM': '17:00hs',
                        '05_30PM': '17:30hs',
                        '06_00PM': '18:00hs',
                        '06_30PM': '18:30hs',
                        '07_00PM': '19:00hs',
                        '07_30PM': '19:30hs',
                        '08_00PM': '20:00hs',
                        '09_30PM': '21:00hs',
                        '10_00PM': '22:00hs',
                        '10_30PM': '22:30hs',
                        '11_00PM': '23:00hs',
                        '11_30PM': '23:30hs',
                        '00_00AM': '00:00hs',
                        '00_30AM': '00:30hs',
                        '01_00AM': '01:00hs',
                        '01_30AM': '01:30hs',
                        '02_00AM': '02:00hs',
                        '02_30AM': '02:30hs',
                        '03_00AM': '03:00hs',
                        '03_30AM': '03:30hs',
                        '04_00AM': '04:00hs',
                        '04_30AM': '04:30hs',
                        '05_00AM': '05:00hs',
                        '05_30AM': '05:30hs',
                },
            },
            placeholders: {

            },
            hints: {

            },
            new: {
                title: 'Nuevo Profesionales disponibles',
            },
            view: {
                title: 'Ver Profesionales disponibles',
            },
            importer: {
                title: 'Importar Profesionales disponibles',
                    fileName: 'Importar lista de Profesionales disponibles',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        languages: {
            name: 'Idioma',
                label: 'Idioma',
                menu: 'Idioma',
                exporterFileName: 'Exportar Idioma',
                list: {
                menu: 'Idioma',
                    title: 'Idioma',
            },
            create: {
                success: 'Idioma guardado con éxito',
            },
            update: {
                success: 'Idioma guardado con éxito',
            },
            destroy: {
                success: 'Idioma eliminado con éxito',
            },
            destroyAll: {
                success: 'Idioma eliminado con éxito',
            },
            edit: {
                title: 'Editar Idioma',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'active': 'Activo',
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
                title: 'Nuevo Idioma',
            },
            view: {
                title: 'Ver Idioma',
            },
            importer: {
                title: 'Importar Idioma',
                    fileName: 'Importar lista de idioma',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        currency: {
            name: 'Moneda',
                label: 'Moneda',
                menu: 'Moneda',
                exporterFileName: 'Exportar Moneda',
                list: {
                menu: 'Monedas',
                    title: 'Monedas',
            },
            create: {
                success: 'Moneda guardada con éxito',
            },
            update: {
                success: 'Moneda guardada con éxito',
            },
            destroy: {
                success: 'Moneda eliminada con éxito',
            },
            destroyAll: {
                success: 'Monedas eliminadas con éxito',
            },
            edit: {
                title: 'Editar Moneda',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'symbol': 'Símbolol',
                    'active': 'Activo',
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
                title: 'Nueva Moneda',
            },
            view: {
                title: 'Ver Moneda',
            },
            importer: {
                title: 'Importar Moneda',
                    fileName: 'Importar lista de Moneda',
                hint:
                    'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        discounts: {
            name: 'Descuentos',
                label: 'Descuentos',
                menu: 'Descuentos',
                exporterFileName: 'Exportar descuentos',
                list: {
                menu: 'Descuentos',
                    title: 'Descuentos',
            },
            create: {
                success: 'Descuentos guardado con éxito',
            },
            update: {
                success: 'Descuentos guardado con éxito',
            },
            destroy: {
                success: 'Descuentos eliminado con éxito',
            },
            destroyAll: {
                success: 'Descuentos eliminado con éxito',
            },
            edit: {
                title: 'Editar Descuentos',
            },
            fields: {
                id: 'Id',
                    'businessID': 'ID de Negocio',
                    'codeName': 'Usuarios',
                    'discountPercentageRange': 'Porcentaje de descuento',
                    'discountPercentage': 'Porcentaje de descuento',
                    'expirationDateRange': 'Vencimiento',
                    'expirationDate': 'Vencimiento',
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
                title: 'Nuevo Descuento',
            },
            view: {
                title: 'Ver Descuento',
            },
            importer: {
                title: 'Importar Descuento',
                    fileName: 'Importar lista de Descuento',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        wallet: {
            name: 'Billetera',
                label: 'Billetera',
                menu: 'Billetera',
                exporterFileName: 'Exportar billetera',
            list: {
                menu: 'Billetera',
                    title: 'Billetera',
            },
            create: {
                success: 'Billetera guardado con éxito',
            },
            update: {
                success: 'Billetera guardado con éxito',
            },
            destroy: {
                success: 'Billetera eliminado con éxito',
            },
            destroyAll: {
                success: 'Billetera eliminado con éxito',
            },
            edit: {
                title: 'Editar Billerera',
            },
            fields: {
                id: 'Id',
                    'totalCreditsRange': 'Total créditos',
                    'totalCredits': 'Total Créditos',
                    'aipettoPointsRange': 'Puntos aipetto',
                    'aipettoPoints': 'Puntos Aipetto',
                    'user': 'Usuario',
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
                title: 'Nueva Billeterat',
            },
            view: {
                title: 'Ver Billetera',
            },
            importer: {
                title: 'Importar Billetera',
                    fileName: 'Importar lista de Billetera',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        businessCategory: {
            name: 'Categoría de Negocio',
                label: 'Categoría de Negocio',
                menu: 'Categoría ne negocio',
                exporterFileName: 'Exportar Categoría de Negocio',
                list: {
                menu: 'Categoría de Negocio',
                    title: 'BusinessCategories',
            },
            create: {
                success: 'Categoría de Negocio guardado con éxito',
            },
            update: {
                success: 'Categoría de Negocio guardado con éxito',
            },
            destroy: {
                success: 'Categoría de Negocio eliminado con éxito',
            },
            destroyAll: {
                success: 'Categoría de Negocio eliminado con éxito',
            },
            edit: {
                title: 'Editar Categoría de Negocio',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'language': 'Idioma',
                    'categoryImage': 'Imagen',
                    'pageUrl': 'Dirección Url',
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
                title: 'Nueva Categoría de Negocio',
            },
            view: {
                title: 'Ver Categoría de Negocio',
            },
            importer: {
                title: 'Importar Categoría de Negocio',
                    fileName: 'Importar lista Categoría de Negocio',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        providers: {
            name: 'Proveedores',
            label: 'Proveedores',
            menu: 'Proveedores',
            exporterFileName: 'Exportar Proveedores',
            list: {
                menu: 'Proveedores',
                title: 'Proveedores',
            },
            create: {
                success: 'Proveedoresguardado con éxito',
            },
            update: {
                success: 'Proveedores guardado con éxito',
            },
            destroy: {
                success: 'Proveedores eliminado con éxito',
            },
            destroyAll: {
                success: 'Proveedores eliminado con éxito',
            },
            edit: {
                title: 'Editar Proveedores',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'businessID': 'ID de negocio',
                    'providerID': 'ID de proveedor',
                    'category': 'Categoria',
                    'serviceTypes': 'Tipo',
                    'contactName': 'Nombre de contacto',
                    'contactPhone': 'Teléfono de contacto',
                    'contactWhatsApp': 'Contacto WhatsApp',
                    'addressStreet': 'Calle',
                    'addressStreetNumber': 'Número',
                    'addressPostCode': 'Código postal',
                    'city': 'Ciudad',
                    'state': 'Provincia',
                    'country': 'Ciudad',
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
                title: 'Nuevos Proveedores',
            },
            view: {
                title: 'Ver Proveedores',
            },
            importer: {
                title: 'Importar Proveedores',
                    fileName: 'Importar lista de Proveedores',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        vaccineTypes: {
            name: 'Tipos de Vacunas',
                label: 'Tipos de Vacunas',
                menu: 'Tipos de Vacunas',
            exporterFileName: 'Exportar tipos de Vacunas',
                list: {
                menu: 'Tipos de Vacunas',
                    title: 'Tipos de Vacunas',
            },
            create: {
                success: 'Tipos de Vacunas guardado con éxito',
            },
            update: {
                success: 'Tipos de Vacunas guardado con éxito',
            },
            destroy: {
                success: 'Tipos de Vacunas eliminado con éxito',
            },
            destroyAll: {
                success: 'Tipos de Vacunas eliminado con éxito',
            },
            edit: {
                title: 'Editar Tipos de Vacunas',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'country': 'País',
                    'language': 'Idioma',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
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
                title: 'Nuevo tipo de Vacuna',
            },
            view: {
                title: 'Nuevo tipo de Vacuna',
            },
            importer: {
                title: 'Importar tipo de Vacuna',
                    fileName: 'Importar lista tipo de Vacuna',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        petVaccines: {
            name: 'Vacunas de mascota',
                label: 'Vacunas de mascota',
                menu: 'Vacunas de mascota',
                exporterFileName: 'Exportar Vacunas de mascota',
                list: {
                menu: 'Vacunas de mascota',
                    title: 'Vacunas de mascota',
            },
            create: {
                success: 'Vacunas de mascota  guardado con éxito',
            },
            update: {
                success: 'Vacunas de mascota guardado con éxito',
            },
            destroy: {
                success: 'Vacunas de mascota eliminado con éxito',
            },
            destroyAll: {
                success: 'Vacunas de mascota eliminado con éxito',
            },
            edit: {
                title: 'Vacunas de mascota',
            },
            fields: {
                id: 'Id',
                    'name': 'Nonmbre',
                    'uniqueVetVaccineCode': 'Código único de vacuna veterinaria',
                    'datetimeTakenRange': 'Fecha y hora tomada',
                    'datetimeTaken': 'Fecha y hora tomada',
                    'veterinarianID': 'ID veterinario',
                    'placeTaken': 'Lugar tomada',
                    'businessID': 'ID del negocio',
                    'country': 'País',
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
                title: 'Nueva vacuna’',
            },
            view: {
                title: 'Ver vacunas',
            },
            importer: {
                title: 'Importar vacunas',
                    fileName: 'Importar historial de vacunas',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        placeType: {
            name: 'Tipo de vacuna',
                label: 'Lugar de vacunación',
                menu: 'Tipo de lugar',
                exporterFileName: 'Exportar tipo de lugar',
                list: {
                menu: 'Tipos de Lugar',
                    title: 'Tipos de lugar',
            },
            create: {
                success: 'Tipo de lugar  guardado con éxito',
            },
            update: {
                success: 'Tipo de lugar guardado con éxito',
            },
            destroy: {
                success: 'Tipo de lugar eliminado con éxito',
            },
            destroyAll: {
                success: 'Tipo de lugar eliminado con éxito',
            },
            edit: {
                title: 'Editar tipo de lugar',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'language': 'Idioma',
                    'placeTypeImage': 'Imagen de lugar',
                    'isPublicPlace': 'Lugar público',
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
                title: 'Nuevo Lugar',
            },
            view: {
                title: 'Ver Lugar',
            },
            importer: {
                title: 'Importar Lugares',
                    fileName: 'Importar lugares',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        landingSurvey: {
            name: 'Encuesta de aterrizaje',
            label: 'Encuenta de aterrizaje',
                menu: 'Encuesta de bienvenida',
                exporterFileName: 'Exportar encuesta de aterrizaje',
                list: {
                menu: 'Encuestas',
                    title: 'Encuestas',
            },
            create: {
                success: 'Encuesta guardada con éxito',
            },
            update: {
                success: 'Encuesta guardada con éxito',
            },
            destroy: {
                success: 'Encuesta eliminada con éxito',
            },
            destroyAll: {
                success: 'Encuesta eliminada con éxito',
            },
            edit: {
                title: 'Editar encuesta',
            },
            fields: {
                id: 'Id',
                    'name': 'Nombre',
                    'email': 'Correo electrónico',
                    'numberOfPets': 'Cantidad de mascotas',
                    'interests': 'Intereses',
                    'extraInfo': 'Información adicional',
                    'allowReceiveNotifications': 'Permitir todas la notificaciones',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {
                'interests': {
                    '': '',
                },
            },
            placeholders: {

            },
            hints: {

            },
            new: {
                title: 'Nueva encuesta',
            },
            view: {
                title: 'Ver encuesta',
            },
            importer: {
                title: 'Importar encuesta',
                    fileName: 'Importar encuestas',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        newBusinessSurvey: {
            name: 'Encuesta de nuevos negocios',
                label: 'Encuesta de nuevo negocio',
                menu: 'Encuesta de nuevo negocio',
                exporterFileName: 'Esportar encuesta de nuevo negocio',
                list: {
                menu: 'Encuesta de nuevo negocio',
                    title: 'Encuesta de nuevos negocios',
            },
            create: {
                success: 'Encuesta de negocio guardada con éxito',
            },
            update: {
                success: 'Encuesta de negocio guardada con éxito',
            },
            destroy: {
                success: 'Encuesta de nuevos negocios eliminada con éxito',
            },
            destroyAll: {
                success: 'Encuesta de nuevos negocios eliminada con éxito',
            },
            edit: {
                title: 'Editar Encuesta de nuevos negocios',
            },
            fields: {
                id: 'Id',
                    'nameBusiness': 'Nombre del negocio',
                    'numberOfPlaces': 'Nombre del comercio',
                    'contactName': 'Número de contacto',
                    'contactEmail': 'Correo de contacto',
                    'contactPhone': 'Teléfono de contacto',
                    'cellphoneForSMS': 'Número para SMS',
                    'digitalNetworks': 'Redes sociales',
                    'allowReceiveNotifications': 'Recibir todas las notificaciones',
                    'services': 'Servicios',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
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
                title: 'Nueva Encuesta de negocio ',
            },
            view: {
                title: 'Ver Encuesta de negocio',
            },
            importer: {
                title: 'Importar Encuesta de negocio',
                    fileName: 'Importar lista Encuesta de negocio',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        petPhotos: {
            name: 'Fotos de mascota',
                label: 'Fotos de mascota',
                menu: 'Fotos',
                exporterFileName: 'Exportar Fotos de mascota',
                list: {
                menu: 'Fotos de mascota',
                    title: 'Fotos de mascota',
            },
            create: {
                success: 'Fotos de mascota guardado con éxito',
            },
            update: {
                success: 'Fotos de mascota guardado con éxito',
            },
            destroy: {
                success: 'Fotos de mascota eliminado con éxito',
            },
            destroyAll: {
                success: 'Fotos de mascota eliminado con éxito',
            },
            edit: {
                title: 'Editar Fotos de mascota',
            },
            fields: {
                id: 'Id',
                    'description': 'Descripción',
                    'petId': 'ID de mascota',
                    'photo': 'Foto',
                    'latitude': 'Latitud',
                    'longitude': 'Longitud',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado e l',
            },
            enumerators: {

            },
            placeholders: {

            },
            hints: {
                'description': '¿Qué hace tu mascota en la foto?',
            },
            new: {
                title: 'Nuevo Fotos de mascota',
            },
            view: {
                title: 'Ver Fotos de mascota',
            },
            importer: {
                title: 'Importar Fotos de mascota',
                    fileName: 'Importar fotos de mascota',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        petDiseases: {
            name: 'Enfermedades',
                label: 'Enfermedades',
                menu: 'Enfermedades',
                exporterFileName: 'Exportar Enfermedades',
                list: {
                menu: 'Enfermedades',
                    title: 'Enfermedades',
            },
            create: {
                success: 'Enfermedades guardado con éxito',
            },
            update: {
                success: 'Enfermedades guardado con éxito',
            },
            destroy: {
                success: 'Enfermedades eliminado con éxito',
            },
            destroyAll: {
                success: 'Enfermedades eliminado con éxito',
            },
            edit: {
                title: 'Editar Enfermedades',
            },
            fields: {
                id: 'Id',
                    'diseaseCommonName': 'Nombre común de la enfermedad',
                     'diseaseScientificNames': 'Nombre científico',
                     'isHumanContagious': 'Es humano-contagiosa',
                    'isPetContagious': 'Es animal-contagiosa',
                    'language': 'Idioma',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
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
                title: 'Nuevo Enfermedades',
            },
            view: {
                title: 'Ver Enfermedades',
            },
            importer: {
                title: 'Importar Enfermedades',
                fileName: 'Importar Enfermedades',
                hint:
                    'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        businessServicesPrices: {
            name: 'Costos por servicio',
                label: 'Valores por servicio',
                menu: 'Valor del servicio',
                exporterFileName: 'Exportar Costo por servicio',
                list: {
                menu: 'Costo del servicio',
                    title: 'Precio',
            },
            create: {
                success: 'Costo del servicio guardado con éxito',
            },
            update: {
                success: 'Costo del servicio guardado con éxito',
            },
            destroy: {
                success: 'Costo del servicio eliminado con éxito',
            },
            destroyAll: {
                success: 'Costo del servicio eliminado con éxito',
            },
            edit: {
                title: 'Editar Costo del servicio',
            },
            fields: {
                id: 'Id',
                    'service': 'Servicio',
                    'businessId': 'Id del servicio',
                    'servicePriceRange': 'Costo',
                    'servicePrice': 'Valor',
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
                title: 'Nuevo Valor',
            },
            view: {
                title: 'Ver Valor del servicio',
            },
            importer: {
                title: 'Importar Valor del servicio',
                    fileName: 'Importar listado Valor del servicio',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        posts: {
            name: 'Publicaciones',
            label: 'Publicaciones',
                menu: 'Publicaciones',
                exporterFileName: 'Exportar Publicaciones',
                list: {
                menu: 'Publicaciones',
                    title: 'Publicaciones',
            },
            create: {
                success: 'Publicaciones guardado con éxito',
            },
            update: {
                success: 'Publicaciones guardado con éxito',
            },
            destroy: {
                success: 'Publicaciones eliminado con éxito',
            },
            destroyAll: {
                success: 'Publicaciones eliminado con éxito',
            },
            edit: {
                title: 'Editar Publicaciones',
            },
            fields: {
                id: 'Id',
                    'title': 'Título',
                    'description': 'Descripción',
                    'postHeaderImage': 'Encabezado 	',
                    'postDocRelated': 'Documento relacionado',
                    'postUrl': 'Dirección Url',
                    'authors': 'Autores',
                    'postCategory': 'Categoria',
                    'comments': 'Comentarios',
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
                title: 'Nueva Publicación',
            },
            view: {
                title: 'Ver Publicación',
            },
            importer: {
                title: 'Importar Publicación',
                fileName: 'Imprtar lista Publicación',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        postCategories: {
            name: 'Categorías',
                label: 'Categprías',
                menu: 'Categorías',
                exporterFileName: 'Exportar Categorías',
                list: {
                menu: 'Categorías',
                    title: 'Categorías',
            },
            create: {
                success: 'PostCategories guardado con éxito',
            },
            update: {
                success: 'PostCategories guardado con éxito',
            },
            destroy: {
                success: 'PostCategories eliminado con éxito',
            },
            destroyAll: {
                success: 'PostCategories(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar PostCategories',
            },
            fields: {
                id: 'Id',
                    'name': 'Name',
                    'description': 'Description',
                    'categoryUrl': 'CategoryUrl',
                    'language': 'Language',
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
                title: 'Nuevo PostCategories',
            },
            view: {
                title: 'Ver PostCategories',
            },
            importer: {
                title: 'Importar PostCategories',
                    fileName: 'postCategories_import_template',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        postComments: {
            name: 'postComments',
                label: 'PostComments',
                menu: 'PostComments',
                exporterFileName: 'exportacion_postComments',
                list: {
                menu: 'PostComments',
                    title: 'PostComments',
            },
            create: {
                success: 'PostComments guardado con éxito',
            },
            update: {
                success: 'PostComments guardado con éxito',
            },
            destroy: {
                success: 'PostComments eliminado con éxito',
            },
            destroyAll: {
                success: 'PostComments(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar PostComments',
            },
            fields: {
                id: 'Id',
                    'comment': 'Comment',
                    'postId': 'PostId',
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
                title: 'Nuevo PostComments',
            },
            view: {
                title: 'Ver PostComments',
            },
            importer: {
                title: 'Importar PostComments',
                    fileName: 'postComments_import_template',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        pointsChallenges: {
            name: 'pointsChallenges',
                label: 'PointsChallenges',
                menu: 'PointsChallenges',
                exporterFileName: 'exportacion_pointsChallenges',
                list: {
                menu: 'PointsChallenges',
                    title: 'PointsChallenges',
            },
            create: {
                success: 'PointsChallenges guardado con éxito',
            },
            update: {
                success: 'PointsChallenges guardado con éxito',
            },
            destroy: {
                success: 'PointsChallenges eliminado con éxito',
            },
            destroyAll: {
                success: 'PointsChallenges(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar PointsChallenges',
            },
            fields: {
                id: 'Id',
                    'name': 'Name',
                    'pointsRange': 'Points',
                    'points': 'Points',
                    'country': 'Country',
                    createdAt: 'Creado el',
                    updatedAt: 'Actualizado el',
                    createdAtRange: 'Creado el',
            },
            enumerators: {

            },
            placeholders: {

            },
            hints: {
                'points': 'How many points this challenge give the user',
            },
            new: {
                title: 'Nuevo PointsChallenges',
            },
            view: {
                title: 'Ver PointsChallenges',
            },
            importer: {
                title: 'Importar PointsChallenges',
                    fileName: 'pointsChallenges_import_template',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        challengesCategories: {
            name: 'challengesCategories',
                label: 'ChallengesCategories',
                menu: 'ChallengesCategories',
                exporterFileName: 'exportacion_challengesCategories',
                list: {
                menu: 'ChallengesCategories',
                    title: 'ChallengesCategories',
            },
            create: {
                success: 'ChallengesCategories guardado con éxito',
            },
            update: {
                success: 'ChallengesCategories guardado con éxito',
            },
            destroy: {
                success: 'ChallengesCategories eliminado con éxito',
            },
            destroyAll: {
                success: 'ChallengesCategories(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar ChallengesCategories',
            },
            fields: {
                id: 'Id',
                    'name': 'Name',
                    'language': 'Language',
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
                title: 'Nuevo ChallengesCategories',
            },
            view: {
                title: 'Ver ChallengesCategories',
            },
            importer: {
                title: 'Importar ChallengesCategories',
                    fileName: 'challengesCategories_import_template',
                    hint:
                'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
            },
        },

        productCategory: {
            name: 'productCategory',
                label: 'ProductCategories',
                menu: 'ProductCategories',
                exporterFileName: 'exportacion_productCategory',
                list: {
                menu: 'ProductCategories',
                    title: 'ProductCategories',
            },
            create: {
                success: 'ProductCategory guardado con éxito',
            },
            update: {
                success: 'ProductCategory guardado con éxito',
            },
            destroy: {
                success: 'ProductCategory eliminado con éxito',
            },
            destroyAll: {
                success: 'ProductCategory(s) eliminado con éxito',
            },
            edit: {
                title: 'Editar ProductCategory',
            },
            fields: {
                id: 'Id',
                    'name': 'Name',
                    'description': 'Description',
                    'language': 'Language',
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
                title: 'Nuevo ProductCategory',
            },
            view: {
                title: 'Ver ProductCategory',
            },
            importer: {
                title: 'Importar ProductCategories',
                    fileName: 'productCategory_import_template',
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
                informationLoginBeta: '*Para usar la versión beta, haga tu pre-registro.',
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
            admin: {
                label: 'Administración',
                    description: 'Acceso total a todos los recursos.',
            },
            custom: {
                label: 'Rol personalizado',
                    description: 'Acceso personalizado a recursos',
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
        services: {
            reservation: 'Reservas'
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
