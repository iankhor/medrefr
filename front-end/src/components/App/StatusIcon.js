import accepted from './../../../assets/img/accepted.png'
import assigned from './../../../assets/img/assigned.png'
import completed from './../../../assets/img/completed.png'
import pending from './../../../assets/img/pending.png'
import noshow from './../../../assets/img/noshow.png'
import declined from './../../../assets/img/declined.png'
import withdrawn from './../../../assets/img/withdrawn.png'
import rejected from './../../../assets/img/rejected.png'


export default function getStatusIcon(status) {
    switch (status){
      case 'accepted':
        return accepted
      
      case 'assigned':
        return assigned
      
      case 'completed':
        return completed
      
      case 'pending':
        return pending
      
      case 'noShow':
        return noshow
      
      case 'noShow':
        return noshow
      
      case 'declined':
        return declined
      
      case 'withdrawn':
        return withdrawn
      
      case 'rejected':
        return rejected

      default:
        return pending
    }
}

