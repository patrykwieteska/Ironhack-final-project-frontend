import { AuthService } from 'src/app/services/auth/auth.service';
import { ProfileService } from 'src/app/services/profile/profile.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserToDelete } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-delete-profile',
  templateUrl: './delete-profile.component.html',
  styleUrls: ['./delete-profile.component.css']
})
export class DeleteProfileComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string, private profileService: ProfileService, private authService: AuthService) {

    console.log(data)
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }


  deleteAnyway() {
    this.profileService.deleteProfile().subscribe(
      result => {
        console.log(result);
      }
    )
  }


}

