import { PostsType } from "@/types/posts.type";
import SupabaseApi from "../integration/supabase.api";

class PostService {
  supabaseApi = new SupabaseApi();

  async getAll(): Promise<PostsType[]> {
    return await this.supabaseApi.getPost();
  }
}

export default PostService;
