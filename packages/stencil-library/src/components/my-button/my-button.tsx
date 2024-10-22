import { Component, FunctionalComponent, Method, Prop, h } from '@stencil/core';

const ChevronLeft: FunctionalComponent = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M15 6L9 12L15 18" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);

const ChevronRight: FunctionalComponent = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10.5 21L17.5 14L10.5 7" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>
);

@Component({
	tag: 'my-button',
	styleUrl: 'my-button.css',
	shadow: true,
	assetsDirs: ['assets']
})
export class MyButton {
	@Prop() label: string;

	@Prop() chevron: 'right' | 'left' | 'none';

	@Prop() variant: 'primary' | 'secondary' | 'tertiary';

	@Prop() size: 'small' | 'large';

	@Method()
		handleClick() {
			alert('Clicked!');
		}

	render() {
		return (
			<button class={{ 'primary': this.variant === 'primary', 'secondary': this.variant === 'secondary', 'tertiary': this.variant === 'tertiary', 'small': this.size === 'small',
					'large': this.size === 'large' }} onClick={this.handleClick}>
				{this.chevron === 'left' && <ChevronLeft />}
				{this.label}
				{this.chevron === 'right' && <ChevronRight />}
			</button>
		)
	}
}