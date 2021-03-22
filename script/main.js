var vm = new Vue({
    el: '#app',
    data: {
        ProjectName: 'بــسم الله الرحمن الرحيم ',
        Ayah: '',
        ayahApis: 'https://api.alquran.cloud/ayah/',
        surahName: '',
        juzNumber: '',
        revelationType: '',
        flag: false
    },
    methods: {
        randomNum: function() {
            return Math.floor(Math.random() * 6236) + 1
        },
        getAyah: async function() {
            let response = await fetch(this.ayahApis + this.randomNum() + "/ar.asad")
            let responseData = await response.json();
            this.Ayah = await responseData.data.text
            this.surahName = await responseData.data.surah.name
            this.juzNumber = await responseData.data.juz
            this.revelationType = await responseData.data.revelationType
            console.log(responseData.data)
        }


    },
    computed: {
        revarseName: function() {
            return
        }
    },
    watch: {
        surahName: function() {
            this.flag = true
        }

    },
    filters: {
        currency: function(value) {
            var formatter = Intl.NumberFormat('ar-EG');
            return formatter.format(value);
        }
    }
})

window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})