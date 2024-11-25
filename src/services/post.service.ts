import { PostsType } from "@/types/posts.type";
import SupabaseApi from "../integration/supabase.api";

class PostService {
  supabaseApi = new SupabaseApi();

  async getAll(): Promise<PostsType[]> {
    return await this.supabaseApi.getPost();
  }

  async getById(id: number): Promise<PostsType[]> {
    return await this.supabaseApi.getPostById(id);
  }
}

export default PostService;
