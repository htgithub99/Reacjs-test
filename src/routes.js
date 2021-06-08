import Dashboard from './component/dashboard/ListDashboard';
import Collaborator from './component/collaborator/Collaborator'

export const routes = [
    {
        path: '/admin/dashboard',
        exact: true,
        components: match => <Dashboard match={match}/>,
    },
    {
        path: '/admin/collaborator',
        exact: true,
        components: match => <Collaborator match={match} />
    }
]