export const SITE_NAME = 'Yampi';

export const YAMPI_APP_URL = import.meta.env.PUBLIC_YAMPI_APP_URL || 'https://app.yampi.ai';

export const HOME_HERO_TITLE = 'Ecosistema IA para operar inmobiliarias';

export const HOME_HERO_DESCRIPTION =
  'Yampi es una plataforma que conecta atención, arriendos, ventas, contratos y cobros en un solo sistema: IA en tu WhatsApp que califica leads, propiedades enlazadas al embudo, firma electrónica que activa el cobro y tesorería que trabaja sola.';

export const HOME_PAGE_TITLE = `${SITE_NAME} — ${HOME_HERO_TITLE}`;

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
