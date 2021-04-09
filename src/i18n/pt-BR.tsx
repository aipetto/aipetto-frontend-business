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

  app: {
    title: 'Aplicação',
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
          'name': 'Name',
          'birthdateRange': 'Birthdate',
          'birthdate': 'Birthdate',
          'gender': 'Gender',
          'userId': 'UserId',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          'type': 'Type',
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
          'breeds': 'Breeds',
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
          'name': 'Name',
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
          'nome': 'Nome',
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
          'time': 'Time',
          'needTransportation': 'NeedTransportation',
          'place': 'Place',
          'status': 'Status',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
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
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
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
