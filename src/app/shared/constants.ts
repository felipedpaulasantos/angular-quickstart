import { AccordionMenu } from "./components/accordion/types/accordion-menu";

export const mockedSideMenuItems: AccordionMenu[] = [
  {
    name: "Início",
    iconClass: "fas fa-lg fa-home",
		description: "Módulo que trata de ...",
    url: "/home",
    isLink: true,
    enabled: true,
    level: 1
  }, {
		name: "Módulo 1",
		description: "Módulo que trata de ...",
    iconClass: "fas fa-lg fa-dollar-sign",
    url: "/modulo1",
    isLink: true,
    enabled: true,
    level: 2
	}, {
		name: "Módulo 2",
    iconClass: "far fa-lg fa-building",
		description: "Módulo que trata de ...",
    url: "/modulo2",
    isLink: true,
    enabled: true,
    level: 2
	}
	, {
		name: "Módulo 3",
    iconClass: "far fa-lg fa-id-badge",
		description: "Módulo que trata de ...",
    url: "/modulo3",
    isLink: true,
    enabled: true,
    level: 2
	}
	, {
		name: "Módulo 4",
    iconClass: "far fa-lg fa-user",
		description: "Módulo que trata de ...",
    url: "/modulo4",
    isLink: true,
    enabled: true,
    level: 2
	}
	, {
		name: "Módulo 5",
    iconClass: "fas fa-lg fa-users",
		description: "Módulo que trata de ...",
    url: "/modulo5",
    isLink: true,
    enabled: true,
    level: 2
	}
	, {
		name: "Módulo 6",
    iconClass: "far fa-lg fa-credit-card",
		description: "Módulo que trata de ...",
    url: "/modulo6",
    isLink: true,
    enabled: true,
    level: 2
	}
];

