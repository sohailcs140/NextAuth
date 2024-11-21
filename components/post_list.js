import Post from "./post";
import {getPosts} from "@/services/postsServices.js"
import styles  from "@/styles/postList.module.css"

export default async function post_list() {
    const posts = await getPosts()
  return (
    <div className={styles.postList}>
        {
            posts.map(post=><Post post={post} />)
        }
    </div>
  )
}
