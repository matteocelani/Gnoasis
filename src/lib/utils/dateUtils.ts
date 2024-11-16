import { format } from 'date-fns';

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return format(date, 'dd MMM yyyy - HH:mm');
  } catch {
    return 'Invalid Date';
  }
}
