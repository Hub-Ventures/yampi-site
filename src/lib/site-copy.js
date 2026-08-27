export const SITE_NAME = 'Yampi';

export const YAMPI_APP_URL = import.meta.env.PUBLIC_YAMPI_APP_URL || 'https://app.yampi.ai';

export const HOME_HERO_TITLE = 'La IA para inmobiliarias que viven en WhatsApp.';

export const HOME_HERO_DESCRIPTION =
  'Livia es la Inteligencia Artificial que opera tus procesos inmobiliarios. Agentes que contestan WhatsApp, perfilan al interesado, levantan el inventario, redactan el contrato y arman el reporte del mes — cada uno con el conocimiento de tu inmobiliaria y los límites que tú le pones.';

export const HOME_PAGE_TITLE = `${SITE_NAME} — La IA para inmobiliarias que viven en WhatsApp`;

export const YAMPI_CALENDAR = {
  baseUrl: YAMPI_APP_URL,
  slug: 'demos',
};

export const YAMPI_WHATSAPP = {
  baseUrl: YAMPI_APP_URL,
  websiteToken:
    import.meta.env.PUBLIC_YAMPI_WHATSAPP_WEBSITE_TOKEN || 'xgwRtmame9kBeLtASh5LPAeE',
};

export const DEMO_BUTTON_LABEL = 'Agenda una demo';

/** Misma URL que v3/components/GoogleOauth/Button.vue → Google OAuth → registro o login SSO. */
export function getGoogleSignupUrl() {
  const clientId = import.meta.env.PUBLIC_GOOGLE_OAUTH_CLIENT_ID;
  const redirectUri =
    import.meta.env.PUBLIC_GOOGLE_OAUTH_CALLBACK_URL ||
    `${YAMPI_APP_URL}/auth/google_oauth2/callback`;

  if (!clientId) {
    return `${YAMPI_APP_URL}/app/auth/signup`;
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: 'email profile',
  });

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}
