
import GridImages from "./GridImages.vue";
import Card from "@/components/molecules/Card/Card.vue";

export default{
    title: 'Components/Organism/GridImages',
    component: GridImages,
    tags: ['autodocs']
}

export const Default = {
    args: {
        Component: Card,
        arrayComponentsProps: [
            {imagenUrl: 'https://image.lexica.art/md2/329c21cb-a228-461d-95d9-53c61aad598e'},
            {imagenUrl: 'https://image.lexica.art/full_jpg/105a9273-f629-4eb1-bd89-c15fadc0d964'}
        ]
    }
}