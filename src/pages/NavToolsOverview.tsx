import SearchOverview from './SearchOverview'
import ChatOverview from './ChatOverview'
import CreativeOverview from './CreativeOverview'
import DesignOverview from './DesignOverview'
import Game3DOverview from './Game3DOverview'
import OfficeOverview from './OfficeOverview'
import AgentOverview from './AgentOverview'

export default function NavToolsOverview() {
  return (
    <div>
      <SearchOverview />
      <ChatOverview />
      <CreativeOverview />
      <DesignOverview />
      <Game3DOverview />
      <OfficeOverview />
      <AgentOverview />
    </div>
  )
}
