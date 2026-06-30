import { useT } from '../contexts/LanguageContext'
import { tText, type MultiLang, domainTitle } from '../i18n/translate'
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
  { key: 'logistics', icon: '📦', title: { en: 'Logistics', 'zh-CN': '智慧物流', 'zh-TW': '智慧物流', ja: 'スマート物流', ko: '스마트 물류', es: 'Logística' }, Component: Overview },
  { key: 'healthcare', icon: '🏥', title: { en: 'Healthcare', 'zh-CN': '医疗健康', 'zh-TW': '醫療健康', ja: '医療健康', ko: '의료 건강', es: 'Salud' }, Component: HealthcareOverview },
  { key: 'finance', icon: '💰', title: { en: 'Finance', 'zh-CN': '金融科技', 'zh-TW': '金融科技', ja: '金融科技', ko: '금융 테크', es: 'Fintech' }, Component: FinanceOverview },
  { key: 'education', icon: '📚', title: { en: 'Education', 'zh-CN': '教育科技', 'zh-TW': '教育科技', ja: '教育科技', ko: '교육 테크', es: 'Edtech' }, Component: EducationOverview },
  { key: 'manufacturing', icon: '🏗️', title: { en: 'Manufacturing', 'zh-CN': '智能制造', 'zh-TW': '智慧製造', ja: 'スマート製造', ko: '스마트 제조', es: 'Manufactura' }, Component: ManufacturingOverview },
  { key: 'agriculture', icon: '🌾', title: { en: 'Agriculture', 'zh-CN': '智慧农业', 'zh-TW': '智慧農業', ja: 'スマート農業', ko: '스마트 농업', es: 'Agricultura' }, Component: AgricultureOverview },
  { key: 'enterprise', icon: '🏢', title: { en: 'Enterprise', 'zh-CN': '企业应用', 'zh-TW': '企業應用', ja: '企業応用', ko: '기업 응용', es: 'Empresas' }, Component: EnterpriseOverview },
  { key: 'retail', icon: '🛒', title: { en: 'Retail', 'zh-CN': '零售电商', 'zh-TW': '零售電商', ja: '小売・EC', ko: '소매 · EC', es: 'E-commerce' }, Component: RetailOverview },
  { key: 'transport', icon: '🚗', title: { en: 'Transportation', 'zh-CN': '交通出行', 'zh-TW': '交通出行', ja: '交通出行', ko: '교통 출행', es: 'Transporte' }, Component: TransportOverview },
  { key: 'energy', icon: '⚡', title: { en: 'Energy', 'zh-CN': '能源电力', 'zh-TW': '能源電力', ja: 'エネルギー', ko: '에너지', es: 'Energía' }, Component: EnergyOverview },
  { key: 'media', icon: '🎬', title: { en: 'Media', 'zh-CN': '媒体娱乐', 'zh-TW': '媒體娛樂', ja: 'メディア・娯楽', ko: '미디어 · 엔터', es: 'Medios' }, Component: MediaOverview },
  { key: 'security', icon: '🔒', title: { en: 'Security', 'zh-CN': '网络安全', 'zh-TW': '網路安全', ja: 'サイバーセキュリティ', ko: '사이버 보안', es: 'Ciberseguridad' }, Component: SecurityOverview },
  { key: 'law', icon: '⚖️', title: { en: 'Legal', 'zh-CN': '法律科技', 'zh-TW': '法律科技', ja: '法律科技', ko: '법률 테크', es: 'Legal' }, Component: LawOverview },
  { key: 'climate', icon: '🌍', title: { en: 'Climate', 'zh-CN': '环保气候', 'zh-TW': '環保氣候', ja: '環境・気候', ko: '환경 · 기후', es: 'Clima' }, Component: ClimateOverview },
  { key: 'govtech', icon: '🏛️', title: { en: 'GovTech', 'zh-CN': '政务智慧城市', 'zh-TW': '政務智慧城市', ja: '行政・スマートシティ', ko: '행정 · 스마트시티', es: 'Gobierno' }, Component: GovTechOverview },
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
          {L({ en: 'AI in Industries', 'zh-CN': 'AI行业应用', 'zh-TW': 'AI行業應用', ja: 'AI業界応用', ko: 'AI 산업 응용', es: 'IA en industrias' })}
        </h2>
        <p style={{ fontSize: 14, opacity: 0.85, margin: '0 0 20px', maxWidth: 600, lineHeight: 1.6 }}>
          {L({ en: 'Explore how AI is transforming 15 industries — each with detailed analysis, real cases, key metrics, and tool directories.', 'zh-CN': '探索AI如何变革15大行业——每个行业都有详细分析、真实案例、关键数据指标和精选工具目录。', 'zh-TW': '探索AI如何變革15大行業——每個行業都有詳細分析、真實案例、關鍵數據指標和精選工具目錄。', ja: 'AIが15の主要産業をどう変革しているかを探る。詳細な分析、事例、指標、ツールディレクトリ。', ko: 'AI가 15개 주요 산업을 어떻게 혁신하는지 탐색. 상세 분석, 실제 사례, 핵심 지표, 도구 디렉토리.', es: 'Explore cómo la IA transforma 15 industrias: análisis detallados, casos reales, métricas clave y directorios de herramientas.' })}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {sections.map(s => (
            <span key={s.key} onClick={() => { const el = document.getElementById(`section-${s.key}`); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }} style={{ cursor: 'pointer',
              background: 'rgba(255,255,255,0.15)', color: '#fff', padding: '4px 12px', borderRadius: 16, fontSize: 13, textDecoration: 'none', fontWeight: 500,
            }}>
              {s.icon} {domainTitle(s.title, lang)}
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
