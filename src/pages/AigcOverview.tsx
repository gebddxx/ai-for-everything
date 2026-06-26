import GeminiTutorial from './GeminiTutorial'
import CodexTutorial from './CodexTutorial'
import CCSwitchTutorial from './CCSwitchTutorial'
import AgentFrameworks from './AgentFrameworks'
import AgentAssistants from './AgentAssistants'
import AgentWorkflow from './AgentWorkflow'
import AgentMultiAgent from './AgentMultiAgent'
import AudioGenTutorial from './AudioGenTutorial'
import VideoGenTutorial from './VideoGenTutorial'
import NovelWritingTutorial from './NovelWritingTutorial'
import PptGenTutorial from './PptGenTutorial'
import WebGenTutorial from './WebGenTutorial'
import AppGenTutorial from './AppGenTutorial'
import SoftwareGenTutorial from './SoftwareGenTutorial'

const sections = [
  { key: 'gemini', Component: GeminiTutorial },
  { key: 'codex', Component: CodexTutorial },
  { key: 'ccswitch', Component: CCSwitchTutorial },
  { key: 'frameworks', Component: AgentFrameworks },
  { key: 'assistants', Component: AgentAssistants },
  { key: 'workflow', Component: AgentWorkflow },
  { key: 'multi-agent', Component: AgentMultiAgent },
  { key: 'audio-gen', Component: AudioGenTutorial },
  { key: 'video-gen', Component: VideoGenTutorial },
  { key: 'novel', Component: NovelWritingTutorial },
  { key: 'ppt-gen', Component: PptGenTutorial },
  { key: 'web-gen', Component: WebGenTutorial },
  { key: 'app-gen', Component: AppGenTutorial },
  { key: 'software-gen', Component: SoftwareGenTutorial },
]

export default function AigcOverview() {
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
