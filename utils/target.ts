// Vývojová větev: pomocná funkce pro generování pozice terče
export function generujPoziciTerce(sirkaPlochy: number, vyskaPlochy: number) {
  const x = Math.floor(Math.random() * (sirkaPlochy - 50));
  const y = Math.floor(Math.random() * (vyskaPlochy - 50));
  return { x, y };
}
