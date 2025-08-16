import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Present", value: 82, color: "#22C55E" },
  { name: "Absent", value: 18, color: "#EF4444" },
];

type PieChartComponentProps = {
  className?: string;
};

function PieChartComponent({
  className,
}: PieChartComponentProps) {
  return (
    <div
      className={`flex flex-col items-center w-full ${
        className || ""
      }`}
    >
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={300}
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="60%"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [
              `${value}%`,
              "Attendance",
            ]}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
          <Legend
            verticalAlign="bottom"
            height={40}
            layout="horizontal"
            align="center"
            iconType="circle"
            formatter={(value) => (
              <span className="text-xs text-black">
                {value}
              </span>
            )}
            wrapperStyle={{
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
