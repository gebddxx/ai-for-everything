import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'

interface Props {
  data: { name: string; value: number; color: string }[]
  innerRadius?: number
}

export default function PieChart({ data, innerRadius = 60 }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsPie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={110}
          paddingAngle={4}
          dataKey="value"
          stroke="none"
        >
          {data.map((d) => (
            <Cell key={d.name} fill={d.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            borderRadius: 8,
            border: '1px solid var(--border)',
            fontSize: 13,
            background: 'var(--bg-card)',
            color: 'var(--text)',
          }}
        />
        <Legend
          wrapperStyle={{ fontSize: 13, color: 'var(--text)' }}
        />
      </RechartsPie>
    </ResponsiveContainer>
  )
}
