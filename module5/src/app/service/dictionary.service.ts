import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [
    {
      word: 'apple', meaning: 'quả táo'
    },
    {
      word: 'one', meaning: 'một'
    },
    {
      word: 'many', meaning: 'nhiều'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionary;
  }

  translate(word: string) {
    return this.dictionary.find(dictionary => dictionary.word === word);
  }
}
