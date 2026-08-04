# ADR-001 — Alineación del sitio comercial con las Suites y el producto real

| Campo | Valor |
|-------|-------|
| **Estado** | **Propuesto** — §3.4 (rutas) y la decisión de precios quedan **en revisión** tras el hallazgo de §0: hay otra versión publicada en `yampi.ai` |
| **Fecha** | 2026-08-03 |
| **Repo** | `Hub-Ventures/yampi-site` (sitio comercial, Astro 6) |
| **Deciders** | Julián (product/eng) |
| **Método** | Auditoría afirmación-por-afirmación del sitio (`src/**`) contra el árbol real del producto (`Hub-Ventures/yampi` @ `dev`): `README.md`, `config/features.yml` (111 flags), `sidebarRailMenu.js`, los tres `*SuiteLayout.vue`, modelos, servicios y ADRs 006 / 014 / 017 / 018 / 019 |
| **Depende de** | ADR-014 (roles nativos de Suite), `docs/suites-catalog-proposal.md` (packaging por Suite y tier) |
| **Relacionados** | ADR-006 (funnel vs. roles de contacto), ADR-017 (Auco), ADR-018 (requerimientos, multipaís), ADR-019 (biblioteca de documentos) |
| **No cubre** | Rediseño visual. Los tokens del sitio ya son fieles al design system (`--yampi-9: #9B51E0` == `brand DEFAULT: rgb(155 81 224)`). Esto es arquitectura de información, contenido y veracidad |

---

## 0. ⚠ Hallazgo que reabre premisas del ADR (2026-08-03)

**Este repo Astro no es lo que está publicado.** En `https://yampi.ai/` hay **otra versión, más desarrollada**, verificada en vivo. Inventario:

| Aspecto | yampi.ai (en vivo) | Este repo Astro |
|---|---|---|
| Idiomas | **Bilingüe**: `/es/` y `/en/`, con **slugs localizados en cada locale** | Solo español, sin prefijo |
| Fichas de módulo | **8 × 2 locales = 16** | 16 (un solo idioma) |
| Precios | **Publicados: 5 tiers en COP** | Ninguno |
| H1 (es) | "Inteligencia Artificial para Inmobiliarias" — **posicionamiento AI-first** | "Del primer mensaje al arriendo cobrado" |
| Otras páginas | `/privacy`, `/terms` ×2 locales | Ninguna |
| Subdominios | `docs.yampi.ai` (+ API reference), `anuncios.yampi.ai` (announcements + roadmap), `app.yampi.ai/hc/ayuda` | — |

Slugs en vivo, por locale:

| ES | EN |
|---|---|
| `/es/gestion-de-arriendos` | `/en/rental-management` |
| `/es/contratos-digitales-firma-electronica` | `/en/digital-contracts-e-signature` |
| `/es/comunicacion-omnicanal-inmobiliaria` | `/en/omnichannel-communication` |
| `/es/agentes-ia-inmobiliarias` | `/en/ai-agents-real-estate` |
| `/es/recaudo-dispersion-arriendos` | `/en/collections-disbursements` |
| `/es/crm-inmobiliario` | `/en/real-estate-crm` |
| `/es/marketing-inmobiliario-campanas` | `/en/real-estate-marketing-campaigns` |
| `/es/integraciones-proptech-portales` | `/en/proptech-integrations` |

Precios en vivo — **tarifa plana por organización**, no por asesor ni por volumen:

| Tier | Precio/mes (COP) | Límites |
|---|---|---|
| GRATIS | $0 | 1 usuario · 30 propiedades · 1 canal · 500 conversaciones |
| SOLO | $399.000 ($339.150 anual) | 2 usuarios · 80 propiedades · 2 canales · 2.000 acciones IA |
| ASISTENTE *(Más Popular)* | $999.000 ($849.150 anual) | 4 usuarios · 200 propiedades · 4 canales · 2 líneas WhatsApp · 5.000 acciones IA |
| EQUIPO | $1.999.000 ($1.699.150 anual) | 8 usuarios · 500 propiedades · 8 canales · 4 líneas WhatsApp · 10.000 acciones IA · SLA |
| SIN LÍMITE | a convenir | ilimitado · soporte 24/7 |

### 0.1 Qué invalida

1. **La decisión de rutas en inglés (§3.4) queda en cuestión.** El objetivo era posicionar en LLMs; el sitio en vivo **ya tiene un locale `/en/` completo con slugs en inglés y contenido en inglés**, que sirve ese objetivo mejor que "rutas en inglés con contenido en español". Mi §3.4 propone una tercera estructura, incompatible con las dos. **Requiere re-ratificación.**
2. **La decisión "sin precios" sería una regresión.** yampi.ai ya publica 5 tiers. Retirarlos es perder terreno, no mantener el statu quo.
3. **Aparece un tercer modelo de packaging, y es el único público.** Los nombres de tier del catálogo ya salieron a producción (Solo / Asistente / Equipo), pero **como tarifa plana por organización**, no como las 3 Suites cobradas por asesor / por agente / por volumen. Esto agrava §7.1 en lugar de resolverlo: hay tres fuentes en desacuerdo, y la que ve el cliente es la plana.
4. **El mapa de 301 apunta a otras URLs.** No hay que redirigir `/modulos/...` (nunca fue público) sino las 16 fichas localizadas + `/privacy` y `/terms` de ambos locales.
5. **§1.2 estaba mal encuadrado.** El ADR auditó este repo como si fuera el sitio comercial. Es un rediseño no publicado; la auditoría de contenido sigue siendo válida, pero "la landing hoy" describe este repo, no lo que ve un prospecto.

### 0.2 Bugs detectados en el sitio en vivo

| # | Bug | Evidencia | Severidad |
|---|---|---|---|
| 1 | **El sitemap solo declara la home.** Las 16 fichas no están en `sitemap-0.xml` | `sitemap-index.xml` → `sitemap-0.xml` → una sola `<loc>`: `https://yampi.ai/` | **Media** (rebajada tras verificar — ver §0.3) |
| 2 | La página en inglés dice *"orchestrated by IA"* — "IA" es el acrónimo español; en inglés es "AI" | H1 de `/en/` | Media — es lo primero que lee un prospecto anglo |
| 3 | `astro.config.mjs` de este repo declara `site: 'https://www.yampi.ai'`, con `www`; lo publicado es `yampi.ai` sin `www` | [`astro.config.mjs`](../astro.config.mjs) | Media — canonical y sitemap saldrían con host equivocado |

### 0.3 Lo que el sitio en vivo hace BIEN y hay que preservar

Verificado con `curl` el 2026-08-03. Esto corrige mi valoración inicial del bug 0.2 #1:

| Comprobación | Resultado |
|---|---|
| Las 16 fichas responden | **200** todas |
| `/es/` y `/en/` | 200 · `/` hace **302** a locale ⇒ hoy usa `prefixDefaultLocale: true` |
| Indexabilidad | `<meta name="robots" content="index, follow">` |
| Canonical | Correcto y autorreferencial: `<link rel="canonical" href="https://yampi.ai/es/crm-inmobiliario">` |
| **hreflang** | **Correcto y cruzado entre locales**, con `x-default`:<br>`hreflang="es" → /es/crm-inmobiliario`<br>`hreflang="en" → /en/real-estate-crm`<br>`hreflang="x-default" → /es/crm-inmobiliario` |

**Conclusión:** el i18n SEO del sitio en vivo está bien implementado. Las fichas son rastreables, están enlazadas desde la home y correctamente canonicalizadas, así que **los buscadores las descubren por enlaces aunque no estén en el sitemap** — de ahí la rebaja de severidad. El sitemap incompleto reduce eficiencia de rastreo, no bloquea indexación.

**No puedo confirmar el estado real de indexación sin Search Console** (las consultas `site:` a buscadores no son fiables desde aquí). Lo que sí está verificado es que nada impide indexar.

