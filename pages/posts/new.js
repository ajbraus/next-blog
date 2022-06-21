
function New() {

    const create = async(data) => {
        fetch('http://localhost:3000/api/posts/create', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div>New</div>
    )
}

export default New
