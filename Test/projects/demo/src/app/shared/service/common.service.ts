import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  // 在底部添加模块
  constructor(private snackBar: MatSnackBar) { }
  showSnackBarMessage(mm: string, duration: number = 3000, ) {
    this.snackBar.open(mm, undefined, { duration, horizontalPosition: 'center', verticalPosition: 'bottom' });
  }
}
