export function deriveAMFromHex(uidHex: string): string {
  const uidString = `0x${uidHex.split(':').join('')}`;
  return Number(uidString).toString(10);
}
export function padAM(am: string, length = 17): string {
  return am.padStart(length, '0');
}

const UUID = '00:00:00:00'; // Change this to the uuid to derive
const am = deriveAMFromHex(UUID);
const paddedAM = padAM(am);

console.log(`AM: ${am}`);
console.log(`Padded AM: ${paddedAM}`);
