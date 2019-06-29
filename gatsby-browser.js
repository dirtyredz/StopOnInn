import React from 'react'
// import { Provider } from 'react-redux'
// import { Router } from 'react-router-dom'
// import store from './src/redux/store'
import ReactBreakpoints from 'react-breakpoints'
import BreakPoints from './src/utils/breakpoints'

export const wrapRootElement = ({ element }) => {
  const ConnectedRootElement = (
    // <Provider store={store}>
      <ReactBreakpoints
        breakpoints={BreakPoints}
        guessedBreakpoint={BreakPoints.mobile}
      >
        {element}
      </ReactBreakpoints>
    // </Provider>
  )
  return ConnectedRootElement
};

export const onClientEntry = () => {
  return new Promise((resolve, reject) => {
    window.__polyfillio__ = () => {
      resolve();
    };

    const features = [];

    const isIE = /MSIE|Trident/.test(navigator.userAgent)

    let src = 'https://cdn.polyfill.io/v2/polyfill.min.js?callback=__polyfillCallback'

    if (!isIE) {
      // if (!('Set' in window)) {
      //   features.push('Set')
      // }

      if (!('Map' in window)) {
        features.push('Map')
      }

      if (!('Intl' in window)) {
        features.push('Intl.~locale.en')
      }

      // if (!('fetch' in window)) {
      //   features.push('fetch')
      // }

      // if (!('URL' in window && 'URLSearchParams' in window)) {
      //   features.push('URL')
      // }

      if (!features.length) {
        resolve()
        return
      }

      src += `&features=${features.join(',')}`
    }

    window.__polyfillCallback = resolve
    const tag = document.createElement('script')
    tag.src = src
    tag.async = true
    tag.onerror = reject
    document.head.appendChild(tag)
  });
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
