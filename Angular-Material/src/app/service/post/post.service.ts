import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "http://localhost:3000/post";

  constructor(private http: HttpClient) { }

  /**
   * Hàm xử lý lấy tất cả bài viết từ api
   */
  getAll() {
    return this.http.get<any>(this.url);
  }

  /**
   * Ham xu ly them bai post
   * @param data, tham so truyen vao la du lieu can them cho mot record Post
   * @returns tra ve mot observable
   */
  createPost(data: any) {
    return this.http.post(this.url, data);
  }

  /**
   * Ham xoa ban ghi post
   * @param id tham so truyen vao la id cua ban ghi post muon xoa
   * @returns tra ve mot observable
   */
  deletePost(id: number) {
    return this.http.delete(this.url + "/" +id);
  }

  /**
   * Ham cap nhat mot ban ghi post
   * @param id tham so truyen vao la id cua ban ghi post can sua
   * @param data tham so truyen vao la du lieu can update
   * @returns trả về mot doi tuong observable
   */
  updatePost(id: number, data: any) {
    return this.http.put(this.url + "/" + id, data);
  }
}
