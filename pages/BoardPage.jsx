import { BoardMenu } from 'internal-ui/menu'

export default function BoardPage() {
  return <>
    <h1>Board</h1>
    <output data-state="success">Board loaded</output>
    <BoardMenu />
  </>
}
