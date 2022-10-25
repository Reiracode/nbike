export default function decideByAvailability(options) {
  const { source, resultNone, resultFew, resultNormal } = options;

  // 判斷數量 0 5 normal
  if (source === 0) return resultNone;
  if (source <= 5) return resultFew;
  return resultNormal;
}
