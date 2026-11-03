import { ImageResponse } from 'next/og';

export const alt = 'Outman Elbouhali - Full Stack Web & Mobile App Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#111111',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '2px',
            }}
          />
          <span
            style={{
              color: '#ffffff',
              fontSize: '20px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            OUTMAN ELBOUHALI
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              color: '#888888',
              fontSize: '22px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            [ INDEPENDENT ENGINEERING ]
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              maxWidth: '1000px',
            }}
          >
            Full Stack Web and Mobile App Development
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#888888',
            fontSize: '18px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          <span>React / Next.js</span>
          <span>·</span>
          <span>Flutter iOS & Android</span>
          <span>·</span>
          <span>Django APIs</span>
          <span>·</span>
          <span>n8n Automation</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
