import { Popover } from 'react-tiny-popover'

export function BoardMenu() {
  return <Popover isOpen content={<div>Board options</div>}>
    <button>Options</button>
  </Popover>
}
