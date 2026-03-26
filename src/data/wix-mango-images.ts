/** Źródło: galeria Collage na https://piolos.wixsite.com/mango/noclegi (export thunderbolt-features). */
export const NOCLEGI_WIX_URIS = [
  "50f959_f40918af97de48db939500591d70d7d8~mv2_d_3799_2543_s_4_2.jpg",
  "50f959_0ba835076b7e457086b63e29ec1d673a~mv2_d_3872_2601_s_4_2.jpg",
  "50f959_359af4ac1af24c9ba5c859e66d4c893c~mv2.jpg",
  "50f959_059b0c9006f644e4ae4414f94c1f14e8~mv2.jpg",
  "50f959_5da98f19347b4e37a559a01920e0f428~mv2_d_3872_2599_s_4_2.jpg",
  "50f959_d0810b9f6a5f4666aec8c05e03c905c6~mv2.jpg",
] as const;

/** Menu: https://piolos.wixsite.com/mango/menu + zdjęcia z galerii https://piolos.wixsite.com/mango/grid */
export const JEDZENIE_WIX_URIS = [
  "50f959_a6bb146e92a1590d2f53b5c06dc00b9c.jpg",
  "50f959_2a3538abc01f42458ea5811064a33dab~mv2.jpg",
  "50f959_e511888f83804a38a0634a6ea169192e~mv2.jpg",
  "50f959_4b5d9c71dae549baa5e1dedfde84a88f~mv2.jpg",
  "50f959_af09d16c0d9c488fa3f5266f69c76557~mv2.jpg",
  "50f959_049e63e1ff6143e0b20c7883962f03ca~mv2.jpg",
] as const;

const WIX_MEDIA = "https://static.wixstatic.com/media";

export function wixImageSrc(uri: string): string {
  return `${WIX_MEDIA}/${uri}`;
}

/** Mapa domku na Wix (Google Maps w treści strony). */
export const NOCLEGI_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Bagno+63B%2C+22-470+Bagno%2C+Polska";
