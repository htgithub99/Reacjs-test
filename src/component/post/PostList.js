import callApi from '../../api/admin/Post'

export default function PostList ({match}) {
    ;(async function getApi() {
        try {
            const list_data = await callApi.get()
            console.log('_____', list_data.data)
        }

        catch (err) {
            console.log('Get fail!')
        }

    })()
    return (
        <>
            <div match={match}>
                <h1>List Post</h1>
            </div>
        </>
    )
}