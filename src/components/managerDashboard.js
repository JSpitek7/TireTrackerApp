import React, {Component} from 'react'
import renderHTML from 'react-render-html';
class ManagerDashboard extends Component {
    render() {
        return(
            <div className='ManagerDashboard'>
                {renderHTML(
                    <script type='text/javascript' src='https://us-east-1.online.tableau.com/javascripts/api/viz_v1.js'>
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
                    </script>
                )}
            </div>
        )
    }
}
export default ManagerDashboard