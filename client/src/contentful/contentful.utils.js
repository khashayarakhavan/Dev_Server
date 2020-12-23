
import { createClient } from 'contentful'

const client = createClient({
    space: 'wcuiwrx59jw2',
    accessToken: 'P3qy6y2X3RtK9vx_wgUjWualULFJ6HAV6evUEGczKxA'
})

export default client
// client.getEntries({content_type: 'post'}).then(response => {
//     this.setState({articles: response.items})
// })
