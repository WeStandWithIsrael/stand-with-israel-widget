import { getConfig } from './config';
import { flagSvg, flagSvgRounded, pigeonSvg } from './constants';

export interface WidgetOptions {
  position: 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'middle-left'
    | 'middle-right';
  layout?: '1' | '2';
}

export function initWidget(options: WidgetOptions): HTMLElement {
  const config = getConfig();
  return renderWidget({
    ...config,
    ...options,
  });
}

export function renderWidget(options: WidgetOptions) {
  const widget = document.createElement('div'); 
  widget.classList.add('swiw');
  widget.classList.add(options.position);

  const trigger = createTrigger();
  const full = options.layout === '2'
    ? createFullV2()
    : createFull();

  widget.appendChild(full);
  widget.appendChild(trigger);

  trigger.addEventListener('click', () => {
    widget?.classList.add('opened');
  });

  const close = widget.querySelector('.close-widget');
  close?.addEventListener('click', () => {
    widget?.classList.remove('opened');
  });

  return widget;
}

export function createTrigger() {
  const el = document.createElement('div');
  el.classList.add('widget-trigger');
  el.innerHTML = flagSvg;
  return el;
}

export function createFull() {
  const el = document.createElement('div');
  el.classList.add('flex');
  el.classList.add('widget-full');

  const inner = `<div class="widget-flag">${flagSvg}</div><div class="widget-copy"><h3 class="title">Never Again is Now</h3><p class="tag">#WeStandWithIsrael</p><a href="https://www.standwithus.com/situationroom" target="_blank" class="link">Learn how you can help <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7015 7.23705L5.48524 12.4531L4.62832 11.4319L10.8439 6.21575L5.8065 5.77503L5.92271 4.44678L13.2281 5.08592L12.589 12.3913L11.2607 12.2751L11.7015 7.23705Z" fill="white"/></svg></a></div><button class="close-widget" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7869 19.2162C6.18445 19.2162 2.45361 15.4854 2.45361 10.8829C2.45361 6.28039 6.18445 2.54956 10.7869 2.54956C15.3894 2.54956 19.1203 6.28039 19.1203 10.8829C19.1203 15.4854 15.3894 19.2162 10.7869 19.2162ZM10.7869 9.70456L8.43028 7.34706L7.25111 8.52623L9.60861 10.8829L7.25111 13.2396L8.43028 14.4187L10.7869 12.0612L13.1436 14.4187L14.3228 13.2396L11.9653 10.8829L14.3228 8.52623L13.1436 7.34706L10.7869 9.70456Z" fill="#0E0E0F" /></svg></button>`;
  el.innerHTML = inner;
  return el;
}

export function createFullV2() {
  const el = document.createElement('div');
  el.classList.add('flex');
  el.classList.add('widget-full');

  const inner = `<div class="widget-flag">${flagSvgRounded}</div><div class="widget-copy"><h3 class="title">We Stand with Israel!</h3><a href="https://www.standwithus.com/situationroom" target="_blank" class="link">Learn how you can help <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7015 7.23705L5.48524 12.4531L4.62832 11.4319L10.8439 6.21575L5.8065 5.77503L5.92271 4.44678L13.2281 5.08592L12.589 12.3913L11.2607 12.2751L11.7015 7.23705Z" fill="white"/></svg></a></div><button class="close-widget" type="button"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.7869 19.2162C6.18445 19.2162 2.45361 15.4854 2.45361 10.8829C2.45361 6.28039 6.18445 2.54956 10.7869 2.54956C15.3894 2.54956 19.1203 6.28039 19.1203 10.8829C19.1203 15.4854 15.3894 19.2162 10.7869 19.2162ZM10.7869 9.70456L8.43028 7.34706L7.25111 8.52623L9.60861 10.8829L7.25111 13.2396L8.43028 14.4187L10.7869 12.0612L13.1436 14.4187L14.3228 13.2396L11.9653 10.8829L14.3228 8.52623L13.1436 7.34706L10.7869 9.70456Z" fill="#0E0E0F" /></svg></button>${pigeonSvg}`;
  el.innerHTML = inner;
  return el;
}
