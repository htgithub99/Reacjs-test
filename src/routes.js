import Dashboard from './pages/admin/dashboard/Dashboard';
import Collaborator from './pages/admin/collaborator/Collaborator'

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