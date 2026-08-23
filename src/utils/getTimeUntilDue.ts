export function getTimeUntilDue(dateString: string) {
  const now = new Date();
  const dueDate = new Date(dateString);

  const differenceInMilliseconds = dueDate.getTime() - now.getTime();

  if (differenceInMilliseconds <= 0) {
    return "Fristen har gått ut";
  }

  const differenceInHours = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60),
  );

  const differenceInDays = Math.ceil(
    differenceInMilliseconds / (1000 * 60 * 60 * 24),
  );

  if (differenceInHours < 1) {
    return "Mindre enn 1 time igjen";
  }

  if (differenceInHours === 1) {
    return "1 time igjen";
  }

  if (differenceInHours < 24) {
    return `${differenceInHours} timer igjen`;
  }

  if (differenceInDays === 1) {
    return "1 dag igjen";
  }

  return `${differenceInDays} dager igjen`;
}