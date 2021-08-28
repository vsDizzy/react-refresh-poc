RefreshRuntime.register(App, '1')

export function App() {
  const [val, setVal] = React.useState(0)

  React.useEffect(() => {
    const h = setInterval(() => {
      setVal((v) => v + 1)
    }, 1000)

    return () => {
      clearInterval(h)
    }
  }, [])

  return React.createElement('div', undefined, `${val}`)
}
