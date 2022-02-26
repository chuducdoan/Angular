import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostService } from 'src/app/service/post/post.service';
import { DialogDeleteComponent } from '../../popup/dialog-delete/dialog-delete.component';
import { AddModalPostComponent } from '../add-modal-post/add-modal-post.component';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent implements OnInit {

  displayedColumns: string[] = ['id', 'noidung', 'luotlike', 'nguoilike', 'ngaydang', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private postService: PostService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllPost();
  }

  /**
   * Hàm xử lý việc click button add thì mở modal add
   */
  openDialogAdd() {
    const dialogRef = this.dialog.open(AddModalPostComponent, {
      width: '30%'
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'save') {
        this.getAllPost();
      }
    })
  }

  /**
   * Ham xu ly viec click button add thi mo modal delete
   * @param id them so truyen vao la id cua bai post muon xoa
   */
  openDialogDelete(id: number) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.afterClosed().subscribe(res => {
      if(res === 'delete') {
        this.postService.deletePost(id).subscribe({
          next: () => {
            this.getAllPost();
          },
          error: () => {
            alert("Xoa that bai");
          }
        })
      }
    })
  }

  /**
   * Ham xu ly viec click button edit thi mo modal edit
   * @param data tham so truyen vao la data de update bai post
   */
  openDialogEdit(data: any) {
    const dialogRef = this.dialog.open(AddModalPostComponent, {
      width: '30%',
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if(res === 'update') {
          this.getAllPost();
        }
      },
      error: () => {
        alert("Sua that bai.")
      }
    })
  }

  /**
   * Hàm xử lý lọc data
   * @param event
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Hàm lấy tất cả bài viết
   */
  getAllPost() {
    return this.postService.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(<any> res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

}
function PopupDeleteComponent(PopupDeleteComponent: any) {
  throw new Error('Function not implemented.');
}

