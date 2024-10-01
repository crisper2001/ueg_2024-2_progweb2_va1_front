import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Footballer} from "../shared/footballer";
import {FootballerService} from "../shared/footballer.service";
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ConfirmDialogComponent} from "../../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationComponent} from "../../notification/notification.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-footballers-list-item',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    FormsModule,
    NgIf,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './footballers-list-item.component.html',
  styleUrl: './footballers-list-item.component.scss'
})
export class FootballersListItemComponent {
  @Input()
  footballer!: Footballer;

  @Output()
  itemChange: EventEmitter<Footballer> = new EventEmitter<Footballer>();

  constructor(
    public footballerService: FootballerService,
    private snackBar : MatSnackBar,
    public dialog: MatDialog) {
  }

  openDialog(footballer: Footballer) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { name: footballer }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(footballer);
      }
    });
  }

  delete(footballer: Footballer) {
    this.footballerService.delete(footballer.id).subscribe({
      next: value => {
        this.snackBar.openFromComponent(NotificationComponent, {
          duration: 5000,
          data: { mensagem: 'Jogador apagado com sucesso!' },
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
        this.itemChange.emit(value);
      },
      error: error => {
        this.snackBar.openFromComponent(NotificationComponent, {
          duration: 5000,
          data: { mensagem: 'Erro ao excluir jogador!' },
          verticalPosition: 'bottom',
          horizontalPosition: 'left',
        });
      }
    });
  }
}
