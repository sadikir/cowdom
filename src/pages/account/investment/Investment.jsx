import "./investment.css"
import RowData from "./RowData"
const Investment =()=>{
  return(
    <>
      <div className="investment-wrapper">
        <h1>Investments</h1>
        <div className="home-revenue-outlook">
            <table>
              <tr>
                <td className="head-strong">Total Invested</td>
                <td className="head-strong">Total months</td>
                
              </tr>
              <tr>
                <td className="value-strong">$1,530</td>
                <td className="value-strong">6<span>  months</span></td>
                
              </tr>
            </table>
        </div>
        <h2 className="my-farm-heading">Your Farm</h2>
        <div className="farm-wrapper">
          <table>
            <tr>
              <th>Picture</th>
              <th>ID#</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
            <RowData />
          </table>
        </div>
      </div>
    </>
  )
}
export default Investment