

function Profile({ profile }) {
  return (
    <div className={styles.container}>
      <div>Profile#Show</div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://.../profile`)
  const profile = await res.json()

  // Pass profile to the page via props
  return { props: { profile } }
}



export default Profile
