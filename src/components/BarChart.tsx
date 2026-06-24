import { BarChart as RechartsBar, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import type { ChartData } from '../data/logistics'

interface BarConfig {
  key: string
  label: string
  color: string
}

interface Props {
  data: ChartData[]
  bars: BarConfig[]
}

export default function BarChart({ data, bars }: Props) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RechartsBar data={data} margin={{ top: 8, right: 8, left: 0, bottom: 8 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="name" tick={{ fontSize: 13, fill: '#64748b' }} />
        <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
        <Tooltip
          contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13 }}
        />
        <Legend wrapperStyle={{ fontSize: 13 }} />
        {bars.map((b) => (
          <Bar key={b.key} dataKey={b.key} name={b.label} fill={b.color} radius={[6, 6, 0, 0]} />
        ))}
      </RechartsBar>
    </ResponsiveContainer>
  )
}
