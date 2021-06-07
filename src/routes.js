import PostList from "./component/post/PostList";

export const routes = [
    {
        path: '/admin/post',
        exact: true,
        components: match => <PostList match={match}/>,
        role: ''
    }
]