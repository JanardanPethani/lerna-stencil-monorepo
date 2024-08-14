import { Component, Prop, h } from '@stencil/core';

export type Result = {
  imageUrl: string;
  title: string;
  author: string;
  type: string;
  description: string;
};

@Component({
  tag: 'result-card',
  styleUrl: 'result-card.css',
  shadow: true,
})
export class ResultCard {
  @Prop() result: Result;

  render() {
    return (
      <div class="mb-4 p-4 border rounded-lg shadow">
        <img src={this.result.imageUrl} alt={this.result.title} class="w-full h-48 object-cover mb-4" />
        <h3 class="text-xl font-semibold">{this.result.title}</h3>
        <p class="text-sm text-gray-600">Author: {this.result.author}</p>
        <p class="text-sm text-gray-600">Type: {this.result.type}</p>
        <p class="text-sm text-gray-700 mt-2">{this.result.description}</p>
      </div>
    );
  }
}
