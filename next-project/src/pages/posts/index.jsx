import styles from "../../styles/Pages.module.scss";

export default function Posts({ users, posts }) {
  return (
    <div className={styles.Pages}>
      <div className={styles.Pages__users}>
        {users && users.map((user) => <h4 key={user.id}>{user.email}</h4>)}
      </div>
      {/* <hr />
      <div className={styles.Pages__posts}>
        {posts && posts.map((post) => <h4 key={post.id}>{post.title}</h4>)}
      </div> */}
    </div>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
}
