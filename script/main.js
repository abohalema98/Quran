new Vue({
    el: '#app',
    data: {
        ProjectName: 'بــسم الله الرحمن الرحيم ',
        Ayah: '',
        ayahApis: 'https://api.alquran.cloud/ayah/',
        surahName: '',
        flag: false
    },
    methods: {
        randomNum: function() {
            return Math.floor(Math.random() * 6236) + 1
        },
        getAyah: async function() {
            let response = await fetch(this.ayahApis + this.randomNum() + "/ar.asad")
            let data = await response.json();
            this.Ayah = await data.data.text
            this.surahName = await data.data.surah.name
            this.flag = true
        }


    }
})