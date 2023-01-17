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

const znach = {
    info_metrop:{
        address: 'Адрес: Ленинградское шоссе, 16Ас1',
        conversion: '11.3%',
        passability: '20.000',
        square: '855.5м',
    },
    info_europes:{
        address: 'Адрес: площадь Киевского вокзала, 2',
        conversion: '12.5%',
        passability: '24.000',
        square: '1185м',
    },
    info_pavlec:{
        address: 'Адрес: Павелецкая площадь, 3',
        conversion: '10%',
        passability: '7.300',
        square: '258.8',
    },
    info_europolis:{
        address: 'Адрес: проспект Мира, 211, корп. 2',
        conversion: '10.4%',
        passability: '9.000',
        square: '285.7м',
    },
    info_vesna:{
        address: 'Адрес: Алтуфьевское шоссе, 1-й километр',
        conversion: '10.8%',
        passability: '8.300',
        square: '215.9м',
    },
    info_afimol:{
        address: 'Адрес: Пресненская набережная., 2',
        conversion: '10.5%',
        passability: '4.936',
        square: '514.8м',
    },
}

var app_nav = new Vue({
    el: "#app_nav",
    data:{
        message_adres: 'Адрес: Ленинградское шоссе, 16Ас1',
        message_convers: '11.3%',
        message_passability: '20.000',
        message_square: '855.5м',
    },
    methods: {
        metrop: function(){
            this.message_adres = znach['info_metrop']['address'];
            this.message_convers = znach['info_metrop']['conversion'];
            this.message_passability = znach['info_metrop']['passability'];
            this.message_square = znach['info_metrop']['square'];
            
        },
        europes: function(){
            this.message_adres = znach['info_europes']['address'];
            this.message_convers = znach['info_europes']['conversion'];
            this.message_passability = znach['info_europes']['passability'];
            this.message_square = znach['info_europes']['square'];
        },
        pavlec: function(){
            this.message_adres = znach['info_pavlec']['address'];
            this.message_convers = znach['info_pavlec']['conversion'];
            this.message_passability = znach['info_pavlec']['passability'];
            this.message_square = znach['info_pavlec']['square'];
        }
        
    },
})

var app_nav_two = new Vue({
    el: "#app_nav_two",
    data:{
        message_adres: 'Адрес: проспект Мира, 211, корп. 2',
        message_convers: '10.4%',
        message_passability: '9.000',
        message_square: '285.5м',
    },
    methods: {
        europolis: function(){
            this.message_adres = znach['info_europolis']['address'];
            this.message_convers = znach['info_europolis']['conversion'];
            this.message_passability = znach['info_europolis']['passability'];
            this.message_square = znach['info_europolis']['square'];
            
        },
        vesna: function(){
            this.message_adres = znach['info_vesna']['address'];
            this.message_convers = znach['info_vesna']['conversion'];
            this.message_passability = znach['info_vesna']['passability'];
            this.message_square = znach['info_vesna']['square'];
        },
        afimol: function(){
            this.message_adres = znach['info_afimol']['address'];
            this.message_convers = znach['info_afimol']['conversion'];
            this.message_passability = znach['info_afimol']['passability'];
            this.message_square = znach['info_afimol']['square'];
        }
        
    },
})