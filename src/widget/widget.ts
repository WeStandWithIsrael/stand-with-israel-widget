import cssText from 'bundle-text:./style.scss'
import { getConfig } from './config'
import { initWidget } from './generate'

if (document.readyState !== 'loading') {
  setTimeout(initialize)
} else {
  document.addEventListener('DOMContentLoaded', initialize)
}

const params = getConfig()

function initialize() {
  injectStyles();
  init();
}

function injectStyles() {
  const style = document.createElement('style')
  document.head.appendChild(style)
  style.appendChild(document.createTextNode(cssText))
}

function init() {
  document.body.append(initWidget({
    position: params.position
  }));
}
