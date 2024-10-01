import {Component, OnInit} from '@angular/core';
import {Footballer} from "../shared/footballer";
import {FootballerService} from "../shared/footballer.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FootballersListItemComponent} from "../footballers-list-item/footballers-list-item.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {NotificationComponent} from "../../notification/notification.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-footballers-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgClass,
    FootballersListItemComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './footballers-list.component.html',
  styleUrl: './footballers-list.component.scss'
})
export class FootballersListComponent implements OnInit {
  footballers: Footballer[] = [];
  searchId: number | null = null; // Adiciona uma propriedade para armazenar o ID de busca

  constructor(
      public footballerService: FootballerService,
      route: ActivatedRoute,
      private snackBar: MatSnackBar,
      public dialog: MatDialog
  ) {
    this.footballers = route.snapshot.data['footballersData'];
  }

  ngOnInit(): void {
    this.reload(false);
  }

  reload(onClick: boolean) {
    this.footballers = [];
    this.footballerService.getAll().subscribe(value => {
      this.footballers = value;
    });
    if (onClick) {
      this.snackBar.openFromComponent(NotificationComponent, {
        duration: 5000,
        data: { mensagem: 'Recarregamento realizado com sucesso!' },
        verticalPosition: 'bottom',
        horizontalPosition: 'left',
      });
    }
  }

  searchFootballer() {
    if (this.searchId) {
      this.footballerService.getById(this.searchId).subscribe(
          footballer => {
            if (footballer) {
              this.footballers = [footballer];
              this.snackBar.open('Jogador encontrado!', 'Fechar', {
                duration: 3000,
              });
            } else {
              this.footballers = []; // Limpa a lista se não encontrar
              this.snackBar.open('Jogador não encontrado!', 'Fechar', {
                duration: 3000,
              });
            }
          },
          error => {
            this.footballers = [];
            this.snackBar.open('Erro ao buscar jogador. Tente novamente.', 'Fechar', {
              duration: 3000,
            });
          }
      );
    } else {
      this.reload(false);
    }
  }

  refresh(footballer: Footballer) {
    const footballerIndex = this.footballers.findIndex((value) => value.id == footballer.id);
    this.footballers.splice(footballerIndex, 1);
  }
}
