import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props

  return (
    <div className="vaccination-by-container">
      <h1 className="title">Vaccination By Gender</h1>
      <PieChart width={1000} height={285}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByGenderDetails}
          innerRadius="60"
          outerRadius="120"
          startAngle={180}
          endAngle={0}
          dataKey="count"
        >
          <Cell name="male" fill="#f54394" />
          <Cell name="female" fill="#5a8dee" />
          <Cell name="others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{padding: 10}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
