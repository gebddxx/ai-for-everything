import Overview from './Overview'
import HealthcareOverview from './HealthcareOverview'
import FinanceOverview from './FinanceOverview'
import EducationOverview from './EducationOverview'
import ManufacturingOverview from './ManufacturingOverview'
import AgricultureOverview from './AgricultureOverview'
import EnterpriseOverview from './EnterpriseOverview'

const sections = [
  { key: 'logistics', Component: Overview },
  { key: 'healthcare', Component: HealthcareOverview },
  { key: 'finance', Component: FinanceOverview },
  { key: 'education', Component: EducationOverview },
  { key: 'manufacturing', Component: ManufacturingOverview },
  { key: 'agriculture', Component: AgricultureOverview },
  { key: 'enterprise', Component: EnterpriseOverview },
]

export default function IndustriesOverview() {
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
