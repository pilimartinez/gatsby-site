import React from 'react';

function Card() {
  return <div>
  <table>
    <tbody>
    <tr>
        <th>💻</th>
        <td>📍</td>
        <td>📅</td>
      </tr>
      <tr className="grayfield">
        <th>Javascript</th>
        <td>Stensul</td>
        <td>12/09/19</td>
      </tr>
      <tr>
        <th>Open Source</th>
        <td>Iunigo</td>
        <td>09/10/19</td>
      </tr>
      <tr className="grayfield">
        <th>React for begginers</th>
        <td>OLX</td>
        <td>02/11/19</td>
      </tr>
      <tr>
        <th>UX/UI</th>
        <td>Coderio</td>
        <td>03/12/19</td>
      </tr>
      <tr className="grayfield">
        <th>Lightning Talks</th>
        <td>Real Trends</td>
        <td>18/12/19</td>
      </tr>
      <tr>
        <th>React: Cat Generator</th>
        <td>Media Monks</td>
        <td>17/01/20</td>
      </tr>
      <tr className="grayfield">
        <th>Vue for begginers</th>
        <td>Ripio</td>
        <td>18/02/20</td>
      </tr>
    </tbody>
  </table>
  </div>
}

export default Card;