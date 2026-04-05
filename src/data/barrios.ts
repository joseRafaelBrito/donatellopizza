export interface Barrio {
  nombre: string;
  slug: string;
  lat: number;
  lng: number;
  descripcion: string;
}

export const barrios: Barrio[] = [
  { nombre: "Los Almácigos", slug: "los-almacigos", lat: 19.525, lng: -70.735, descripcion: "Barrio residencial al norte de Santiago de los Caballeros, República Dominicana." },
  { nombre: "Villa Olímpica", slug: "villa-olimpica", lat: 19.525, lng: -70.705, descripcion: "Barrio al norte de Santiago con zonas residenciales y deportivas." },
  { nombre: "Vicentillo", slug: "vicentillo", lat: 19.525, lng: -70.675, descripcion: "Comunidad residencial al norte de Santiago de los Caballeros." },
  { nombre: "Bella Vista", slug: "bella-vista", lat: 19.525, lng: -70.645, descripcion: "Sector residencial en la zona norte de Santiago." },
  { nombre: "El Higüeral", slug: "el-higueral", lat: 19.525, lng: -70.615, descripcion: "Sector noreste de Santiago de los Caballeros." },
  { nombre: "Rafey", slug: "rafey", lat: 19.495, lng: -70.735, descripcion: "Barrio tradicional en la zona noroeste de Santiago, conocido por sus comunidades y servicios." },
  { nombre: "Los Pepines", slug: "los-pepines", lat: 19.495, lng: -70.705, descripcion: "Histórico barrio norteño de Santiago, con rica cultura y comunidad activa." },
  { nombre: "Cristo Rey", slug: "cristo-rey", lat: 19.495, lng: -70.675, descripcion: "Barrio central al norte de Santiago, cerca del corazón de la ciudad." },
  { nombre: "Los Jardines", slug: "los-jardines", lat: 19.495, lng: -70.645, descripcion: "Sector residencial popular en la zona norte-este de Santiago de los Caballeros." },
  { nombre: "Villa Progreso", slug: "villa-progreso", lat: 19.495, lng: -70.615, descripcion: "Ensanche en la zona este de Santiago de los Caballeros." },
  { nombre: "La Joya", slug: "la-joya", lat: 19.465, lng: -70.735, descripcion: "Barrio al oeste del centro de Santiago, junto al Río Yaque del Norte." },
  { nombre: "Ensanche Bermúdez", slug: "ensanche-bermudez", lat: 19.465, lng: -70.705, descripcion: "Ensanche residencial activo al noroeste del centro de Santiago." },
  { nombre: "El Centro", slug: "el-centro", lat: 19.465, lng: -70.675, descripcion: "Centro histórico y comercial de Santiago de los Caballeros, República Dominicana." },
  { nombre: "Ciudad Nueva", slug: "ciudad-nueva", lat: 19.465, lng: -70.645, descripcion: "Barrio residencial moderno en la zona central-este de Santiago." },
  { nombre: "Reparto Confianza", slug: "reparto-confianza", lat: 19.465, lng: -70.615, descripcion: "Sector residencial al este de Santiago de los Caballeros." },
  { nombre: "La Otra Banda", slug: "la-otra-banda", lat: 19.435, lng: -70.735, descripcion: "Sector al otro lado del Río Yaque del Norte, en el municipio de Santiago." },
  { nombre: "Ensanche Espaillat", slug: "ensanche-espaillat", lat: 19.435, lng: -70.705, descripcion: "Ensanche residencial al suroeste del centro de Santiago." },
  { nombre: "27 de Febrero", slug: "27-de-febrero", lat: 19.435, lng: -70.675, descripcion: "Barrio central de Santiago, importante sector comercial y residencial." },
  { nombre: "San Felipe", slug: "san-felipe", lat: 19.435, lng: -70.645, descripcion: "Barrio tradicional al sur del centro de Santiago de los Caballeros." },
  { nombre: "El Ejido", slug: "el-ejido", lat: 19.435, lng: -70.615, descripcion: "Comunidad en la zona sureste de Santiago de los Caballeros." },
  { nombre: "Yaguajal", slug: "yaguajal", lat: 19.405, lng: -70.735, descripcion: "Sector al sur de Santiago, cerca del Río Yaque del Norte." },
  { nombre: "La Trinitaria", slug: "la-trinitaria", lat: 19.405, lng: -70.705, descripcion: "Barrio del sur de Santiago con historia y comunidad consolidada." },
  { nombre: "Los Ciruelitos", slug: "los-ciruelitos", lat: 19.405, lng: -70.675, descripcion: "Comunidad residencial en la zona sur de Santiago de los Caballeros." },
  { nombre: "Gurabo", slug: "gurabo", lat: 19.405, lng: -70.645, descripcion: "Sector en el sur-este de Santiago, con zonas residenciales y comerciales." },
  { nombre: "Libertad", slug: "libertad", lat: 19.405, lng: -70.615, descripcion: "Barrio en la zona sureste de Santiago de los Caballeros, RD." },
];

export const getBarrioBySlug = (slug: string): Barrio | undefined =>
  barrios.find((b) => b.slug === slug);

export const slugify = (name: string): string =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
