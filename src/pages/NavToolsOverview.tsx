import SearchOverview from './SearchOverview'
import ChatOverview from './ChatOverview'
import CreativeOverview from './CreativeOverview'
import DesignOverview from './DesignOverview'
import Game3DOverview from './Game3DOverview'
import OfficeOverview from './OfficeOverview'
import AgentOverview from './AgentOverview'

const sections = [
  { key: 'search', Component: SearchOverview },
  { key: 'chat', Component: ChatOverview },
  { key: 'creative', Component: CreativeOverview },
  { key: 'design', Component: DesignOverview },
  { key: '3d-game', Component: Game3DOverview },
  { key: 'office', Component: OfficeOverview },
  { key: 'agents', Component: AgentOverview },
]

export default function NavToolsOverview() {
  return (
    <div>
      {sections.map(({ key, Component }) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          <Component />
        </div>
      ))}
    </div>
  )
}
