import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.addHero({ name: heroName } as Hero)
      .subscribe(hero => this.heroes.push(hero));

  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => hero !== h);
    this.heroService.deleteHero(hero)
      .subscribe();
  }
}
