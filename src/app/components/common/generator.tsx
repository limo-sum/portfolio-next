export const periodGenerator = (startFrom: string, endTo: string) => {
  const dateFormattedStart = new Date(startFrom);
  const dateFormattedEnd = endTo === "재직중" ? new Date() : new Date(endTo);
  const yearGap =
    dateFormattedEnd.getFullYear() - dateFormattedStart.getFullYear();
  const monthGap = dateFormattedEnd.getMonth() - dateFormattedStart.getMonth();
  const diff = monthGap + 12 * yearGap;
  const period =
    diff >= 12
      ? `${Math.floor(diff / 12)}년 ${diff % 12}개월`
      : `${diff % 12}개월`;
  return `${startFrom} ~ ${endTo} (${period})`;
};
