export type WidgetPosition = 'top-left'
| 'top-right'
| 'bottom-left'
| 'bottom-right'
| 'middle-left'
| 'middle-right';

export type WidgetLayout = '1' | '2';

export const landingUrl = 'https://standwithisraeilwidget.io';
export const scriptId = 'stand-with-israel-widget';

export const widgetPositions: WidgetPosition[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'middle-left',
  'middle-right',
];

export const widgetLayouts: WidgetLayout[] = [
  '1',
  '2',
];

export interface WidgetConfig {
  position: WidgetPosition;
  layout: WidgetLayout;
}

export function findScripElement(): HTMLScriptElement | null {
  return (
    (document.currentScript as HTMLScriptElement) ||
    document.getElementById(scriptId) ||
    Array.from(document.querySelectorAll('script')).find((el) => {
      const src = el.getAttribute('src')
      if (src) {
        const url = new URL(src, landingUrl)
        return (
          url.pathname === '/cdn/widget.js' &&
          url.searchParams.has('type') &&
          url.searchParams.has('position')
        )
      }
      return false
    }) ||
    null
  )
}

export function parseEnum<T>(value: unknown | undefined, values: readonly T[], defaultValue: T): T {
  if (value && typeof value === 'string' && values.indexOf(value as any) !== -1) {
    return value as any as T;
  }

  return defaultValue;
}

export function scriptSrcParams(
  defaults: WidgetConfig = {
    position: 'top-right',
    layout: '1',
  }
): WidgetConfig {
  const script = findScripElement()
  const src = script?.getAttribute('src')
  const params: WidgetConfig = { ...defaults }

  if (!src) return params;

  try {
    const url = new URL(src, landingUrl)
    params.position = parseEnum<WidgetPosition>(
      url.searchParams.get('position'),
      widgetPositions,
      defaults.position,
    );

    params.layout = parseEnum<WidgetLayout>(
      url.searchParams.get('layout'),
      widgetLayouts,
      defaults.layout,
    );

  } catch (error) {
    console.error(error)
  }

  return params;
}

export function getConfig(): WidgetConfig {
  return scriptSrcParams();
}
