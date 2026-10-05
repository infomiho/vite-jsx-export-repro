export async function loadPopover() {
  const { Popover } = await import('react-tiny-popover')
  return Popover
}
