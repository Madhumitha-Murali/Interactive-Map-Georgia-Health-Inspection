// function getHazards(feature) {
//   const hazArray = [feature.properties.]
// }


function popupParser(feature) {

  console.log(feature);

  // Displays the Business Name
  const entityName = `
    <div class="nameContainer">
        <b class="entityName">${feature.properties.name}</b>
    </div>
  `

  // Returns the HTML for the top business image from Yelp
  // const entityImg = `
  //   <img class="popupImage" src="${feature.properties.img_url}">
  //   `

  // Returns the HTML star rep. for business rating from Yelp
  const starDisp = `
  <fieldset class="popup-field">
  <legend><img class="indicatorImage1" src="/static/images/Yelp.png"/></legend>
  <img class="popupImage" src="${feature.properties.img_url}">
    <div class="star-rating"> 
      ${createStarRating(feature.properties.rating)}
    </div>
    </fieldset>
    `

  // Temporary: make into color-bar
  const deetDisp = `
    <fieldset class="popup-field">
    <legend><div class="head1"><img class="indicatorImage1" src="/static/images/dph.png"/><b>Department of Public Health</div></b></legend>
    <div> 
      <b><div class="tooltip text2">Running Score: ${feature.properties.lifetime_avg.toFixed(1)}<span class="tooltiptext">3 year Rolling Avg</span></div></b>
    </div>
    `

  // Temporary: make into color-bar
  const deetDisp2 = `
    <div class="text2"> 
      <b>Current Score: ${feature.properties.score.toFixed(1)}</b>
    </div>
    `

  // Temporary: make into color-bar
  const lastInspected = `
    <div class="text2"> 
      <b>Last Inspection: ${feature.properties.date}</b>
    </div>
    `

  // Temporary:
  const issues = `
    <table> 
      <tr> 
        <td><div class="tooltip"><img class="indicatorImage3" src="${feature.properties.pests ? "/static/images/pest.png" : "/static/images/no-pest.png"}"><span class="tooltiptext">Pest Issues</span></div></td>
        <td><div class="tooltip"><img class="indicatorImage" src="${feature.properties.personnel ? "/static/images/Dirty_hand.png" : "/static/images/clean_hand.png"}"><span class="tooltiptext">Sanitization</span></div></td>
        <td><div class="tooltip"><img class="indicatorImage" src="${feature.properties.temperature ? "/static/images/temp.png" : "/static/images/no-temp.png"}"><span class="tooltiptext">Temperature Maintenance</span></div></td>
        <td><div class="tooltip"><img class="indicatorImage" src="${feature.properties.sanitation ? "/static/images/clean.png" : "/static/images/not-clean.png"}"><span class="tooltiptext">Cleanliness Check</span></div></td>
        <td><div class="tooltip"><img class="indicatorImage" src="${feature.properties.hazard ? "/static/images/biohazard.png" : "/static/images/no-biohazard.png"}"><span class="tooltiptext">BioHazard Incidents</span></div></td>
      </tr>
      <br/>
    </table>
  `

  const gotoDph = `
    <div class="text2"> 
    <br/>
      <b>DPH Inspector Comments: 
        <a href="https://ga.healthinspections.us/stateofgeorgia/API/index.cfm/inspectionsData/${feature.properties.id}"> 
        Georgia Dept. of Public Health</a>
      </b>
    </div>
    </fieldset>
    `

  return entityName + starDisp + deetDisp + deetDisp2 + lastInspected + issues + gotoDph
}