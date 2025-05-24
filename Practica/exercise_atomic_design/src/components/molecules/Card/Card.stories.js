import Card from "./Card.vue";

export default {
     title: 'Components/Molecules/Card',
     component: Card,
     tags:['autodocs']
}

export const Default = {
    args: {
        //Envia las props al componente
        imagenUrl: 'https://image.lexica.art/md2/329c21cb-a228-461d-95d9-53c61aad598e'
    }
}

export const Primary = {
    args:{
        imagenUrl: 'https://image.lexica.art/full_jpg/105a9273-f629-4eb1-bd89-c15fadc0d964'
    }
}