**Consecuencia para el reemplazo:** esta configuración de canonical + hreflang + x-default es un activo. El sitio nuevo debe reproducirla, no reinventarla. Perderla sería la regresión de SEO más costosa de toda la migración.

---

## 1. Contexto

### 1.1 Qué es Yampi según el código

El producto se define a sí mismo (`README.md`, y así está construido) como:

> **Núcleo transversal (Propiedades + Conversaciones + Contactos) sobre el que operan tres Suites: Comercial, de Servicio y Administrativa.**

Jerarquía canónica: **Plataforma › Suites › Módulos › funcionalidades**.

Esto no es una metáfora de marketing: está implementado en tres capas.

1. **Navegación** — `sidebarRailMenu.js` construye el rail con Núcleo (Dashboard, Conversaciones, Propiedades, Calendario, Documentos, Reportes) + tres entradas de Suite, cada una con su `SecondarySidebar` (`CommercialSuiteLayout.vue`, `ServiceSuiteLayout.vue`, `AdministrativeSuiteLayout.vue`).
2. **Permisos** — `SuiteRoleable` (ADR-014) define `suite_role: service | administrative`, con Comercial como el rol sin `suite_role` (default). Excluyente con `custom_role`.
3. **Precio** — `docs/suites-catalog-proposal.md`: Comercial y Servicio se cobran **por asesor/agente**, Administrativa **por volumen**; 4 tiers cada una (Solo / Asistente / Equipo / Enterprise); bundle de las tres con −25%.

Además, tres premisas del producto que el sitio contradice o ignora:

- **Es multipaís, no colombiano.** `Treasury::Tax::CountryCatalog` y `Treasury::BankCatalog` traen packs de **CO, MX, CL, PE**; `TreasurySetting` soporta **ARS, BRL, CLP, COP, MXN, PEN, USD, UYU**. El patrón establecido es *motor agnóstico + pack de país en `config/`*. ADR-018 §1: *"Colombia es una entrada del catálogo, no el diseño."*
- **Documentos es Núcleo, y la firma es una acción sobre un documento.** ADR-019 lo tiene **ratificado e implementado**: *"Documentos es CORE: ✅ sale de la Suite Administrativa"*, y su decisión #1 es *"Document es el modelo central (estilo Drive). La firma es una **acción** sobre un documento, no un modelo paralelo."* La ruta lo confirma: el módulo vive en `accounts/:accountId/documents` y la biblioteca **es** la sección (`path: ''` → `DocumentsLibraryPage`); plantillas, en-firma y pre-firmados son segmentos dentro de ella.
  Son **dos tiers independientes, no anidados** (modelo Drive / Drive Pro):
  - `documents` — tier base: biblioteca, carpetas, compartir, papelera (90 días), ingesta de adjuntos de chat, carpeta por contacto y **pre-firmado**. Tesorería depende del pre-firmado, y por eso no puede vivir detrás del tier de firma.
  - `contracts` — tier de firma: plantillas y flujos de e-signature sobre un documento.

  Se enforzan con `ensure_documents_enabled!` / `ensure_signature_tier!` (`documents_feature.rb`). El fallback en la Suite Administrativa existe solo para cuentas con `contracts` ON y `documents` OFF — es un estado por cuenta, no la arquitectura del producto. **Consecuencia para el sitio: "Contratos y Firma Electrónica" deja de ser módulo de la Suite Administrativa y pasa a ser el tier de firma del módulo Documentos, en Núcleo.**

- **El alcance de Núcleo es más amplio de lo que sugiere el README.** El resumen del README nombra "Propiedades + Conversaciones + Contactos", pero el rail incluye además **Calendario, Documentos, Reportes y Búsqueda**, y ADR-014 lo justifica capacidad por capacidad. Dos que se confunden con facilidad:
  - **Calendario es Núcleo**, no Comercial: *"every suite role manages its own agenda, so it lives on the main rail, not inside the Commercial suite"* (`calendarItem()`).
  - **Contactos es Núcleo y cross-suite**: una fábrica única (`contactsNavItem()`) compartida por los tres layouts; el rail engancha sus rutas a la Suite que el usuario habita (`CONTACTS_HOME_BY_ROLE`), por eso *aparece dentro* de una Suite sin *pertenecer* a ella.
  - **Empresas sí es Comercial**: `Suite Companies` existe solo en `CommercialSuiteLayout.vue`. Contactos y Empresas no son el mismo módulo, y el sitio hoy los vende como uno.

### 1.2 Qué vende la landing hoy

- 1 home + 16 páginas de módulo, generadas desde [`src/data/modules.json`](../src/data/modules.json).
- Taxonomía propia de 4 categorías: **Atiende / Vende / Cobra / Automatiza**, inventada para el sitio.
- 16 módulos planos, sin jerarquía de Núcleo ni Suites.
- Sin precios, sin segmentos, sin prueba, sin páginas de decisión.

### 1.3 La brecha, medida

| Dimensión | Producto | Landing | Brecha |
|---|---|---|---|
| Taxonomía de primer nivel | Núcleo + 3 Suites | 4 categorías inventadas | **Total** |
| Unidad de cobro | por asesor / por volumen, 4 tiers | no se menciona | **Total** |
| Capacidades vendibles | 41 | 16 módulos | **25 sin vender** |
| Canales de conversación | 12 en el selector | vende 8 | **Se subvende** |
| Alcance geográfico | 4 packs de país, 8 monedas | "pasarelas colombianas" | **Se autolimita** |
| Errores factuales | — | 6 verificados (§5) | **Credibilidad** |
| Imágenes de producto | — | 0 (todo `ShotPlaceholder`) | **Bloqueante** |

**Costo de la brecha:** un prospecto ve la web, entra al producto y recibe la cotización — y encuentra tres vocabularios distintos. Y las capacidades que cierran ventas en LatAm (facturación electrónica, cartera, comisiones, conciliación, estudio de arrendamiento, portal del propietario) están construidas y no se nombran.

---

## 2. Decisión

1. **Adoptar la taxonomía del producto:** Núcleo + 3 Suites. Se retira Atiende/Vende/Cobra/Automatiza.
2. **Cubrir el 100% de las capacidades vendibles** con el inventario de §4 como fuente única, cada entrada con evidencia en código.
3. **Reposicionar como plataforma LatAm multipaís**, con Colombia como el pack más profundo — no como el techo.
4. **Publicar packaging y precios** derivados de `suites-catalog-proposal.md`.
5. **Corregir los 6 errores factuales de §5** antes de cualquier publicación.
6. **Prohibir claims sin evidencia** (§9): ninguna cifra sin medición, ningún "único en el mercado" sin sustento, nada que esté en estado *Propuesto*.
7. **Rutas en inglés, contenido en español** (§3.4), por posicionamiento en LLMs. Obliga a un mapa de 301 para las 17 URLs actuales.
8. **Pagar la deuda técnica del sitio** (§8): navegación móvil, SEO, CTA reales.

---

## 3. Arquitectura de información nueva

### 3.1 Taxonomía

```
Plataforma Yampi
├── Núcleo                    (presente en las tres Suites, por diseño)
├── Suite Comercial           — captar, mostrar y cerrar        · por asesor
├── Suite de Servicio         — atender, resolver y retener     · por agente
├── Suite Administrativa      — contratar, cobrar y cumplir     · por volumen
└── Capas transversales       (Livia, automatización, gobierno, integraciones)
```

Regla: **el sitio nunca inventa un nombre de agrupación.** Si el rail lo llama "Suite Administrativa", el sitio también.

### 3.2 Mapa de páginas

Hoy: 17 páginas (un idioma, no publicadas). Objetivo: **~90** = 45 por locale × 2 (`/es/` + `/en/`), tras la decisión K de publicar el catálogo completo bilingüe.

