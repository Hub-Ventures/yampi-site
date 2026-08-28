// Textos legales recuperados del sitio anterior (Hub-Ventures/landing,
// `src/i18n/locales/es.ts`, claves `terms` y `privacy`). Se transcriben
// literalmente: el orden de secciones es el que renderizaban
// `src/pages/[lang]/terms.astro` y `privacy.astro`.
//
// NO editar la redacción sin pasar por Legal. Si cambia el texto, actualizar
// también `actualizado` y `vigencia`.

export const TERMINOS = {
  title: 'Términos y Condiciones',
  actualizadoLabel: 'Última actualización',
  actualizado: '10.08.2025',
  vigenciaLabel: 'Fecha de vigencia',
  vigencia: '28 de agosto de 2025',
  entidad: 'YAMPI, INC.',
  sections: [
    {
      title: '1. DEFINICIONES Y ACEPTACIÓN',
      definiciones: [
        {
          term: 'Agente Autorizado',
          desc: 'Cualquier empleado, representante o proveedor de servicios de terceros autorizado por un Usuario para interactuar con la Plataforma en su nombre.',
        },
        {
          term: 'Contenido',
          desc: 'Incluye todos los datos, documentos, mensajes, medios y comunicaciones enviados, generados, almacenados o transmitidos a través de la Plataforma, ya sea por Usuarios o agentes de IA automatizados.',
        },
        {
          term: 'Fecha Efectiva',
          desc: 'La fecha en que el Usuario accede o usa por primera vez la Plataforma, a menos que se especifique lo contrario en un Formulario de Orden.',
        },
        {
          term: 'Plataforma',
          desc: 'La suite de servicios de software propietarios, sistemas y características operados por Yampi, incluyendo gestión automatizada de contratos, facilitación de pagos, manejo de solicitudes de mantenimiento y herramientas de comunicación accesibles a través de WhatsApp y otras interfaces.',
        },
        {
          term: 'Servicios',
          desc: 'La funcionalidad de software-como-servicio (SaaS) puesta a disposición a través de la Plataforma, incluyendo pero no limitado a automatización de contratos de arrendamiento, procesamiento de pagos, coordinación de mantenimiento y herramientas de interacción con clientes basadas en IA.',
        },
        {
          term: 'Usuario',
          desc: 'Cualquier individuo o entidad legal (incluyendo propietarios, inquilinos, administradores de propiedades o Agentes Autorizados) que accede o usa la Plataforma en cualquier capacidad.',
        },
      ],
      sub: [
        {
          title: '1.2 Aceptación de Términos',
          paras: [
            'Al acceder o usar la Plataforma de cualquier manera, ya sea a través de registro, inicio de sesión, integración con WhatsApp o cualquier otra interfaz, usted reconoce que ha leído, entendido y está de acuerdo en estar sujeto a estos Términos.',
            'Si no está de acuerdo con estos Términos, no debe acceder o usar la Plataforma.',
          ],
        },
      ],
    },
    {
      title: '2. ACCESO Y ELEGIBILIDAD',
      sub: [
        {
          title: '2.1 Elegibilidad del Usuario',
          paras: [
            'El acceso a la Plataforma se proporciona únicamente a Usuarios que cumplan con los requisitos de elegibilidad establecidos en este Acuerdo. Para ser elegible para usar los Servicios, debe tener al menos dieciocho (18) años de edad o la edad de mayoría en su jurisdicción, la que sea mayor.',
          ],
        },
        {
          title: '2.2 Suspensión o Terminación del Acceso',
          paras: [
            'Yampi puede, a su sola discreción y sin previo aviso, restringir, suspender o terminar el acceso a la Plataforma para cualquier Usuario que no cumpla con estos criterios de elegibilidad o cualquier otra disposición de este Acuerdo.',
          ],
        },
        {
          title: '2.3 Precisión de la Información',
          paras: [
            'Los Usuarios son responsables de asegurar que cualquier información proporcionada durante la creación de cuenta o uso de la Plataforma sea precisa, completa y se mantenga actualizada.',
          ],
        },
      ],
    },
    {
      title: '3. RESPONSABILIDADES DEL USUARIO',
      sub: [
        {
          title: '3.1 Obligaciones Generales',
          paras: [
            'Cada Usuario asume la responsabilidad exclusiva por todas las actividades que ocurran bajo la cuenta del Usuario o de otra manera en conexión con el uso de la Plataforma por parte del Usuario, incluyendo acciones emprendidas por Agentes Autorizados.',
          ],
        },
        {
          title: '3.2 Seguridad de la Cuenta',
          paras: [
            'Los Usuarios deben mantener la confidencialidad de todas las credenciales de inicio de sesión y deben notificar a Yampi prontamente al enterarse de cualquier acceso no autorizado, incidente de seguridad sospechado o compromiso de información de la cuenta.',
          ],
        },
        {
          title: '3.3 Precisión de la Información por Rol',
          paras: [
            'Los propietarios y administradores de propiedades deben asegurar que la información de la propiedad, términos contractuales y comunicaciones facilitadas a través de la Plataforma sean precisos y legales.',
          ],
        },
      ],
    },
    {
      title: '4. SERVICIOS Y ACCESO A LA PLATAFORMA',
      sub: [
        {
          title: '4.1 Concesión de Acceso',
          paras: [
            'Yampi pondrá la Plataforma y cualquier interfaz móvil o conversacional asociada disponible para cada Usuario elegible sobre una base de software-como-servicio.',
          ],
        },
        {
          title: '4.2 Características de la Plataforma y Actualizaciones',
          paras: [
            'Yampi alojará la Plataforma en infraestructura en la nube ubicada en los Estados Unidos, la República de Colombia, o tales otras jurisdicciones como Yampi pueda seleccionar razonablemente.',
          ],
        },
        {
          title: '4.3 Procesamiento de Pagos',
          paras: [
            'Yampi procesará pagos de arriendo y otros cargos autorizados a través de procesadores de pago de terceros que cumplan con el Estándar de Seguridad de Datos de la Industria de Tarjetas de Pago (PCI-DSS).',
          ],
        },
      ],
    },
    {
      title: '5. TARIFAS, FACTURACIÓN, CONVERSIÓN DE MONEDA E IMPUESTOS',
      sub: [
        {
          title: '5.1 Tarifas y Cronogramas',
          paras: [
            'Yampi cobrará las tarifas de suscripción, transacción y servicio auxiliar que se establezcan en el Formulario de Orden aplicable o, en ausencia de un Formulario de Orden, en el cronograma de tarifas actual publicado en la Plataforma.',
          ],
        },
        {
          title: '5.2 Facturación y Términos de Pago',
          paras: [
            'Las facturas se emiten electrónicamente sobre una base mensual a menos que las partes hayan acordado por escrito un ciclo de facturación diferente. Cada factura es debida y pagadera, sin compensación o deducción, dentro de quince días calendario de la fecha de la factura.',
          ],
        },
        {
          title: '5.3 Cargos Bancarios e Impuestos',
          paras: [
            'Los Usuarios soportarán todos los cargos bancarios, tarifas de transferencia bancaria, tarifas de intercambio de tarjetas de crédito y costos de paso similar y todos los impuestos, gravámenes, deberes o evaluaciones gubernamentales similares de cualquier tipo.',
          ],
        },
      ],
    },
    {
      title: '6. PROTECCIÓN DE DATOS, PRIVACIDAD Y GOBIERNO DE INFORMACIÓN',
      sub: [
        {
          title: '6.1 Alcance y Marco Legal',
          paras: [
            'Yampi reconoce que el Contenido que los Usuarios cargan o generan a través de la Plataforma: acuerdos de arrendamiento, instrucciones de pago, registros de mantenimiento, fotografías y transcripciones conversacionales, a menudo contiene datos personales relacionados con propietarios, inquilinos y proveedores de servicios.',
          ],
        },
        {
          title: '6.2 Roles de Controlador y Procesador',
          paras: [
            'Yampi actúa como un controlador de datos independiente para información a nivel de cuenta que recopila directamente de los Usuarios, como detalles de registro, identificadores de facturación, metadatos del dispositivo y telemetría de la Plataforma.',
          ],
        },
        {
          title: '6.4 Medidas de Seguridad',
          paras: [
            'Yampi emplea salvaguardas administrativas, técnicas y físicas alineadas con controles ISO 27001, PCI-DSS para datos de pago y el Marco de Ciberseguridad NIST de EE.UU.',
          ],
        },
      ],
    },
    {
      title: '7. PROPIEDAD INTELECTUAL, LICENCIA DE CONTENIDO Y RETROALIMENTACIÓN',
      sub: [
        {
          title: '7.1 Materiales de Yampi',
          paras: [
            'Todo el software, interfaces de programación de aplicaciones, documentación, gráficos, texto, audio, video, algoritmos, modelos, bases de datos y otros materiales que Yampi pone a disposición a través de la Plataforma junto con todas las patentes, derechos de autor, secretos comerciales, marcas comerciales, marcas de servicio, nombres de dominio y otros derechos de propiedad intelectual asociados.',
          ],
        },
        {
          title: '7.2 Contenido del Usuario',
          paras: [
            'Cada Usuario retiene la propiedad de los datos, documentos y otros materiales que el Usuario carga a o genera dentro de la Plataforma. Al transmitir Contenido del Usuario, el Usuario otorga a Yampi y sus afiliados una licencia mundial, libre de regalías.',
          ],
        },
      ],
    },
    {
      title: '8. CONFIDENCIALIDAD Y NO DIVULGACIÓN',
      sub: [
        {
          title: '8.1 Definición de Información Confidencial',
          paras: [
            'Cada parte mantendrá en estricta confidencialidad toda la información comercial, técnica y financiera no pública divulgada por la otra parte en conexión con la negociación o ejecución de estos Términos.',
          ],
        },
        {
          title: '8.2 Estándar de Cuidado',
          paras: [
            'La Parte Receptora usará el mismo grado de cuidado que emplea para proteger su propia información sensible comparable, y en cualquier evento no menos que un estándar de cuidado razonable.',
          ],
        },
      ],
    },
  ],
  contacto: {
    title: 'Para preguntas sobre estos términos, contacte a:',
    empresa: 'Yampi, Inc. Attn: Legal Department',
    direccion: '800 N King Street Suite 304 #4217, Wilmington, DE 19801, US',
    email: 'legal@yampi.ai',
  },
};

