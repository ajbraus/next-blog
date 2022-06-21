
function Show({ post }) {

    return (
        <div>
          <h3>{post.body}</h3>
        </div>

    )
}

export default Show


// Fetch one post

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`)
  const post = await res.json();

  return {
    props : { post }
  }
}
