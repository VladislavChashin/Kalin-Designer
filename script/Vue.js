var app = new Vue({
    el: '#app',
    data: {
        upH1: true,
        upP1: false,
        upH2: true,
        upP2: false,
        upH3: true,
        upP3: false,
  },
})

var app_nav1 = new Vue({
    el: "#app_nav",
    data:{
        message_adres: 'Адрес: Ленинградское шоссе, 16Ас1',
        message_convers: '11.3%',
        message_passability: '20.000',
        message_square: '855.5м',
    },
    methods: {
        metrop: function(){
            //this.vasa = 'accacas'
            //this.message_adres = znach['info_metrop']['address'];
            //this.message_convers = znach['info_metrop']['conversion'];
            //this.message_passability = znach['info_metrop']['passability'];
            //this.message_square = znach['info_metrop']['square'];
            
        },
        europes: function(){
            //this.vasa = 'accacasewwvdcccccccd'
            //this.message_adres = znach['info_europes']['address'];
            //this.message_convers = znach['info_europes']['conversion'];
            //this.message_passability = znach['info_europes']['passability'];
            //this.message_square = znach['info_europes']['square'];
        }
        
    },
})