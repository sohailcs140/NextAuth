import styles from "@/styles/postList.module.css"
import Link from "next/link"


export default function Post({post}) {
  return (
    <div className={styles.post}>
        <Link href={`/posts/${post.id}`}>{post.id}</Link>
    </div>
  )
}
