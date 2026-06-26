import Overview from './Overview'
import HealthcareOverview from './HealthcareOverview'
import FinanceOverview from './FinanceOverview'
import EducationOverview from './EducationOverview'
import ManufacturingOverview from './ManufacturingOverview'
import AgricultureOverview from './AgricultureOverview'
import EnterpriseOverview from './EnterpriseOverview'
import RetailOverview from './RetailOverview'
import TransportOverview from './TransportOverview'
import EnergyOverview from './EnergyOverview'
import MediaOverview from './MediaOverview'
import SecurityOverview from './SecurityOverview'

const sections = [
  { key: 'logistics', Component: Overview },
  { key: 'healthcare', Component: HealthcareOverview },
  { key: 'finance', Component: FinanceOverview },
  { key: 'education', Component: EducationOverview },
  { key: 'manufacturing', Component: ManufacturingOverview },
  { key: 'agriculture', Component: AgricultureOverview },
  { key: 'enterprise', Component: EnterpriseOverview },
  { key: 'retail', Component: RetailOverview },
  { key: 'transport', Component: TransportOverview },
  { key: 'energy', Component: EnergyOverview },
  { key: 'media', Component: MediaOverview },
  { key: 'security', Component: SecurityOverview },
]

export default function IndustriesOverview() {
  return (
    <div>
      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
