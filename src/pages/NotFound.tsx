import { useT } from '../contexts/LanguageContext'
export default function NotFound() {
  const { lang } = useT()
  const msg = lang === 'zh-CN' ? '页面不存在' : lang === 'zh-TW' ? '頁面不存在' : lang === 'ja' ? 'ページが見つかりません' : lang === 'ko' ? '페이지를 찾을 수 없습니다' : lang === 'es' ? 'Página no encontrada' : 'Page not found'
  const hint = lang === 'zh-CN' ? '请检查网址，或从侧边栏导航到其他页面' : lang === 'zh-TW' ? '請檢查網址，或從側邊欄導航到其他頁面' : lang === 'ja' ? 'URLを確認するか、サイドバーから他のページに移動してください' : lang === 'ko' ? 'URL을 확인하거나 사이드바에서 다른 페이지로 이동하세요' : lang === 'es' ? 'Verifique la URL o navegue desde la barra lateral' : 'Check the URL or navigate from the sidebar'
  return (
    <div style={{ padding: 80, textAlign: 'center', color: 'var(--text-muted)' }}>
      <div style={{ fontSize: 64, marginBottom: 16 }}>🔍</div>
      <h2 style={{ color: 'var(--text)', marginBottom: 8, fontSize: 22 }}>{msg}</h2>
      <p style={{ fontSize: 14, lineHeight: 1.6 }}>{hint}</p>
    </div>
  )
}
