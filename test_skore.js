// Testovací větev: test výpočtu skóre
function testVypoctuSkore() {
  const zasahy = 10;
  const bodyZaZasah = 100;
  const celkem = zasahy * bodyZaZasah;
  console.log(celkem === 1000 ? "Test skóre PROŠEL" : "Test skóre SELHAL");
}
testVypoctuSkore();
