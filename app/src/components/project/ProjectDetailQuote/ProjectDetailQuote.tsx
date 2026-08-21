import { projectDetailQuoteStyles } from './ProjectDetailQuote.styles';
import type { ProjectDetailQuoteProps } from './ProjectDetailQuote.types';

export function ProjectDetailQuote({ quote, quoteAuthor, quoteRole }: ProjectDetailQuoteProps) {
  if (!quote) return null;

  return (
    <section className={projectDetailQuoteStyles.section}>
      <div className={projectDetailQuoteStyles.container}>
        <blockquote className={projectDetailQuoteStyles.quoteText}>
          "{quote}"
        </blockquote>
        <div className={projectDetailQuoteStyles.meta}>
          {quoteAuthor && (
            <div className={projectDetailQuoteStyles.monoWrapper}>
              <span className={projectDetailQuoteStyles.monoText}>{quoteAuthor}</span>
            </div>
          )}
          {quoteRole && (
            <div className={projectDetailQuoteStyles.monoWrapper}>
              <span className={projectDetailQuoteStyles.monoText}>{quoteRole}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
