<template>
    <footer>
        <a href="https://www.toplist.cz/stat/1445867" title="Počítadlo přístupů"></a>
        <div>
            © 2022 <strong>Stará Krč</strong> by <a href="http://alois-seckar.cz/">Alois Sečkár</a>
            powered by <a href="https://v3.nuxtjs.org/">Nuxt3</a>
            | <a href="/login"><span class="glyphicon glyphicon-lock"></span></a>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        position: fixed;
        width: 100%;
        left: 0;
        bottom: 0;
        background-color: #333333;
        color: #cccccc;
    }
    footer > div {
        margin: 5px;
        text-align: center;
    }
    
    a:link {
        color: #cccccc;
    }

    a:visited {
        color: #cccccc;
    }

    a:hover {
        color: white;
    }

    a:active {
        color: white;
    }

  </style>