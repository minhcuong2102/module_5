import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {Router} from '@angular/router';
import {Dictionary} from '../model/dictionary';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  dictionary: Dictionary[] = [];

  constructor(private dictionaryService: DictionaryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.dictionary = this.dictionaryService.getAll();
  }

  translate(wordSearch: string) {
    this.router.navigateByUrl('dictionary/' + wordSearch);
  }
}
