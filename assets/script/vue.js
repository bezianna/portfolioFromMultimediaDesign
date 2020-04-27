let vue = new Vue({
    el:"#portfolio_content",
    data: {

    },
    methods: {
        scroll: function(port, top) {
            let portfolio = this.$refs[port];
            document.addEventListener("scroll", function(e) {
                if(e.target.scrollingElement.scrollTop >= top) {
                    portfolio.classList.add("to");
                    portfolio.classList.remove("from");
                } else {
                    portfolio.classList.remove("to");
                    portfolio.classList.add("from");
                }
            });
        },
        navScroll: function() {
            document.addEventListener("scroll", function(e) {
                if(e.target.scrollingElement.scrollTop > 0) {
                    document.getElementsByTagName("nav")[0]
                    .classList.add("opacity");
                } else {
                    document.getElementsByTagName("nav")[0]
                    .classList.remove("opacity");
                }
            });
        }
    },
    mounted: function() {
        let portfolio1Top = document.getElementById("portfolio1").offsetTop-300;
        let portfolio2Top = document.getElementById("portfolio2").offsetTop-300;
        let portfolio3Top = document.getElementById("portfolio3").offsetTop-300;
        this.scroll("portfolio1", portfolio1Top);
        this.scroll("portfolio2", portfolio2Top);
        this.scroll("portfolio3", portfolio3Top);
        this.navScroll();
    }
});


