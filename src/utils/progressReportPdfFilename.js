/**
 * Default .pdf filename for exported / emailed progress reports.
 * Keep in sync with `supabase/functions/_shared/progressReportPdf.ts`.
 */
export function defaultProgressReportPdfFilename(subject) {
  const base =
    String(subject || 'progress-report')
      .replace(/[^\w\s-]/g, '')
      .trim()
      .slice(0, 80) || 'progress-report';
  return base.toLowerCase().endsWith('.pdf') ? base : `${base}.pdf`;
}
