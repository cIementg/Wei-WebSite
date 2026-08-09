/*
 * Logique de date du WEI — partagée entre le compte à rebours (Home) et la
 * page Billetterie, pour ne jamais avoir de date codée en dur.
 *
 * Règle métier : le WEI a toujours lieu le DERNIER week-end de septembre,
 * on part le JEUDI SOIR et on rentre le DIMANCHE SOIR.
 */

// Horaires de départ / retour (format 24 h). À ajuster ici si besoin.
export const DEPART_HOUR = 21; // jeudi soir
export const RETOUR_HOUR = 21; // dimanche soir

// Dernier dimanche de septembre de l'année donnée.
// On part du 30 septembre puis on recule jusqu'au dimanche (getDay() === 0).
export function lastSundayOfSeptember(year: number): Date {
  const d = new Date(year, 8, 30); // mois 8 = septembre
  d.setDate(30 - d.getDay());
  return d;
}

// Fenêtre du WEI (départ jeudi soir → retour dimanche soir) pour une année.
// Le jeudi = 3 jours avant le dimanche de fin.
export function weiWindow(year: number) {
  const sundayDate = lastSundayOfSeptember(year).getDate();
  const start = new Date(year, 8, sundayDate - 3, DEPART_HOUR);
  const end = new Date(year, 8, sundayDate, RETOUR_HOUR);
  return { start, end };
}

// Prochaine édition du WEI à partir de maintenant (édition en cours incluse
// jusqu'au mardi suivant la fin, comme dans le compte à rebours).
export function nextWeiWindow(from: Date = new Date()) {
  const t = from.getTime();
  const year = from.getFullYear();
  const { start, end } = weiWindow(year);

  if (t < end.getTime()) return { start, end, year };

  return { ...weiWindow(year + 1), year: year + 1 };
}

const DAY_MONTH = new Intl.DateTimeFormat("fr-FR", { day: "numeric" });
const MONTH = new Intl.DateTimeFormat("fr-FR", { month: "long" });

// Format lisible "25 · 26 · 27 septembre" à partir de la fenêtre du WEI.
export function formatWeiDateRange(start: Date, end: Date): string {
  const days: number[] = [];
  const cursor = new Date(start);
  cursor.setDate(cursor.getDate() + 1);
  cursor.setHours(0, 0, 0, 0);
  const last = new Date(end);
  last.setHours(0, 0, 0, 0);
  while (cursor.getTime() <= last.getTime()) {
    days.push(Number(DAY_MONTH.format(cursor)));
    cursor.setDate(cursor.getDate() + 1);
  }
  return `${days.join(" · ")} ${MONTH.format(end)}`;
}
