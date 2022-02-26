import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/service/account/account.service';

@Component({
  selector: 'app-add-modal-account',
  templateUrl: './add-modal-account.component.html',
  styleUrls: ['./add-modal-account.component.scss']
})
export class AddModalAccountComponent implements OnInit {

  hide = true;
  accountForm!: FormGroup;
  actionBtn: string = "Thêm";

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef: MatDialogRef<AddModalAccountComponent>) { }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      quyen: ['', Validators.required]
    });
    if(this.editData) {
      this.accountForm.controls['username'].setValue(this.editData.username);
      this.accountForm.controls['password'].setValue(this.editData.password);
      this.accountForm.controls['quyen'].setValue(this.editData.quyen);
      this.actionBtn = "Sửa";
    }
    console.log(this.editData);
  }

  // Ham thuc hien nhiem vu khi submit
  onSubmit() {
    return false;
  }

  // Ham xu ly them account khi click button add
  addAccount() {
    if(!this.editData) {
      if(this.accountForm.valid) {
        this.accountService.createAccount(this.accountForm.value).subscribe({
          next: (res) => {
            this.dialogRef.close("save");
          },
          error: () => {
            alert("Them that bai")
          }
        });
      }
    } else {
      this.updateAccount(this.editData.id, this.accountForm.value);
    }
  }

  updateAccount(id: number, dataForm: any) {
    this.accountService.updateAccount(id, dataForm).subscribe({
      next: (res) => {
          this.dialogRef.close("Save");
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
