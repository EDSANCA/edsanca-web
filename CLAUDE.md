# edsanca.com: nueva web

Web personal y profesional de Edu Santamaría (Edsanca), realizador IA-native con base en Madrid.
Sustituye a la web actual en Squarespace (www.edsanca.com), que sigue activa hasta el cambio de dominio.

## Decisiones tomadas (oct-2026)

- **Stack:** Astro, alojado en Cloudflare (Pages/Workers). El código vive en este repositorio (`edsanca/edsanca-web`, privado).
- **Quién edita:** Claude construye y mantiene el código. Edu no programa, así que los textos y los proyectos deben quedar en archivos de contenido sencillos (uno por proyecto) para que pueda tocarlos sin saber código.
- **Dominio:** edsanca.com sigue en Squarespace hasta que la web nueva esté aprobada. Después solo se cambia hacia dónde apunta (DNS).
- **Vídeo:** YouTube vale para las piezas largas, con incrustación ligera que no ralentice la página. Los loops cortos de la home van como archivos de vídeo propios.
- **Tienda:** Stripe (productos físicos, digitales y entradas a talleres). Shopify solo si el catálogo crece.
- **Idiomas:** inglés por defecto y español.
- **Terminología:** usar "realizador", nunca "director" ni "cineasta".

## Secciones previstas

1. Home: loop del reel, frase de posicionamiento, Cannes Lions y Creative Partner de Runway/Pika/Luma visibles en los primeros segundos.
2. Trabajo: 6–8 casos curados (brief → idea → stack → resultado) con vídeo, más un destacado de ficción (2HORAS).
3. Lab: piezas personales y experimentos (tráilers que no existen).
4. Juegos: juegos de navegador con ranking (p. ej. beat'em up de la Feria de Abril).
5. Tienda: Red Festival (redecilla portabotellas), packs de prompts, talleres.
6. Formación: talleres de IA para moda, in-company y abiertos.
7. About: escrito en la voz de Edu (absurda, cínica, andaluza, con voz en off).
8. Contacto con filtro: presupuesto en rangos, plazo, tipo de pieza y una prueba de humanidad con humor.
9. Herramientas: código de afiliado de Runway EDSANCA (25% de descuento), discreto.

Por debajo: datos estructurados para buscadores, meta descripciones y estadísticas sin cookies.
Fases: 1) portfolio y cambio de dominio, 2) tienda, 3) juegos y Lab.

## Tono

Humor absurdo y cínico, voz en off, escritura publicitaria. Identidad: "el niño de la gorra" (gorra negra), raíces malagueñas.
El juego de palabras "Santamar.ia" forma parte de la marca.

## Lo que hay que evitar (sale de la revisión de la web actual)

- Faltas en lo más visible (la web vieja tenía "Artificial Inteligence" en la URL).
- Galerías de imágenes sin curar ni contexto.
- Personajes con derechos de terceros (Batman, Disney…) y retratos de políticos en el escaparate.
- Copy genérico de folleto ("mesmerizing", "canvases for exploration").
- Mezclar idiomas sin criterio.

## Pendiente de Edu

- Lista exacta de premios (la web vieja se contradice: Grand Prix Magnum, bronce Melting Icon, plata Oumph, JCDecaux).
- Selección final de proyectos y enlaces de YouTube.
- Qué vende hoy en la tienda de Squarespace.
- Referencia visual: le gusta el estilo de diegodali.com (inspiración, no copia). Falta ver la web por capturas o con el navegador.
- Confirmar si Red Festival y el juego de la Feria pueden anunciarse ya.

## Estado técnico

- Esqueleto inicial escrito a mano: en la sesión de Claude donde se creó, el registro de npm estaba bloqueado, así que no se pudo ejecutar `npm install` ni `astro build`. La primera compilación real será en Cloudflare: revisar ese log y corregir lo que falle.
- Estructura: `src/content/projects/*.md` (un archivo por proyecto, ver EDITAR.md), `src/i18n/ui.ts` (textos de interfaz EN/ES), `src/components/` (Home, ProjectCard, ProjectPage, WorkIndex, YouTube ligero), rutas EN en `/` y `/work/`, ES en `/es/` y `/es/trabajo/`.
- Estilos provisionales en `src/styles/global.css`, pendientes de la dirección visual definitiva.

## Referencias

- Maqueta de dirección visual (primera propuesta, estética de croma azul): artifact "Edsanca Home" en claude.ai.
- Vídeo roast de la web vieja: artifact "El caso edsanca.com".
