import React, { Component } from 'react';
import TableauReport from 'tableau-react';

class AdminDashboardPage extends Component {
    render() {
        return(
            <div className='userPage'>
                <TableauReport
                    url='https://us-east-1.online.tableau.com/t/tiretracking/views/LawrenceTireTracker/TireCPMTrackers?iframeSizedToWindow=true&:embed=y&:showAppBanner=false&:display_count=no&:showVizHome=no'
                    options={{hideTabs: false}}
                />
            </div>
        )
    }
}

export default AdminDashboardPage;