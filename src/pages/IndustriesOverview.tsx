import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang } from '../i18n/translate'
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
import LawOverview from './LawOverview'
import ClimateOverview from './ClimateOverview'
import GovTechOverview from './GovTechOverview'

const sections = [
  { key: 'logistics', icon: '📦', title: { en: 'Logistics', 'zh-CN': '智慧物流', 'zh-TW': '智慧物流' }, Component: Overview },
  { key: 'healthcare', icon: '🏥', title: { en: 'Healthcare', 'zh-CN': '医疗健康', 'zh-TW': '醫療健康' }, Component: HealthcareOverview },
  { key: 'finance', icon: '💰', title: { en: 'Finance', 'zh-CN': '金融科技', 'zh-TW': '金融科技' }, Component: FinanceOverview },
  { key: 'education', icon: '📚', title: { en: 'Education', 'zh-CN': '教育科技', 'zh-TW': '教育科技' }, Component: EducationOverview },
  { key: 'manufacturing', icon: '🏗️', title: { en: 'Manufacturing', 'zh-CN': '智能制造', 'zh-TW': '智慧製造' }, Component: ManufacturingOverview },
  { key: 'agriculture', icon: '🌾', title: { en: 'Agriculture', 'zh-CN': '智慧农业', 'zh-TW': '智慧農業' }, Component: AgricultureOverview },
  { key: 'enterprise', icon: '🏢', title: { en: 'Enterprise', 'zh-CN': '企业应用', 'zh-TW': '企業應用' }, Component: EnterpriseOverview },
  { key: 'retail', icon: '🛒', title: { en: 'Retail', 'zh-CN': '零售电商', 'zh-TW': '零售電商' }, Component: RetailOverview },
  { key: 'transport', icon: '🚗', title: { en: 'Transportation', 'zh-CN': '交通出行', 'zh-TW': '交通出行' }, Component: TransportOverview },
  { key: 'energy', icon: '⚡', title: { en: 'Energy', 'zh-CN': '能源电力', 'zh-TW': '能源電力' }, Component: EnergyOverview },
  { key: 'media', icon: '🎬', title: { en: 'Media', 'zh-CN': '媒体娱乐', 'zh-TW': '媒體娛樂' }, Component: MediaOverview },
  { key: 'security', icon: '🔒', title: { en: 'Security', 'zh-CN': '网络安全', 'zh-TW': '網路安全' }, Component: SecurityOverview },
  { key: 'law', icon: '⚖️', title: { en: 'Legal', 'zh-CN': '法律科技', 'zh-TW': '法律科技' }, Component: LawOverview },
  { key: 'climate', icon: '🌍', title: { en: 'Climate', 'zh-CN': '环保气候', 'zh-TW': '環保氣候' }, Component: ClimateOverview },
  { key: 'govtech', icon: '🏛️', title: { en: 'GovTech', 'zh-CN': '政务智慧城市', 'zh-TW': '政務智慧城市' }, Component: GovTechOverview },
]

export default function IndustriesOverview() {
  const { lang } = useT()
  const L = (a: MultiLang, b?: string, c?: string) => {
    if (typeof a !== 'string') return tText(a, lang)
    return lang === 'zh-CN' ? (b || a) : lang === 'zh-TW' ? (c || b || a) : a
  }

  return (
    <div>
      {/* Overview Intro */}
      <div id="section-overview" style={{
        background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #065f46 100%)',
        borderRadius: 14,
        padding: '28px 32px',
        marginBottom: 32,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -20, right: -10, fontSize: 100, opacity: 0.08 }}>🏭</div>
        <h2 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 8px' }}>
          {L('AI in Industries', 'AI行业应用', 'AI行業應用')}
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L(
            'Explore how AI is transforming 15 industries — each with detailed analysis, real cases, key metrics, and tool directories.',
            '探索AI如何变革15大行业——每个行业都有详细分析、真实案例、关键数据指标和精选工具目录。',
            '探索AI如何變革15大行業——每個行業都有詳細分析、真實案例、關鍵數據指標和精選工具目錄。'
          )}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (
            <span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ cursor: 'pointer',
              background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, textDecoration: 'none', fontWeight: 500,
            }}>
              {s.icon} {s.title[lang as 'en' | 'zh-CN' | 'zh-TW']}
            </span>
          ))}
        </div>
      </div>

      {sections.map(({ key, Component }, i) => (
        <div key={key} id={`section-${key}`} style={{ scrollMarginTop: 80 }}>
          {i > 0 && <div style={{ height: 2, background: 'linear-gradient(90deg, var(--primary), transparent)', margin: '32px 0 40px', borderRadius: 1 }} />}
          <Component />
        </div>
      ))}
    </div>
  )
}
