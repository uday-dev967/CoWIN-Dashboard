import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props
  const DataFormatter = num => {
    if (num > 1000) {
      return `${(num / 1000).toString()}k`
    }
    return num.toString()
  }
  return (
    <div className="vaccination-by-coverage">
      <h1 className="title">Vaccination Coverage</h1>

      <BarChart
        data={vaccinationCoverageDetails}
        width={1000}
        height={300}
        margin={{top: 5}}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{stroke: '#cbd5e1', strokeWidth: 1}}
        />
        <YAxis
          tickFormatter={{DataFormatter}}
          tick={{stroke: '#cbd5e1', strokeWidth: 1}}
        />
        <Legend
          wrapperStyle={{
            paddingTop: 20,
            textAlign: 'center',
            fontSize: 12,
            fontFamily: 'Roboto',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[5, 5, 0, 0]}
          width="15%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[5, 5, 0, 0]}
          width="15%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
