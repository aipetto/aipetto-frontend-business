(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[76],{551:function(e,a,s){"use strict";s.r(a);a.default={common:{or:"o",cancel:"Cancelar",reset:"Reiniciar",save:"Guardar",search:"Buscar",edit:"Editar",remove:"Eliminar",new:"Nuevo",export:"Exportar a Excel",noDataToExport:"No hay datos para exportar",import:"Importar",discard:"Descartar",yes:"Si",no:"No",pause:"Pausa",areYouSure:"\xbfEst\xe1s seguro?",view:"Ver",destroy:"Eliminar",mustSelectARow:"Debe seleccionar una fila",start:"Comienzo",end:"Final",select:"Seleccione",continue:"Contin\xfaa",filters:"Filtros"},app:{title:"Aplicaci\xf3n"},api:{menu:"API"},entities:{customer:{name:"customer",label:"Customers",menu:"Customers",exporterFileName:"exportacion_customer",list:{menu:"Customers",title:"Customers"},create:{success:"Customer guardado con \xe9xito"},update:{success:"Customer guardado con \xe9xito"},destroy:{success:"Customer eliminado con \xe9xito"},destroyAll:{success:"Customer(s) eliminado con \xe9xito"},edit:{title:"Editar Customer"},fields:{id:"Id",name:"Name",birthdateRange:"Birthdate",birthdate:"Birthdate",gender:"Gender",userId:"UserId",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{gender:{male:"Male",female:"Female"}},placeholders:{},hints:{},new:{title:"Nuevo Customer"},view:{title:"Ver Customer"},importer:{title:"Importar Customers",fileName:"customer_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},product:{name:"product",label:"Products",menu:"Products",exporterFileName:"exportacion_product",list:{menu:"Products",title:"Products"},create:{success:"Product guardado con \xe9xito"},update:{success:"Product guardado con \xe9xito"},destroy:{success:"Product eliminado con \xe9xito"},destroyAll:{success:"Product(s) eliminado con \xe9xito"},edit:{title:"Editar Product"},fields:{id:"Id",name:"Name",description:"Description",unitPriceRange:"Unit Price",unitPrice:"Unit Price",photos:"Photos",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Product"},view:{title:"Ver Product"},importer:{title:"Importar Products",fileName:"product_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},order:{name:"order",label:"Orders",menu:"Orders",exporterFileName:"exportacion_order",list:{menu:"Orders",title:"Orders"},create:{success:"Order guardado con \xe9xito"},update:{success:"Order guardado con \xe9xito"},destroy:{success:"Order eliminado con \xe9xito"},destroyAll:{success:"Order(s) eliminado con \xe9xito"},edit:{title:"Editar Order"},fields:{id:"Id",customer:"Customer",products:"Products",employee:"Employee",delivered:"Delivered",attachments:"Attachments",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Order"},view:{title:"Ver Order"},importer:{title:"Importar Orders",fileName:"order_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},pet:{name:"pet",label:"Pets",menu:"Pets",exporterFileName:"exportacion_pet",list:{menu:"Pets",title:"Pets"},create:{success:"Pet guardado con \xe9xito"},update:{success:"Pet guardado con \xe9xito"},destroy:{success:"Pet eliminado con \xe9xito"},destroyAll:{success:"Pet(s) eliminado con \xe9xito"},edit:{title:"Editar Pet"},fields:{id:"Id",name:"Name",nickname:"Nickname",birthdateRange:"Birthdate",birthdate:"Birthdate",ageRange:"Age",age:"Age",color:"Color",profileImage:"ProfileImage",sex:"Sex",breed:"Breed",type:"Type",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{color:{black:"Black",white:"White",brown:"Brown",black_white:"Black_white",brown_white:"Brown_white",gray:"Gray"},sex:{male:"Male",female:"Female"}},placeholders:{},hints:{},new:{title:"Nuevo Pet"},view:{title:"Ver Pet"},importer:{title:"Importar Pets",fileName:"pet_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},breed:{name:"breed",label:"Breeds",menu:"Breeds",exporterFileName:"exportacion_breed",list:{menu:"Breeds",title:"Breeds"},create:{success:"Breed guardado con \xe9xito"},update:{success:"Breed guardado con \xe9xito"},destroy:{success:"Breed eliminado con \xe9xito"},destroyAll:{success:"Breed(s) eliminado con \xe9xito"},edit:{title:"Editar Breed"},fields:{id:"Id",name:"Name",type:"Type",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Breed"},view:{title:"Ver Breed"},importer:{title:"Importar Breeds",fileName:"breed_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},petTypes:{name:"petTypes",label:"PetTypes",menu:"PetTypes",exporterFileName:"exportacion_petTypes",list:{menu:"PetTypes",title:"PetTypes"},create:{success:"PetTypes guardado con \xe9xito"},update:{success:"PetTypes guardado con \xe9xito"},destroy:{success:"PetTypes eliminado con \xe9xito"},destroyAll:{success:"PetTypes(s) eliminado con \xe9xito"},edit:{title:"Editar PetTypes"},fields:{id:"Id",name:"Name",image:"Image",breeds:"Breeds",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo PetTypes"},view:{title:"Ver PetTypes"},importer:{title:"Importar PetTypes",fileName:"petTypes_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},business:{name:"business",label:"Businesses",menu:"Businesses",exporterFileName:"exportacion_business",list:{menu:"Businesses",title:"Businesses"},create:{success:"Business guardado con \xe9xito"},update:{success:"Business guardado con \xe9xito"},destroy:{success:"Business eliminado con \xe9xito"},destroyAll:{success:"Business(s) eliminado con \xe9xito"},edit:{title:"Editar Business"},fields:{id:"Id",name:"Name",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Business"},view:{title:"Ver Business"},importer:{title:"Importar Businesses",fileName:"business_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},place:{name:"place",label:"Places",menu:"Places",exporterFileName:"exportacion_place",list:{menu:"Places",title:"Places"},create:{success:"Place guardado con \xe9xito"},update:{success:"Place guardado con \xe9xito"},destroy:{success:"Place eliminado con \xe9xito"},destroyAll:{success:"Place(s) eliminado con \xe9xito"},edit:{title:"Editar Place"},fields:{id:"Id",businessId:"BusinessId",latitudeRange:"Latitude",latitude:"Latitude",longitudeRange:"Longitude",longitude:"Longitude",address:"Address",addressNumber:"AddressNumber",addressZipCode:"AddressZipCode",openTime:"OpenTime",closeTime:"CloseTime",is24hours:"Is24hours",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo Place"},view:{title:"Ver Place"},importer:{title:"Importar Places",fileName:"place_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},businessServicesTypes:{name:"businessServicesTypes",label:"BusinessServicesTypes",menu:"BusinessServicesTypes",exporterFileName:"exportacion_businessServicesTypes",list:{menu:"BusinessServicesTypes",title:"BusinessServicesTypes"},create:{success:"BusinessServicesTypes guardado con \xe9xito"},update:{success:"BusinessServicesTypes guardado con \xe9xito"},destroy:{success:"BusinessServicesTypes eliminado con \xe9xito"},destroyAll:{success:"BusinessServicesTypes(s) eliminado con \xe9xito"},edit:{title:"Editar BusinessServicesTypes"},fields:{id:"Id",nome:"Nome",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{},placeholders:{},hints:{},new:{title:"Nuevo BusinessServicesTypes"},view:{title:"Ver BusinessServicesTypes"},importer:{title:"Importar BusinessServicesTypes",fileName:"businessServicesTypes_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}},serviceReservation:{name:"serviceReservation",label:"ServiceReservations",menu:"ServiceReservations",exporterFileName:"exportacion_serviceReservation",list:{menu:"ServiceReservations",title:"ServiceReservations"},create:{success:"ServiceReservation guardado con \xe9xito"},update:{success:"ServiceReservation guardado con \xe9xito"},destroy:{success:"ServiceReservation eliminado con \xe9xito"},destroyAll:{success:"ServiceReservation(s) eliminado con \xe9xito"},edit:{title:"Editar ServiceReservation"},fields:{id:"Id",dateRange:"Date",date:"Date",businessId:"BusinessId",customerId:"CustomerId",serviceType:"ServiceType",time:"Time",needTransportation:"NeedTransportation",place:"Place",status:"Status",createdAt:"Creado el",updatedAt:"Actualizado el",createdAtRange:"Creado el"},enumerators:{status:{user_approval_pending:"User_approval_pending",business_approval_pending:"Business_approval_pending",business_approved:"Business_approved",business_declined:"Business_declined"}},placeholders:{},hints:{},new:{title:"Nuevo ServiceReservation"},view:{title:"Ver ServiceReservation"},importer:{title:"Importar ServiceReservations",fileName:"serviceReservation_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio."}}},auth:{tenants:"Espacios de trabajo",profile:{title:"Perfil",success:"Perfil actualizado con \xe9xito"},rememberMe:"Recu\xe9rdame",forgotPassword:"Se te olvid\xf3 tu contrase\xf1a",signin:"Iniciar Sesi\xf3n",signup:"Registrarse",signout:"Desconectar",alreadyHaveAnAccount:"\xbfYa tienes una cuenta? Registrarse.",createAnAccount:"\xbfNo tienes una cuenta? Crea uno.",social:{header:"o inicia sesi\xf3n con las redes sociales",signinWithGoogle:"Inicia sesi\xf3n con Google",errors:{"auth-invalid-provider":"This email is already registered to another provider.","auth-no-email":"The email associated with this account is private or inexistent."}},signinWithAnotherAccount:"Inicia sesi\xf3n con otra cuenta",passwordChange:{title:"Cambia la contrase\xf1a",success:"Contrase\xf1a cambiada correctamente",mustMatch:"Las contrase\xf1as deben coincidir"},emailUnverified:{message:"Confirme su correo electr\xf3nico en <strong>{0}</strong> para continuar.",submit:"Reenviar verificaci\xf3n de correo electr\xf3nico"},emptyPermissions:{message:"A\xfan no tienes permisos. Espera a que el administrador te otorgue privilegios."},passwordResetEmail:{message:"Enviar contrase\xf1a restablecer correo electr\xf3nico",error:"Correo electr\xf3nico no reconocido"},passwordReset:{message:"Restablecer la contrase\xf1a"},emailAddressVerificationEmail:{error:"Correo electr\xf3nico no reconocido"},verificationEmailSuccess:"Correo electr\xf3nico de verificaci\xf3n enviado con \xe9xito",passwordResetEmailSuccess:"Correo electr\xf3nico de restablecimiento de contrase\xf1a enviado correctamente",passwordResetSuccess:"Contrase\xf1a cambiada correctamente",verifyEmail:{success:"Correo electr\xf3nico verificado con \xe9xito.",message:"Solo un momento, su correo electr\xf3nico est\xe1 siendo verificado ..."}},tenant:{name:"inquilino",label:"Espacios de trabajo",menu:"Espacios de trabajo",list:{menu:"Espacios de trabajo",title:"Espacios de trabajo"},create:{button:"Crear espacio de trabajo",success:"Espacio de trabajo guardado correctamente"},update:{success:"Espacio de trabajo guardado correctamente"},destroy:{success:"Espacio de trabajo eliminado correctamente"},destroyAll:{success:"Espacio(s) de trabajo eliminado(s) correctamente"},edit:{title:"Editar espacio de trabajo"},fields:{id:"Id",name:"Nombre",url:"URL",tenantName:"Nombre del espacio de trabajo",tenantId:"Espacio de trabajo",tenantUrl:"URL del espacio de trabajo",plan:"Plan"},enumerators:{},new:{title:"Nuevo espacio de trabajo"},invitation:{view:"Ver invitaciones",invited:"Invitado",accept:"Aceptar la invitacion",decline:"Rechazar invitaci\xf3n",declined:"Invitaci\xf3n rechazada con \xe9xito",acceptWrongEmail:"Aceptar invitaci\xf3n con este correo electr\xf3nico"},select:"Seleccionar espacio de trabajo",validation:{url:"La URL de su espacio de trabajo solo puede contener letras min\xfasculas, n\xfameros y guiones (y debe comenzar con una letra o n\xfamero)."}},roles:{admin:{label:"Administraci\xf3n",description:"Acceso total a todos los recursos."},custom:{label:"Rol personalizado",description:"Acceso personalizado a recursos"}},user:{invite:"Invitaci\xf3n",title:"Usuarios",menu:"Usuarios",fields:{id:"Id",avatars:"Avatar",email:"Email",emails:"Email(s)",fullName:"Nombre completo",firstName:"Nombre",lastName:"Apellido",status:"Estado",disabled:"Discapacitado",phoneNumber:"N\xfamero de tel\xe9fono",role:"Rol",createdAt:"Creado el",updatedAt:"Actualizado el",roleUser:"Rol/Usuario",roles:"Roles",createdAtRange:"Creado el",password:"Contrase\xf1a",rememberMe:"Recu\xe9rdame",oldPassword:"Contrase\xf1a anterior",newPassword:"Nueva contrase\xf1a",newPasswordConfirmation:"Nueva confirmaci\xf3n de contrase\xf1a"},enabled:"Habilitado",disabled:"Discapacitado",validations:{email:"El correo electr\xf3nico ${value} no es v\xe1lido"},disable:"Inhabilitar",enable:"Habilitar",doEnableSuccess:"Usuario habilitado con \xe9xito",doDisableSuccess:"Usuario deshabilitado con \xe9xito",doDisableAllSuccess:"Usuario(s) deshabilitado con \xe9xito",doEnableAllSuccess:"Usuario(s) habilitados correctamente",doAddSuccess:"Usuario(s) guardado correctamente",doUpdateSuccess:"Usuario guardado con \xe9xito",status:{active:"Activo",invited:"Invitado","empty-permissions":"Esperando permisos"},exporterFileName:"usuarios_exportacion",doDestroySuccess:"Usuario eliminado con \xe9xito",doDestroyAllSelectedSuccess:"Usuario(s) eliminado correctamente",edit:{title:"Editar Usuario"},new:{title:"Invitar Usuario(s)",titleModal:"Nuevo Usuario",emailsHint:"Separe varias direcciones de correo electr\xf3nico utilizando el car\xe1cter de coma."},view:{title:"Ver Usuario",activity:"Actividad"},importer:{title:"Importar Usuarios",fileName:"users_import_template",hint:"Las columnas Archivos/Im\xe1genes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio."},errors:{userAlreadyExists:"El usuario con este correo electr\xf3nico ya existe",userNotFound:"Usuario no encontrado",disablingHimself:"No puedes inhabilitarte",revokingOwnPermission:"No puede revocar su propio permiso de administrador"}},plan:{menu:"Planes",title:"Planes",free:{label:"Gratis",price:"$0"},growth:{label:"Crecimiento",price:"$10"},enterprise:{label:"Empresa",price:"$50"},pricingPeriod:"/mes",current:"Plan Actual",subscribe:"Suscribir",manage:"Administrar Suscripci\xf3n",cancelAtPeriodEnd:"Este plan se cancelar\xe1 al final del per\xedodo.",somethingWrong:"Hay algo mal con su suscripci\xf3n. Vaya a administrar la suscripci\xf3n para obtener m\xe1s detalles.",notPlanUser:"No eres el administrador de esta suscripci\xf3n.",demoHintHtml:'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostraci\xf3n.'},auditLog:{menu:"Registros de auditor\xeda",title:"Registros de auditor\xeda",exporterFileName:"audit_log_export",entityNamesHint:"Separe varias entidades con el car\xe1cter de coma.",fields:{id:"Id",timestampRange:"Per\xedodo",entityName:"Entidad",entityNames:"Entidades",entityId:"ID de entidad",action:"Acci\xf3n",values:"Valores",timestamp:"Fecha",createdByEmail:"Email del usuario"}},settings:{title:"Configuraciones",menu:"Configuraciones",save:{success:"Configuraci\xf3n guardada con \xe9xito. La p\xe1gina se volver\xe1 a cargar en {0} segundos para que los cambios surtan efecto."},fields:{theme:"Tema",logos:"Logo",backgroundImages:"Imagen de fondo"},colors:{default:"Oscuro",light:"Claro",cyan:"Cian","geek-blue":"Geek Blue",gold:"Oro",lime:"Lima",magenta:"Magenta",orange:"Naranja","polar-green":"Verde polar",purple:"P\xfarpura",red:"Rojo",volcano:"Volc\xe1n",yellow:"Amarillo"}},dashboard:{menu:"Tablero",message:"Esta p\xe1gina utiliza datos falsos solo con fines de demostraci\xf3n. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.",charts:{day:"D\xeda",red:"Rojo",green:"Verde",yellow:"Amarillo",grey:"Gris",blue:"Azul",orange:"Naranja",months:{1:"Enero",2:"Febrero",3:"Marzo",4:"Abril",5:"Mayo",6:"Junio",7:"Julio"},eating:"Comiendo",drinking:"Bebiendo",sleeping:"Dormiendo",designing:"Dise\xf1ando",coding:"Codificando",cycling:"Pedalando",running:"Corriendo",customer:"Cliente"}},errors:{403:"Lo sentimos, no tienes acceso a esta p\xe1gina",404:"Lo sentimos, la p\xe1gina que visitaste no existe",500:"Lo sentimos, el servidor informa un error",429:"Demasiadas solicitudes. Por favor, int\xe9ntelo de nuevo m\xe1s tarde.",backToHome:"Volver a Inicio",forbidden:{message:"Prohibido"},validation:{message:"Ocurri\xf3 un error"},defaultErrorMessage:"Ops, ocurri\xf3 un error"},preview:{error:"Lo sentimos, esta operaci\xf3n no est\xe1 permitida en el modo de vista previa."},validation:{mixed:{default:"${path} no es v\xe1lido",required:"${path} es obligatorio",oneOf:"${path} debe ser uno de los siguientes valores: ${values}",notOneOf:"${path} no debe ser uno de los siguientes valores: ${values}",notType:function(e){var a=e.path,s=e.type;e.value,e.originalValue;return"".concat(a," debe ser un ").concat(s)}},string:{length:"${path} debe tener exactamente ${length} caracteres",min:"${path} debe tener al menos ${min} caracteres",max:"${path} debe tener como m\xe1ximo ${max} caracteres",matches:'${path} debe coincidir con lo siguiente: "${regex}"',email:"${path} debe ser un correo electr\xf3nico v\xe1lido",url:"${path} debe ser una URL v\xe1lida",trim:"${path} debe ser una cadena recortada",lowercase:"${path} debe ser una cadena en min\xfasculas",uppercase:"${path} debe ser una cadena en may\xfascula",selected:"${path} debe estar seleccionado"},number:{min:"${path} debe ser mayor o igual que ${min}",max:"${path} debe ser menor o igual que ${max}",lessThan:"${path} debe ser menor que ${less}",moreThan:"${path} debe ser mayor que ${more}",notEqual:"${path} no debe ser igual a ${notEqual}",positive:"${path} debe ser un n\xfamero positivo",negative:"${path} debe ser un n\xfamero negativo",integer:"${path} debe ser un n\xfamero entero"},date:{min:"El campo ${path} debe ser posterior a ${min}",max:"El campo ${path} debe ser anterior a ${max}"},boolean:{},object:{noUnknown:"El campo ${path} no puede tener claves no especificadas en la forma del objeto"},array:{min:function(e){var a=e.min,s=e.path;return 1===a?"".concat(s," es obligatorio"):"'El campo ".concat(s," debe tener al menos ").concat(a," elementos")},max:"El campo ${path} debe tener elementos menores o iguales a ${max}"}},fileUploader:{upload:"Subir",image:"Debes subir una imagen",size:"El archivo es muy grande. El tama\xf1o m\xe1ximo permitido es {0}",formats:"Formato inv\xe1lido. Debe ser uno de: {0}."},importer:{line:"L\xednea",status:"Estado",pending:"Pendiente",imported:"Importado",error:"Error",total:"{0} importado, {1} pendiente y {2} con error",importedMessage:"Procesado {0} de {1}.",noNavigateAwayMessage:"No navegue fuera de esta p\xe1gina o la importaci\xf3n se detendr\xe1.",completed:{success:"Importaci\xf3n completada. Todas las filas se importaron correctamente.",someErrors:"Procesamiento completado, pero algunas filas no se pudieron importar.",allErrors:"Importaci\xf3n fallida. No hay filas v\xe1lidas."},form:{downloadTemplate:"Descargar la plantilla",hint:"Haga clic o arrastre el archivo a esta \xe1rea para continuar."},list:{discardConfirm:"\xbfEst\xe1s seguro? Los datos no importados se perder\xe1n."},errors:{invalidFileEmpty:"El archivo esta vacio",invalidFileExcel:"Solo se permiten archivos de Excel(.xlsx)",invalidFileUpload:"Archivo inv\xe1lido. Aseg\xfarese de estar utilizando la \xfaltima versi\xf3n de la plantilla.",importHashRequired:"Se requiere hash de importaci\xf3n",importHashExistent:"Los datos ya han sido importados"}},autocomplete:{loading:"Cargando...",noOptions:"Datos no encontrados"},imagesViewer:{noImage:"Sin im\xe1gen"},table:{noData:"No se encontraron registros",loading:"Cargando..."},pagination:{items_per_page:"/ p\xe1gina",jump_to:"Ir",jump_to_confirm:"confirmar",page:"",prev_page:"Pagina anterior",next_page:"Siguiente p\xe1gina",prev_5:"5 p\xe1ginas anteriores",next_5:"5 p\xe1ginas siguientes",prev_3:"3 p\xe1ginas anteriores",next_3:"Siguientes 3 p\xe1ginas"}}}}]);