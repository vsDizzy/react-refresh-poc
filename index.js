import { App } from './app.js'

const container = document.querySelector('#container')
ReactDOM.render(React.createElement(App), container)

// simulate component update
setTimeout(async () => {
  await import('./app1.js')
  RefreshRuntime.performReactRefresh()
}, 5000)
