import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from 'internal-ui/button'
import { loadPopover } from 'internal-ui/load-popover'

function App() {
  const [Popover, setPopover] = useState(null)
  const [error, setError] = useState('')

  async function load() {
    try {
      const component = await loadPopover()
      setPopover(() => component)
    } catch (error) {
      setError(String(error))
    }
  }

  return <>
    <Button onClick={load}>Load popover</Button>
    <output data-state={error ? 'error' : Popover ? 'success' : undefined}>
      {error || (Popover ? 'Popover loaded' : 'Ready')}
    </output>
    {Popover && <Popover isOpen content={<div>Popover content</div>}>
      <button>Options</button>
    </Popover>}
  </>
}

createRoot(document.getElementById('root')).render(<App />)
