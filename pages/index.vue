<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="home" /> About
            </div>
            <div class="box-content">
                Helca vincarna tassa verno erë loctë marta yendi. Oarel hellë armaro moryo tenna lucassë yeldë. Tarwesta
                maitimo turindië taltol. Ender ama lemen tallunë alyë. Axë ranya risil lára voro moica lós lepenel huan.
                Turcil ronda findë appa. Attalaitë fuinur vanwië castamir unuhuinë calmatan tyaro ontarë nalda nirwa
                coirë phindelë olë ríë olla ronda sírë tulunca. Yár súru man is. óma fólima ilmarë antara toldo nampë
                íta. Andamacil alla píca turúna andatehta ausië hrómen namárië almarë. Engwa colca hristo umbarta netya
                úmanyar hísilómë telma. Nersat wilda talas ar. ñol murmë lenga uruitë úvëa naiquet winicë. Tulwë hyam
                pilwë tyë rainë songa ungweliantë nessa lingwilócë. Wenya nenda airëa ar han. Hloirë liantassë man. Imba
                tastil yelwa aññol tavaril eteminya hloita. Tarumbar meles caita mundo nan alcorin írima utúvienyes
                sistë. Valandur nelma vasarya linqui hróta ilquen mëoi entë mapta. Norollë voronwë néna anamo sandastan
                nostari saira narquelië orwa atendëa cilinyul arwa eteminya.
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="envelope" /> Contacts
            </div>
            <div class="box-content">
                Helca vincarna tassa verno erë loctë marta yendi. Oarel hellë armaro moryo tenna lucassë yeldë. Tarwesta
                maitimo turindië taltol. Ender ama lemen tallunë alyë. Axë ranya risil lára voro moica lós lepenel huan.
                Turcil ronda findë appa. Attalaitë fuinur vanwië castamir unuhuinë calmatan tyaro ontarë nalda nirwa
                coirë phindelë olë ríë olla ronda sírë tulunca. Yár súru man is. óma fólima ilmarë antara toldo nampë
                íta. Andamacil alla píca turúna andatehta ausië hrómen namárië almarë. Engwa colca hristo umbarta netya
                úmanyar hísilómë telma. Nersat wilda talas ar. ñol murmë lenga uruitë úvëa naiquet winicë. Tulwë hyam
                pilwë tyë rainë songa ungweliantë nessa lingwilócë. Wenya nenda airëa ar han. Hloirë liantassë man. Imba
                tastil yelwa aññol tavaril eteminya hloita. Tarumbar meles caita mundo nan alcorin írima utúvienyes
                sistë. Valandur nelma vasarya linqui hróta ilquen mëoi entë mapta. Norollë voronwë néna anamo sandastan
                nostari saira narquelië orwa atendëa cilinyul arwa eteminya.
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> News
            </div>
            <div class="box-content">
                <div v-for="item in news.getTopNews">
                    <NewsItem :item="item" />
                </div>
                <div>
                    [ <NuxtLink to="/news">All news</NuxtLink> ]
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const news = useNewsStore()
</script>