export const PRIVACIDAD = {
  title: 'Política de Privacidad',
  actualizadoLabel: 'Última actualización',
  actualizado: '10.08.2025',
  vigenciaLabel: 'Fecha de vigencia',
  vigencia: '28 de agosto de 2025',
  sections: [
    {
      title: 'Introducción',
      paras: [
        'En Yampi.ai, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestra plataforma de gestión inmobiliaria.',
        'Nos comprometemos a ser transparentes sobre nuestras prácticas de privacidad y a cumplir con todas las leyes aplicables de protección de datos.',
      ],
    },
    {
      title: 'Información que Recopilamos',
      sub: [
        {
          title: 'Información Personal',
          paras: ['Recopilamos información personal que usted nos proporciona directamente:'],
          items: [
            'Nombre completo y datos de contacto',
            'Dirección de correo electrónico',
            'Número de teléfono',
            'Dirección física',
            'Información de pago y facturación',
          ],
        },
        {
          title: 'Información de Propiedades',
          paras: ['Recopilamos información relacionada con propiedades inmobiliarias:'],
          items: [
            'Detalles de propiedades (dirección, características, fotos)',
            'Contratos de arrendamiento y venta',
            'Registros de mantenimiento y reparaciones',
            'Comunicaciones entre propietarios e inquilinos',
          ],
        },
        {
          title: 'Información de Uso',
          paras: ['Recopilamos automáticamente cierta información cuando utiliza nuestra plataforma:'],
          items: [
            'Información del dispositivo y navegador',
            'Dirección IP y ubicación geográfica',
            'Tipo de navegador y sistema operativo',
            'Datos de uso y analíticas de la plataforma',
          ],
        },
      ],
    },
    {
      title: 'Cómo Utilizamos su Información',
      sub: [
        {
          title: 'Prestación de Servicios',
          paras: [
            'Utilizamos su información para proporcionar, mantener y mejorar nuestros servicios de gestión inmobiliaria, incluyendo la automatización de contratos, procesamiento de pagos y comunicación con clientes.',
          ],
        },
        {
          title: 'Comunicación',
          paras: [
            'Utilizamos su información de contacto para comunicarnos con usted sobre su cuenta, actualizaciones del servicio, y para enviarle información importante relacionada con sus propiedades.',
          ],
        },
        {
          title: 'Mejora del Servicio',
          paras: [
            'Analizamos su información de uso para entender cómo se utiliza nuestra plataforma y para desarrollar nuevas características y mejoras.',
          ],
        },
        {
          title: 'Cumplimiento Legal',
          paras: [
            'Utilizamos su información para cumplir con obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos.',
          ],
        },
      ],
    },
    {
      title: 'Compartir Información',
      sub: [
        {
          title: 'Proveedores de Servicios',
          paras: [
            'Compartimos información con proveedores de servicios de confianza que nos ayudan a operar nuestra plataforma, como procesadores de pagos y servicios de hosting.',
          ],
        },
        {
          title: 'Socios Comerciales',
          paras: [
            'Podemos compartir información con socios comerciales autorizados para ofrecer servicios complementarios relacionados con la gestión inmobiliaria.',
          ],
        },
        {
          title: 'Requisitos Legales',
          paras: [
            'Podemos divulgar información cuando sea requerido por ley, orden judicial, o para proteger nuestros derechos, propiedad o seguridad.',
          ],
        },
        {
          title: 'Transferencia de Negocio',
          paras: [
            'En caso de fusión, adquisición o venta de activos, su información puede ser transferida como parte de esa transacción.',
          ],
        },
      ],
    },
    {
      title: 'Seguridad de Datos',
      sub: [
        {
          title: 'Medidas de Seguridad',
          paras: [
            'Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger su información:',
          ],
          items: [
            'Cifrado de datos en tránsito y en reposo',
            'Controles de acceso estrictos y autenticación multifactor',
            'Monitoreo continuo de seguridad y detección de amenazas',
            'Capacitación regular del personal en prácticas de seguridad',
          ],
        },
        {
          title: 'Retención de Datos',
          paras: [
            'Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.',
          ],
        },
      ],
    },
    {
      title: 'Sus Derechos',
      sub: [
        {
          title: 'Acceso',
          paras: [
            'Tiene derecho a acceder a la información personal que tenemos sobre usted y a recibir una copia de esa información.',
          ],
        },
        {
          title: 'Corrección',
          paras: ['Tiene derecho a corregir cualquier información inexacta o incompleta que tengamos sobre usted.'],
        },
        {
          title: 'Eliminación',
          paras: ['Tiene derecho a solicitar la eliminación de su información personal en ciertas circunstancias.'],
        },
        {
          title: 'Portabilidad',
          paras: [
            'Tiene derecho a recibir su información personal en un formato estructurado y legible por máquina.',
          ],
        },
        {
          title: 'Oposición',
          paras: ['Tiene derecho a oponerse al procesamiento de su información personal para ciertos fines.'],
        },
      ],
    },
    // ─────────────────────────────────────────────────────────────────────
    // SECCIÓN NUEVA — no viene de la landing anterior.
    //
    // La exige la verificación OAuth de Google (proyecto yampi-463200). Sus
    // cinco sub-secciones responden punto por punto lo que pidió el equipo de
    // Third Party Data Safety: datos accedidos, uso, compartición,
    // almacenamiento/protección y retención/eliminación.
    //
    // Cada afirmación se verificó contra el monorepo:
    //   scope calendar.events ....... GoogleCalendarController#auth_url
    //   ventana 30/30 ............... GoogleCalendarAdapter::IMPORT_*_HORIZON
    //   credenciales cifradas ....... CalendarProviderConnection `encrypts`
    //   borrado en cascada .......... User `dependent: :destroy_async`
    //   contexto al LLM ............. Captain::Copilot::CalendarPromptContext
    //
    // No agregar aquí capacidades que el producto no tenga: Google compara la
    // política contra el comportamiento real.
    // ─────────────────────────────────────────────────────────────────────
    {
      title: 'Integración con Google Calendar',
      paras: [
        'Yampi ofrece una integración opcional con Google Calendar. Solo se activa si usted la conecta desde Configuración → Calendario, y puede desconectarla cuando quiera. Esta sección describe en detalle cómo tratamos los datos que obtenemos de las APIs de Google.',
      ],
      sub: [
        {
          title: '1. Datos a los que accedemos',
          paras: [
            'Solicitamos un único permiso: ver y editar eventos de su calendario (https://www.googleapis.com/auth/calendar.events). Es el permiso más acotado que permite la función. Sobre su calendario principal accedemos a:',
          ],
          items: [
            'Datos del evento: título, descripción, fecha y hora de inicio y fin, estado (confirmado, cancelado) y ubicación',
            'Participantes: correo electrónico, nombre visible y estado de respuesta a la invitación',
            'Enlaces de videoconferencia: enlaces de Google Meet asociados al evento',
            'Propiedades extendidas privadas, que usamos para etiquetar el evento con el identificador interno de Yampi y mantener la correlación entre ambos sistemas',
            'Disponibilidad (FreeBusy): únicamente bloques de tiempo ocupado, sin contenido de los eventos',
            'Tokens de sincronización incremental que provee Google',
          ],
        },
        {
          title: 'Datos a los que NO accedemos',
          paras: [
            'No accedemos a la lista de sus calendarios ni a calendarios secundarios o compartidos, a la información de su perfil de Google, a la configuración de su cuenta, a las listas de control de acceso, ni a ningún dato fuera del permiso calendar.events.',
            'La importación se limita a una ventana de 30 días hacia el pasado y 30 días hacia el futuro, tanto en la sincronización inicial como en las incrementales.',
          ],
        },
        {
          title: '2. Cómo usamos estos datos',
          paras: ['Los datos de Google Calendar se usan exclusivamente dentro de Yampi, para estas funciones visibles en el producto:'],
          items: [
            'Sincronización bidireccional: lo que crea, edita o cancela en Yampi se refleja en su Google Calendar, y lo que cambia en Google Calendar se importa a Yampi',
            'Disponibilidad y reservas: consultamos FreeBusy para calcular sus horarios libres y evitar reservas dobles cuando alguien agenda desde un enlace público. Quien agenda solo ve bloques ocupado/libre, nunca el contenido de sus eventos',
            'Enlaces de Google Meet: para eventos de tipo videollamada, pedimos a Google que genere el enlace y lo mostramos en la ficha del evento',
            'Sincronización casi en tiempo real: registramos un canal de notificaciones de Google que nos avisa de los cambios, en lugar de esperar al ciclo de reconciliación',
            'Coincidencia de contactos: los correos de los participantes se usan para encontrar o crear la ficha de contacto correspondiente dentro de su misma cuenta de Yampi',
            'Asistente de IA: si usa el asistente, este puede consultar, crear, modificar o cancelar eventos cuando usted se lo pide en la conversación',
          ],
        },
        {
          title: '3. Con quién compartimos estos datos',
          paras: [
            'No compartimos datos de Google con terceros para publicidad, analítica ni fines comerciales. Ningún servicio de analítica, publicidad o rastreo recibe información de su calendario, y no la vendemos.',
            'Los datos están aislados por cuenta y por usuario: no es posible el acceso entre cuentas. El contenido completo del evento que devuelve Google se guarda internamente y nunca se expone a través de nuestra API pública, que solo devuelve el proveedor, el identificador externo, el estado de sincronización y la fecha de la última sincronización.',
            'Compartimos datos de forma limitada con dos categorías de proveedores, obligados por contrato a protegerlos y a no usarlos para ningún otro fin:',
          ],
          items: [
            'Infraestructura: alojamiento y base de datos (Amazon Web Services) y caché en memoria (Redis), únicamente para operar el servicio',
            'Modelos de inteligencia artificial: cuando usa el asistente, enviamos al proveedor de IA configurado en su cuenta —Google (Gemini), Anthropic u OpenAI, a elección suya— solo la información del calendario necesaria para responder a su solicitud: identificador, título, estado y horario del evento, y los criterios de búsqueda que usted indique. Se envía en el momento de responder y no se usa para entrenar ni mejorar modelos',
          ],
        },
        {
          title: '4. Almacenamiento y protección',
          paras: [
            'Los datos se guardan en nuestra base de datos, siempre asociados a su cuenta y a su usuario. Las credenciales de acceso (tokens de acceso y de actualización) se almacenan en una columna cifrada mediante el cifrado de Rails, nunca en texto plano. El resto de la información de calendario se guarda en columnas protegidas por el cifrado en reposo del proveedor de base de datos.',
          ],
          items: [
            'Los tokens de acceso se renuevan automáticamente antes de expirar. Si Google informa que un token fue revocado, la conexión se marca como revocada y la sincronización se detiene',
            'El flujo de autorización usa un parámetro de estado firmado y con vencimiento, para impedir ataques de falsificación de petición durante el retorno de Google',
            'El aislamiento entre cuentas y entre usuarios se aplica a nivel de consulta a la base de datos',
            'Toda la comunicación con las APIs de Google usa HTTPS/TLS, y el punto de entrada de notificaciones solo acepta conexiones HTTPS',
            'Los resultados de disponibilidad se guardan en caché por pocos minutos; ningún contenido de los eventos se almacena fuera de la base de datos',
          ],
        },
        {
          title: 'Incidentes de seguridad',
          paras: [
            'Ante una vulneración confirmada o sospechada que afecte datos de Google, notificaremos a los usuarios afectados sin demora indebida y dentro de los plazos que exija la ley aplicable, e investigaremos y contendremos el incidente. Si detecta o sospecha un acceso no autorizado a los datos de su calendario, escríbanos a hola@yampi.ai.',
          ],
        },
        {
          title: '5. Retención y eliminación',
          paras: [
            'Conservamos los datos importados mientras la integración esté conectada y su cuenta exista. Solo mantenemos eventos dentro de la ventana de 30 días hacia atrás y 30 hacia adelante; los eventos ya realizados se marcan como completados y quedan como referencia histórica dentro de su cuenta. La reconciliación periódica corre cada 15 minutos, con las notificaciones de Google cubriendo los cambios intermedios.',
            'Puede eliminar estos datos por cualquiera de estas vías:',
          ],
          items: [
            'Desconectar Google Calendar desde la configuración de su perfil: se detiene el canal de notificaciones y se eliminan todas las credenciales de acceso. Además puede solicitarnos que, al desconectar, purguemos los eventos, participantes y vínculos ya importados',
            'Eliminar su usuario o la cuenta de la organización: todos los datos de calendario asociados se borran de forma permanente y en cascada',
            'Retirar el permiso desde la configuración de seguridad de su cuenta de Google: Yampi lo detecta en el siguiente intento de renovación, marca la conexión como revocada y deja de acceder a sus datos',
            'Solicitud directa a legal@yampi.ai: procesamos y confirmamos la solicitud dentro de los 30 días siguientes',
          ],
        },
        {
          title: 'Portabilidad',
          paras: [
            'Puede solicitar una copia de sus datos de Google Calendar almacenados en Yampi escribiendo a data@yampi.ai.',
          ],
        },
        {
          title: 'Cambios en esta integración',
          paras: [
            'Si cambiamos la manera en que accedemos, usamos, almacenamos o compartimos datos de Google de un modo que esta política no cubra, actualizaremos esta política y avisaremos a los usuarios afectados antes de aplicar el cambio. Se le pedirá aceptar la política actualizada antes de que Yampi acceda a sus datos bajo los nuevos términos.',
          ],
        },
        {
          title: 'Declaración de Uso Limitado',
          paras: [
            'El uso y la transferencia por parte de Yampi de datos de usuario, en bruto o derivados, recibidos de las APIs de Google se ajustará a la Política de Datos de Usuario de los Servicios de la API de Google, incluidos los requisitos de Uso Limitado. En particular, Yampi no utiliza ni transfiere estos datos para desarrollar, mejorar ni entrenar modelos generalizados de inteligencia artificial o aprendizaje automático, ni para publicidad de ningún tipo.',
          ],
          // Google revisa en inglés y compara contra su redacción de ejemplo:
          // va literal para que el revisor la reconozca sin ambigüedad.
          quote:
            'The use and transfer of raw or derived user data received from Google APIs by Yampi will adhere to the Google API Services User Data Policy, including the Limited Use requirements. Yampi does not use or transfer this data to develop, improve, or train generalized AI and/or ML models.',
        },
      ],
    },
    {
      title: 'Cookies y Tecnologías Similares',
      sub: [
        {
          title: 'Tipos de Cookies',
          paras: ['Utilizamos diferentes tipos de cookies en nuestra plataforma:'],
          items: [
            'Cookies esenciales necesarias para el funcionamiento básico',
            'Cookies de análisis para entender el uso de la plataforma',
            'Cookies funcionales para recordar sus preferencias',
            'Cookies de marketing para personalizar contenido',
          ],
        },
        {
          title: 'Gestión de Cookies',
          paras: [
            'Puede controlar y gestionar las cookies a través de la configuración de su navegador. Sin embargo, deshabilitar ciertas cookies puede afectar la funcionalidad de nuestra plataforma.',
          ],
        },
      ],
    },
    {
      title: 'Privacidad de Menores',
      paras: [
        'Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores de edad.',
      ],
    },
    {
      title: 'Cambios a esta Política',
      paras: [
        "Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestra plataforma y actualizando la fecha de 'última actualización'.",
      ],
    },
  ],
  contacto: {
    title: 'Contacto',
    empresa: 'Yampi, Inc. Attn: Privacy Department',
    direccion: '800 N King Street Suite 304 #4217, Wilmington, DE 19801, US',
    email: 'privacy@yampi.ai',
  },
};