Rutas y contenido **por locale** (§3.4). Las cifras de abajo son **por locale**; se duplican con `/en/`.

| Tipo | Rutas | Hoy | Nuevo |
|---|---|---|---|
| Home | `/` | 1 | 1 |
| **Hub de Suite** (nuevo) | `nucleo` · `suite-comercial` · `suite-servicio` · `suite-administrativa` | 0 | 4 |
| Módulo | `/{locale}/{slug}` | 16 | 31 |
| ~~Precios~~ | — | 0 | **0** — retirados por decisión J |
| Seguridad y confianza | `seguridad` / `security` | 0 | 1 |
| Integraciones | ✅ `integraciones-proptech-portales` + detalle Wasi y Fianly | 1 | 3 |
| Segmento | `para/arriendos` · `para/ventas` · `para/administracion-ph` | 0 | 3 |
| Comparativa | `alternativa-a/hojas-de-calculo` | 0 | 1 |
| Casos | `casos-de-exito` | 0 | 1 |
| **Legal** (migradas del sitio en vivo) | ✅ `privacy` · ✅ `terms` | 0 | 2 |

El **hub de Suite** es el tipo de página nuevo que hace el trabajo pesado: explica el job-to-be-done y lista sus módulos. Es la página a la que apunta el mega-menú y la que un prospecto comparte internamente.

Reparto de las 31 fichas de módulo (§3.4): Núcleo 8 · Comercial 6 · Servicio 5 · Administrativa 7 · Transversal 5. La granularidad es una decisión, no un dato: capacidades como pasarelas, billetera y ajustes de canon son **secciones dentro de Tesorería**, no fichas propias; Grupos de WhatsApp es sección de Conversaciones; Skills, Tasks y Copilot son secciones de Livia. El criterio: **una ficha propia solo si un prospecto la buscaría por su nombre.** Por eso Voz y Telefonía sí la tiene: "grabación de llamadas" y "central telefónica" son búsquedas reales del sector, y hoy están enterradas en una viñeta.

### 3.3 Cambios en el modelo de datos del sitio

`modules.json` necesita:

- `suite`: `nucleo | comercial | servicio | administrativa | transversal` (reemplaza `cat`)
- `evidence`: flag de `config/features.yml` o ruta de código que sustenta el módulo — **obligatorio**, es el mecanismo anti-vaporware
- `status`: `ga | beta | roadmap`. Solo `ga` se publica; `roadmap` no se renderiza
- `countries`: opcional, cuando la capacidad depende de un pack de país (ej. `einvoice` → `['CO']`)
- `tier`: tier mínimo que la incluye, para enlazar módulo ↔ precios

Se conserva: `slug`, `icon`, `name`, `short`, `h1`, `sub`, `cta`, `features`, `benefits`, `versus`, `shot`.

### 3.4 Política de rutas e i18n

> **Reescrita el 2026-08-03.** La versión anterior decidía "rutas en inglés, contenido en español, sin prefijo de locale". Queda anulada por §0: el sitio en vivo **ya es bilingüe de verdad**, con `/es/` y `/en/`, slugs localizados por locale y hreflang cruzado correcto. Contenido en inglés real posiciona mejor en LLMs que una ruta en inglés con contenido en español, así que la premisa que justificaba la decisión anterior se cae.

#### ¿Se puede hacer i18n sin que cambie la ruta?

Respuesta corta: **el contenido sí se puede llevar a archivos de localización; la URL no puede ser la misma para dos idiomas.**

- **Sí:** Astro trae **i18n nativo** (`i18n` en `astro.config.mjs`: `locales`, `defaultLocale`, `routing`, `fallback`, `domains`). Todo el copy vive en archivos de localización y las plantillas quedan únicas.
- **No:** dos idiomas **no pueden compartir la misma URL**. La docs de Astro lo confirma — el enrutado por locale exige rutas distintas — y es además un requisito de SEO: `hreflang` necesita una URL por idioma. Servir dos idiomas en la misma URL (por cookie, header o JS) rompe indexación bilingüe. El sitio en vivo ya lo hace bien (§0.3) y no hay que retroceder.
- **Sí, parcialmente:** con `routing: { prefixDefaultLocale: false }` el **locale por defecto no lleva prefijo** y solo los demás lo llevan. O sea: la ruta del idioma principal *no cambia*.

| Config | Español | Inglés | Coste de migración |
|---|---|---|---|
| `prefixDefaultLocale: true` *(lo que hay hoy en vivo)* | `/es/crm-inmobiliario` | `/en/real-estate-crm` | **Cero** para los slugs que se conserven |
| `prefixDefaultLocale: false` | `/crm-inmobiliario` | `/en/real-estate-crm` | **8 × 301** en las fichas en español |

#### Decisión

1. **Astro i18n nativo**, `locales: ['es','en']`, `defaultLocale: 'es'`, **`prefixDefaultLocale: true`** — se conserva la estructura en vivo y con ella el hreflang y el canonical que ya funcionan (§0.3).
2. **Slugs localizados por locale**, como hoy: `/es/[slug-es]` y `/en/[slug-en]`. Se retira el mapa único de slugs en inglés.
3. **`fallback: { en: 'es' }`** para poder publicar el catálogo completo en español y el inglés progresivamente, sin 404 ni páginas a medias.
4. **`modules.json` pasa a tener strings por locale**: cada módulo lleva `slug`, `name`, `h1`, `sub`, `features`, `benefits`, `versus` con variante `es` y `en`. La alternativa es partirlo en `modules.es.json` / `modules.en.json`; se prefiere un solo archivo para que no derive un idioma respecto al otro.
5. **`site` se corrige a `https://yampi.ai`** (sin `www`) — bug 0.2 #3.
6. Reglas de slug que se mantienen: `kebab-case`, sin acentos, sin artículos; el slug no replica un nombre interno de flag (`captain_integration` → `livia`).

**Consecuencia de escala:** 31 fichas × 2 locales = **62 páginas de módulo**, más hubs, precios, etc. ×2. El plan pasa de ~46 a ~90 páginas. Por eso el punto 3 (`fallback`) no es opcional: sin él, el alcance del inglés bloquea la publicación del español.

#### Estructura de ruta: plana bajo el locale, sin segmento `/modules/`

**Corrección respecto a la versión anterior de esta sección.** Proponía `/en/modules/[slug]/`, pero el sitio en vivo usa slug plano bajo el locale (`/en/rental-management`, sin `/modules/`). Mantener el segmento produciría URLs incoherentes entre las 8 heredadas y las 24 nuevas. **Se adopta el patrón en vivo: `/{locale}/{slug}`.**

#### Mapa bilingue de slugs

Criterio (decisión C, extendida al español el 2026-08-03): **término comercial en cada idioma**, no término del código. ✅ = ya en vivo, se conserva sin tocar.

