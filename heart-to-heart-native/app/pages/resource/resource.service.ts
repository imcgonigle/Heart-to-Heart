import { Injectable } from '@angular/core';

import firebase = require("nativescript-plugin-firebase");

import { Resource } from './resource';

@Injectable()
export class ResourceService {
  private resources = new Array<Resource>(
    {id: 1, title: 'Funny Dog', description: 'A video of a dog.', type: 'video', category: "happy"},
    {id: 2, title: 'Funny Baby', description: 'A video of a baby.', type: 'video', category: "happy"},
    {id: 3, title: 'Funny Cat', description: 'A video of a cat.', type: 'video', category: "happy"},
    {id: 4, title: 'Funny Monkey', description: 'A video of a Monkey.', type: 'video', category: "happy"},
    {id: 5, title: 'Funny Horse', description: 'A video of a Horse.', type: 'video', category: "happy"},
    {id: 6, title: 'Fish', description: 'A video of fish.', type: 'video', category: "relaxing"},
    {id: 7, title: 'Food', description: 'A video of food.', type: 'video', category: "satisfying"},
    {id: 8, title: 'Flying', description: 'A video of airplanes.', type: 'video', category: "satisfying"},
    {id: 9, title: 'The Ocean', description: 'A video about the ocean.', type: 'video', category: "relaxing"},
    {id: 10, title: 'Floating', description: 'A video of things floating.', type: 'video', category: "relaxing"},
    {id: 11, title: 'Money', description: 'A video about money.', type: 'video', category: "satisfying"},
    {id: 12, title: 'Funny Dog pic', description: 'A picture of a dog.', type: 'picture', category: "happy"},
    {id: 13, title: 'Funny Baby pic', description: 'A picture of a baby.', type: 'picture', category: "happy"},
    {id: 14, title: 'Funny Cat pic', description: 'A picture of a cat.', type: 'picture', category: "happy"},
    {id: 15, title: 'Funny Monkey pic', description: 'A picture of a Monkey.', type: 'picture', category: "happy"},
    {id: 16, title: 'Funny Horse pic', description: 'A picture of a Horse.', type: 'picture', category: "happy"},
    {id: 17, title: 'Fish pic', description: 'A picture of fish.', type: 'picture', category: "relaxing"},
    {id: 18, title: 'Food pics', description: 'A picture of food.', type: 'picture', category: "satisfying"},
    {id: 19, title: 'Flying pic', description: 'A picture of airplanes.', type: 'picture', category: "satisfying"},
    {id: 20, title: 'The Ocean pic', description: 'A picture about the ocean.', type: 'picture', category: "relaxing"},
    {id: 21, title: 'Floating pic', description: 'A picture of things floating.', type: 'picture', category: "relaxing"},
    {id: 22, title: 'Money pic', description: 'A picture about money.', type: 'picture', category: "satisfying"}
  )

  getResources(type: string, category: string): Resource[]{
    return this.resources.filter(resource =>{
      return (resource.type === type && resource.category === category);
    });
  }
  getRes(type: string): any[] {
    return 
  }

  getResource(id: number): Resource{
    return this.resources.filter(resource => {return resource.id == id})[0];
  }
}