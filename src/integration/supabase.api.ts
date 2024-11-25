import { createClient } from "@/app/utils/supabase/server";
import { PostsType } from "@/types/posts.type";

class SupabaseApi {
  constructor() {}

  //todo: 반환 타입을 generic 하게 반환할수 있도록 해야한다. posts, tags 랑 등등을
  async getPost(): Promise<PostsType[]> {
    const supabase = await createClient();
    const { data: posts, error } = await supabase.from("posts").select();

    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }

    return posts;
  }

  async getPostById(id: number): Promise<PostsType[]> {
    const supabase = await createClient();
    const { data: post, error } = await supabase
      .from("posts")
      .select()
      .eq("id", id);
    // .single();

    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }

    return post;
  }
}

export default SupabaseApi;
