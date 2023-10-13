import { initWidget } from './widget';

function init() {
  initialize(initWidget({ position: 'top-left' }));
  initialize(initWidget({ position: 'top-right' }));
  initialize(initWidget({ position: 'bottom-left' }));
  initialize(initWidget({ position: 'bottom-right' }));
  initialize(initWidget({ position: 'middle-left' }));
  initialize(initWidget({ position: 'middle-right', layout: '2' }));
}

function initialize(widget: any) {
  document.body.append(widget);
}

document.addEventListener('DOMContentLoaded', init);
