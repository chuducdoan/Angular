import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-add-modal-post',
  templateUrl: './add-modal-post.component.html',
  styleUrls: ['./add-modal-post.component.scss']
})
export class AddModalPostComponent implements OnInit {

  formPost!: FormGroup;

  action: string = "Thêm";

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddModalPostComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private postService: PostService) { }

  ngOnInit(): void {
    this.formPost = this.fb.group({
      noidung: ['', Validators.required],
      luotlike: [''],
      nguoilike: [''],
      ngaydang: ['', Validators.required]
    });

    if(this.editData) {
      this.formPost.controls['noidung'].setValue(this.editData.noidung);
      this.formPost.controls['luotlike'].setValue(this.editData.luotlike);
      this.formPost.controls['nguoilike'].setValue(this.editData.nguoilike);
      this.formPost.controls['ngaydang'].setValue(this.editData.ngaydang);
      this.action = "Sửa";
    }

  }

  saveAccount() {
    if(!this.editData) {
      if(this.formPost.valid) {
        this.postService.createPost(this.formPost.value).subscribe({
          next: () => {
            this.dialogRef.close('save');
          },
          error: () => {
            alert("them that bai")
          }
        })
      }
    } else {
      if(this.formPost.valid) {
        this.postService.updatePost(this.editData.id, this.formPost.value).subscribe(res => {
          this.dialogRef.close('update');
        })
      }
    }
  }

}
