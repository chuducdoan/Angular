import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpendingService } from 'src/app/service/spending/spending.service';

@Component({
  selector: 'app-add-modal-spending',
  templateUrl: './add-modal-spending.component.html',
  styleUrls: ['./add-modal-spending.component.scss']
})
export class AddModalSpendingComponent implements OnInit {

  formSpending!: FormGroup;
  action: string = "Thêm";

  constructor(private fb: FormBuilder,
    private spendingService: SpendingService,
    @Inject(MAT_DIALOG_DATA) private editData: any,
    private dialogRef: MatDialogRef<AddModalSpendingComponent>) { }

  ngOnInit(): void {
    this.formSpending = this.fb.group({
      ngaytao: ['', Validators.required],
      loaichitieu: ['', Validators.required],
      sotien: ['', Validators.required],
      ghichu: ['']
    });
    if(this.editData) {
      this.formSpending.controls['ngaytao'].setValue(this.editData.ngaytao);
      this.formSpending.controls['loaichitieu'].setValue(this.editData.loaichitieu);
      this.formSpending.controls['sotien'].setValue(this.editData.sotien);
      this.formSpending.controls['ghichu'].setValue(this.editData.ghichu);
      this.action = "Sửa";
    }
  }

  addSpending() {
    if(!this.editData) {
      if(this.formSpending.valid) {
        this.spendingService.createSpending(this.formSpending.value).subscribe({
          next: () => {
              this.dialogRef.close("save");
          },
          error: () => {
            alert("Them that bai")
          }
        })
      }
    } else {
      this.spendingService.updateSpending(this.editData.id, this.formSpending.value).subscribe({
        next: () => {
          this.dialogRef.close("update");
        },
        error: () => {
          alert("Sua that bai!");
        }
      })
    }
  }

}
