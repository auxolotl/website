export const languages = {
	en: 'English'
};

export const defaultLang = 'en';

export const ui = {
	en: {
		'goals.independent.title': 'Independent',
		'goals.independent': 'We will fork and maintain Nix, NixPkgs, and NixOS. Additional support for projects such as Nix Darwin and Home Manager will be considered.',
		'goals.gov.title': 'Governance',
		'goals.gov': 'A democratic model of governance with elected positions will be used to manage the project. A steering committee will provide direction with additional committees handling specific logistical tasks. Features or individual projects will be owned by Special Interest Groups. SIGs will collaborate within Working Groups to achieve their goals. Each committee and group will have its goals, requirements, and management process clearly defined.',
		'goals.stabilization.title': 'Stabilization',
		'goals.stabilization': 'User-friendly features such as the Nix v3 CLI will be enabled by default. Nix Flakes are used too heavily to remove or change and will instead be stabilized as a v0 in its current state with any future work being handled by a Special Interest Group.',
		'goals.infa.title': 'Infastructure',
		'goals.infa': 'We will build and maintain the tools and infrastructure necessary to keep the ecosystem healthy, including Continuous Integration and Binary Caching.',
		'goals.education.title': 'Education',
		'goals.education': 'Unified documentation, tutorials, guides, and examples will provide a better onboarding experience for newcomers and a faster iteration cycle for experts.',
	},
} as const;
