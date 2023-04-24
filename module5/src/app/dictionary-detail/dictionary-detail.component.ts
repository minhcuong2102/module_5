import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Dictionary = {};

  constructor(private dictionaryService: DictionaryService,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = (param.get('word'));
      this.word = this.dictionaryService.translate(id);
    });
  }

}
