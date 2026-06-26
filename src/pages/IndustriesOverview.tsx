import Overview from './Overview'
import HealthcareOverview from './HealthcareOverview'
import FinanceOverview from './FinanceOverview'
import EducationOverview from './EducationOverview'
import ManufacturingOverview from './ManufacturingOverview'
import AgricultureOverview from './AgricultureOverview'
import EnterpriseOverview from './EnterpriseOverview'

export default function IndustriesOverview() {
  return (
    <div>
      <Overview />
      <HealthcareOverview />
      <FinanceOverview />
      <EducationOverview />
      <ManufacturingOverview />
      <AgricultureOverview />
      <EnterpriseOverview />
    </div>
  )
}
