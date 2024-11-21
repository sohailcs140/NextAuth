import { Suspense } from "react"
import Post_list from "@/components/post_list"


export default function PostPage() {
  return (
    <div>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Post_list/>
        </Suspense>

    </div>
  )
}
