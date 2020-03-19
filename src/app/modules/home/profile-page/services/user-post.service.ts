import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import NewPost from "../models/new-post.model";

@Injectable()
export class UserPostService {
  constructor(private http: HttpClient) {}

  create(post: NewPost) {
    const content = new FormData();
    content.append("image", post.image);
    content.append("content", post.content);

    return this.http.post("/api/user-post", content, { observe: "response" });
  }

  current(startIndex: number, length: number) {
    return this.http.get(
      `/api/user-post/current?startIndex=${startIndex}&length=${length}`,
      { observe: "response" }
    );
  }

  getByUserId(id: number, startIndex: number, length: number) {
    return this.http.get(
      `/api/user-post?userId=${id}&startIndex=${startIndex}&length=${length}`,
      { observe: "response" }
    );
  }

  getWithPagination(id: number, page: number) {
    return this.http.get(`api/user-post/paginate?userId=${id}&page=${page}`, {
      observe: "response"
    });
  }

  delete(postId: number) {
    return this.http.delete(`/api/post/${postId}/user-post`, {
      observe: "response"
    });
  }

  like(id: number) {
    return this.http.put(`/api/post/like/${id}/user-post`, null, {
      responseType: "text"
    });
  }

  unlike(id: number) {
    return this.http.put(`/api/post/unlike/${id}/user-post`, null, {
      responseType: "text"
    });
  }
}
