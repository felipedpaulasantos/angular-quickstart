import { AccordionMenu } from "./components/accordion/types/accordion-menu";

export const mockedSideMenuItems: AccordionMenu[] = [
  {
    name: "Fotos",
    iconClass: "fas fa-lg fa-images",
		description: "Consultar imagens e álbuns",
    url: "/album",
    isLink: true,
    enabled: true,
    level: 1
  }
];

