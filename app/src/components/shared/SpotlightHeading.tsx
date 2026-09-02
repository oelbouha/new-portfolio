import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SpotlightHeadingProps {
  line1: string;
  line2: string;
  imageSrc: string;
  targetRectWidth?: number;
  fontSize?: number;
  gap?: number;
  triggerOnScroll?: boolean;
  play?: boolean;
  className?: string;
  delay?: number;
}

export function SpotlightHeading({
  line1,
  line2,
  imageSrc,
  targetRectWidth = 120,
  fontSize = 110,
  gap = 16,
  triggerOnScroll = true,
  play = true,
  className = '',
  delay = 0,
}: SpotlightHeadingProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const line1Ref = useRef<SVGTextElement>(null);
  const line2Ref = useRef<SVGTextElement>(null);
  const blackRectRef = useRef<SVGRectElement>(null);
  const rectClipRef = useRef<SVGRectElement>(null);
  const imgRef = useRef<SVGImageElement>(null);
  const clipIdRef = useRef(`spotlight-clip-${Math.random().toString(36).substring(2, 9)}`);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const initAnimation = () => {
      if (
        !svgRef.current ||
        !line1Ref.current ||
        !line2Ref.current ||
        !blackRectRef.current ||
        !rectClipRef.current ||
        !imgRef.current
      ) {
        return;
      }

      const line2BaselineY = fontSize * 1.68;
      const fontSpec = `900 ${fontSize}px "Bebas Neue", "Space Grotesk", sans-serif`;

      const canvas = document.createElement('canvas');
      const canvasCtx = canvas.getContext('2d');

      let ascent = fontSize * 0.72;
      let descent = 0;

      if (canvasCtx) {
        canvasCtx.font = fontSpec;
        const metrics = canvasCtx.measureText(line2);
        if (metrics.actualBoundingBoxAscent > 0) {
          ascent = metrics.actualBoundingBoxAscent;
          descent = metrics.actualBoundingBoxDescent || 0;
        }
      }

      const rectHeight = ascent + descent;
      const rectY = line2BaselineY - ascent;
      const rectRx = Math.min(rectHeight * 0.1, 8);

      const line1W = line1Ref.current.getComputedTextLength();
      const line2W = line2Ref.current.getComputedTextLength();

      const rectX = 0;
      const totalLine2W = rectX + targetRectWidth + gap + line2W;
      const maxSVGWidth = Math.max(line1W, totalLine2W) + 30;
      const totalSVGHeight = line2BaselineY + descent + 5;

      svgRef.current.setAttribute('viewBox', `0 0 ${maxSVGWidth} ${totalSVGHeight}`);

      // Initial positions (width = 0)
      gsap.set([blackRectRef.current, rectClipRef.current], {
        attr: {
          x: rectX,
          y: rectY,
          height: rectHeight,
          rx: rectRx,
          width: 0,
        },
      });

      gsap.set(imgRef.current, {
        attr: {
          x: rectX,
          y: rectY,
          width: targetRectWidth,
          height: rectHeight,
        },
        opacity: 0,
      });

      // Initial text positions (visible and stationary)
      gsap.set([line1Ref.current, line2Ref.current], {
        y: 0,
        opacity: 1,
      });

      if (!triggerOnScroll && !play) {
        return;
      }

      const obj = { width: 0 };
      ctx = gsap.context(() => {
        const tl = gsap.timeline(
          triggerOnScroll
            ? {
                scrollTrigger: {
                  trigger: svgRef.current,
                  start: 'top 85%',
                  toggleActions: 'restart none none reset',
                },
              }
            : { delay }
        );



        // 2. Black rectangle grows left-to-right from x = 0, pushing line 2 to the right
        tl.to(
          obj,
          {
            width: targetRectWidth,
            duration: 1.1,
            ease: 'power3.inOut',
            onUpdate: () => {
              const w = obj.width;
              if (blackRectRef.current) blackRectRef.current.setAttribute('width', `${w}`);
              if (rectClipRef.current) rectClipRef.current.setAttribute('width', `${w}`);
              if (line2Ref.current) line2Ref.current.setAttribute('x', `${rectX + w + gap}`);
            },
          },
          triggerOnScroll ? 0.15 : 0
        );

        // 3. Image fades in smoothly inside clipPath
        if (imgRef.current) {
          tl.to(
            imgRef.current,
            { opacity: 1, duration: 0.65, ease: 'power2.out' },
            triggerOnScroll ? 0.85 : 0.4
          );
        }
      });
    };

    if (document.fonts) {
      document.fonts.ready.then(initAnimation);
    } else {
      initAnimation();
    }

    const handleResize = () => {
      initAnimation();
      if (triggerOnScroll) ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [line1, line2, imageSrc, targetRectWidth, fontSize, gap, triggerOnScroll, play, delay]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 950 212"
      className={`w-full h-auto overflow-visible ${className}`}
    >
      <defs>
        <clipPath id={clipIdRef.current}>
          <rect ref={rectClipRef} x="0" y="0" width="0" height="0" rx="0" />
        </clipPath>
      </defs>

      {/* Line 1 */}
      <text
        ref={line1Ref}
        x="0"
        y={fontSize * 0.72}
        className="fill-current font-black uppercase"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: `${fontSize}px`,
          fontWeight: 900,
          letterSpacing: '0.04em',
        }}
      >
        {line1}
      </text>

      {/* Line 2 - Part 1: Solid black/white growing rectangle */}
      <rect
        ref={blackRectRef}
        x="0"
        y="0"
        width="0"
        height="0"
        rx="0"
        className="fill-black dark:fill-white"
      />

      {/* Line 2 - Part 1 Image */}
      <g clipPath={`url(#${clipIdRef.current})`}>
        <image
          ref={imgRef}
          href={imageSrc}
          x="0"
          y="0"
          width="0"
          height="0"
          preserveAspectRatio="xMidYMid slice"
        />
      </g>

      {/* Line 2 - Part 2 */}
      <text
        ref={line2Ref}
        x="0"
        y={fontSize * 1.68}
        className="fill-current font-black uppercase"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: `${fontSize}px`,
          fontWeight: 900,
          letterSpacing: '0.04em',
        }}
      >
        {line2}
      </text>
    </svg>
  );
}
