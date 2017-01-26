import React , { Component} from 'react'
import { FormsySelect } from 'formsy-material-ui/lib'
import { MenuItem } from 'material-ui'

class TriageStatusList extends Component {
    render(){
        console.log('statuslist action',this.props.action)
        console.log('statuslist status',this.props.referralStatus)
        return(
          <FormsySelect
              name="referralStatus"
              floatingLabelText="Status"
              value={this.props.action === 'update' ? this.props.referralStatus : null}
          >
                    <MenuItem value={'accepted'} primaryText="Accepted" />
                    <MenuItem value={'assigned'} primaryText="Assigned" />
                    <MenuItem value={'completed'} primaryText="Completed" />
                    <MenuItem value={'pending'} primaryText="Pending" />
                    <MenuItem value={'noShow'} primaryText="No show" />
                    <MenuItem value={'declined'} primaryText="Declined" />
                    <MenuItem value={'withdrawn'} primaryText="Withdrawn" />
                    <MenuItem value={'rejected'} primaryText="Rejected" />
          </FormsySelect>
        )
    }
}

class GPStatusList extends Component {
    render(){
        return(
          <FormsySelect
              name="referralStatus"
              floatingLabelText="Status"
              value={this.props.action === 'update' ? this.props.value : null}
          >
                    <MenuItem value={'noShow'} primaryText="No show" />
                    <MenuItem value={'withdrawn'} primaryText="Withdrawn" />
          </FormsySelect>
        )
    }
}

class PsychiatristStatusList extends Component {
    render(){
        return(
          <FormsySelect
              name="referralStatus"
              floatingLabelText="Status"
              value={this.props.action === 'update' ? this.props.value : null}
          >
                    <MenuItem value={'accepted'} primaryText="Accepted" />
                    <MenuItem value={'completed'} primaryText="Completed" />
                    <MenuItem value={'declined'} primaryText="Declined" />
                    <MenuItem value={'noShow'} primaryText="No show" />
          </FormsySelect>
        )
    }
}


export  { TriageStatusList, GPStatusList, PsychiatristStatusList  }