| # | Suite | Módulo | `/es/` | `/en/` |
|---|---|---|---|---|
| 1 | Núcleo | Propiedades | `gestion-de-propiedades` | `property-management` |
| 2 | Núcleo | Conversaciones Omnicanal | ✅ `comunicacion-omnicanal-inmobiliaria` | ✅ `omnichannel-communication` |
| 3 | Núcleo | Voz y Telefonía | `llamadas-y-telefonia` | `voice-and-telephony` |
| 4 | Núcleo | Contactos | `contactos-y-clientes` | `contacts` |
| 5 | Núcleo | Calendario y Agendamiento | `agenda-y-visitas` | `scheduling-and-visits` |
| 6 | Núcleo | Documentos y Firma Electrónica | ✅ `contratos-digitales-firma-electronica` | ✅ `digital-contracts-e-signature` |
| 7 | Núcleo | Reportes y Analítica | `reportes-inmobiliarios` | `real-estate-reports` |
| 8 | Núcleo | Búsqueda Global Inteligente | `busqueda-inteligente` | `intelligent-search` |
| 9 | Comercial | Oportunidades · Pipeline | ✅ `crm-inmobiliario` | ✅ `real-estate-crm` |
| 10 | Comercial | Empresas | `empresas-y-corporativos` | `companies` |
| 11 | Comercial | Campañas | ✅ `marketing-inmobiliario-campanas` | ✅ `real-estate-marketing-campaigns` |
| 12 | Comercial | Perfil Público del Asesor | `perfil-de-asesor` | `agent-profile` |
| 13 | Comercial | Share Links con Tracking | `links-de-propiedad-con-seguimiento` | `property-share-links` |
| 14 | Comercial | Prospección con IA | `prospeccion-con-ia` | `ai-prospecting` |
| 15 | Servicio | Mesa de Atención Omnicanal | `mesa-de-atencion` | `service-desk` |
| 16 | Servicio | SLA | `acuerdos-de-servicio-sla` | `service-level-agreements` |
| 17 | Servicio | CSAT | `satisfaccion-del-cliente` | `customer-satisfaction` |
| 18 | Servicio | Centro de Ayuda | `centro-de-ayuda` | `help-center` |
| 19 | Servicio | Portal del Propietario | `portal-del-propietario` | `owner-portal` |
| 20 | Administrativa | Administración de Arriendos | ✅ `gestion-de-arriendos` | ✅ `rental-management` |
| 21 | Administrativa | Tesorería y Cobros | ✅ `recaudo-dispersion-arriendos` | ✅ `collections-disbursements` |
| 22 | Administrativa | Desembolsos y Estado de Cuenta | `desembolsos-a-propietarios` | `owner-disbursements` |
| 23 | Administrativa | Cartera y Comisiones | `cartera-y-comisiones` | `receivables-and-commissions` |
| 24 | Administrativa | Facturación Electrónica | `facturacion-electronica` | `electronic-invoicing` |
| 25 | Administrativa | Conciliación y Contabilidad | `conciliacion-bancaria` | `bank-reconciliation` |
| 26 | Administrativa | Estudio de Arrendamiento | `estudio-de-arrendamiento` | `tenant-screening` |
| 27 | Transversal | Livia · Asistente IA | ✅ `agentes-ia-inmobiliarias` | ✅ `ai-agents-real-estate` |
| 28 | Transversal | Automatizaciones y Macros | `automatizaciones` | `automations` |
| 29 | Transversal | Flow Builder | `constructor-de-flujos` | `flow-builder` |
| 30 | Transversal | Tareas del Día | `tareas-del-dia` | `daily-tasks` |
| 31 | Transversal | Configuración y Gobierno | `administracion-y-permisos` | `administration-and-permissions` |
| — | *(página, no ficha)* | Integraciones | ✅ `integraciones-proptech-portales` | ✅ `proptech-integrations` |

**31 fichas** = Núcleo 8 · Comercial 6 · Servicio 5 · Administrativa 7 · Transversal 5. Integraciones es página, contada aparte en §3.2.

Otros slugs, mismo criterio:

| Página | `/es/` | `/en/` |
|---|---|---|
| Hubs de Suite | `nucleo` · `suite-comercial` · `suite-servicio` · `suite-administrativa` | `core` · `commercial-suite` · `service-suite` · `administrative-suite` |
| Seguridad | `seguridad` | `security` |
| Segmentos | `para/arriendos` · `para/ventas` · `para/administracion-ph` | `for/rentals` · `for/sales` · `for/condo-management` |
| Comparativa | `alternativa-a/hojas-de-calculo` | `alternative-to/spreadsheets` |
| Casos | `casos-de-exito` | `case-studies` |
| Legal *(migradas)* | ✅ `privacy` · ✅ `terms` | ✅ `privacy` · ✅ `terms` |

#### Mapa de 301: **no hace falta ninguno**

Resultado de haber mapeado los módulos **sobre** los slugs en vivo en lugar de acuñar nuevos: **las 8 URLs indexadas se conservan idénticas en ambos locales, más `/privacy` y `/terms`.** Cero redirects, cero pérdida de autoridad. Esto retira el riesgo que §12 marcaba como el más grave.

Lo que sí cambia en esas 8 es el **alcance del contenido**, no la URL. Dos casos:

