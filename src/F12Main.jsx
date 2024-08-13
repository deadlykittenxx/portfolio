const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/Group2'>/Group2</a></td>
            <td style={tableCellStyle}><a href='/Group2'>Group 2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Iphone8Plus1'>/Iphone8Plus1</a></td>
            <td style={tableCellStyle}><a href='/Iphone8Plus1'>iPhone 8 Plus - 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MacBookAir1'>/MacBookAir1</a></td>
            <td style={tableCellStyle}><a href='/MacBookAir1'>MacBook Air - 1</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MacBookAir2'>/MacBookAir2</a></td>
            <td style={tableCellStyle}><a href='/MacBookAir2'>MacBook Air - 2</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MacBookAir3'>/MacBookAir3</a></td>
            <td style={tableCellStyle}><a href='/MacBookAir3'>MacBook Air - 3</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MenuBarMenuApple'>/MenuBarMenuApple</a></td>
            <td style={tableCellStyle}><a href='/MenuBarMenuApple'>Menu Bar Menu / Apple</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/MenuBarMenuApple1'>/MenuBarMenuApple1</a></td>
            <td style={tableCellStyle}><a href='/MenuBarMenuApple1'>Menu Bar Menu / Apple</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/White'>/White</a></td>
            <td style={tableCellStyle}><a href='/White'>White</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}