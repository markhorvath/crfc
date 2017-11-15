import Navbar from './components/Navbar.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Rules from './components/Rules.vue';
import Contact from './components/Contact.vue';
import Buildteam from './components/BuildTeam.vue';
import Sponsors from './components/Sponsors.vue';
import News from './components/News.vue';

export default [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/rules', component: Rules},
    {path: '/contact', component: Contact},
    {path: '/buildteam', component: Buildteam},
    {path: '/sponsors', component: Sponsors},
    {path: '/news', component: News}
]