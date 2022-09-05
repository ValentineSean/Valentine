<template>
    <main>
        <Header id="header" />
        <Services id="services" />
        <About id="about" />
        <Projects id="projects" />
        <Footer id="footer" class="mt-16" />
    </main>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Services from './Services.vue'
import About from './About.vue'
import Projects from './Projects.vue'
export default {
    name: 'HomePage',
    components: {
        Header,
        Footer,
        Services,
        About,
        Projects,
    },
    setup() {},
}
</script>

<style></style>
