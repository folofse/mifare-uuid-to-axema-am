export function deriveAM(uidHex: string): string {
  const uidString = `0x${uidHex.split(':').join('')}`;
  return Number(uidString).toString(10);
}

const UUID = '00:00:00:00'; // Change this to the uuid to derive
const am = deriveAM(UUID);
const paddedAM = am.padStart(17, '0');

console.log(`AM: ${am}`);
console.log(`Padded AM: ${paddedAM}`);
