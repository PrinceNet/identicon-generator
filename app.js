var app = new Vue({
    el: '#app',

    data: {
        diameter: 250,
        btnWidth: 250 + 20,
        cells: 5,
        width: 0,
        color: '',
        baseColor: '',
    },

    created: function () {
        this.color = this.getRandomColor();
        this.baseColor = this.color;
        this.width = 100 / this.cells;
    },

    methods: {
        getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },

        getFill() {
            return (Math.random() < 0.5) ? this.baseColor : 'white';
        },

        generate() {
            let temp = this.cells;
            this.cells = 1;
            this.cells = temp;
            this.baseColor = this.getRandomColor();
        },

        download() {
            let svg  = document.getElementById('svg'),
            xml  = new XMLSerializer().serializeToString(svg),
            data = "data:image/svg+xml;base64," + btoa(xml);

            let link = document.getElementById('downloadMe');
            link.href = data;
            link.download = 'identicon.svg';
        },
    }
});
