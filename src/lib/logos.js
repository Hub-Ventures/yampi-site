// Herramientas que Yampi reemplaza. Las que traen su nombre dentro del
// logotipo (`solo: true`) se muestran sin texto al lado; las que son solo icono
// van acompañadas del nombre. Lo que no tiene logo se escribe.
const LOGOS = {
  Airtable: { src: '/logos/Airtable.svg', w: '78px', h: '17px', solo: true },
  DocuSign: { src: '/logos/Docusign.svg', w: '75px', h: '15px', solo: true },
  HubSpot: { src: '/logos/HubSpot.svg', w: '62px', h: '18px', solo: true },
  ManyChat: { src: '/logos/Manychat.svg', w: '79px', h: '14px', solo: true },
  Zapier: { src: '/logos/Zapier.svg', w: '37px', h: '17px', solo: true },
  Zendesk: { src: '/logos/Zendesk.svg', w: '24px', h: '17px' },
  Domus: { src: '/logos/domus.png', w: '62px', h: '24px', solo: true },
  SIMI: { src: '/logos/simi.png', w: '48px', h: '26px', solo: true },
  Softinm: { src: '/logos/softim.png', w: '68px', h: '17px', solo: true },
  ChatGPT: { src: '/logos/ChatGPT.svg', w: '17px', h: '17px' },
  Notion: { src: '/logos/Notion.svg', w: '17px', h: '17px' },
  Dropbox: { src: '/logos/Dropbox.svg', w: '18px', h: '17px' },
  Make: { src: '/logos/make.svg', w: '17px', h: '17px' },
  n8n: { src: '/logos/n8n.svg', w: '17px', h: '17px' },
  Excel: { src: '/logos/Microsoft_Office_Excel.svg', w: '19px', h: '18px' },
  Gmail: { src: '/logos/Gmail_icon.svg', w: '20px', h: '15px' },
  'Google Sheets': { src: '/logos/Google_Sheets.svg', w: '13px', h: '18px' },
  'Google Drive': { src: '/logos/Google_Drive.svg', w: '18px', h: '16px' },
  'WhatsApp Business': { src: '/logos/WhatsApp.svg', w: '18px', h: '18px' },
  'Grupos de WhatsApp': { src: '/logos/WhatsApp.svg', w: '18px', h: '18px' },
  'Instagram Direct': { src: '/logos/Instagram.svg', w: '18px', h: '18px' },
  'Guiones en Word': { src: '/logos/Microsoft_Office_Word.svg', w: '19px', h: '18px' },
};

export function reemplaza(nombres) {
  return nombres.map((name) => {
    const logo = LOGOS[name];
    return {
      name,
      src: logo?.src ?? null,
      w: logo?.w ?? null,
      h: logo?.h ?? null,
      showName: !logo?.solo,
    };
  });
}