- `recaudo-dispersion-arriendos` cubría recaudo **y** dispersión; ahora se queda con Tesorería (#21) y la dispersión pasa a la ficha nueva #22. La URL sigue viva y sigue siendo la canónica del tema.
- `crm-inmobiliario` cubría el CRM completo; ahora se queda con Oportunidades/Pipeline (#9) y Contactos pasa a la ficha nueva #4.

En ambos casos hay que **enlazar desde la ficha antigua a la nueva** para no perder profundidad temática ni dejar la nueva huérfana.

---

## 4. Inventario completo de capacidades

Leyenda de **Landing hoy**: ✅ se vende · ◐ se menciona parcial o mal · ❌ ausente

### 4.1 Núcleo — 8 módulos

| Módulo | Evidencia | Landing hoy |
|---|---|---|
| Propiedades | `properties`, `Property`, `PropertyManager`, `PropertyAssignment` | ✅ |
| Conversaciones omnicanal — **12 canales** | `channelFeatureMap`: `channel_{website,facebook,email,instagram,whatsapp,telegram,line,sms,api,tiktok}` + los dos de voz | ◐ vende 8; omite Telegram, Line y API (§5) |
| **Voz y Telefonía** — dos proveedores | `channel_voice` gatea ambos. `Call` (enterprise): `enum :provider, { twilio, whatsapp }`, `enum :direction, { incoming, outgoing }`, `has_one_attached :recording` | ❌ vendido como una viñeta |
| ↳ Telefonía Twilio | `voice`, `Channel::TwilioSms#voice_enabled?`, **softphone en el navegador** (`@twilio/voice-sdk`, `Voice::Provider::Twilio::TokenService` con `VoiceGrant`), entrantes y salientes con `inbound_calls_enabled?` por inbox, **conferencias** (`Voice::Conference::Manager`), **grabación** adjunta al mensaje, provisioning y teardown automáticos del TwiML app | ❌ |
| ↳ WhatsApp Calling | `whatsapp_call`, `whatsapp_calls_controller` (initiate / accept / reject / terminate / upload_recording), `Whatsapp::{CallService,IncomingCallService,CallPermissionReplyService}` | ❌ |
| Contactos | `crm`, `crm_v2`, `Contact`. **Cross-suite** por ADR-014: `contactsNavItem()` es una fábrica única compartida por los tres layouts, y el rail engancha `CONTACTS_ACTIVE_ON` a la Suite que el usuario habita (`CONTACTS_HOME_BY_ROLE`) | ✅ |
| Calendario y Agendamiento | `calendar`, `Calendar::EventTypeCatalog` (9 tipos agendables + 4 de bloqueo), `CalendarBookingLink`, `cal_com_integration`, `google_calendar_integration`. `calendarItem()`: *"Calendar is Core scope (ADR-014): every suite role manages its own agenda, so it lives on the main rail, not inside the Commercial suite"* | ✅ |
| **Documentos y Firma Electrónica** — módulo único, dos tiers (ADR-019) | `Document` como modelo central, ruta `/documents` | ◐ vendido partido y en la Suite equivocada |
| ↳ tier base `documents` | `documents`, `Document/Folder/Permission/Share`, `DocumentsLibrary::*` (11 servicios): biblioteca, carpetas, compartir, papelera 90 d, ingesta de chat, carpeta por contacto, **pre-firmado** | ❌ |
| ↳ tier firma `contracts` | `contracts`, `property_contract_automations`, `ContractSubmission/Submitter/Template`, OTP WhatsApp, extracción por IA, plantillas PDF | ✅ pero ubicado en Administrativa |
| ↳ **Verificación pública y audit trail** | `/v/:hash`, `document_sha256`, `public_verification_hash`, `ContractSubmissionEvent` con cadena de hashes, `VerifyDocumentIntegrityService` | ❌ |
| Reportes y Analítica | `reports`, `report_rollup` | ◐ omite ocupación, cartera y financiero |
| Búsqueda global inteligente | `advanced_search`, `ai_search`, `advanced_search_indexing` | ✅ |

### 4.2 Suite Comercial — 6 módulos

| Módulo | Evidencia | Landing hoy |
|---|---|---|
| Oportunidades · Pipeline | `opportunities`, `opportunity_pipelines`, `Opportunity`, `OpportunityPipeline` | ✅ |
| **Empresas** — Comercial, no Núcleo | `companies`, `Company`. `Suite Companies` existe **solo** en `CommercialSuiteLayout.vue`, y `companies_dashboard_*` solo enciende el icono de Comercial en el rail | ◐ vendido junto a Contactos |
| Campañas | `campaigns`, `whatsapp_campaign` | ✅ |
| Perfil público del asesor **+ Bio Link** | `agent_public_profile`, `marketingAssets/BioLinkBuilder.vue` | ◐ falta Bio Link |
| **Share links con tracking de intención** | `tracking_pixels`, `PropertyShareLink`, `PropertyShareIntent`, `PropertyShareLinkClick` | ❌ |
| **Prospección con IA** | `ai_prospecting`, `Opportunities::EnsureProspectOpportunity`, `property_link_prospect_tool` | ❌ |

### 4.3 Suite de Servicio — 5 módulos

| Módulo | Evidencia | Landing hoy |
|---|---|---|
| Mesa de atención omnicanal | conversación como mesa de servicio, `assignment_v2`, `advanced_assignment`, `AssignmentPolicy` | ◐ dentro de Comunicaciones |
| SLA | `sla`, `SLA_ACTIVITY`, políticas por equipo/inbox | ✅ |
| CSAT | `csat_review_notes`, `CsatSurveyResponse` | ◐ una línea |
| Centro de Ayuda | `help_center`, `help_center_embedding_search`, `Portal`, `Article` | ✅ |
| **Portal del Propietario** | `owner_portal`, `OwnerPortal::{Session,Profile}` + 14 servicios, app Vue propia, login OTP, invitación WhatsApp, portal público `/o/:uuid` | ❌ |

### 4.4 Suite Administrativa — 7 módulos

> Contratos y Firma Electrónica **no está aquí**: es el tier de firma del módulo Documentos, en Núcleo (§4.1, ADR-019). Tesorería depende del pre-firmado, que vive en el tier base de ese módulo.

| Módulo | Evidencia | Landing hoy |
|---|---|---|
| **Tenancy · Administración de arriendos** | `PropertyTenancy`, `TenancyContact`, `usePropertyActiveTenancyGuard` | ❌ (paso 04 del ciclo sin módulo) |
| Tesorería · Cobros y suscripciones | `treasury`, `Subscription`, `Payment`, `BillingCycle`, `PaymentRule`, `WalletToken`, app `wallet` | ✅ |
| **Desembolsos y Estado de cuenta del propietario** | `Payout`, `Treasury::Disbursement`, `treasury_owner_statement`, `Payments::CycleDistributor` | ◐ solo "desembolsos" |
| **Cartera con aging** | `Treasury::Cartera::AgingService`, `TreasuryCarteraPage.vue`, `aging.json.jbuilder` | ◐ implícita en estados de mora |
| **Comisiones** | `Treasury::Commissions::LiquidationService`, `PropertyCommissionsSplit`, `PropertyManagers::EffectiveCommission`, `TreasuryCommissionsPage.vue` | ❌ |
| **Facturación electrónica** | `einvoice`, `Treasury::EInvoices::*` (14 servicios), proveedor Alanube, `EInvoiceResolution`, `TaxRule` | ❌ |
| **Conciliación y contabilidad** | `Ledger::{Account,Entry,Line}`, `trial_balance`, `cash_position`, `bank_reconciliation_service`, `ReconciliationJob` | ❌ |
| **Ajustes e incrementos de canon** | `SubscriptionAdjustment`, `AdjustmentApplication`, `treasury_subscription_adjustments` | ❌ |
| **Estudio de arrendamiento (Fianly)** | `fianly_integration`, `Crm::Fianly::*` (scoring, autorización, entrenchment), `FianlyScoringStudy` | ❌ |
| Pasarelas y billetera | `payment_gateway_{wompi,epayco,bold}`, `Payments::Gateways::*`, `wompi_payout` | ◐ nombres mal (§5) |

### 4.5 Capas transversales — 5 módulos + Integraciones como página propia

| Módulo | Evidencia | Landing hoy |
|---|---|---|
| Livia · Asistente IA | `captain_integration_v2`, `Captain::{Assistant,Scenario,Document,CustomTool}`, 10 escenarios | ✅ (10 escenarios verificados) |
| ↳ **Livia Skills** | `agent_skills`, `Captain::AssistantSkill`, `SkillExecution`, `Captain::Skills::RouterService` | ❌ |
| ↳ **Livia Tasks** | `captain_tasks` | ❌ |
| ↳ Copilot | `copilot_agents_sdk`, `captain_copilot_streaming` | ◐ una línea |
| Automatizaciones y Macros | `automations`, `macros`, `AutomationRule`, `Macro` | ✅ |
| **Flow Builder** | `flow_builder`, `FlowDefinition/Execution/Log`, `Flows::SwarmOrchestrator`, nodos con acciones de Livia | ❌ |
| **Tareas del día** | `agent_agenda`, `AgentTask`, ADR-007 | ❌ |
| Configuración y Gobierno | `custom_roles`, `saml`, `audit_logs`, `extended_audit_logs`, `account_custom_theme`, `conversation_required_attributes` | ✅ |
| Integraciones | `wasi_integration` (bidireccional), `fianly_integration`, `cal_com`, `google_calendar`, `slack`, `notion`, `linear`, `shopify`, `dialogflow`, `google_translate`, `webhook`, API | ◐ lista con un error (§5) |
| **Grupos de WhatsApp** | `whatsapp_groups`, `GroupContact`, `Whatsapp::IncomingGroupEventService` | ❌ |

**Resumen:** 41 capacidades vendibles, 16 vendidas hoy. **25 sin vender o mal vendidas.**

---

## 5. Correcciones factuales obligatorias

Bloquean publicación. Todas verificadas contra el árbol.

| # | Dice la landing | Realidad | Evidencia |
|---|---|---|---|
| 1 | "Wampi" (×2) | **Wompi** | `grep -ri wampi` → 0 resultados. `payment_gateway_wompi`, `Payments::Gateways::Wompi`, `wompi_payout` |
| 2 | "Payco" | **ePayco** | `payment_gateway_epayco`, `Payments::Gateways::Epayco` |
| 3 | "Motion" | **Notion** | `notion_integration`, `settings/integrations/Notion.vue`. No existe ningún `motion_*` |
| 4 | "8 roles por propiedad … prospecto" | **7 roles**; prospecto no es rol | `ContactRoleable::PROPERTY_ASSIGNMENT_ROLES = owner, tenant, ph_admin, provider, buyer, seller, co_debtor`. ADR-006 separa funnel de roles |
| 5 | "8 canales … y llamadas de voz" | Son **12 canales**, y la voz son **dos**: `voice` (telefonía Twilio) y `whatsapp_call` (WhatsApp Calling) | `channelFeatureMap` (`ChannelItem.vue`) = website, facebook, email, instagram, **voice**, **whatsapp_call**, whatsapp, telegram, line, sms, api, tiktok. `Call` model: `enum :provider, { twilio: 0, whatsapp: 1 }`. El conteo omite Telegram, Line y API, y colapsa los dos canales de voz en una viñeta. *(X/Twitter existe como modelo legacy pero no está en el selector: no se vende)* |
| 6 | "Recupera el 40% del tiempo" | Sin medición | Se retira la cifra hasta tener dato propio (§9) |

---

## 6. Páginas nuevas fuera del catálogo de módulos

| Página | Por qué | Insumo |
|---|---|---|
| `seguridad` / `security` | Hay SAML SSO, logs de auditoría, roles granulares, cadena de hashes y verificación pública de documentos. Es el argumento que desbloquea cuentas corporativas | `saml`, `audit_logs`, `/v/:hash` |
| `integraciones-proptech-portales` ✅ + detalle Wasi y Fianly | Wasi es la objeción #1 de quien ya tiene inventario publicado ("¿pierdo mis portales?"). Respuesta: sincronización bidireccional | `Crm::Wasi::*` (export + inbound), `Crm::Fianly::*` |
| `para/arriendos` · `para/ventas` · `para/administracion-ph` | Este mercado compra por segmento, no por módulo. `ph_admin` ya es un rol de primera clase | `PROPERTY_ASSIGNMENT_ROLES`, `PropertyTenancy` |
| `alternativa-a/hojas-de-calculo` | El competidor real es la hoja de cálculo, y ya está en el copy del home | — |
| `casos-de-exito` | Cero prueba social hoy | requiere insumo comercial |
| `privacy` ✅ · `terms` ✅ | Existen en vivo ×2 locales; si el sitio nuevo las pierde quedan 4 URLs muertas y un hueco de cumplimiento (decisión L) | migración directa |

---

## 7. Packaging y precios

Publicar la estructura de `suites-catalog-proposal.md`, marcando que **NO está aplicada a `CHATWOOT_CLOUD_PLANS`** todavía:

| Suite | Unidad de cobro | Tiers |
|---|---|---|
| Comercial | por asesor | Solo · Asistente · Equipo · Enterprise |
| Servicio | por agente | Solo · Asistente · Equipo · Enterprise |
| Administrativa | por volumen (rentals, sellos de firma, facturas) | Solo · Asistente · Equipo · Enterprise |
| Bundle | las tres | −25% |

Cada módulo enlaza al tier mínimo que lo incluye (campo `tier`, §3.3). Capacidades que son **entitlement y no módulo navegable** — `owner_portal` — se venden en la página de Suite, no como ítem de nav.

### 7.1 Conflicto detectado: el catálogo está desactualizado en Documentos

| Fuente | Fecha | Qué dice |
|---|---|---|
| `suites-catalog-proposal.md` | **2026-07-30** | `contracts` + `property_contract_automations` ("firma, plantillas, validación, presignados, gestión documental") bajo `administrative_solo`. **No menciona el flag `documents`** |
| ADR-019 | **2026-07-31**, tocado 2026-08-02 | Documentos es **CORE**, con `documents` y `contracts` como **dos tiers independientes**. El flag se renombró en sitio de `documents_library_central` a `documents` |

ADR-019 es posterior y está implementado; el catálogo se redactó antes de esa ratificación. **El sitio no puede publicar un packaging donde la firma es un tier de la Suite Administrativa mientras el producto la sirve como tier de un módulo de Núcleo.**

Opciones:

- **(a) Corregir el catálogo** — Documentos sale de Administrativa y se cobra como capacidad de Núcleo con dos tiers. Coherente con el producto; obliga a rehacer los tiers administrativos y a decidir cómo se cobra un módulo de Núcleo.
- **(b) Mantener el catálogo** — la firma se sigue cobrando dentro de Administrativa aunque navegue en Núcleo. Menos trabajo, pero el sitio vendería una jerarquía que el producto contradice.

**Decisión tomada: (b), mantener el catálogo** (2026-08-03). Mi recomendación era (a); queda registrada la discrepancia y se procede con (b).

**El conflicto pasa a latente por la decisión J** (sin precios): sin página ni bloque de precios, el sitio nunca expresa la jerarquía de packaging, así que los tres modelos en desacuerdo no llegan al cliente. Único residuo: el campo `tier` de §3.3 queda sin fuente fiable — ver §14.2 #6.

**Riesgo adicional:** publicar tiers antes de aplicarlos a `CHATWOOT_CLOUD_PLANS` crea desalineación web ↔ facturación. Mitigación: publicar estructura y rangos ("desde"), no la matriz completa, hasta que se ratifique.

---

## 8. Deuda técnica del sitio

| # | Problema | Ubicación | Severidad |
|---|---|---|---|
| 1 | Sin imágenes de producto: todos los visuales son `ShotPlaceholder`. **Resuelto por decisión: handoff HTML de diseños, replicado exacto** (§8.1) | home + 16 fichas | **Bloqueante** |
| 2 | Navegación móvil inexistente: `.nav-links .nav-item { display: none }` sin hamburguesa | [`site.css:336`](../src/styles/site.css) | **Bloqueante** |
| 3 | WhatsApp falso (`wa.me/573112345678`) y CTA `mailto:` sin captura. **Resuelto por decisión L: se adopta `app.yampi.ai/app/auth/signup` con "Prueba 30 días"** | [`CtaFinal.astro`](../src/components/CtaFinal.astro) | **Bloqueante** |
| 4 | Logos placeholder "Logo cliente" ×5 bajo "Equipos que operan con Yampi" | [`index.astro:67`](../src/pages/index.astro) | **Bloqueante** |
| 5 | SEO cero: sin OG/Twitter, canonical, sitemap, robots, JSON-LD. `public/` solo tiene el favicon | `src/**`, `public/` | Alta |
| 6 | `--font-display` apunta a `Inter`; el producto self-hostea **InterDisplay** | [`tokens.css`](../src/styles/tokens.css) | Media |
| 7 | Mega-menú solo por hover, sin `aria-expanded` ni foco por teclado | [`Nav.astro`](../src/components/Nav.astro) | Media |
| 8 | Sin analítica | `BaseLayout.astro` | Media |
| 9 | ~~`© 2026` hardcodeado~~ | ✅ resuelto | — |

Ironía a corregir en el #3: el producto vende links de reserva pública para auto-agendamiento y la propia web no los usa.

### 8.1 Visuales: handoff HTML replicado exacto

**Decisión (2026-08-03):** los visuales no salen de capturas PNG del producto ni de un seeder. Julián entrega un **handoff HTML de los diseños** y el sitio los replica **exactos**.

Implicaciones:

- `ShotPlaceholder` deja de ser un marco de imagen y pasa a envolver **markup**, no un `<img>`. Hay que reescribir el componente: hoy solo acepta `src` o un placeholder.
- Ventaja sobre PNG: los mockups escalan a retina sin peso, son responsive, y se pueden ajustar sin volver a capturar. Y no exponen datos de cuentas reales.
- **Riesgo a controlar:** un mockup puede dibujar una UI que el producto no tiene. Queda sujeto a la regla §9.1 — **todo mockup publicado debe corresponder a una pantalla que existe**, con su `evidence`. Si el handoff muestra algo aspiracional, no se publica (§10).
- **Verificar cobertura al recibirlo:** las 7 fichas de la Suite Administrativa concentran las capacidades de mayor valor sin vender (facturación electrónica, cartera, comisiones, conciliación). Si el handoff no las cubre, esas fichas quedan sin visual y hay que decidir alternativa antes de Fase 2.

---

### 8.2 Posicionamiento del H1: AI-first

**Decisión L (2026-08-03):** se conserva el ángulo del sitio en vivo — **"Inteligencia Artificial para Inmobiliarias"** — en lugar del de este repo, *"Del primer mensaje al arriendo cobrado"*.

Tensión a resolver en el copy, no en la estructura: el inventario de §4 y la taxonomía de Suites argumentan **amplitud y profundidad de operación**; un H1 AI-first entra por **Livia**. No son incompatibles, pero el orden importa:

- **Titular:** IA como gancho — es el ángulo que ya está publicado y el que atrae la búsqueda de categoría.
- **Cuerpo:** la plataforma de operaciones como sustancia — es lo que sostiene el precio y lo que ninguna herramienta de IA suelta puede replicar.

Riesgo si el orden se invierte o se queda solo en lo primero: Yampi se lee como un chatbot inmobiliario más, cuando su foso real son tesorería, contratos y conciliación. La regla §9.4 aplica aquí: nada de "la única IA…" sin sustento.

---

### 8.3 Logotipo: se adopta el oficial, y la deuda de assets que arrastra

**Corregido el 2026-08-03.** El sitio dibujaba el wordmark con texto (`<span class="wordmark">yampi</span>` en Inter bold, minúsculas). El logotipo real es distinto: **"Yampi" con Y mayúscula**, tipografía geométrica propia y el punto de la "i" convertido en **bocallave** — una referencia al sector que el texto perdía por completo.

Ahora se sirve vía `Logo.astro` desde `public/brand/`, en nav, footer y la imagen Open Graph.

Deuda encontrada en `public/brand-assets/` del repo del producto:

| # | Problema | Evidencia | Impacto |
|---|---|---|---|
| 1 | **No hay vector.** Los tres "SVG" son PNG en base64 dentro de un wrapper SVG | `logo.svg` = 184 KB con 2 `<image>` y ningún `<path>` de letra | No escala sin pérdida. Se mitigó recortando y sirviendo WebP 6 KB / PNG 13 KB a 3× |
| 2 | **`logo_dark.svg` es una copia exacta de `logo.svg`** | mismo md5 `c038b051…` | El nombre promete una variante para fondo oscuro que no existe. Se usa el morado en los dos; lee bien sobre `#1D1E24`, pero no hay versión monocroma clara |
| 3 | El favicon del sitio es `logo_thumbnail.svg` tal cual: 90 KB de PNG embebido para un icono | `public/favicon.svg` | Funciona y es la marca correcta, pero pesa de más |

**Petición para el handoff (§8.1):** vector real del wordmark y del isotipo, más una **variante monocroma clara** para fondos oscuros. Con eso, `Logo.astro` se actualiza en un solo sitio.

---

## 9. Reglas de contenido

Vinculantes para todo copy futuro:

1. **Evidencia obligatoria.** Toda funcionalidad publicada declara su `evidence` (flag o ruta). Sin evidencia no se publica.
2. **Nada en estado *Propuesto*.** ADR en propuesta ⇒ no existe para el sitio (§10).
3. **Cero cifras sin medición.** Ni "40%", ni "3× más rápido". Con dato propio: se publica con fuente y fecha.
4. **"Único en el mercado" con sustento.** Hoy hay ~40 de estos claims y cero pruebas. Se conservan solo los defendibles y se reformula el resto como descripción.
5. **Vocabulario del producto.** El sitio usa los nombres del rail y de la i18n `es`. Si difieren, se corrige el sitio, no el producto.
6. **País como pack, no como techo.** "Facturación electrónica (Colombia)" ✔ · "plataforma colombiana" ✘.
7. **Conteos verificados.** Todo número ("8 canales", "10 escenarios") sale de un `grep`, no de memoria.

---

## 10. Qué NO se promete

Existe en el repo pero **no se publica**:

| Capacidad | Estado real | Razón |
|---|---|---|
| Auco (firma certificada, biometría, KYC/SARLAFT) | ADR-017 **Propuesta, pendiente de aprobación** | No implementado |
| Portal del arrendatario (`tenant_portal`) | Marcado ⚠ *flag a crear* en el catálogo | No existe |
| Requerimientos / mantenimiento | ADR-018 **Propuesto**; el catálogo lo marca ⚠ *módulo por construir* | No existe |
| Contabilidad como módulo con UI | `Ledger::*` es motor backend; sin UI propia | Se vende como *conciliación dentro de Tesorería*, no como módulo contable |
| Biblioteca de Documentos, Flow Builder, Livia Skills/Tasks, Prospección con IA | Flags reales, implementados, `enabled: false` por defecto | **Sí se publican, marcados `beta`** (decisión 2026-08-03). `status: 'beta'` en `modules.json` y badge visible en la ficha. **Precondición:** ventas debe saber activarlas por cuenta antes de prometerlas en un demo — si no, la etiqueta beta no protege de nada |

---

## 11. Plan de ejecución

### Fase 0 — Desbloqueo (sin dependencia de decisiones)
1. Correcciones factuales de §5 sobre `modules.json`
2. Navegación móvil (§8.2)
3. SEO base: OG/Twitter, canonical, `robots.txt`, sitemap, JSON-LD `SoftwareApplication` + `Organization`
4. `MOSTRAR_LOGOS = false`
5. ✅ Año dinámico

### Fase 1 — Reestructuración
6. Migrar `modules.json` al esquema de §3.3 (`suite`, `evidence`, `status`, `countries`, `tier`) y a los slugs en inglés de §3.4
7. **Refundir Contratos en Documentos** y moverlo a Núcleo: un módulo, dos tiers, con la verificación pública y el audit trail dentro (§1.1, §4.1). Es el cambio de mayor riesgo de la fase porque toca el slug con más peso comercial
8. **Mapa de 301** para las 17 URLs actuales (§3.4, §12). Se implementa junto con el cambio de rutas, no después
9. Nuevo tipo de página: hub de Suite ×4, y reescritura de `Nav.astro` + `Footer.astro` desde el nuevo esquema
10. Reposicionamiento **LatAm-4 (CO/MX/CL/PE)** en home, hero y Tesorería (decisión 2026-08-03)

### Fase 2 — Cobertura
11. **Reescribir `ShotPlaceholder`** para envolver el markup del handoff HTML en vez de un `<img>` (§8.1). Bloquea todo lo visual de esta fase
12. Replicar el handoff en home + las 31 fichas, verificando cobertura de la Suite Administrativa (§8.1)
13. 9 módulos nuevos por prioridad comercial:
    Portal del Propietario → Facturación Electrónica → Cartera y Comisiones → Estudio de Arrendamiento → Administración de Arriendos → Flow Builder → Tareas del día → Share links con tracking → Prospección con IA
    *(los cuatro con flag off van con `status: 'beta'` — §10)*
14. Enriquecer los 16 existentes con lo omitido (§4)

### Fase 3 — Conversión
15. **Migrar del sitio en vivo** (decisión L): `privacy` y `terms` ×2 locales, enlaces del footer a `docs.yampi.ai`, `docs.yampi.ai/api-reference`, `anuncios.yampi.ai/announcements`, `anuncios.yampi.ai/roadmap` y `app.yampi.ai/hc/ayuda`
16. **CTA real: `app.yampi.ai/app/auth/signup` con "Prueba 30 días"** (decisión L). Sustituye el `mailto:` y el WhatsApp falso — hay trial autoservicio, que convierte mucho mejor que "agenda una demo"
17. **Retirar los 5 tiers del bloque de precios de la home** (decisión J). Acción explícita sobre contenido publicado
18. `seguridad`, `integraciones` (+ Wasi, Fianly)
19. 3 páginas de segmento + `alternativa-a/hojas-de-calculo`
20. `casos-de-exito` cuando haya material

### Fase 4 — Cierre técnico
21. InterDisplay self-hosted, accesibilidad del mega-menú, analítica, CSP nativo de Astro 6

---

## 12. Consecuencias

**Positivas**
- Un solo vocabulario en web, producto y cotización.
- Se vuelven vendibles ~24 capacidades ya construidas.
- La evidencia obligatoria hace que el sitio no pueda desalinearse en silencio del producto.
- El TAM deja de estar amarrado a Colombia.

**Costos y riesgos**
- `modules.json` se reescribe entero: `cat` → `suite` rompe [`categories.js`](../src/lib/categories.js), `Nav.astro`, `Footer.astro` e `index.astro`. Es la razón por la que este ADR va antes del contenido.
- **Cambian las 17 URLs actuales**, por rutas en inglés (§3.4) y por reagrupación. El mapa de 301 es **obligatorio**, no condicional: `/modulos/[slug]/` → `/modules/[slug]/` para las 16 fichas, más la home. Se implementa antes del deploy, no después.
- **`/modulos/contratos/` no tiene destino 1:1**: se refunde en `/modules/documents/` (§1.1). Es el módulo con más peso comercial de los 16 actuales, así que es el 301 que no puede fallar — y el único donde el redirect cambia de tema, no solo de idioma.
- ~90 páginas es mucha más superficie de mantenimiento. Mitigación: todo sigue generándose desde un JSON.
- Publicar tiers no aplicados a facturación, y el conflicto de packaging de §7.1 sin resolver.
- El sitio pasa a depender de `config/features.yml`: cuando el producto renombra o retira un flag, el sitio queda desalineado. **Mitigación propuesta: un check en CI que valide que cada `evidence` de `modules.json` existe en el árbol del producto.**

---

## 13. Métricas de éxito

| Métrica | Hoy | Objetivo |
|---|---|---|
| Capacidades vendibles cubiertas | 16 / 41 | 41 / 41 |
| Errores factuales | 6 | 0 |
| Páginas con imagen real de producto | 0 | 100% |
| Navegación completa en móvil | no | sí |
| Páginas de decisión (precios, seguridad, integraciones, segmentos) | 0 | 8 |
| Claims con cifra sin fuente | ≥1 | 0 |
| Cobertura de `evidence` en `modules.json` | 0% | 100%, validado en CI |

---

## 14. Decisiones tomadas y preguntas abiertas

### 14.1 Cerradas — 2026-08-03

| # | Pregunta | Decisión | Impacto |
|---|---|---|---|
| A | Visuales de producto | **Handoff HTML de diseños, replicado exacto** — ni PNG ni seeder | §8.1 nueva; obliga a reescribir `ShotPlaceholder`; Fase 2 ítems 11-12 |
| B | Alcance geográfico | **LatAm-4 (CO/MX/CL/PE)**, Colombia como el pack más profundo | Fase 1 ítem 10; regla §9.6 |
| C | Criterio de slugs ambiguos | **Término comercial en inglés**, no término del código | `tenancy` → `lease-management`; `condo-management`; excepción admitida a §9.5 |
| D | Capacidades con flag off | **Se publican marcadas `beta`** | §10; `status: 'beta'` en `modules.json` |
| E | Relación con `yampi.ai` | **Este repo reemplaza el sitio en vivo** | El mapa de 301 sale de las 16 URLs localizadas en vivo + `/privacy` y `/terms` ×2, no de `/modulos/…` |
| F | Precios | **Sin precios: solo "habla con ventas"** — reafirmado tras señalar que yampi.ai ya publica 5 tiers | `/pricing/` sale del plan (Fase 3). **Es una retirada consciente de precios ya públicos**, no la conservación del statu quo. §7.1 queda latente: sin página de precios, el sitio nunca expresa la jerarquía de packaging, así que la contradicción de tres modelos no llega al cliente |
| G | i18n y rutas | **Astro i18n nativo, `/es/` + `/en/` con slugs localizados y `prefixDefaultLocale: true`** | §3.4 reescrita; anula la decisión previa de rutas en inglés sin locale. Escala a ~90 páginas ⇒ `fallback: { en: 'es' }` obligatorio |
| I | Slugs del locale `/es/` | **Mismo criterio que inglés: término comercial**, aplicado mecánicamente | §3.4: 24 slugs nuevos acuñados; las 7 fichas + 1 página con slug en vivo se conservan |
| J | Alcance de "sin precios" | **Retirar los precios por completo** — ni página ni bloque en la home | Fase 3 ítem 17. Retira de producción 5 tiers hoy visibles en `/es/#pricing`. Señalé la regresión y fue reafirmado; queda como decisión consciente |
| K | Alcance del inglés | **Las 31 fichas en ambos idiomas** | ~90 páginas. `fallback: { en: 'es' }` deja de ser muleta y pasa a red de seguridad |
| L | Qué se migra del sitio en vivo | **Todo: `privacy`/`terms`, enlaces del footer a subdominios, CTA de signup, y el posicionamiento AI-first del H1** | Fase 3 ítems 15-16; §8 #3 resuelto; §8.2 nueva sobre el H1 |
| H | Sitemap del sitio en vivo | **Verificar antes de actuar** | Verificado (§0.3): las 16 fichas dan 200, son `index, follow`, tienen canonical y hreflang correctos y están enlazadas desde la home ⇒ se descubren por enlaces. Bug rebajado de Alta a Media. **El estado real de indexación no es verificable sin Search Console** |

### 14.2 Abiertas

1. **El handoff HTML.** Pendiente de que me lo pases. Al recibirlo verifico si cubre las 7 fichas de la Suite Administrativa — las de mayor valor sin vender (§8.1).
2. **Logos de clientes.** Hay permiso; pendientes de que me los pases. Hasta entonces `MOSTRAR_LOGOS = false`.
3. **Traducción de las 24 fichas nuevas al inglés.** La decisión K pide catálogo completo bilingüe: ¿el copy en inglés lo escribo yo desde el español, o lo revisa alguien? Con 24 fichas × ~30 strings es donde más se puede degradar la calidad.
4. **Derivada de J:** ¿el retiro de los 5 tiers se comunica de alguna forma a prospectos en curso? Hoy están públicos y alguien puede estar decidiendo con ellos.
5. **Derivada de D:** ¿quién en ventas confirma que sabe activar los cuatro flags `beta` por cuenta? Sin eso, la etiqueta no protege de prometer en demo algo apagado.
6. **Latente — §7.1.** Con la decisión J el conflicto de packaging no llega al cliente, pero el campo `tier` de §3.3 queda sin fuente fiable. Opciones: retirar el campo, o resolver el catálogo. **Recomiendo retirarlo** mientras no haya precios que enlazar.
7. **Bug 0.2 #2** — el H1 en inglés dice *"orchestrated by IA"* en vez de "AI". Se arregla al reescribir el home; lo dejo anotado para que no se copie el error del handoff.

---

## 15. Referencias

**Producto** (`Hub-Ventures/yampi` @ `dev`)
- `README.md` — núcleo + 3 Suites
- `config/features.yml` — 111 flags
- `app/javascript/dashboard/components-next/sidebar/sidebarRailMenu.js` — IA canónica
- `app/javascript/dashboard/routes/dashboard/suites/*SuiteLayout.vue`
- `app/models/concerns/suite_roleable.rb` — ADR-014
- `docs/suites-catalog-proposal.md` — packaging (2026-07-30; **desactualizado en Documentos**, ver §7.1)
- `docs/ADR-019-documents-library-central.md` — Documentos es CORE, firma como acción sobre un documento, dos tiers
- `app/javascript/dashboard/routes/dashboard/contracts/contracts.routes.js` — la biblioteca **es** la sección (`/documents`, `path: ''`)
- `app/controllers/concerns/documents_feature.rb` — `ensure_documents_enabled!` / `ensure_signature_tier!`
- `docs/ADR-006`, `ADR-014`, `ADR-017`, `ADR-018`
- `app/services/treasury/tax/country_catalog.rb`, `app/services/treasury/bank_catalog.rb` — multipaís

**Sitio** (este repo)
- [`src/data/modules.json`](../src/data/modules.json) · [`src/lib/categories.js`](../src/lib/categories.js) · [`src/pages/index.astro`](../src/pages/index.astro) · [`src/components/Nav.astro`](../src/components/Nav.astro) · [`src/styles/site.css`](../src/styles/site.css)
