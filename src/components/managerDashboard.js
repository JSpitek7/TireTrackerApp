import React, {Component} from 'react'
class ManagerDashboard extends Component {
    render() {
        return(
            <div class='tableauPlaceholder' style='width: 1920px; height: 880px;'>
                <object class='tableauViz' width='1920' height='880' style='display:none;'>
                    <param name='host_url' value='https%3A%2F%2Fus-east-1.online.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='/t/tiretracker' />
                    <param name='name' value='UpdatedLawrenceTireTracker/TireTracking' />
                    <param name='tabs' value='yes' />
                    <param name='toolbar' value='yes' />
                    <param name='showAppBanner' value='false' />
                    <param name='filter' value='iframeSizedToWindow=true' />
                </object>
            </div>
        )
    }
}
export default ManagerDashboard