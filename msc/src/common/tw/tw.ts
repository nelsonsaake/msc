import { twBGs } from './tw_bg_colors';
import { twFSs } from './tw_font_sizes';
import { twMargins } from './tw_margins';
import { twPaddings } from './tw_paddings';
import { twTexts } from './tw_text_colors';
import { twRounded } from './tw_rounded';
import { twGaps } from './tw_gaps';
import { resolveFontSize } from './tw_font_size_util';
import { twFlex } from './tw_flex';
import { twBorderColors } from './tw_border_colors';
import { twBorderWidths } from './tw_border_widths';

export const classMap: Record<string, React.CSSProperties> = { 

    ...twBGs,
    ...twBorderColors,
    ...twBorderWidths,
    ...twFSs,
    ...twMargins,
    ...twPaddings,
    ...twTexts,
    ...twTexts,
    ...twRounded,
    ...twGaps,
    ...twFlex,

    // Text alignment
    'text-left': { textAlign: 'left' },
    'text-center': { textAlign: 'center' },
    'text-right': { textAlign: 'right' },
}

export const twOld = (classes: string): React.CSSProperties[] => {
  return classes
    .trim()
    .split(/\s+/)
    .map((cls) => {
      if (cls.startsWith('text-[')) {
        const resolved = resolveFontSize(cls)
        if (resolved) return resolved
      }
      return classMap[cls]
    })
    .filter((style): style is React.CSSProperties => !!style)
}

export const tw = (classes: string): React.CSSProperties => {
  return classes
    .trim()
    .split(/\s+/)
    .reduce((acc, cls) => {
      let style: React.CSSProperties | undefined;

      if (cls.startsWith('text-[')) {
        style = resolveFontSize(cls);
      } else {
        style = classMap[cls];
      }

      if (style) {
        Object.assign(acc, style);
      }

      return acc;
    }, {});
};
